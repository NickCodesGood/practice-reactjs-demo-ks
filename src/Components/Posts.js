import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import { IdStateContext, PostStateContext } from './Store';

const Posts = () => {

const[posts, setPosts] = useState([])
const[postState] = useContext(PostStateContext)
const[idState] = useContext(IdStateContext)


useEffect(()=>{
    if(postState.length>0)    
    if(idState == 0){
        setPosts(postState)
    } else{
        setPosts(postState.filter(posts=>posts.userId == idState))
    }
},[postState,idState])




const mapDataIntoDivs = () =>{


return(
posts.map((post)=>{
    let arr = []
    for(let p in post){
        arr.push(<div className='post-ele'>{p[0].toUpperCase()+ p.substring(1) + ": " + post[p]}</div>)
    }
    return (
        <div className='post-style'>
        {arr}
        </div>
    )
    
})
)


}



    return (
    <div className='posts-container'>
       <h2>Posts</h2>
        {mapDataIntoDivs()}
    </div>
  )
}

export default Posts