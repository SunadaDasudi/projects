import { useState } from "react";

function ExpandableText({ children, maxChars }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  let text = isExpanded ? children : children.substring(0, maxChars) + "...";

  return (
    <div>
      {text}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
}

export default ExpandableText;
