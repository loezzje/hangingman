export const CREATE_GAME = 'CREATE_GAME'

const word = "newWord"

export default (newGame) => {
  return {
    type: CREATE_GAME,
    payload: word
  }
}
