import { UPDATE_FINSIHED_GAME} from '../actions/updateGame'
import { CREATE_GAME } from '../actions/createGame'


export default function(state = false, {type, payload} = {}) {
  // based on the action type we will return a new state
  switch(type) {
    // some actions include a payload that we can use to update the state
    // in this case the payload will contain a new recipe
    case CREATE_GAME :
      return state = false

    case UPDATE_FINSIHED_GAME :
      return state = payload

    // optionally some other cases
    // ...

    // by default we return the existing state
    default :
      return state
  }
}
