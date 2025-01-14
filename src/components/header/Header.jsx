import { Navigation } from 'components/navigation/Navigation';
import { StyledHeader, StyledNav } from './Header.styled';
import { Container } from 'components/container/Container';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <Navigation />
        </StyledNav>
      </Container>
    </StyledHeader>
  );
};
