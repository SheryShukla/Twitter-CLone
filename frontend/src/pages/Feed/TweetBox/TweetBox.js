import { Avatar, Button } from "@mui/material";
import React, {useState} from "react";
import AddPhotoAlternate from "@mui/icons-material";
import "./TweetBox.css";

const TweetBox = () => {
    const [post,setPost] = useState("");
    const [imageURL, setImageURL] = useState("");

    const handleTweet=(e)=> {
        e.preventDefault;
        console.log(post);
    }

    return(
        <div className="tweetBox">
            <form onSubmit={handleTweet}>
                <div className="tweetBox_input">
                    <Avatar src=""/>
                    <input type="text" 
                        placeholder="What's happening?"
                        onChange={(e) => setPost(e.target.value)}
                    />
                </div>
            <div className="imageIcon_tweetButton">
                <label htmlFor="image" className="imageIcon">
                <AddPhotoAlternate/>    
                </label>
                <input 
                    type="text" 
                    id="image" 
                    className="imageInput" 
                />
                <Button className="tweetBox_tweetButton" type="submit" />
            </div>
            </form>
        </div>
    )
}

export default TweetBox;
