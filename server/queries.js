const pg = require('pg');
const conString = "postgres://fvkdifey:4BfrteIHXnMJnV5pwMSHd3o8imfsdJfP@satao.db.elephantsql.com/fvkdifey";

const client = new pg.Client(conString);

client.connect((err) => {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
  });
});

const getMusicals = (request, response) => {
  console.log('Get musical by key!');
    client.query('SELECT * FROM musicals ORDER BY key ASC', (error, results) => {
      if (error) {
        console.log(error);
      }
      response.status(200).json(results.rows);
    })
};

const getMusicalByKey = (request, response) => {
    const key = parseInt(request.params.key);
    console.log('Get musical by key!');
    client.query('SELECT * FROM musicals WHERE key = $1', [key], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    });
};

const createMusical = (request, response) => {
    console.log(request.body);
    const { name, content, image, music} = request.body;
    console.log(`name: ${name}, content: ${content}, image: ${image}, music: ${music}`);
  
    client.query('INSERT INTO musicals (name, content, image, music) VALUES ($1, $2, $3, $4)', [name, content, image, music], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send("")
    });
};

const updateMusical = (request, response) => {
    console.log('key: ' + request.params.key);
    const key = parseInt(request.params.key);
    const { name, content, image, music } = request.body;
    console.log(`name: ${name}, content: ${content}, image: ${image}, music: ${music}`);
  
    client.query(
      'UPDATE musicals SET name = $1, content = $2, image = $3, music = $4 WHERE key = $5',
      [name, content, image, music, key],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`Musical modified with key: ${key}`);
      }
    );
};

const deleteMusical = (request, response) => {
    const key = parseInt(request.params.key);
  
    client.query('DELETE FROM musicals WHERE key = $1', [key], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Musical deleted with key: ${key}`);
    });
};

module.exports = {
    getMusicals,
    getMusicalByKey,
    createMusical,
    updateMusical,
    deleteMusical,
};
