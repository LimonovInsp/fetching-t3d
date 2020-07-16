import React from 'react';
import "./MaterialsButtons.css";

interface ButtonsProps {
  handleButtonLoad: () => void;
  handleButtonShow: () => void;
  handleButtonClear: () => void;
  isLoaded: Boolean;
}

export const MaterialsButtons: React.FC<ButtonsProps> = (props) => {
  const { handleButtonLoad, handleButtonShow, handleButtonClear, isLoaded } = props;
  const opacityRange = isLoaded 
    ? { opacity: 0.5 } 
    : { opacity: 1 };

  return (
    <div className="App__buttons">
    <button
      className="App__button"
      onClick={handleButtonLoad}
      disabled={isLoaded === true}
      style={opacityRange}
    >
      Load
    </button>
    <button
      className="App__button"
      onClick={handleButtonShow}
    >
      Show
    </button>
    <button
      className="App__button"
      onClick={handleButtonClear}
    >
      Clear
    </button>
  </div>
  );
};
