import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";

import CreateArea from "./Createareaa.jsx";
import React, { useState , useEffect} from "react";


function App()
{
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

   useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);



   function addNote(newNote)
   {
    setNotes(prevNotes=>{
        return [...prevNotes,newNote];
    })

   }
   function deleteNode(id)
   {
    setNotes(prevNotes=>{
        return prevNotes.filter((noteItem,index)=>
        {
            return index!==id
        })
    });

   }
   return(
    <div>
    <Header/>
    
<CreateArea onAdd={addNote}/>
    
{notes.map((noteItem, index) => (
  <Note
    key={index}
    id={index}
    title={noteItem.title}
    content={noteItem.content}
    onDelete={deleteNode}
  />
))}


    


    <Footer/>
    </div>
   );
    
}
export default App;