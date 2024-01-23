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
      borderColor: "black",
    },
  },
  Link: {
    baseStyle: {
      borderBottom: "1px dotted transparent",
      _hover: {
        textDecoration: "none",
        borderBottom: "1px dotted black",
      },
    },
  },
};
