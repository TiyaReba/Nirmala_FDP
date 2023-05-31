import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const AddStudents = (props) => {
  var [inputs, setInputs] = useState(props.data);

  console.log("add page props" + props.method);

  const inputHandler = (e) => {
    // console.log(data.id)
    const { name, value } = e.target;
    setInputs((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const readValues = () => {
    console.log("clicked");
    console.log("in:",inputs);
    if (props.method === "post")
      axios.post("http://localhost:3005/create", inputs)
        .then((response) => {
          console.log("post data" + response.data);
          alert("success");
        })
        .catch((err) => {
          console.log(err);
        });

    if (props.method === "put"){
      axios.put("http://localhost:3005/update/" + inputs._id, inputs)
      .then((response) => {
          console.log("put data" + response.data);
          alert("success");
          window.location.reload(false);
        })
        .catch((err) => {
          console.log(err);
        });
  }};
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <TextField
        label="id"
        value={inputs.id}
        name="id"
        onChange={inputHandler}
        variant="outlined"
      /> */}
      <br />
      <br />
      <br />
      <TextField
        label="Name"
        value={inputs.sname}
        name="sname"
        onChange={inputHandler}
        variant="outlined"
      />
      <br />
      <br />
      <br />
      <TextField
        label="Position"
        value={inputs.sgrade}
        name="sgrade"
        onChange={inputHandler}
        variant="outlined"
      />
      <br />
      <br />
      <br />
      <Button variant="contained" onClick={readValues} color="success">
        Submit
      </Button>
    </div>
  );
};

export default AddStudents;
