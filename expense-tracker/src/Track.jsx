import { useEffect, useState } from "react";

export function Track() {
  const [transaction, setTransaction] = useState(() => {
    const saved = localStorage.getItem("transaction");
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food");

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
    setCategory("Food");
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
    <div className="min-h-screen bg-slate-950 text-white px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Expense Tracker</h1>
            <p className="text-slate-400 mt-1">Manage your money smartly</p>
          </div>

          <span className="w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-300">
            React + LocalStorage
          </span>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 p-6 shadow-xl">
            <p className="text-white/80">Total Balance</p>
            <h2 className="text-3xl font-bold mt-2">₹{balance}</h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 shadow-xl">
            <p className="text-slate-400">Total Income</p>
            <h2 className="text-3xl font-bold mt-2 text-emerald-400">₹{income}</h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 shadow-xl">
            <p className="text-slate-400">Total Expense</p>
            <h2 className="text-3xl font-bold mt-2 text-rose-400">₹{expense}</h2>
          </div>
        </section>

        <main className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6">
          <form
            onSubmit={addTransaction}
            className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 shadow-xl h-fit"
          >
            <h2 className="text-2xl font-semibold mb-5">Add Transaction</h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Transaction title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 outline-none focus:border-blue-400"
              />

              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 outline-none focus:border-blue-400"
              />

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 outline-none focus:border-blue-400"
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 outline-none focus:border-blue-400"
              >
                <option>Food</option>
                <option>Travel</option>
                <option>Shopping</option>
                <option>Salary</option>
                <option>Others</option>
              </select>

              <button
                type="submit"
                className="w-full rounded-2xl bg-blue-500 py-3 font-semibold hover:bg-blue-600 transition"
              >
                Add Transaction
              </button>
            </div>
          </form>

          <section className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-semibold">Recent Transactions</h2>
              <span className="text-sm text-slate-400">
                {transaction.length} total
              </span>
            </div>

            {transaction.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center text-slate-400">
                No transactions added yet.
              </div>
            ) : (
              <div className="space-y-3">
                {transaction.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-slate-900/60 p-4 hover:bg-slate-900 transition"
                  >
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-slate-400">
                        {item.category} • {item.date}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={
                          item.type === "income"
                            ? "font-bold text-emerald-400"
                            : "font-bold text-rose-400"
                        }
                      >
                        {item.type === "income" ? "+" : "-"}₹{item.amount}
                      </span>

                      <button
                        onClick={() => deleteTransaction(item.id)}
                        className="h-8 w-8 rounded-full bg-white/10 text-slate-300 hover:bg-rose-500 hover:text-white transition"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}