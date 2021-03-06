import styled, { keyframes } from 'styled-components';
import reactTextareaAutosize from 'react-textarea-autosize';
import Theme from '../../Theme';
import upload_imagePng from '../assets/upload_image.png';
import send_messagePng from '../assets/send_message.png';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const ChatableBar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 5px;
  border-radius: ${Theme.APEX_RADIUS};
  animation: ${fadeIn} 0.2s;
`;

export const MessegeTextarea = styled(reactTextareaAutosize)`
  flex: 1;
  box-sizing: border-box;
  font-size: 15px;
  min-height: 30px;
  padding: 10px 20px;
  line-height: 20px;
  resize: none;
  outline: none;
  border: none;
  border-radius: ${Theme.APEX_RADIUS};
  background-color: ${Theme.MAIN_COLOR1};

  &::placeholder {
    color: #777;
    font-size: 15px;
  }
`;

export const UploadImageButton = styled.button`
  width: 40px;
  height: 20px;
  border: none;
  background: none;
  background-image: url(${upload_imagePng});
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center;
  outline: none;
`;

export const SendMessegeButton = styled.button`
  width: 40px;
  height: 20px;
  border: none;
  background: none;
  background-image: url(${send_messagePng});
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center;
  outline: none;
  cursor: pointer;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const FileInputLabel = styled.label`
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
`;
