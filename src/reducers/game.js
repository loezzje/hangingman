
import { CREATE_GAME } from '../actions/createGame'

export default function(state = [], {type, payload} = {}) {
  // based on the action type we will return a new state
  switch(type) {
    // some actions include a payload that we can use to update the state
    // in this case the payload will contain a new recipe
    case 'CREATE_GAME' :
      return [Object.assign({}, payload)].concat(state)

    // optionally some other cases
    // ...

    // by default we return the existing state
    default :
      return state
  }
}
