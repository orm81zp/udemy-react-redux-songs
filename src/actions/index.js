export const ACTION_TYPES = {
  SONG_SELECTED: 'SONG_SELECTED'
};

export const selectSong = (song) => {
  return {
    type: ACTION_TYPES.SONG_SELECTED,
    payload: song
  }
};
