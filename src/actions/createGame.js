export const CREATE_GAME = 'CREATE_GAME'



export default (word) => {
  return {
    type: CREATE_GAME,
    payload: word
  }
}
