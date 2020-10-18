import React from 'react';
import './Feed.css'
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from './Post'
 

function Feed() {
    return(
        <>
        <div className="feed"> 
            < StoryReel />
            < MessageSender />

            < Post 
            profilePic="https://cdn.pixabay.com/photo/2020/10/04/05/51/woman-5625312_960_720.png"
            image="https://cdn.pixabay.com/photo/2016/03/09/15/30/shoes-1246691_1280.jpg"
            username="harlina"
            message="look high in the sky"/>
            < Post 
            profilePic="https://cdn.pixabay.com/photo/2018/05/15/18/54/mug-3403963_1280.jpg"
            image="https://cdn.pixabay.com/photo/2020/09/30/14/55/notebook-5616034_1280.jpg"
            username="nataliya"
            />
            < Post />
        </div>

        </>

    )
}
export default Feed;