import { css } from 'styled-components';

export const BREAKPOINT_LG = 1300;
export const BREAKPOINT_MD = 991;
export const BREAKPOINT_SM = 767;
export const BREAKPOINT_XS = 558;
export const BREAKPOINT_XXS = 360;

function screenStyles(breakpoint) {
  return function (styles) {
    return css`
      @media (max-width: ${breakpoint}px) {
        ${styles};
      }
    `;
  };
}

export const mq = {
  mobileSmall: screenStyles(BREAKPOINT_XXS),
  mobile: screenStyles(BREAKPOINT_SM),
  tablet: screenStyles(BREAKPOINT_MD),
  desktopSmall: screenStyles(BREAKPOINT_LG),
};
