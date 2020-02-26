


var date = setInterval(() => {
    var date = new Date();
    // var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    var time = date.toLocaleTimeString() + ' - ' + date.toLocaleDateString();
    console.log(time);
}, 1000);


setTimeout(() => {
    clearInterval(date);
}, 10000);