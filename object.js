/*
obj : {} gồm có key và value
    Dùng để đóng gói các biến có dữ liệu liên quan với nhau hay có mỗi quan hệ nào đó
    tạo ra obj = tạo ra 1 cái hộp
    tính chất của array và obj gần giống nhau
    có 2 cách truy xuất : student.age(1) và student['age'](2)
    (2) : có thế gán là 1 biến và truy xuất có thể linh động hơn
*/


//bài toán cái hộp

var student = {
    name : 'thuan',
    age : 15,
    friend : {
        name : 'thuan',
        age : 12
    },
    number : 12
} // hộp1





var student2 = {
    name : 'thuan',
    age : 12
}// hộp 2


student == student2 // false : vì so sánh 2 cái hộp
var hoang = student // bản thân trỏ 1 cái hộp
hoang.name = 'duy vu'

// console.log(student);

hoang == student // true : vì cùng trả về 1 cái hộp

hoang.name == student2.name // true : vì đây là so sánh kiểu string không phải so sánh obj(cái hộp)

var student3 = student.friend

// console.log(student == student3);// false :vì vẫn là so sánh 2 hộp mặc dù hộp con là phần tử của hộp to
                                 //nhưng vẫn là so sánh 2 cái hộp


for (const item in student) {
    console.log(student[item]);
}
// console.log(student);