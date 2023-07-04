import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { categories } from "../../src/App";

const schema = z.object({
  description: z
    .string({
      invalid_type_error: "Description must be alphanumeric."
    })
    .min(3, { message: "Expense description is needed." }),
  amount: z
    .number({
      invalid_type_error: "Amount must be a number."
    })
    .min(0, { message: "Amount needed." }),
  category: z.string()
});

function ExpenseTracker({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: zodResolver(schema)
  });

  //   console.log(errors);
  //   const onSubmit = (data) => {
  //     onAddExpense(data);
  //   };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.name && <p>Description required</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            name=""
            id="category"
            className="form-select"
          >
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          onSubmit={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      {/* <div className="mt-3">
        <select name="" id="allCategory" className="form-select">
          <option value="">All Categories</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div> */}
    </>
  );
}

export default ExpenseTracker;
