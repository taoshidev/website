import { extendTheme } from "@chakra-ui/react";

import { components } from "./components";
import { fonts } from "./fonts";
import { globalStyles } from "./global";
import { tokens } from "./tokens";

export const theme = extendTheme({
  components,
  fonts,
  semanticTokens: tokens,
  styles: globalStyles,
});
