import { StyledBackdrop } from './Backdrop.styled';

export const Backdrop = ({ onClick, children }) => {
  return <StyledBackdrop onClick={onClick}>{children}</StyledBackdrop>;
};
