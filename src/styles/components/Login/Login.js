import styled from "styled-components";
import { darkTheme, lightTheme } from "../../../theme/color";
import { TextField, FormControl, Button } from "@mui/material";

// Wrapper with dark mode and light mode support
export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props) =>
    props.$isDarkMode ? darkTheme.background : lightTheme.background};
  color: ${(props) =>
    props.$isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

// Custom styles for TextField (using Material UI TextField)
export const CustomTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    background-color: ${(props) =>
      props.$isDarkMode ? darkTheme.cardBackground : lightTheme.cardBackground};
    color: ${(props) =>
      props.$isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary};

    & fieldset {
      border-color: ${(props) =>
        props.$isDarkMode ? darkTheme.border : lightTheme.border};
    }

    &:hover fieldset {
      border-color: ${(props) =>
        props.$isDarkMode ? darkTheme.accent : lightTheme.accent};
    }
  }
`;

// Custom styles for FormControl (used for Password)
export const CustomFormControl = styled(FormControl)`
  margin-top: 10px;
  background-color: ${(props) =>
    props.$isDarkMode ? darkTheme.cardBackground : lightTheme.cardBackground};
  color: ${(props) =>
    props.$isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary};
  & .MuiOutlinedInput-root {
    color: ${(props) =>
      props.$isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary};
    background-color: ${(props) =>
      props.$isDarkMode ? darkTheme.cardBackground : lightTheme.cardBackground};

    & fieldset {
      border-color: ${(props) =>
        props.$isDarkMode ? darkTheme.border : lightTheme.border};
    }

    &:hover fieldset {
      border-color: ${(props) =>
        props.$isDarkMode ? darkTheme.accent : lightTheme.accent};
    }
  }
`;

// Custom styles for the Button
export const CustomButton = styled(Button)`
  margin-top: 16px;
  background-color: ${(props) =>
    props.$isDarkMode ? darkTheme.accent : lightTheme.accent};
  color: ${(props) =>
    props.$isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary};
  
  &:hover {
    background-color: ${(props) =>
      props.$isDarkMode ? darkTheme.accent : lightTheme.accent};
  }
`;
