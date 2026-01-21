import { useState } from "react";

// function Button() {
//   const [label, setLabel] = useState("Click Me");

//   const handleButtonClick = () => {
//     setLabel("Clicked!");
//   };

//   return (
//     <CallbackButton text={label} onClick={handleButtonClick} />
//   );
// }

// function CallbackButton({ text, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="px-4 py-2 font-tertiary border rounded-md"
//     >
//       {text}
//     </button>
//   );
// }

function Button({ BtnName }) {
  return (
    <button className="px-4 py-2 text-sm border-font-secondary bg-Btn-Background/10 font-tertiary border rounded-md mt-8 ml-3 hover:bg-secondary/80 hover:text-white transition duration-300">
      {BtnName}
    </button>
  );
}

export default Button;
