//bai1 :

// var ages = [32, 33, 12, 40, 1, 1.2];

// var age = ages.filter( value => {
//     return value % 2 == 0
// })

// console.log(age);

var persons = [
    {
        name: "tien bo",
        birthday: "30-04-1998"
    },
    {
        name: "tuan anh",
        birthday: "01-05-1994"
    },
    {
        name: "trung binh",
        birthday: "02-09-1997"
    },
    {
        name: "doan du",
        birthday: "23-08-1998"
    }
];

const convertToDate = (dateString) => {
    let arr = dateString.split('-');
    let date = new Date(arr[2] + '-' + arr[1] + '-' + arr[0])
    return date
}






//bai 2 :

// const newArr = persons.filter( value => {
//     let date = convertToDate(value.birthday)
//     console.log(date);
//     value.birthday = date;
//     let month = date.getMonth();
//     return month >= 6
// })

// console.log(newArr);



//bai3

// const newArr = persons.filter( value => {
//     let date = convertToDate(value.birthday)
//     value.birthday = date
//     let year = date.getFullYear()
//     let y = new Date()
//     return (y.getFullYear() - year) >= 22
// })

// console.log(newArr);

//bai4

// const newArr = persons.map(value => {
//     let date = convertToDate(value.birthday)
//     value.birthday = date
//     return value
// })

// const sortAge = newArr.sort((param1, param2) => {
//     if(param1.birthday > param2.birthday) {
//         return  1
//     } else if(param1.birthday == param2.birthday) { return 0} 
//      else {
//         return -1
//     }
// })

// console.log(sortAge);

//bai5

// const newArr = persons.sort((param1, param2) => {
//     // if(param1.name.toUpperCase() < param2.name.toUpperCase()) {
//     //     return 1
//     // } else {
//     //     return -1
//     // }
//     return param2.name.localeCompare(param1.name);
// })
// console.log(newArr);

//bai6

// const newArr = persons.map(item => {
//     let newItem = Object.assign({}, item);
//     newItem.name = newItem.name.toUpperCase()
//     return newItem
// })

// console.log(newArr);


/*
bai khac

const newArr = persons.map(value => {
    let arrName = value.name.split(' ')
    let str = ''
    arrName.forEach(element => {
        str += element.charAt(0).toUpperCase() + element.substr(1) + ' '
    });
    let str1 = str.trim()
    value.name = str1
    return value
})

console.log(newArr);
*/


//bai7

var doan = {
    name : 'Doan',
    age : 22,
    salary : 10000
}



var trung = Object.assign( {},doan, {name : 'Trung', clone : true})

console.log(doan);

