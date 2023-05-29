
const digitMapping = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
};

export const letterCombination = (digits) => {
    if (!digits || !digits.length) return [];

    const letterMatrix = digits.split('').map(digit => digitMapping[digit] || ['']);

    return letterMatrix.reduce((strings, currentEntry) => {
        const combinations = [];
        strings.reduce((_, current) => {
            [...currentEntry].map(digit => combinations.push(`${current}${digit}`))
        }, '');
        return combinations;
    });
}