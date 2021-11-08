import { useParams } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from  'react';
import { useHistory } from "react-router-dom";
import Player from "./Player";
import Edit from "./Edit";

const MusicalDetails = ({serverBase}) => {
  const { id } = useParams();
  const [musical, setMusical] = useState();
  const [edit, setEdit] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      axios
      .delete(`server/${id}`)
      .then(() => {
        alert("Post deleted!");
        setMusical(null)
      }).catch((error) => {
        console.log(error);
      });
      history.push('/');
      window.location.reload();
    }
    else {
    }
  }

  useEffect(() => {
    axios.get(`server/${id}`).then((response) => {
      setMusical(response.data[0]);
      console.log(response);
      console.log(response.data[0]);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      { musical && (
        <div className="musical-details">
          <Player url={ musical.music }/>
          <div className="split-container">
            <div className="split left">
              <img 
                className = "musical-image"
                src={ musical.image }
                alt="new"
              />
            </div>
            <div className="split right">
              <div className="buttons-container">
                {!edit && 
                  <button onClick={()=> {setEdit(true);}} className="edit-button">✏️  EDIT</button>
                }
                {edit &&
                  <button onClick={()=> {setEdit(false);}} className="edit-button">✖  CLOSE EDIT</button>
                }
                <button onClick={handleClick} className="delete-button">⚠️  DELETE</button>
              </div>
              {!edit && 
                <div>
                  <h2>{ musical.name }</h2>
                  <div className="musical-content">{ musical.content }</div>
                </div>
              }
              {edit && <Edit oldName={musical.name} oldContent={musical.content} oldImage={musical.image} oldMusic={musical.music} serverBase={serverBase} setEdit={setEdit}/>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
 
export default MusicalDetails;
