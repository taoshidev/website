import { extendTheme } from "@chakra-ui/react";

import { styles } from "./global";

export const theme = extendTheme({
  styles,
  fonts: {
    heading: 'var(--font-adlam)',
    body: 'var(--font-space-mono)',
  }
});