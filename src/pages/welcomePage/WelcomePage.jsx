import { Container } from 'components/container/Container';
import {
  StyledWelcomeText,
  StyledWelcomeTitle,
  StyledWelcomeWrap,
} from './Welcome.styled';

export const WelcomePage = () => {
  return (
    <Container>
      <StyledWelcomeWrap>
        <StyledWelcomeTitle>Welcome to Cooking List</StyledWelcomeTitle>
        <StyledWelcomeText>
          Here you can save, edit your favorite (and maybe not so favorite)
          recipes!
        </StyledWelcomeText>
      </StyledWelcomeWrap>
    </Container>
  );
};
