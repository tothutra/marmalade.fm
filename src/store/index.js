const initialState = {
  mixes: [],
  currentMix: null
}

function mixesApp(state = initialState, action) {
  const {type, payload} = action
  switch (type) {
    case 'SET_MIX':
      return {
        ...state,
        currentMix: payload
      }
    case 'ADD_MIX':
      return {
        ...state,
        mixes: [...state.mixes, {...payload, id: payload.key}]
      }
    default:
      return state
  }
}

export default mixesApp
