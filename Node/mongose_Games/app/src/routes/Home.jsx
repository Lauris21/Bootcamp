import { useEffect } from 'react';
import getData from '../api/api.js';

const Home = () => {
  useEffect(() => {
    getData('http://localhost:8080/diablo/character/').then((res) => console.log(res));
  }, []);
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
