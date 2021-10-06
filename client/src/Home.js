import MusicalList from "./MusicalList";
import {useEffect} from  'react';
import axios from 'axios';

const Home = ({musicals, setMusicals, serverBase}) => {

  useEffect(() => {
    axios.get(serverBase).then((response) => {
      setMusicals(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="home">
      { musicals && <MusicalList musicals={musicals} setMusicals={setMusicals} serverBase={serverBase}/> }
    </div>
  );
}
 
export default Home;