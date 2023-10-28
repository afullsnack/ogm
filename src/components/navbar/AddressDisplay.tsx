import { useEffect, useRef, useState } from "react";

const AddressDisplay = ({ value }: { value: string }) => {
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef(null);

  const handleCopyClick = async () => {
    if (inputRef.current) {
      try {
        inputRef.current.select();
        document.execCommand("copy");
        // Optionally, you can provide user feedback (e.g., a tooltip) here
        if (navigator?.clipboard.writeText) {
          await navigator.clipboard.writeText(
            inputRef.current.value ?? inputValue
          );
        }
        window.alert("Address has been copied to clipboard");
      } catch (e: any) {
        console.log(e.message ?? e.toString());
        // window.alert(e.message ?? e.toString());
      }
    }
  };

  useEffect(() => {
    setInputValue(value);
  }, []);

  return (
    <div className="bg-slate-800 px-2 rounded flex gap-2 border-gray-400/50">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
        readOnly
        className="bg-slate-800 w-5/6 rounded-md caret-current border-none pr-1 py-3 text-white outline-none font-medium"
      />
      <button onClick={() => handleCopyClick()}>
        <span role="img" aria-label="Copy">
          📋
        </span>
      </button>
    </div>
  );
};

export default AddressDisplay;
