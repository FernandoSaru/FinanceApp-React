import React, { useState } from 'react';
import * as C from "./formStyles";

const Form = () => {
    
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const transactionID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Must inform description and value!");
            return;
        } else if (amount < 1) {
            alert("Must be a positive value!");
            return;
        }

        const transaction = {
            id: transactionID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);
        setDesc("");
        setAmount("");
    };
    
    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Description</C.Label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Value</C.Label>
                    <C.Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} />
                </C.InputContent>
                <C.RadioGroup>
                    <C.Input type="radio" id="radioIncome" defaultChecked name="group1" onChange={() => setExpense(!isExpense)} />
                    <C.Label htmlFor='radioIncome'>Income</C.Label>
                    <C.Input type="radio" id="radioExpenses" defaultChecked name="group1" onChange={() => setExpense(!isExpense)} />
                    <C.Label htmlFor='radioExpenses'>Expense</C.Label>
                    </C.RadioGroup>
                <C.Button onClick={ handleSave }>ADD</C.Button>
            </C.Container>
        </>
  );
};

export default Form;