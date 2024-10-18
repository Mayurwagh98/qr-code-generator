import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const DynamicQRCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Dynamic QR Code Generator</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
      />
      {inputValue && (
        <QRCodeSVG
          value={inputValue}
          size={300}
          style={{ margin: "0 0 0 100px" }}
        />
      )}
    </div>
  );
};

export default DynamicQRCodeGenerator;
