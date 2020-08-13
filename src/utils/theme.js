export const theme = {
  useBodyStyles: true,
  breakpoints: ["40em", "56em", "64em"],
  space: [0, 4, 8, 16, 32, 40],
  initialColorModeName: "light",
  colors: {
    text: "black",
    background: ["#ddd", "#f8f9fc"],
    primary: "#639",
    secondary: "#462121",
    modes: {
      dark: {
        text: "#f8f9fc",
        background: ["#393e46", "#222831"],
        primary: "#eeeeee",
      },
      rimi: {
        text: "#f6c667",
        background: ["#C53030", "#22543D"],
        primary: "#ffaf00",
        secondary: "Yellow",
      },
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
    testing: "sans-serif, sans-serif",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],

  text: {
    heading: {},

    posts: {
      color: "text",
      margin: "0 auto",
      width: "default",
      a: {
        color: "secondary",
      },
      h3: {
        color: "secondary",
      },
      span: {
        fontSize: 1,
      },
    },

    post: {
      h3: {
        padding: 0,
        margin: 0,
      },
      span: {
        padding: 0,
        margin: 0,
      },
    },
  },

  layout: {
    container: {
      color: "text",
      margin: 5,
    },
  },

  styles: {
    p: {
      color: "text",
    },
    h2: {
      fontSize: 32,
      fontFamily: "heading",
      fontWeight: "heading",
      color: "secondary",
      mt: 4,
      mb: 2,
    },
    h3: {
      color: "red",
    },
  },
}

export default theme
