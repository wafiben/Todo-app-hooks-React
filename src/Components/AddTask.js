import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function AddTask({ addTask }) {
  const [task, setTask] = useState({ id: 20, desc: "" });
  const handleChange = (e) => {
    setTask({ id: Math.floor(Math.random() * 10000), desc: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(task);
    setTask({ ...task, desc: "" });
  };
  return (
    <Form style={{ width: "500px", margin: "auto" }} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task</Form.Label>
        <Form.Control
          type="text"
          placeholder="add your task"
          onChange={handleChange}
          value={task.desc}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add your task
      </Button>
    </Form>
  );
}

export default AddTask;
