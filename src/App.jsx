
import './App.css'

function App() {
  const handleSubmit=event=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const user={name,email};
    console.log(user);
    fetch('http://localhost:5000/users',{
        method: "POST", 

        headers: {
             "Content-Type": "application/json",
  
        },

        body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        alert('created');
      }
        
        form.reset();
        console.log(data);
    })
}
  

  return (
    <>
      <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name"/>
                <input type="email" name="email" placeholder="email"/>
                <button>Submit</button>
            </form>
      
      
      <h1>Simple Crud</h1>
      
    </>
  )
}

export default App
