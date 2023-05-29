export const formatString = (text = String) => {
    if(text) {
        let res = new Array();
        res = text
        .replace(/\s+/g, ' ')
        .replaceAll(/[^\w\s\']|_/g, "")
        .trim()
        .split(' ')
        .map(a => a.charAt(0).toLowerCase() + a.substr(1));
        return res;
    }
}