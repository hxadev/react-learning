import { useState } from "react";

export const AddCategory = ({onNewValue} ) => {
  const [inputValue, setInputValue] = useState("One Punch");
  const onInputChange = (value) => {
    setInputValue(value);
  };
  const onSubmit = (value) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewValue(inputValue);
    setInputValue('');
  }
  return (
    <form onSubmit={(e)=>onSubmit(e)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        className="form-control"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </form>
  );
};

