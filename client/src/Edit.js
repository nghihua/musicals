import { useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const Edit = ({oldName, oldContent, oldImage, oldMusic, serverBase, setEdit}) => {
    const { id } = useParams();
    const [name, setName] = useState(oldName);
    const [content, setContent] = useState(oldContent);
    const [image, setImage] = useState(oldImage);
    const [music, setMusic] = useState(oldMusic);
    const history = useHistory();


    const handleSubmit = (e) => {
        console.log('Handle edit!');
        e.preventDefault();
        const musical = {name, content, image, music};
        axios.put(`${serverBase}/${id}`, musical).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(`Error here: ${error}`);
        });
        setEdit(false);
        // window.location.reload();
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
      <h2>Edit Musical</h2>
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
          rows='10'
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
 
export default Edit;