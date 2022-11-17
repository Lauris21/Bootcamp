import styled from 'styled-components';

import { Div } from './componentsUi/StyledDiv';
import { H1 } from './componentsUi/StyledH1';
import { Anchor } from './componentsUi/StylesAnchor';

const HeaderStyles = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: #150206;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const Header = () => {
  return (
    <HeaderStyles>
      <Div display="flex" flexwrap="wrap" justify="space-evenly" gap="2rem" width="100vw">
        <H1 text="Diablo III" />
        <Anchor text="Character" />
      </Div>
    </HeaderStyles>
  );
};
