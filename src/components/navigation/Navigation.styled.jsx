import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNawList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    border-bottom: 2px solid #f0ffff;
  }
`;
