  
import styled from 'styled-components';
import theme from './theme';
const {palette, colors, fontSizes, fonts } = theme;

const Button = styled.button`
  color: ${palette.white};
  background-color: transparent;
  border: 1px solid ${colors.spotifyGreen};
  border-radius: ${theme.borderRadius};
  font-size: ${fontSizes.smallish};
  font-family: ${fonts.Press_Start_2P};
  width: 200px;
  height: 75px;
  margin:auto;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.spotifyGreen};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;