import { useEffect, useState } from 'react';

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    // Fetch actor data
    fetch('http://localhost:4000/actors')
      .then((res) => res.json())
      .then((data) => setActors(data));
  }, []);

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <article key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Actors;
