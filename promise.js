// new Promise(exucute);
// function exucute(resolve, reject) {

// }

//setTimeout là hàm hẹn giờ => độ ưu tiên thấp hơn => in ra sau
//promise : rosolve và reject đc coi như là chia khóa
/*
    promise là : rút gọn của callback
    resolve trả về kết quả đúng
    reject trả về lỗi
    resolve => then
    reject => catch

    then dùng 2 lần thì then trên sẽ phải return để hàm dưới có thể sử dụng đc nếu như k return về thì hàm dưới sẽ k có value để sử dụng là sẽ trả ra undefined
    catch chỉ nhận 1 reject vì gặp lỗi thì bắn ra ngoài

    all là trả về tất cả vào 1 mảng và chờ thằng nhiều thời gian nhất
    race : trả ra giá trị của thằng nhanh nhất và k in ra giá trị của tất cả các hàm khác
*/

// var bien =new Promise(function(resolve, reject) {
//     console.log("vo gao");
//     setTimeout(function(){
//         console.log('nau com');
//         resolve(3)
//         reject({code : 400, message = 'err'})
//     },1000)
// }).then(function(result) {
//     console.log(result);
//     console.log("an com");
// }).catch(function(err) {
//     console.log(err);
// })




//pendding
//bai1

// var setTime = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('3s');
//         resolve()
//     }, 3000)
// }).then(function () {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('2s');
//             resolve()
//         }, 2000)
//     })
// }).then(function () {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('1s');
//         }, 1000)
//     })
// })



// var m = Promise.all(setTime);

// console.log(m);

var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('1s');
        resolve()
    }, 1000)
})

var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('2s');
        resolve()
    }, 2000)
})
var p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('3s');
        resolve()
    }, 3000)
})