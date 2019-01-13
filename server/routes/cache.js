let _boardData = null;

const MinesweeperState = {

  /**
   * Save current state of game and board to cache
   */
  save: (boardData) => _boardData = boardData,

  /**
   * Load last saved state from cache and empty memory
   */
  load: () => {
    const boardData = _boardData;
    _boardData = null;
    return boardData;
  }
}

module.exports = MinesweeperState;