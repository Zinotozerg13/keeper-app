import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function note(props)
{
    function handleClick()
    {
        props.onDelete(props.id);
    }

    return  <div className="note">
        
        <h1><b>{props.title}</b> </h1>
        <p>{props.content}</p>
        <IconButton aria-label="delete" size="large" onClick={handleClick}>
  <DeleteIcon />
</IconButton>
        
    </div>
    
}
export default note;