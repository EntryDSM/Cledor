import styled from 'styled-components';
import Theme from './Theme';

export const InfoBarCover = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${Theme.MAIN_COLOR4};
  border-top-left-radius: ${Theme.APEX_RADIUS};
  border-top-right-radius: ${Theme.APEX_RADIUS};
  text-align: center;
  position: relative;
`;

export const CloseButton = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  color: ${Theme.MAIN_COLOR2};
  font-size: 25px;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;

  &:hover {
    color: #fff;
  }

  &:active {
    font-size: 30px;
  }
`;

export const InfoBarText = styled.span`
  color: #fff;
  line-height: 50px;
  font-size: 14px;
`;

export const Onlines = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  line-height: 50px;
  padding-left: 10px;
`;
