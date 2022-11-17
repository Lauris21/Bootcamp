import { useEffect } from 'react';

import { Div } from '../components/componentsUi/StyledDiv.jsx';
import { Img } from '../components/componentsUi/StyledImg';
import getData from '../api/api.js';

const Home = () => {
  const url = 'http://localhost:8080/diablo/character/';
  useEffect(() => {
    getData(url).then((res) => console.log(res));
  }, []);
  return (
    <Div
      width="100%"
      height="75vh"
      backgr="black"
      display="flex"
      justify="center"
      align="center"
    >
      <Img
        width="75%"
        height="75%"
        src="https://c4.wallpaperflare.com/wallpaper/195/230/471/blizzard-entertainment-diablo-iii-crossbow-demon-hunter-wallpaper-preview.jpg"
        alt="Diablo III"
      />
    </Div>
  );
};

export default Home;
