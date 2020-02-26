/*
callback
    
    nếu param là 1 function thì là 1 callback
    callback sẽ đc thực thi khi 1 function khác đã được thực thi xong
    callback để linh động trong cách hoạt động

        
*/

/*
    keyword :
*/
// function test(doSomething) {
//     var tong = 8 + 9
//     doSomething(tong)
// }

// var vu = function(number) {
//     console.log('da bong');
//     console.log('tong = ' + number);
// }

// test(vu)

//Scope :pham vị hoạt động của biến
/*
    biến global : biến toàn cục => phạm vi hoạt động : toàn bộ file
    biến local : biến cục bộ => phạm vi hoạt động : trong function
    bên trong function thì có thể sử dụng bên ngoài function
    nhưng bên ngoài không thể sử dụng bên trong function có thể khai báo bên trong function
    nếu như khai báo function trong 1 function thì gọi ra cũng phải gọi trong function trước đó
    còn nếu gọi ngoài riêng lẻ thì sẽ lỗi
    cứ trong {} thì là block scope
    function scope

    let : phạm vi sống trong block scope (sống trong "{}" )
    var : phạm vi sống trong function scope( lớn hơn )
    const : không gán lại 2 lần

*/


// var number = 10;
// function test(number) {
//     number++
// }

// test(number)

// function test1() {
//     number++
// }

// test(number)

function demoCallback(param) {
    var num2 = 2
    console.log('Step ' + 1);
    param(num2)
    console.log('Step ' + 3);
} 

demoCallback(function(number) {
    console.log('Step ' + number);
})

// if(true) {
//     var num1 = 10;
//     let num2 = 10;
// }

// function printNumber() {
//     console.log(num1);
//     // console.log(num2);
// }

// console.log(printNumber());

// hoisting : mọi khai báo đc đẩy hết lên đầu
// hoisting : chỉ áp dụng cho var

// obj = hộp nếu thay đổi giá trị bị thay đổi thì obj đầu vào vẫn bị thay đổi
    // giá trị bên trong obj bị thay đổi nhưng hộp vẫn thế


    