import styled from 'styled-components';
import { darkTheme, lightTheme } from '../../../theme/color';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props) =>
    props.isDarkMode ? darkTheme.background : lightTheme.background};
  color: ${(props) =>
    props.isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary};
`;
