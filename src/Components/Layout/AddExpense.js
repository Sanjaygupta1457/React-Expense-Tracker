import React, { useState, Fragment,useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import ExpenseDataService from "../../services/expense.services";

function AddExpense({id, setExpenseId}) {
  const [expense, setExpense] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const submitHandler = async (event) => {
    event.preventDefault();
    if (expense === "" || description === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newExpense = {
      expense,
      description,
      category,
    };
    console.log(newExpense);
    try {
        if (id !== undefined && id !== "") {
            await ExpenseDataService.updateExpense(id, newExpense);
            setExpenseId("");
            setMessage({ error: false, msg: "Updated successfully!" });
        }else{
            await ExpenseDataService.addExpense(newExpense);
            setMessage({ error: false, msg: "New Expense added successfully!" });
        }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setExpense("");
    setDescription("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await ExpenseDataService.getExpense(id);
      console.log("the record is :", docSnap.data());
      setExpense(docSnap.data().expense);
      setDescription(docSnap.data().description);
      setCategory(docSnap.data().category);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  return (
    <Fragment>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}
        <form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formExpense">
            <InputGroup>
              <InputGroup.Text id="formExpense">E</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Expense"
                value={expense}
                onChange={(event) => setExpense(event.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <InputGroup>
              <InputGroup.Text id="formDescription">D</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                maxLength="30"
              />
            </InputGroup>
          </Form.Group>
          <Form.Select
            className="mb-3"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="fuel">Fuel</option>
            <option value="food">Food</option>
            <option value="electricty">Electricty</option>
            <option value="movie">Movie</option>
          </Form.Select>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default AddExpense;
{
  /* <div className="row mt-5">
<div className="offset-md-3 col-md-6">
  <form onSubmit={submitHandler}>
    <h1>Expense Tracker</h1>
    <br />
    <div className="form-group">
      <label>Expense Amount*</label>
      <input
        type="text"
        value={expense}
        onChange={(event) => setExpense(event.target.value)}
        className="form-control"
      />
    </div>
    <div className="form-group">
      <label>Choose Description</label>
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        maxLength="30"
        className="form-control"
      />
    </div>
    <div className="form-group">
      <label>Category</label>
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        className="form-control"
      >
        <option value="fuel">Fuel</option>
        <option value="food">Food</option>
        <option value="electricty">Electricty</option>
        <option value="movie">Movie</option>
      </select>
    </div>
    <div className="form-action-buttons">
      <input type="submit" value="Submit" className="btn btn-info" />
    </div>
  </form>
</div>
</div> */
}
