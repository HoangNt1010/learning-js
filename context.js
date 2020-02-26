/*
 * context : môi trường
 * trong nodejs = global
 * trong web = window
 * bind : thay đổi this và trả về 1 function đc gán
 * call : thay đổi this và thực thi luôn function
 * apply : thay đổi this và thực thi luôn function nhưng tham số sau sẽ đưa vào []
 */

// array function không dùng bind call đc vì this đã bị fix cứng
// tạo ra context bằng cách class và từ khóa 'new'




//  function hello() {
//      console.log(this);
//  }

//  hello();


//cau do 1:
// function hello() {
//     console.log(this);
// }
// var newHello = hello.bind({name : 'nodemy'})

/*
cau do 2
function hello(number) {
    console.log(this, number);
}
var newHello = hello.call({name : 'nodemy'}, 9)

console.log(newHello);
*/

/**
 * cau 3
 * 
 */


// function capitalName(){
//     this.name = this.name.toUpperCase();
// }


// var x = capitalName.call(person1);
// console.log(x);



function convertDate(stringDate) {
    let arrDate = stringDate.split('-');
    let date = arrDate[2] + '-'+ arrDate[1] +'-'+arrDate[0];
    return date
}

// console.log(convertDate('2001-11-12'));

function formatBirthDay() {
    this.birthDay = convertDate(this.birthDay)
}
var person1 = {
    name: 'nam', birthDay: '1996-11-26'
    }
    var person2 = {
    name: 'hiep', birthDay: '1999-01-26'
    }
formatBirthDay.call(person1);

console.log(person1);

// var min = Math.min.apply(null, [4,8,9,3,4,7,2,-1,8]);
// console.log(min);

