import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: ${(props) => props.theme.fonts.robotoSlabLight};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 300;
`;

export const ModalHeader = styled.h1`
  font-family: ${(props) => props.theme.fonts.robotoSlabRegular};
  font-size: ${(props) => props.theme.fontSizes.medium};
  line-height: ${(props) => props.theme.lineHeights.medium};
  font-weight: 400;
  margin: 0;
`;

export const BodyText = styled.p`
  font-family: ${(props) => props.theme.fonts.robotoSlabBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  font-weight: 700;
  margin: 0;
`;

export const Placeholder = styled.p`
  font-family: ${(props) => props.theme.fonts.robotoSlabRegular};
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  font-weight: 300;
  margin: 0;
  z-index: 0;
  position: absolute;
  padding-left: 12px;
  color: ${({ theme }) => theme.colours.darkGrey};
  transition: 0.2s ease-in-out;
`;
