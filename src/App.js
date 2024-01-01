// components/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleButton } from './action/AppActions';
  
const App = () => {
  const dispatch = useDispatch();
  const isButtonClicked = useSelector((state) => state.authReducer.isButtonClicked);
  console.log("isButtonClicked", isButtonClicked)

  const handleToggleButtonClick = () => {
    dispatch(toggleButton());
  };

  return (
    <div>
      <h2>Redux Example</h2>
      <button onClick={handleToggleButtonClick}>
        Toggle Button: {isButtonClicked ? 'Clicked' : 'Not Clicked'}
      </button>
    </div>
  );
};

export default App;
