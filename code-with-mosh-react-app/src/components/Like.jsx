import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

function Like({ onClick }) {
  const [like, setLike] = useState(false);
  const toggle = () => {
    setLike(!like);
    onClick();
  };

  if (like)
    return (
      <AiFillHeart color="#ff6b81" size={40} onClick={toggle}></AiFillHeart>
    );
  return <AiOutlineHeart onClick={toggle} size={40} />;
}

export default Like;
