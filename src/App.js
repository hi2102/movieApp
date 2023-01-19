import React, { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
      .then(setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div
              key={movie.id}
              style={{
                display: 'flex',
              }}
            >
              <div>
                <img src={movie.medium_cover_image} />
              </div>
              <div
                style={{
                  paddingLeft: '1rem',
                }}
              >
                <h2>Title - {movie.title}</h2>
                <div>
                  {movie.genres.map((g) => (
                    <div key={g}>genres : {g}</div>
                  ))}
                  <span> rating : {movie.rating}</span>
                </div>
                <p>{movie.summary}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
