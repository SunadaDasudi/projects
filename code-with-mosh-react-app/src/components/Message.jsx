import { useState } from "react";

function Message() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false }
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id == 2 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed == true ? "Fixed" : "New"}
        </p>
      ))}
      <button onClick={handleClick}>Fix bug 1</button>
    </>
  );
}

export default Message;
