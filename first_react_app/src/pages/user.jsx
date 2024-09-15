import { useEffect, useState } from 'react'
import '../styles/user.css'
import UserCard from '../components/UserCard'
const Users=()=>{
    const [allUsers,setAllUsers]=useState([])
    //if set to [], called once in each render
    useEffect(
        ()=>{
            fetch("https://jsonplaceholder.typicode.com/users").then( //kaile respose aauxa thahunna so then use garne ani res aayesi call hunxa
                async(res)=>{
                    const users=await res.json()
                    console.log("users:",users)
                    setAllUsers(()=>users)
                }
            ) 
        },
        []
    )
    return(
        <div id="users">
            <h1 id='title'>All users</h1>
            <div id='user-grid'>
                {
                    //.map()=> loop + return
                    allUsers.map(
                        (user)=>{
                            return <UserCard/>
                        }
                    )
                }

            </div>
        </div>
    )
}
export default Users