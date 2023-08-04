import React from "react";

function ImgList(props) {
  return (
    <div>
      <img src={props.src} alt={props} />
    </div>
  );
}

export default ImgList;
