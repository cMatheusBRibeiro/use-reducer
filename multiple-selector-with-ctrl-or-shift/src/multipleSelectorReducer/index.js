import { MULTIPLE_SELECTOR_REDUCER_TOGGLE_SELECT_ITEM } from "./actions-type";

const selectItemWithCtrlOrShiftIsPressed = (state, item) => {
  if (state.indexOf(item) > -1) {
    return state.filter((selectedItem) => selectedItem !== item);
  }
  return [...state, item];
};

const selectItem = (state, item) => {
  if (state.indexOf(item) === -1) {
    return [item];
  }
  if (state.length > 1 && state.indexOf(item) > -1) {
    return [item];
  }
  return [];
};

const multipleSelectorReducer = (state, action) => {
  switch (action.type) {
    case MULTIPLE_SELECTOR_REDUCER_TOGGLE_SELECT_ITEM:
      if (action.payload.event.ctrlKey || action.payload.event.shiftKey) {
        return selectItemWithCtrlOrShiftIsPressed(state, action.payload.item);
      }
      return selectItem(state, action.payload.item);
    default:
      throw Error("Multiple Selector Reducer: Invalid action type!");
  }
};

export default multipleSelectorReducer;
