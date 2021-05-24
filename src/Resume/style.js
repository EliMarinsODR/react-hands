import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${({ dark }) => (dark ? 'black' : 'white')};
  color: ${({ dark }) => (dark ? 'white' : 'black')};
`;

export const ButtonTheme = styled.button``;
