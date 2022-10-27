import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const postInitialState = []
const idInitialState = 0

const Store = ({children}) => {

    
    const[postState, setPostState] = useState(postInitialState)
    const[idState, setIdState] = useState(idInitialState)
    
    
    useEffect(()=>{
        //store and retrieve data from session storage.
        let item = window.sessionStorage.getItem("data")
        
        //if does not exist OR is empty {}
        if(item === null || item.length <= 2){
            executeAxios().then((data)=>{
                window.sessionStorage.setItem("data", JSON.stringify(data))
            });            
        } else{        
            setPostState(JSON.parse(item))
            //if posts were real, we could poll the backend here for only new values and update our sessionStorage as needed            
        }


    },[])
    
    const executeAxios = async () =>{        
    let arg = `https://jsonplaceholder.typicode.com/posts`
    let res = await axios(arg).catch(e =>console.log(e))
    setPostState(res.data)
    return await res.data;
}

  return (
    <PostStateContext.Provider value={[postState, setPostState]}>
    <IdStateContext.Provider value={[idState, setIdState]}>
        {children}
    </IdStateContext.Provider>
    </PostStateContext.Provider>
  )
  
}

export const PostStateContext = React.createContext(postInitialState);
export const IdStateContext = React.createContext(idInitialState);

export default Store