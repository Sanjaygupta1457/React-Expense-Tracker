import React, { useEffect, useState, Fragment } from "react";
import { Table, Button } from "react-bootstrap";
import ExpenseDataService from "../../services/expense.services";

function ExpenseList({getExpenseId}) {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    getExpenses();
  }, []);

  const getExpenses = async () => {
    const data = await ExpenseDataService.getAllExpenses();
    console.log(data.docs);
    setExpenses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await ExpenseDataService.deleteExpense(id);
    getExpenses();
  };

  return (
    <Fragment>
        <div className="mb-2">
        <Button variant="dark edit" onClick={getExpenses}>
          Refresh List
        </Button>
      </div>
      {/* <pre>{JSON.stringify(expenses, undefined, 2)}</pre> */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.expense}</td>
                <td>{doc.description}</td>
                <td>{doc.category}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getExpenseId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Fragment>
  );
}

export default ExpenseList;
