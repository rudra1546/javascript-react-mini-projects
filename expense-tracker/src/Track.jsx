import { useEffect, useState } from "react";


export function Track() {

    const [transaction, setTransaction] = useState(() => {

        const saved = localStorage.getItem("transaction");
        return saved ? JSON.parse(saved) : [];
    });

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("expense");
    const [category, setCategory] = useState("food");
    useEffect(() => {
        localStorage.setItem("transaction", JSON.stringify(transaction));
    }, [transaction]);

    const addTransaction = (e) => {
        e.preventDefault();

        if (!title || !amount) return;

        const newTransaction = {
            id: Date.now(),
            title,
            amount: Number(amount),
            type,
            category,
            date: new Date().toLocaleDateString(),
        };
        setTransaction([newTransaction, ...transaction]);
        setTitle("");
        setAmount("");
        setType("expense");
        setCategory("food");
    };

    const deleteTransaction = (id) => {
        setTransaction(transaction.filter((item) => item.id !== id));
    };

    const income = transaction
        .filter((item) => item.type === "income")
        .reduce((total, item) => total + item.amount, 0);

    const expense = transaction
        .filter((item) => item.type === "expense")
        .reduce((total, item) => total + item.amount, 0);

    const balance = income - expense;

    return (
        <div className="app">
            <div className="container">
                <header className="header">
                    <div>
                        <h1>Expense Tracker</h1>
                        <p>Manage Your money smartly</p>
                    </div>
                    <span className="badge">React + LocalStorage</span>
                </header>

                <section className="cards">
                    <div className="card balance-card">
                        <p>Total Balance</p>
                        <h2>₹{balance}</h2>
                    </div>

                    <div className="card income-card">
                        <p>Total Income</p>
                        <h2>₹{income}</h2>
                    </div>

                    <div className="card expense-card">
                        <p>Total Expense</p>
                        <h2>₹{expense}</h2>
                    </div>
                </section>

                <main className="main">
                    <form className="form-card" onSubmit={addTransaction}>
                        <h2>Add Transaction</h2>

                        <input type="text"
                            placeholder="Transaction title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                        <input type="number"
                            placeholder="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)} />


                        <select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        </select>

                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option>Food</option>
                            <option>Travel</option>
                            <option>Shopping</option>
                            <option>Salary</option>
                            <option>Others</option>
                        </select>
                        <button type="submit">Add Transaction</button>
                    </form>
                    <section className="list-card">
                        <h2>Recent Transactions</h2>
                        {transaction.length === 0 ? (
                            <p className="empty">No transactions yet</p>
                        ) : (
                            div}
                    </section>

                </main>
            </div>
        </div>
    );


}