import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  background: #666666;
  height: 150px;
`;

export const Toast = styled.div`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;

  display: flex;

  background: #ebf8ff;
  color: #3172b7;

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    top: 19px;
    right: 16px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;