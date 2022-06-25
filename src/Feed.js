import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return (
    <div className="feed">
      <StoryReel/>
      <MessageSender/>


      <Post
        profilePic="images/elon.jpeg"
        message="hi this is my first web "
        timestamp="hey this is puram"
        username={"Puran"}
        image ="images/Teacher.jpeg"
       />
        
        
      <Post
      profilePic="images/uni.jpeg"
      message={"hi this is my vu uni social site  "}
      timestamp="timestamp"
      username={"Prashant"}
      image ="images/Teacher.jpeg"
      />
      <Post
      profilePic="images/logo.jpeg"
      message={"fuck you  "}
      timestamp="timestamp"
      username={"oliva"}
      image ="images/Teacher.jpeg"
      
      
      />
    
      
      
    </div>
  );
}

export default Feed;
