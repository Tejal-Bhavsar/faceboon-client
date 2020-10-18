import React from 'react'
import Story from './Story'
import './StoryReel.css'
 function StoryReel() {
    return (
        <div className="storyReel">
            <Story
            image="https://media.istockphoto.com/photos/social-media-messages-like-share-click-on-speech-bubble-picture-id477411336"
            profileSrc="https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130"
            title="user" />

           <Story
            image="https://media.istockphoto.com/photos/vlogging-like-a-pro-picture-id1179265329"
            profileSrc="https://cdn.pixabay.com/photo/2016/04/25/21/14/woman-1353211_960_720.png"
            title="alsoun" />

          <Story
            image="https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_1280.jpg"
            title="user" />

          <Story
            image="https://scontent.fbom5-1.fna.fbcdn.net/v/t1.0-0/p526x296/121143096_973602159784287_4239655526962268941_n.png?_nc_cat=100&_nc_sid=730e14&_nc_ohc=e1u9sxDIvJ8AX9n49fX&_nc_ht=scontent.fbom5-1.fna&oh=8360d6d2f7014916b65ce52ef67f553a&oe=5FB0BDEC"
            profileSrc="https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_1280.png"
            title="user2" />

          <Story
            image="https://cdn.pixabay.com/photo/2017/11/22/09/03/girl-flying-on-book-2970038_960_720.jpg"
            title="user3" />
        </div>
    )
}export default StoryReel;
