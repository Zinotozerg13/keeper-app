import React from "react";
import Zoom from "@mui/material/Zoom";

import AddIcon from "@mui/icons-material/Add";


function CreateArea(props) {
    const [isExpanded, setExpanded] = React.useState(false);
    const[note,setNote]=React.useState(
        {
            title:"",
            content:""
        }
    );

    function handleChange(event)
    {
        const{name,value}=event.target;
        setNote(prevNote=>{
             return{
                ...prevNote,[name]:value
            }
        })
    }
    function submitNote(event) {
        props.onAdd(note); 
        setNote({ title: "", content: "" }); 
        event.preventDefault(); 
        
    }
    function expand() {
        setExpanded(true);
      }
  return (
    
    <div>
      <form>
      {isExpanded && (
        <input name="title"  onChange={handleChange} value={note.title} placeholder="Title" />)}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
       <Zoom in={isExpanded}>
  <button type="submit" onClick={submitNote}>
    <AddIcon />
  </button>
</Zoom>
         


    

      </form>
    </div>
  );

}
export default CreateArea;