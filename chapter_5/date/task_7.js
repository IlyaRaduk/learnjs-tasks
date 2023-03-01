function getSecondsToTomorrow() {
    const maxSecond = 86400;
    let date = new Date();
    let secondsToday = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    return maxSecond - secondsToday;
}

console.log(getSecondsToTomorrow()) 