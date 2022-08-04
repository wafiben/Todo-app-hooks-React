import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function CardTask({ task, tasks, setTasks }) {
  const [show, setShow] = useState(false);
  const [descriptionUpdate, setDescr] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteTask = () => {
    setTasks(tasks.filter((elt) => elt.id != task.id));
  };
  const handleUpdateTask = (e) => {
    setDescr(e.target.value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    setTasks(tasks.map((elt)=>{
      if(elt.id==task.id){
        return {...task,desc:descriptionUpdate}
      }
      else{
        return elt
      }
    }))
    handleClose();
  }

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{task&&task.desc}</Card.Title>
          <Button variant="primary" onClick={handleShow}>
            Update
          </Button>
          <Button variant="danger" onClick={deleteTask}>
            Delete
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form style={{ width: "500px", margin: "auto" }} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                placeholder="update your task"
                onChange={handleUpdateTask}
              />
            </Form.Group>
            <Button variant="primary" type="submit" >
              update your task
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CardTask;
