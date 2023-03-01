function formatDate(date) {
    let timp = new Date() - date;
    if (timp < 1000) {
        return 'Прямо сейчас';
    }
    if (timp < 60000) {
        return Math.floor(timp / 1000) + ' сек. назад';
    }
    if (timp < 3600000) {
        return Math.floor(timp / 60000) + ' мин. назад';
    }
    let day = String(date.getDate())
    if (day.length === 1) { day = '0' + day }
    let month = String(date.getMonth() + 1)
    if (month.length === 1) { month = '0' + month }
    let year = String(date.getFullYear())
    year = year.slice(2);
    let hours = String(date.getHours())
    let min = String(date.getMinutes())
    return day + '.' + month + '.' + year + ' ' + hours + ':' + min
}

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date - 86400 * 1000)));