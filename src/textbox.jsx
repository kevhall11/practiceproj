import React, { useState } from "react";

const TextBox = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-4">
      <label className="block text-lg font-medium mb-2">Enter Text:</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type something..."
      />
      <p className="mt-2 text-gray-600">You typed: {text}</p>
    </div>
  );
};

export default TextBox;
