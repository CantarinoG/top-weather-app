export function validateSearchValue(text) {
    let result = text.trim();
    result = result.replace(/\s/g, '+');
    return result;
}

export function convertDate(miliseconds) {
    let d = new Date(miliseconds);
    let formattedDate = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    return formattedDate;
  }
