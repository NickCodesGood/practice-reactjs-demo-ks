import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import { IdStateContext } from './Store';

const Table = () => {

let arg = `https://jsonplaceholder.typicode.com/users`
const[users, setUsers] = useState([])
const[head, setHead] = useState(<th></th>)
const[idState, setIdState]=useContext(IdStateContext)

useEffect(()=>{

    executeAxios(arg);

},[])


const executeAxios = async (arg) =>{
let res = await axios(arg).catch(e =>console.log(e))
setUsers(res.data)
}

const mapDataIntoDivs = () =>{

return(
users.map((user)=>{
        
    let arr = []
    let arr2 = []

    if(users.indexOf(user) === 0){


        //Recursion possible here
        for(let p in user){
            if(typeof user[p] === "object"){
                for(let p2 in user[p]){
                    if(typeof user[p][p2] === "object"){
                        for(let p3 in user[p][p2]){
                            if(typeof user[p][p2][p3] === "object"){
                                for(let p4 in user[p][p2][p3]){
                                    //Outside resource used here: regex for splitting camelCase
                                    //https://stackoverflow.com/questions/4149276/how-to-convert-camelcase-to-camel-case
                                    let val = p4.replace(/([A-Z])/g, ' $1').toUpperCase() 
                                    arr2.push(<th>{val}</th>)
                                }
                            }else{        
                                let val = p3.replace(/([A-Z])/g, ' $1').toUpperCase()                                
                                arr2.push(<th>{val}</th>)
                            }
                        }

                    }else{                        
                        let val = p2.replace(/([A-Z])/g, ' $1').toUpperCase()
                        arr2.push(<th>{val}</th>)                            
                    }
                }

            }else{
                let val = p.replace(/([A-Z])/g, ' $1').toUpperCase()
                arr2.push(<th>{val}</th>)
            }
        }

    }                 
            for(let prop in user){             
                if(typeof user[prop] === "object" )   {
                    for(let p2 in user[prop]){
                        if(typeof user[prop][p2] === "object"){
                            for(let p3 in user[prop][p2]){
                                arr.push(<td>{user[prop][p2][p3]}</td>)
                            }
                        } else 
                        arr.push(<td>{user[prop][p2]}</td>)
                    }
                } else
                arr.push(<td>{user[prop]}</td>)
            }
    
    let row = (<tr onClick={(e)=>setIdState(e.target.parentElement.children[0].innerText)}>{arr}</tr>)
    let head = (arr2.length!==0) ? <tr>{arr2}</tr> : null
    return(
        [head,row]
    )

})
)


}



    return (
    <div className='table-container'>
        <h2>Table</h2>
        <table>               
            {mapDataIntoDivs()}            
        </table>
    </div>
  )
}

export default Table