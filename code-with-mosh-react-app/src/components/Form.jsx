import { useRef } from "react";

function Form() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const person = { name: "", age: 0 };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (nameRef.current !== null) person.name = nameRef.current.value;
        if (ageRef.current !== null) person.age = ageRef.current.value;
        console.log(person);
      }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
