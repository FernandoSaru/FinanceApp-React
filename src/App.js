import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/globalStyles.js";
import Header from "./components/header/header.js";
import Panel from "./components/panel/panel.js";
import Form from "./components/form/form.js";


const App = () => {
const data = localStorage.getItem("transaction");
const [transactionList, setTransactionList] = useState(
    data ? JSON.parse(data) : []
);
const [income, setIncome] = useState(0);
const [expense, setExpense] = useState(0);
const [total, setTotal] = useState(0);

useEffect(() => {
    const amountExpense = transactionList
        .filter((item) => item.expense)
        .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionList
        .filter((item) => !item.expense)
        .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`$ ${income}`);
    setExpense(`$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : "" }$ ${total}`);
}, [transactionList]);


    const handleAdd = (transaction) => {
        const newArrayTransactions = [...transactionList, transaction];

        setTransactionList(newArrayTransactions);

        localStorage.setItem("transaction", JSON.stringify(newArrayTransactions));
    };

    return (
    <>
    <Header />
    <Panel income={income} expense={expense} total={total} />
    <Form handleAdd={handleAdd} transactionList={transactionList} setTransactionList={setTransactionList} />
    <GlobalStyle />
    </>
    );
};

export default App;