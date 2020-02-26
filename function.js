/*
function đóng gói lại tái sử dụng đc nhiều lần
function không có return sẽ trả về undefined
NaN rất nguy hiểm khi tạo ra function
function không tên là function vô danh(anonymus)
chú ý return
function vô danh thì cần phải gán vào cho 1 biến để có thể chạy
function tự gọi 1 lần : (function(){code})() 
*/

// function add(a,b) {
//     console.log(a);
//     return function() {
//         console.log('hello');
//     }
// }

// var x = add(6,7,8)();
// console.log(x); 



//part by value là : 


//clean code
/*

*/

var step = 10;
function increaseNumberWithStep(number) {
    return step + number
}

function decreaseNumberWithDouble(step) {
    //nếu không truyền tham số step vào thì sẽ biến đổi step bên ngoài
    
    return step *= 2



}