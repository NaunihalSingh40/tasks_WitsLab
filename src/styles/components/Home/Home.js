import styled from "styled-components";
import { darkTheme } from "../../../theme/color";

// Using a function for dynamic values based on the theme
export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${darkTheme.background};
  color: ${darkTheme.textPrimary};
`;
