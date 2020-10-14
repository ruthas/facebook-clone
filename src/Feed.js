import React, { useEffect, useState } from 'react'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import './Feed.css'
import db from './firebase'

const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect( () => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map( (doc) => ({ id: doc.id, data: doc.data() })))
        ));
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map( post => (
                <Post
                key={post.id} 
                profile={post.data.profile}
                timestamp={post.data.timestamp}
                message={post.data.message}
                username={post.data.username}
                image={post.data.image}
            />
            ))}

            
            {/* <Post 
                profile="https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-1/p200x200/121384210_3386085791477248_590498438086441239_o.jpg?_nc_cat=103&_nc_sid=7206a8&_nc_ohc=geboTTtScdIAX-l7SyI&_nc_ht=scontent.fcpt7-1.fna&tp=6&oh=400f8607c335f0d0e8d646651b6d2d6d&oe=5FABA070"
                message="What's good, mudda cunie!"
                timestamp="this is a timestamp"
                username="thisisandi"
            /> */}
            
        </div>
    )
}

export default Feed
