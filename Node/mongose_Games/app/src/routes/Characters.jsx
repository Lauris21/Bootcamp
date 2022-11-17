import { useEffect, useState } from 'react';

import getData from '../api/api.js';
import { Div } from '../components/componentsUi/StyledDiv.jsx';
import { Figure } from '../components/componentsUi/StyledFigure';
import { Img } from '../components/componentsUi/StyledImg.jsx';
import { H2 } from '../components/componentsUi/StyledH2';
import { P } from '../components/componentsUi/StyledParragr';

const Character = () => {
  const [characterGallery, setCharacterGallery] = useState();
  const url = 'http://localhost:8080/diablo/character/';
  useEffect(() => {
    getData(url).then((res) => setCharacterGallery(res));
  }, []);

  return (
    <Div
      width="100%"
      backgr="black"
      display="flex"
      justify="space-around"
      gap="2rem"
      flexwrap="wrap"
      padding="3rem"
    >
      {characterGallery ? (
        characterGallery.map((item) => (
          <Figure
            backgr="#1d1d1d"
            height="33rem"
            width="26rem"
            key={item._id}
            display="flex"
            placeit="center"
            flexdir="column"
            gap="1rem"
            padding="1rem"
          >
            <Img src={item.simbol} alt={item.clase} width="22rem" height="24rem" />
            <H2 text={item.clase} textalign="center" />
            <P text={item.recurso.toUpperCase()} />
          </Figure>
        ))
      ) : (
        <p>Not Found</p>
      )}
    </Div>
  );
};

export default Character;
