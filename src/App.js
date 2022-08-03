import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/globalStyles";
import Header from "./components/header/header";
import Panel from "./components/panel/panel";
import Form from "./components/form/form";


const App = () => {
const data = localStorage.getItem("transactions");
const [transactionsList, setTransactionList] = useState(
    data ? JSON.parse(data) : []
);
const [income, setIncome] = useState(0);
const [expense, setExpense] = useState(0);
const [total, setTotal] = useState(0);

useEffect(() => {
    const amountExpense = transactionsList
        .filter((item) => item.expense)
        .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
        .filter((item) => item.expense)
        .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`$ ${income}`);
    setExpense(`$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : "" }$ ${total}`);
}, [transactionsList]);


    const handleAdd = (transaction) => {
        const newArrayTransactions = [...transactionsList, transaction];

        setTransactionList(newArrayTransactions);

        localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
    };

    return (
    <>
    <Header />
    <Panel income={income} expense={expense} total={total} />
    <Form handleAdd={handleAdd} />
    <GlobalStyle />
    </>
    );
};

export default App;