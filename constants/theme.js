const COLORS = {
  primary: "#FF8C00", // Keeping the name 'primary' but now it's a dark orange color
  secondary: "#D35400", // Keeping the name 'secondary' but now it's a slightly different orange for contrast
  tertiary: "#FF7754", // Orange shade for tertiary elements, no change from your setup

  gray: "#121212", // Keeping the name 'gray' but changing it to a dark color for the dark theme
  gray2: "#1A1A1A", // Keeping the name 'gray2' but changing it to an even darker shade for layered backgrounds or cards

  white: "#282828", // Keeping the name 'white' but now it's a dark gray that will act as the 'light' color in the dark theme
  lightWhite: "#333333", // Keeping the name 'lightWhite' but now it's a slightly lighter dark gray
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000", // No change here, black shadows work well in a dark theme
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000", // No change here either
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };

