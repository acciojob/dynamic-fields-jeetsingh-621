
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [fields, setfields] = useState([{id:Date.now(), name:"", age:""}]);

  const handleinputchange =(id,fieldname,value)=>{
setfields((prevfields)=>{
  return prevfields.map((field)=>field.id === id ? {...field,[fieldname]:value}:field)
})
  };

  const addField = () => {
    setfields([...fields, { id: Date.now(), name: "", age: "" }]);
  };

  const removeField = (id) => {
    setfields((prevFields) => prevFields.filter((field) => field.id !== id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submittedData = fields.map(({ name, age }) => ({ name, age }));
    console.log( submittedData);
  };

  return (
    <div>
     <form onSubmit={handleSubmit}>
      {fields.map((field,index)=>(
    <div key={field.id}>
    <input type="text" name="name" placeholder="Name" value={field.name} onChange={(e)=>handleinputchange(field.id,"name",e.target.value)}  required/>
    <input type="number" name="age" placeholder="Age" value={field.value} onChange={(e)=>handleinputchange(field.id,"age",e.target.value)} required />
    <button type="button" onClick={()=>removeField(field.id)}>Remove</button>
    </div>
    ))}
    <button type="button" onClick={addField}>Add More..</button>
    <button type="submit">Submit</button>
     </form>
    </div>
  )
}

export default App
