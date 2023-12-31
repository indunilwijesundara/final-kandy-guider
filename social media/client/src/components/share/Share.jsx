import "./share.css";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import CancelIcon from '@mui/icons-material/Cancel';



export default function Share() {
const {user}=useContext(AuthContext);
const PF= process.env.REACT_APP_PUBLIC_FOLDER;
const desc = useRef();
const [file,setFile]= useState(null)

const submitHandler = async (e)=>{
  e.preventDefault()
  const newPost={
    userId:user._id,
    desc:desc.current.value
  }
  console.log(newPost)
  if(file){
    const data=new FormData();
    const fileName= file.name;
    data.append("file",file);
    data.append("name",fileName);
    newPost.img=fileName;
    try{
      await axios.post("/upload",data);
    }catch(err){
      console.log(err);
    }

    }
  
  try{
    await axios.post("/posts",newPost);
    window.location.reload()
  }catch(err){

  }
};

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={user.profilePicture ? PF+user.profilePicture : PF+"/person/avatar.jpg"} alt="" />
          <input
            placeholder={"What's in your mind " + user.username + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr"/>
        {file && (
          <div className="shareImgContainer">
           <img className="shareImg" src={URL.createObjectURL(file)} alt=""/>
           <CancelIcon className="shareCancelImg" onClick={()=>setFile(null)}/>
           </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
             <label htmlFor="file" className="shareOption">
            <PhotoLibraryIcon htmlColor="red" className="shareIcon"/>
            <span className="shareOptionText">Photo or Video</span>
            <input style={{display:'none'}}type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e) => setFile(e.target.files[0])} />
              </label>

                <div className="shareOption">
                    <LabelIcon htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <RoomIcon htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
}
