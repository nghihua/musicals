# Musicals
A website that guides you to my favourite musicals. You're welcome to contribute.

Made with ReactJS, Axios (Front End), NodeJS, Express, PostgreSQL (Back End).

## What's in here:
- See a list of available musicals to read
![alt home](https://i.ibb.co/ts2nd3V/Screenshot-from-2021-10-06-16-17-09.png)
- Read about each musical, with music accompanied
![alt musical](https://i.ibb.co/FWPkckh/Screenshot-from-2021-10-06-16-27-15.png)
- Delete or Edit said musical
- Create new ones
![alt musical](https://i.ibb.co/ftmndVX/Screenshot-from-2021-10-06-16-34-17.png)

## How it works:
- The PostgreSQL database is hosted in elephantsql.com, so any changes are saved across devices.
- Server is a simple CRUD REST API with node-postgres

## How to use this:
- Pull this repo down 
  ````
    git pull https://github.com/nghihua/musicals
  ````
- Open terminal, go to 'musicals', then 'server', install dependencies and run
  ````
    cd musicals/server
    npm install
    npm start
  ````
- Open another terminal, go to 'client', install dependencies and run
  ````
    cd musicals/client
    npm install
    npm start
  ````
Note: The default port for server is 8000, if you change this in index.js, remember to also change serverBase is App.js (client).
