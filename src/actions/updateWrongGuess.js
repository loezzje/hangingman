export const UPDATE_WRONGGUESS = 'UPDATE_WRONGGUESS'


export default (wrongGuess) => {
  return {
    type: UPDATE_WRONGGUESS,
    payload: wrongGuess
  }
}
