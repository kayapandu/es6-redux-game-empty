export const types = {
  SET_COLORS: 'set colors',
  HIT: 'hit',
  MISS: 'miss'
};

export function setColors(realColor, altColor) {
  // bikin action untuk update state.realColor & state.altColor
  const color = { realColor, altColor };
  return {
    type: types.SET_COLORS,
    color
  };
}

export function hit() {
  // bikin action untuk update hit & skor.
  // hit = tambah skor (+1)
  return {
    type: types.HIT
  };
}

export function miss() {
  // bikin action untuk update miss & skor
  // miss = kurangi skor (-1)
  return {
    type: types.MISS
  };
}
