import axios from 'axios';
import React from 'react';

export default function Joke() {
  const [joke, setJoke] = React.useState('');

  React.useEffect(() => {
    axios
      .get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      })
      .then((res) => setJoke(res.data))
      .catch((err) => console.log(err));
  }, []);

  const changeJoke = () => {
    axios
      .get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      })
      .then((res) => setJoke(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="card">
        <div className="card-header">Dad Joke</div>
        <div className="card-body">
          <p className="card-text">{joke.joke}</p>
          <a className="btn btn-primary" onClick={changeJoke}>
            Get another Joke
          </a>
        </div>
      </div>
    </div>
  );
}
