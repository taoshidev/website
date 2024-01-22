export const components = {
  Button: {
    baseStyle: {
      borderRadius: "0",
    },
    variants: {
      primary: {
        bg: "transparent",
        border: "1px dotted orange",
        color: "orange",
        _hover: {
          bg: "orange",
          color: "white",
        },
      },
    },
  },
  Divider: {
    baseStyle: {
      borderStyle: "dashed",
      borderColor: "black",
    },
  },
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: "none",
        color: "orange",
      },
    },
  },
};
