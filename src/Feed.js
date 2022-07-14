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
        profilePic="https://scontent.fsyd10-1.fna.fbcdn.net/v/t39.30808-6/278099234_4869115556469497_4717359204624575567_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rPhqaOWztbEAX9bXGfG&_nc_ht=scontent.fsyd10-1.fna&oh=00_AT9W__D4DeeND-FYHklYTDXWHUXKY3DmUG2bvfeTLVL8uA&oe=62BBBD54"
        message="Hi this is my first web "
        timestamp="hey this is Puran"
        username={"Puran"}
        image ="https://oldwayspt.org/sites/default/files/thumbnails/image/iStock_000019121333Medium_0.jpg"
       />
        
        
      <Post
      profilePic="https://scontent.fsyd10-2.fna.fbcdn.net/v/t1.6435-9/169511393_3979630852162903_8675906995707493108_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bBalcM6LD5UAX-Bj9yK&_nc_ht=scontent.fsyd10-2.fna&oh=00_AT-eD6J-MXZF5XMuEcX5I4mdRuSXOQ902WVMT9QmOXu3WQ&oe=62DC9EB1"
      message={"HI , i am the first user in real friends . i love it   "}
      timestamp="timestamp"
      username={"Sulav"}
      image ="images/real.webp"
      />
      <Post
      profilePic="http://3.bp.blogspot.com/-CWZBsC6oDWc/UBFkPu8pv9I/AAAAAAAACrY/esr52tMyAhQ/s1600/101_8138%2BMEXICAN%2BOLIVE%2BFLOWERS%2BPLANT%2BLANDSCAPE%2BC%2B7-23-12.jpg"
      message={"Hi i am the most beautiful girl  "}
      timestamp="timestamp"
      username={"Olivia"}
      image ="https://tse3.mm.bing.net/th?id=OIP.ySgVgtuAdEGyenD1JpiASgHaEo&pid=Api&P=0&w=269&h=168"
      />
    
      
      
    </div>
  );
}

export default Feed
