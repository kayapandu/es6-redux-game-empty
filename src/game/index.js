import configureStore from './redux/configureStore';
import { setColors } from './redux/actions';
import without from 'lodash.without';
import Board from './board';
import InfoPanel from './info';

/**
 * FILE INI NGGAK USAH DIOTAK-ATIK. OKE SIP.
 */
export default class Game {
  lastTick = 0;
  timer;

  colors = [
    {
      label: 'merah',
      value: 'red'
    },
    {
      label: 'hijau',
      value: 'green'
    },
    {
      label: 'biru',
      value: 'blue'
    },
    {
      label: 'oranye',
      value: 'orange'
    },
    {
      label: 'hitam',
      value: 'black'
    },
    {
      label: 'coklat',
      value: 'brown'
    },
    {
      label: 'ungu',
      value: 'purple'
    },
    {
      label: 'abu-abu',
      value: 'gray'
    }
  ];

  constructor(container) {
    this.container = container;
    configureStore();
  }
  start() {
    this.infoPanel = new InfoPanel();
    this.board = new Board();
    clearInterval(this.timer);
    this.timer = setInterval(this.generateColors, 1000);
  }

  /**
   * Bikin set warna baru
   */
  generateColors = () => {
    const now = Date.now();
    const dt = now - this.lastTick;
    if (dt >= 1000) {
      const realColor = this.colors[
        Math.floor(Math.random() * this.colors.length)
      ];

      const altColors = without(this.colors, realColor);
      const altColor = altColors[Math.floor(Math.random() * altColors.length)];

      window.ReduxStore.dispatch(setColors(realColor, altColor));
      this.lastTick = now;
    }
  };
}
