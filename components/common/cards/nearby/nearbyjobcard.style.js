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
    backgroundColor: COLORS.white, // Changed to dark color for the card background
    ...SHADOWS.medium,
    shadowColor: COLORS.gray, // Adjusted to a darker color for better visibility
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.gray2, // Slightly lighter dark color for the logo background
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
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
    color: COLORS.primary, // This stays the same, as primary is already an orange color
  },
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.secondary, // Changed to a secondary orange for contrast against the dark theme
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default styles;

