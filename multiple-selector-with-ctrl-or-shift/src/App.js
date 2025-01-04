import "./App.css";

import { useReducer } from "react";
import multipleSelectorReducer from "./multipleSelectorReducer";
import { MULTIPLE_SELECTOR_REDUCER_TOGGLE_SELECT_ITEM } from "./multipleSelectorReducer/actions-type";

function App() {
  const nItems = 5;
  const items = new Array(nItems).fill(0).map((n, i) => i + 1);

  const [itemsSelected, dispatch] = useReducer(multipleSelectorReducer, []);

  const handleSelectItem = (event, item) => {
    dispatch({
      type: MULTIPLE_SELECTOR_REDUCER_TOGGLE_SELECT_ITEM,
      payload: {
        event,
        item,
      },
    });
  };

  const getClassNameForSelectedItem = (item) => {
    return isSelectedItem(item) ? "list__box--selected" : "";
  };

  const isSelectedItem = (item) => itemsSelected.indexOf(item) > -1;

  return (
    <div className="container">
      <ul className="list">
        {items.map((item) => (
          <li>
            <div
              className={`list__box ${getClassNameForSelectedItem(item)}`}
              onClick={(event) => handleSelectItem(event, item)}
            >
              {item}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
