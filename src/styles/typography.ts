import styled, { css } from 'styled-components';
import { mq } from '../utils/mq';

export const H1 = styled.h1`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.robotoSlabLight};
  font-size: ${(props) => props.theme.fontSizes.large};
  line-height: ${(props) => props.theme.lineHeights.large};
  font-weight: 300;
  color: ${(props) => props.theme.colours.darkGrey};
  ${mq.tablet(css`
    text-align: center;
    font-size: ${(props) => props.theme.tabletFontSizes.large};
    line-height: ${(props) => props.theme.tabletLineHeights.large};
  `)};
  ${mq.mobile(css`
    font-size: ${(props) => props.theme.mobileFontSizes.large};
    line-height: ${(props) => props.theme.mobileLineHeights.large};
  `)};
`;

export const ModalHeader = styled.h2`
  font-family: ${(props) => props.theme.fonts.robotoSlabRegular};
  font-size: ${(props) => props.theme.fontSizes.medium};
  line-height: ${(props) => props.theme.lineHeights.medium};
  font-weight: 400;
  margin: 0;
  color: ${(props) => props.theme.colours.darkGrey};
  ${mq.tablet(css`
    font-size: ${(props) => props.theme.tabletFontSizes.medium};
    line-height: ${(props) => props.theme.tabletLineHeights.medium};
  `)};
  ${mq.mobile(css`
    font-size: ${(props) => props.theme.mobileFontSizes.medium};
    line-height: ${(props) => props.theme.mobileLineHeights.medium};
  `)};
`;

export const BodyText = styled.p`
  font-family: ${(props) => props.theme.fonts.robotoSlabBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  font-weight: 700;
  margin: 0;
  color: ${(props) => props.theme.colours.darkGrey};
  ${mq.tablet(css`
    font-size: ${(props) => props.theme.tabletFontSizes.small};
    line-height: ${(props) => props.theme.tabletLineHeights.small};
  `)};
  ${mq.mobile(css`
    font-size: ${(props) => props.theme.mobileFontSizes.small};
    line-height: ${(props) => props.theme.mobileLineHeights.small};
  `)};
`;

export const TealBodyText = styled(BodyText)`
  color: ${(props) => props.theme.colours.teal};
  text-align: center;
`;

export const Placeholder = styled.p`
  font-family: ${(props) => props.theme.fonts.robotoSlabRegular};
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  font-weight: 300;
  margin: 0;
  z-index: 0;
  position: absolute;
  margin-left: 12px;
  color: ${({ theme }) => theme.colours.darkGrey};
  transition: 0.2s ease-in-out;
  color: ${(props) => props.theme.colours.darkGrey};
  ${mq.tablet(css`
    font-size: ${(props) => props.theme.tabletFontSizes.small};
    line-height: ${(props) => props.theme.tabletLineHeights.small};
  `)};
  ${mq.mobile(css`
    font-size: ${(props) => props.theme.mobileFontSizes.small};
    line-height: ${(props) => props.theme.mobileLineHeights.small};
  `)};
`;
