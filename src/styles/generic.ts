import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
}`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 80px;
`;
