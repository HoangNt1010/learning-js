// const la khong gan gia tri 2 lan

// !! : quy đổi giá trị

/*
    co 7 kieu du lieu :
    number
    string
    boolean
    function
    null
    undefined
    object - array
*/

// so sanh undefined vs null neu dung 2 dau == thi tra ve TRUE con dung === thi tra ve FALSE


/*
    function:
        khi khong tra ve 1 gia tri nao do thi ket qua function tra ve la undefined
        so sanh u
*/
const a = 0
function func(a) {
    a= 9;
    return a;
}

console.log(a);

// const array = [3, 20, 6]

// console.log(array)

/*foreach
array.forEach(element => {
    console.log(element)
});
*/



/*map
const element = array.map((arr, index) => {
    return arr * 2
})
console.log(element)
*/


/* sort
array.sort()
console.log(array)
*/
//min max
// const min = Math.min(1,2,4,-200)
// console.log(min)

// const max = console.log(Math.max(3,4,6,12,98,15))


/*ceil floor
const num1 = 12.3
const num2 = console.log(Math.ceil(num1))
const num3 = console.log(Math.floor(num1))
*/

/*
date
const d = new Date()
console.log(d)
*/

/* concat
const str1 = 'Hoang'
const str2 = 'Nguyen '
const str3 = 'Tien '
const str = console.log(str2.concat(str3, str1))
*/

/* push
array.push(55)
console.log(array)
*/

/* shift
    array.shift()
    console.log(array)
*/

/* unshift
array.unshift();
console.log(array)
*/

/*
const str1 = 'viet nam vo dich'
const str = str1.split(' ') // tra ve 'vo'
const str = str1.split('') // tra ve 'e'
const str = str1.split() // tra ve 'viet nam vo dich'
console.log(str[2])
*/

/* filter
const newArr = ['abcdef' , 'request' , 'response', 'a' , 'no', 'yes']
const result = newArr.filter(a => a.length >= 6)
console.log(result)
*/

/* toString
const str1 = array.toString()
console.log(str1)
*/



//null là kiểu giá trị đc khái báo
//undefined là chưa đc khai báo

/*
var p1 =  {
    name : 'hoang',
    age : 26
}

var p = p1

var p = {
    name : 'hoang',
    age :26
}

p1 == p => false vì so sánh 2 obj
Object.assign : dồn giá trị - cập nhật giá trị cuối cùng

p2 = Object.assign({}, p1, {name : 'abc'}, {name : '123, money : 999}) => tạo ra 1 object mới

p1 == p2 => false

*/




/*
    String :
        charAt(x) : lấy 1 giá trị trong chuỗi theo vị trí x 
        subString(x, y): cắt chuỗi từ x đến y
        replace('str1' , 'str2') : thay đổi str1 = str2 trong chuỗi đưa vào
        include('str'): kiểm tra sự tồn tại của chuỗi str trong chuỗi đầu vào trả ra giá trị true false
        trim: cắt dấu cách ở đầu và cuối của chuỗi
        startWith('str'): kiểm tra chuỗi đầu vào có đúng chuỗi str hay không
        split('str'): tách chuỗi theo kí tự truyền vào 

    Number :
        Math.   
            min : tìm ra số nhỏ nhất trong chuỗi số đưa vào
            max : tìm ra số lớn nhất trong chuỗi số đưa vào
            floor : làm tròn xuống số đưa vào 
            ceil : làm tròn lên số đưa vào
            random() : lấy 1 số ngẫu nhiên
    Array :
        foreach: hiển thị mảng
        map: tạo ra 1 mảng mới và thực thi các câu lệnh trong đó
        filter: tạo ra mảng mới để kiểm tra điều kiện
        concat: nối chuổi hoặc nối mảng
        splice: xóa phẩn tử trong mảng ở vị trí mong muốn và có thể thay đổi phần tử bị xóa bằng 1 phần từ khác
        slice(điểm bắt đầu,điểm kết thúc): cắt phần tử trong chuỗi
        pop: xóa phần tử cuối mảng
        push: đưa phần tử vào cuối mảng
        sort: sắp xếp theo unicode
*/

//truy xuất mảng nếu dùng [] thì dùng trong trường hợp biến linh động


/*
    null là giá trị đc khái báo và giá trị đó là null
    undefined là giá trị không được khai báo 
*/