function getDays(year, month) {

    const monthArr = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'];

    if ((typeof month === 'number' && (month > 12 || month <= 0))
        || (typeof month === 'string' && (month === '' || !monthArr.includes(month)))
        || (!Number.isInteger(month) && typeof month !== 'string')
        || year < 0) {
        return false;
    }
    if (typeof month === 'string') {
        month = monthArr.indexOf(month);
    }

    const date = new Date(year, month, 0).getDate();
    return date;
}


module.exports = { getDays };