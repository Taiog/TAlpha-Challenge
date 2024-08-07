import { extendTheme } from "@chakra-ui/react";
import { styles } from "./styles";
import { breakpoints } from "./breakpoints";

export const theme = extendTheme({
    primaryColor: 'orange',
    styles,
    breakpoints,
    white: '#f0f0f0',
    colors: {
      dark: [
        '#d5d7e0',
        '#acaebf',
        '#8c8fa3',
        '#666980',
        '#4d4f66',
        '#34354a',
        '#2b2c3d',
        '#1d1e30',
        '#0c0d21',
        '#01010a',
      ],
    },
  });