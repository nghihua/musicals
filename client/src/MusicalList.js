import { Link } from 'react-router-dom';

const MusicalList = ({ musicals }) => {
  return (
    <div className="musical-list">
      {musicals.map(musical => (
        <div className="musical-preview" key={musical.key} >
          <Link to={`/musicals/${musical.key}`}>
            <h2>{ musical.name }</h2>
            {/* <p>Written by { blog.author }</p> */}
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default MusicalList;