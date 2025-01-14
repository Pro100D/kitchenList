import styled from '@emotion/styled';

export const StyledBackdrop = styled.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(36, 34, 34, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;

  visibility: visible;
  opacity: 1;
  pointer-events: auto;

  transition: 'visibility' 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  transition: 'opacity' 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
`;
