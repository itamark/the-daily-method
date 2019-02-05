export function getDay(now = new Date()){
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day;
}

export function incrementDate(date = new Date()){
    date.setDate(date.getDate()+1);
    return date;
}

export function decrementDate(date = new Date()){
    date.setDate(date.getDate()-1);
    return date;
}

export default getDay