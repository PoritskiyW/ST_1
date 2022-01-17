function every(array, callback) {

    if (!Array.isArray(array) || typeof callback !== 'function' || array.length < 1){
        return false;
    }

    let result = true;
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        result = callback(item);
        if (result === false){
            return result;
        }
    }
    return result;
}



module.exports = every;