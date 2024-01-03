import * as types from 'action/ActionTypes'

const initialState = {
  isButtonClicked: false,
}

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_BUTTON:
      return {
        ...state,
        isButtonClicked: !state.isButtonClicked,
      }

    default:
      return state
  }
}

export default AppReducer
