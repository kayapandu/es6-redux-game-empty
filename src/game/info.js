export default class InfoPanel {
  constructor() {
    this.colorLabel = document.getElementById('color-label');
    this.score = document.getElementById('score');
    this.hits = document.getElementById('hits');
    this.miss = document.getElementById('misses');

    window.ReduxStore.subscribe(this.onStoreChange);
  }

  onStoreChange = () => {
    const state = window.ReduxStore.getState();
    this.colorLabel.innerHTML = state.realColor.label;
    this.colorLabel.style.color = state.altColor.value;

    this.score.innerHTML = `Score : ${state.score}`;
    this.hits.innerHTML = `Hits : ${state.hit}`;
    this.miss.innerHTML = `Miss : ${state.miss}`;

    // 1. Bikin tulisan warna. Tulisannya pake state.realColor.label,
    //    warna teksnya pake state.altColor.value
    // 2. Update tampilan skor, jumlah klik yg benar (hit), & yang salah (miss)
  };
}
