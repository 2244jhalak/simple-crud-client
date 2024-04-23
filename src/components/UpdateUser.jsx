import { useLoaderData } from "react-router-dom";


const UpdateUser = () => {
    const user=useLoaderData();
    console.log(user);
    const handleUpdate=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        console.log(name,email);
        const userUpdate={name,email};
        fetch(`http://localhost:5000/users/${user._id}`,{
            method: "PUT", 
    
            headers: {
                 "Content-Type": "application/json",
      
            },
    
            body: JSON.stringify(userUpdate)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.modifiedCount>0){
            alert('Modified successfully');
          }
            
           
           
        })
    }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={user.name}/>
                <input type="text" name="email" defaultValue={user.email}/>
                <input type="submit" value="submit"/>
            </form>
            
        </div>
    );
};

export default UpdateUser;