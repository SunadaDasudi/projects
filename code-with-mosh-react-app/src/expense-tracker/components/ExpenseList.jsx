function ExpenseList({ expenseObjectArray, onDelete }) {
  if (expenseObjectArray.length === 0) return <p>No expenses!</p>;
  return (
    <>
      <h1>Expense List</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenseObjectArray.map((expenseObject) => (
            <tr key={expenseObject.id}>
              <td>{expenseObject.description}</td>
              <td>{expenseObject.amount}</td>
              <td>{expenseObject.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expenseObject.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {expenseObjectArray
                .reduce(
                  (accumulator, expenseObject) =>
                    expenseObject.amount + accumulator,
                  0
                )
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default ExpenseList;
