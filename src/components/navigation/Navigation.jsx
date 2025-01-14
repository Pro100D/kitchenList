import { StyledNavLink, StyledNawList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <StyledNawList>
      <li>
        <StyledNavLink to="/home">Recipes</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/favorite">Favorite Recipes</StyledNavLink>
      </li>
    </StyledNawList>
  );
};
