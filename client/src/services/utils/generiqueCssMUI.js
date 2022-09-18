const fontFamily = "Poppins , sans-serif";
const colorLight = "aliceblue";
const colorError = "#d00000";

export const cssMUI = {
    fontFamily: fontFamily,
    color: {
        error: colorError,
        light: colorLight,
    },
    pageTitle: {
        textAlign: "center",
        fontSize: "clamp(24px, 6vw ,6em)",
        color: colorLight,
        fontWeight: "400",
        letterSpacing: "0.065em",
        fontFamily: fontFamily,
    },
    errorTitle: {
        color: colorError,
        fontFamily: fontFamily,
        fontSize: "clamp(16px, 5vw , 4em)",
        textAlign: "center",
    },
};
