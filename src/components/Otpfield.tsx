import { useEffect, useRef, useState } from "react";
import "./Otpfield.css";
const Otpfield = () => {
  const inputContainerRef: any = useRef();
  let counter = 0;
  useEffect(() => {
    inputContainerRef.current.children[counter].focus();
  }, []);
  const _nextRef = (e: any) => {
    if (e.keyCode === 8) {
      counter > 0 ? counter-- : 0;
    }
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      counter < 3 ? counter++ : counter;
    }
    inputContainerRef.current.children[counter].focus();
  };
  return (
    <div ref={inputContainerRef} className="inputContainer">
      <input
        onKeyUp={_nextRef}
        pattern="\d{1,5}"
        maxLength={1}
        className="otpEntry"
        type="number"
      />
      <input
        onKeyUp={_nextRef}
        pattern="\d{1,5}"
        maxLength={1}
        className="otpEntry"
        type="number"
      />
      <input
        onKeyUp={_nextRef}
        maxLength={1}
        className="otpEntry"
        type="number"
      />
      <input
        onKeyUp={_nextRef}
        pattern="\d{1,5}"
        maxLength={1}
        className="otpEntry"
        type="number"
      />
    </div>
  );
};

export default Otpfield;
