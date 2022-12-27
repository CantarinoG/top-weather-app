export function validateSearchValue(text) {
    let result = text.trim();
    result = result.replace(/\s/g, '+');
    return result;
}

