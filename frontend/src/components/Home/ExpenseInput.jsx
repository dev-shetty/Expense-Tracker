function ExpenseInput() {
  return (
    <div className="container flex flex-col gap-4 py-4">
      <div className="form-element">
        <label htmlFor="reason">Source</label>
        <input type="text" name="reason" id="reason" />
      </div>
      <div className="form-element">
        <label htmlFor="earning">Earning</label>
        <input type="text" name="earning" id="earning" />
      </div>
      <div className="form-element">
        <label htmlFor="expense">Expense</label>
        <input type="text" name="expense" id="expense" />
      </div>
    </div>
  )
}

export default ExpenseInput
