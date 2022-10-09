import React, { Fragment, useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";

function MainBody() {
    const [expenseId, setExpenseId] = useState("");

    const getExpenseIdHandler = (id) => {
        console.log("The ID of document to be edited: ", id);
        setExpenseId(id);
      };
  return (
    <Fragment>
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddExpense id={expenseId} setExpenseId={setExpenseId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <ExpenseList getExpenseId={getExpenseIdHandler}/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default MainBody;
