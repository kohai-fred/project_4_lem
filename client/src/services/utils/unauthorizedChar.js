export default function unauthorizedChar(str) {
    return /\d|\W/gi.test(str);
}
