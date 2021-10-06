import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Create = ({musicals, setMusicals, serverBase}) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [music, setMusic] = useState();
  const history = useHistory();

  let image_url = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const musical = {name, content, image, music};
    axios.post(serverBase, musical).then((response) => {
        console.log(response);
    }).catch((error) => {
          console.log(`Error here: ${error}`);
    });
    history.push('/');
    window.location.reload();
  }

    const fileChange = () => {
        let file = document.getElementById('input_img');
        let form = new FormData();

        form.append("image", file.files[0])

        let imgbb = "https://api.imgbb.com/1/upload?key=ae0b2df60c0f04a52ed1be38b3a78be6";    
        let config = {
        "timeout": 0,
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        };


        axios.post(imgbb, form, config).then((response) => {
            setImage(response.data.data.url);
        }).catch((error) => {
            console.log(`Error here: ${error}`);
        });
    };

  return (
    <div className="create">
      <h2>Add a New Musical</h2>
      <form onSubmit={handleSubmit}>
        <label>Musical name:</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Content:</label>
        <textarea
          row='10'
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label id="bbb">Image:</label>
        <input type="file" id="input_img" onChange={fileChange}/>
        <label>Music Link:
            (Please signup and upload onto <a href="https://mailboxdrive.com/">MailboxDrive</a>, then paste the link here.
            Please upload instrumental covers, no copyrighted materials.)
        </label>
        <input 
          type="text" 
          required 
          value={music}
          onChange={(e) => setMusic(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
 
export default Create;