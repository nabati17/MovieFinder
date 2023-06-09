class DataSource {
  static searchMovie(keyword) {
    return (
      fetch(`http://www.omdbapi.com/?apikey=e387e64f&s=${keyword}`)
        //! ini belum implisite, jika ada satu bisa di implisit
        // .then((response) => {
        //   return response.json();
        // })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.Search) {
            return Promise.resolve(responseJson.Search);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        })
    );
  }
}

export default DataSource;
