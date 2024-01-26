export const components = {
  Button: {
    baseStyle: {
      borderRadius: "0",
    },
    variants: {
      primary: {
        bg: "transparent",
        border: "1px dashed orange",
        color: "orange",
        _hover: {
          bg: "orange",
          color: "white",
        },
      },
      secondary: {
        bg: "transparent",
        border: "1px dashed black",
        color: "black",
        _hover: {
          bg: "black",
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
      borderBottom: "1px dashed transparent",
      _hover: {
        textDecoration: "none",
        borderBottom: "1px dashed black",
      },
    },
  },
};
