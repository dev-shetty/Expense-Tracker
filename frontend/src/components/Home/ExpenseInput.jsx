function ExpenseInput({
  source,
  setSource,
  expense,
  setExpense,
  earning,
  setEarning,
}) {
  return (
    <div className="container flex flex-col gap-4 pt-2">
      <div className="form-element">
        <label htmlFor="reason">Source</label>
        <input
          type="text"
          name="reason"
          id="reason"
          defaultValue={source}
          onChange={(event) => setSource(event.target.value)}
        />
      </div>
      <div className="form-element">
        <label htmlFor="expense">Expense</label>
        <input
          type="number"
          name="expense"
          id="expense"
          defaultValue={expense}
          onChange={(event) => setExpense(parseFloat(event.target.value))}
        />
      </div>
      <div className="form-element">
        <label htmlFor="earning">Earning</label>
        <input
          type="number"
          name="earning"
          id="earning"
          defaultValue={earning}
          onChange={(event) => setEarning(parseFloat(event.target.value))}
        />
      </div>
    </div>
  )
}

export default ExpenseInput
