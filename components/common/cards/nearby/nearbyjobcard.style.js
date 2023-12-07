import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.lightGray, // Slightly off-white to provide contrast
    ...SHADOWS.medium,
    shadowColor: COLORS.darkGray, // Darker shadow for better contrast
    marginBottom: SIZES.base, // Add some margin to separate the cards
    borderLeftColor: COLORS.primary, // Add a colored accent border on the left
    borderLeftWidth: 5, // Set the width of the accent border
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.secondary, // A secondary color for the logo background
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.darkGray, // Darker shadow for the logo container
  },
  logImage: {
    width: "70%",
    height: "70%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.darkBlue, // A darker blue for the job name
  },
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.darkGray, // Using a dark gray for job type
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default styles;
