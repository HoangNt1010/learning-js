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


const convertToDate = (stringDate) => {
    let arrDate = stringDate.split('-');
    let date = new Date(arrDate[2], arrDate[1], arrDate[0]);
    return date;
}

//Bai 2
//   const newArray = persons.filter(value => {
//     let date = convertToDate(value.birthday);
//     value.birthday = date;
//     let month = date.getMonth();
//     return month > 6

//   });
 // console.log(newArray);


//bai 3 : 


//  const newArray = persons.filter( value => {
//   let date = convertToDate(value.birthday);
//   value.birthday = date;
//   let year = date.getFullYear();
//   let y = new Date();
//   return (y.getFullYear() - year) >= 22
//  })

//  console.log(newArray);


//bai 4

const newArray = persons.sort((a,b) => {
  if(a.name < b.name) {
    return 1
  } else {
    return 0
  }
})

console.log(newArray);

//bai 5 :
//C1: cách đơn giản nhưng không check đc tháng và ngày
// const newArr = persons.sort((param1, param2) => {
//     return param1.birthday > param2.birthday
// }) 

//C2: check đầy đủ cả tháng và ngày

// const newArr = persons.map(value => {
//     let date = convertToDate(value.birthday)
//     value.birthday = date
//     return value
// })
// const sortPersons = persons.sort((param1, param2) => {
//     return param1.birthday < param2.birthday
// })
// console.log(sortPersons);

//bai 6

// const newArr = persons.map((value) => {
//   let arr = value.name.split(' ');
//   let str = ''
//   arr.forEach(element => {
//       str += element.charAt(0).toUpperCase() + element.substring(1) + ' ';
//   });
//   value.name = str;

//   return value


// })
// console.log(newArr);


//bai 7:
// var doan = {
//   name: 'Doan',
//   age: 22,
//   salary: 10000
// }

// var trung = {}

// trung = Object.assign(doan, {name : 'Trung', clone : true})

// console.log(trung);
















  // function convertToDate(dateString) {
  //     var arr = dateString.split('-')
  //     var date = new Date(arr[2],arr[1],arr[0])
  //   return date
  // }


  // var newarr = persons.filter(function(item) {
  //     var date = convertToDate(item.birthday)
  //     item.birthday = date
  //     var year = item.birthday.getFullYear()
  //     var y = new Date()
  //     var hientai = y.getFullYear()

  //     return (hientai - year) >= 22
  // })

//   console.log(persons1);
  // console.log(newarr);


//   var doan = {
//     name: 'Doan',
//     age: 22,
//     salary: 10000
// }

// var trung = Object.assign({}, doan, {name: 'trung',clone : true})
// console.log(doan);
// console.log(trung);
