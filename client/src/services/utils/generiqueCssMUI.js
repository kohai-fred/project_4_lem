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
        fontSize: "clamp(36px, 6vw ,6em)",
        color: colorLight,
        fontWeight: "400",
        letterSpacing: "0.065em",
        fontFamily: fontFamily,
    },
    errorTitle: {
        color: colorError,
        fontFamily: fontFamily,
        fontSize: "clamp(16px, 5vw , 24px)",
        textAlign: "center",
    },
    input: {
        borderRadius: "5px",
        background: "linear-gradient(180deg, rgba(255,255,255,0.24833683473389356) 0%, rgba(255,255,255,1) 50%)",
    },
};
