import "./App.css";
import { useReducer } from "react";
import countReducer from "../countReducer";
import {
  COUNT_REDUCER_DECREMENT,
  COUNT_REDUCER_INCREMENT,
  COUNT_REDUCER_RESET,
} from "../countReducer/actions-type";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BiReset } from "react-icons/bi";

const iconProps = {
  size: 16,
};

function App() {
  const [counter, dispatch] = useReducer(countReducer, 0);

  const handleIncrement = () => {
    dispatch({
      type: COUNT_REDUCER_INCREMENT,
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: COUNT_REDUCER_DECREMENT,
    });
  };

  const handleReset = () => {
    dispatch({
      type: COUNT_REDUCER_RESET,
    });
  };

  return (
    <div className="container">
      <div className="counter">
        <div className="counter__screen">{counter.toLocaleString("pt-br")}</div>
        <div className="counter__list-operators">
          <button
            type="button"
            className="counter__operator"
            onClick={handleIncrement}
          >
            <FaPlus {...iconProps} />
          </button>
          <button
            type="button"
            className="counter__operator"
            onClick={handleDecrement}
          >
            <FaMinus {...iconProps} />
          </button>
          <button
            type="button"
            className="counter__operator"
            onClick={handleReset}
          >
            <BiReset {...iconProps} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
