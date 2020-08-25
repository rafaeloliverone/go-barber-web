import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  color: #312e38;
  background: #ff9000;
  width: 100%;
  height: 56px;
  border: 0;
  border-radius: 10px;

  padding: 0 16px;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
