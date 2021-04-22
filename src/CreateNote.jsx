import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
  const[expand,setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const InputEvent = (event) => {
      event.preventDefault();
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(note);
  };
  const addEvent = () =>{
    props.passNote(note);
    setNote({
        title:"",
        content:"",
    });
  };
  const FormEvent = (e) =>{
      e.preventDefault();
  }
  const expandIt = () =>{
    setExpand(true);
  }
  const Normal = () =>{
    setExpand(false);
  }

  return (
    <>
      
      <div className="main_note" onDoubleClick={Normal}>
        <form onSubmit={FormEvent}>
{          expand?
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Title"
          />:null}
          <br />
          <textarea
            rows=""
            column=""
            value={note.content}
            name="content"
            onChange={InputEvent}
            placeholder="Write a Note..."
            onClick={expandIt}
          ></textarea>
          <br />
          {expand?
            <Button  onClick={addEvent}><AddIcon className="btn-add"/></Button>
          : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
