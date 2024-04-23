import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const usersData=useLoaderData();
    const [users,setUsers] = useState(usersData);
    const handleDelete=id=>{
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('Are you sure?')
                const remaining=users.filter(user=>user._id!==id);
                setUsers(remaining);
            }
            
        })

    }
    return (
        <div>
            <h2>Users : {users.length}</h2>
            {
                users.map(user=><p key={user._id}>{user.name} : {user.email}
                <Link to={`/users/${user._id}`}><button>Update</button></Link>
                <button onClick={()=>handleDelete(user._id)}>X</button>
                </p>)
            }
            
        </div>
    );
};

export default Users;