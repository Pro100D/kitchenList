import styled from '@emotion/styled';
import { Icon } from 'components/Icon';

export const StyledModelMenu = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  font-family: Arial, sans-serif;
`;

export const StyledModalMenuCloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;

  cursor: pointer;

  &:focus {
    stroke: 2px solid rgb(68, 68, 68);
  }
`;

export const StyledModalMenuIcon = styled(Icon)`
  &:hover {
    fill: rgb(68, 68, 68);
  }
`;

export const StyledModalMenuWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const StyledModalMenuTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const StyledModalMenuIngr = styled.ul`
  font-family: 'Roboto Mono', monospace;

  li {
    margin-bottom: 8px;
  }
`;

export const StyledModalMenuDetails = styled.div`
  margin-top: 16px;
  padding: 16px;
  background-color: #f1f1f1;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;

  p {
    margin: 4px 0;
  }
`;
export const StyledModalMenuWrapText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 400px;
`;
export const StyledModalMenuDesc = styled.p`
  margin-bottom: 20px;
`;
