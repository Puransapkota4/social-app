import React from 'react';
import"./StoryReel.css";
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
        image="images/Teacher.jpeg" 
        profileSrc="images/uni.jpeg"
        title="sardar farhad"
      />
      <Story
        image="images/uni.jpeg" 
        profileSrc="images/Victoria.jpeg"
        title="Puran"
      />
      <Story
        image="images/Teacher.jpeg" 
        profileSrc="images/uni.jpeg"
        title="Kenish"
      />   

      <Story
        image="images/Teacher.jpeg" 
        profileSrc="images/elon.jpeg"
        title="Asmita"
      />
      <Story
        image="images/Teacher.jpeg" 
        profileSrc="images/uni.jpeg"
        title="Puja"
      />

    </div>

  );
  
}

export default StoryReel;
