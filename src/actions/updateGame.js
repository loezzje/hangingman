export const UPDATE_FINSIHED_GAME = 'UPDATE_FINSIHED_GAME'


export default (updatedGame) => {
  return {
    type: UPDATE_FINSIHED_GAME,
    payload: updatedGame
  }
}
