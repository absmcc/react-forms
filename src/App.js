
import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState ("this is the title")
  const [description, setDescription] = useState("Your description")
  const [author, setAuthor] = useState("Todd albert")
  console.log(title)
function formSubmit(e) {
  e.preventDefault();
  console.log("form submitted")
}


  return (
    <div className="App">
     <form onSubmit={formSubmit}>
      
      <h1>Comments</h1>
      <label>Title</label>
      {/* here is the title */}
      <input type ="text" 
      value={title} 
      onChange ={(e)=>{setTitle(e.target.value)}}
   />
   <h3>Title</h3>
   <label>Description</label>
   {/* this is the description */}
   <textarea 
   value={description}
   onChange ={(e)=>{setDescription(e.target.value)}}></textarea>
      <h3>{description}</h3>

      <label>Author</label>
      <select value ={author}
      onChange={(e)=>{setAuthor(e.target.ariaValueMin)}}
>
  <option value ="">Choose One</option>
  <option value ="Todd albert">Todd</option>
  <option value ="ludwigson">Ludwigson</option>
  <option value ="other">Other</option>

</select>
<h3>{author}</h3>
<button>Submit Form</button>


      </form> 
    </div>
  );
}

export default App;
