import styled, { css } from 'styled-components';
import { mq } from '../utils/mq';

export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  padding: 60px 120px 20px 120px;
  ${mq.desktopSmall(css`
    padding: 30px 60px;
  `)};
  ${mq.tablet(css`
    padding: 12px 20px;
  `)};
  ${mq.mobile(css`
    padding: 12px 20px;
  `)};
`;

export const Button = styled.button<{ isSearch?: boolean; fixedMaxWidth?: boolean }>`
  background: ${(props) => props.theme.colours.teal};
  border: 1px solid ${(props) => props.theme.colours.darkTeal};
  border-radius: ${(props) => (props.isSearch ? '0 4px 4px 0' : '4px')};
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
    border: 1px solid ${(props) => props.theme.colours.lightGrey};
    background: ${(props) => props.theme.colours.darkGrey};
  }
  ${mq.tablet(css`
    font-size: ${(props) => props.theme.tabletFontSizes.small};
    line-height: ${(props) => props.theme.tabletLineHeights.small};
  `)};
  ${mq.mobile(css<{ fixedMaxWidth?: boolean }>`
    width: ${(props) => (props.fixedMaxWidth ? '210px' : '100%')};
    font-size: ${(props) => props.theme.mobileFontSizes.small};
    line-height: ${(props) => props.theme.mobileLineHeights.small};
  `)};
`;
