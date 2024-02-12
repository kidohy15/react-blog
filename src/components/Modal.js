import React from "react";

const Modal = ({ title, index, handleTitle }) => {
  return (
    <div className="modal">
      <h4>{title[index]}</h4>
      <p>날씨</p>
      <p>상세내용</p>
      <button onClick={(e) => handleTitle(e, index)}>글 수정</button>
    </div>
  );
};

export default Modal;
