import React, { useState } from 'react';
import * as C from "./formStyles";

const Form = () => {
    
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Must inform description!");
            return;
        } else if (amount < 1) {
            alert("Must be a positive number!");
            return;
        }
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
                    <C.Button onClick={ handleSave }>ADD</C.Button>
                </C.RadioGroup>
            </C.Container>
        </>
  );
};

export default Form;