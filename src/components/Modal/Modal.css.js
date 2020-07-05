import styled from 'styled-components'

import theme from '../../theme/theme'

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity linear 0.15s;
  z-index: 2000;
  width: ${(props) => {
    switch (props.modalSize) {
      case 'lg':
        return '800'
      case 'md':
        return '500'
      default:
        return '300'
    }
  }}px;
  margin: 40px auto;
  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.15s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.15s;
  }
  .background {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1040;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
  }
  .box-dialog {
    border-radius: 10px;
    z-index: 1050;
    width: 100%;
    background-color: ${theme.colors.white};
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    padding-bottom: 10px;
    .box-content {
      padding: 0 0 24px 0;
      width: 100%;
    }
    .box-header {
      padding: 0 5px 0 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .close {
        font-size: 35px;
        line-height: 35px;
        font-weight: 400;
        text-shadow: none;
        color: ${theme.colors.mediumGrey};
        cursor: pointer;
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
`

export default Modal
