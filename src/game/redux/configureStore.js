import { createStore } from 'redux';
import { types } from './actions';

// STATE INI NGGAK USAH DIOTAK-ATIK
const initialState = {
  score: 0,
  hit: 0,
  miss: 0,
  realColor: {},
  altColor: {}
};

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case types.SET_COLORS:
      const { realColor, altColor } = action.color;
      return {
        ...state,
        realColor,
        altColor
      };
    // update state dengan realColor & altColor baru,
    // masing-masing color format datanya: { label: nama warna dlm bahasa indonesia, value: warna valid untuk CSS }
    // liat Game.colors
    case types.HIT:
      // update state dengan nilai hit & skor yang baru
      return {
        ...state,
        hit: state.hit + 1,
        score: state.score + 1
      };
    case types.MISS:
      // update state dengan nilai miss & skor yang baru
      return {
        ...state,
        miss: state.miss + 1,
        score: state.score - 1
      };
  }
};

// FUNCTION INI NGGAK USAH DIOTAK-ATIK
export default function configureStore() {
  window.ReduxStore = createStore(reducer);
}
