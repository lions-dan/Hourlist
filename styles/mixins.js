import { css } from 'styled-components';
import theme from './theme';
import media from './media';
const { palette, colors, fontSizes, fonts } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${palette.white};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${palette.white};
    &:hover,
    &:focus,
    &:active {
      color: ${palette.white};
      outline: 0;
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${palette.white};
      transition: ${palette.transYellowish};
      opacity: 0.5;
    }
  `,

  smallButton: css`
    color: ${palette.white};
    background-color: transparent;
    border: 1px solid ${palette.yellowish};
    border-radius: ${theme.borderRadius};
    padding: 0.75rem 1rem;
    font-size: ${fontSizes.smallish};
    font-family: ${fonts.Press_Start_2P};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.transGreen};
    }
    &:after {
      display: none !important;
    }
  `,

  textTyping: css`
    color: #fff;
    font-family: monospace;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
      typing 3.5s steps(30, end),
      blink-caret 1s step-end infinite;


  /* The typing effect */
  @keyframes typing {
   from { width: 0% }
    to { width: 100% }
  }

  /* The typewriter cursor effect */
    @keyframes blink-caret {
    from, to { border-color: transparent ; color: ${palette.transSilver};}
    50% { color: green; }
  }
`,


  bigButton: css`
    color: ${palette.deepMatteGray};
    background-color: transparent;
    border-right: 3px solid ${palette.deepMatteGray};
    border-left: 3px solid ${palette.deepMatteGray};
    border-radius: ${theme.borderRadius};
    padding: 1.25rem 1.75rem;
    font-size: ${fontSizes.small};
    font-family: 'PressStart2P';
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${palette.transYellowish};
      color: ${palette.transSilver};
    }
    &:after {
      display: none !important;
    }
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px ${colors.shadowNavy};
    transition: ${theme.transition};

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${colors.shadowNavy};
    }
  `,
};

export default mixins;
