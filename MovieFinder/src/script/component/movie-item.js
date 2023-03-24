class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
    <img class="fan-art-movie" src="${this._movie.Poster}" alt="Gambar movie">
    <div class="movie-info">
      <h2>${this._movie.Title}</h2>
      <p>Jenis Film : ${this._movie.Type}</p>
      <p>Tahun ${this._movie.Year}</p>
    </div>
      `;
  }
}

customElements.define('movie-item', MovieItem);
