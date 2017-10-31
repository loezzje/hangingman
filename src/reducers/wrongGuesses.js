import { UPDATE_WRONGGUESS } from '../actions/updateWrongGuesses'
import { CREATE_GAME } from '../actions/createGame'


export default function(state = [], {type, payload} = {}) {
  // based on the action type we will return a new state
  switch(type) {
    // some actions include a payload that we can use to update the state
    // in this case the payload will contain a new recipe
    case CREATE_GAME :
      return state = []

    case UPDATE_WRONGGUESS :
      return state.concat(payload)


    // optionally some other cases
    // ...

    // by default we return the existing state
    default :
      return state
  }
}
