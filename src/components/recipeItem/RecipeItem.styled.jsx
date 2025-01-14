import styled from '@emotion/styled';
import { Icon } from 'components/Icon';

export const StyledRecipeItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: linear-gradient(
    308deg,
    rgb(255, 255, 255) 20%,
    rgb(105, 105, 105) 75%
  );

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  height: 450px;
  background-color: #fff;
`;
export const StyledRecipeName = styled.h2`
  margin-bottom: 15px;
  padding: 0 15px 10px 0;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  text-align: center;
`;
export const StyledRecipeWrapper = styled.div`
  margin-bottom: 20px;
`;

export const StyledRecipeImg = styled.img`
  width: 300px;
  height: 270px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledRecipeButton = styled.button`
  padding: 10px 10px;
`;

export const StyledRecipeItemBtnWrap = styled.div`
  position: absolute;
  display: flex;
  align-items: baseline;

  gap: 160px;
  bottom: 5px;
  left: 5px;
`;

export const StyledRecipeItemBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const StyledRecipeItemIcon = styled(Icon)`
  stroke: #696969;

  &:hover {
    fill: #444444;
  }
`;

export const StyledRecipeItemDescr = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
