export const UPDATE_GUESSES = 'UPDATE_GUESSES'


export default (updatedGuesses) => {
  return {
    type: UPDATE_GUESSES,
    payload: updatedGuesses
  }
}
