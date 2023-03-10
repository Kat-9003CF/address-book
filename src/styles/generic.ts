import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1920px;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 180px 0 120px;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colours.teal};
  border: 1px solid ${(props) => props.theme.colours.darkTeal};
  border-radius: 4px;
  width: 210px;
  height: 44px;
  font-family: ${(props) => props.theme.fonts.robotoSlabBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  color: ${(props) => props.theme.colours.offWhite};
  font-weight: 700;
  margin: 0;
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:disabled {
    cursor: inherit;
    border: 1px solid ${(props) => props.theme.colours.teal};
    background: ${(props) => props.theme.colours.darkGrey};
  }
`;
