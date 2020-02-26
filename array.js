var array = ['a','b','c']
var array1 = [1,2,3]
array.concat(array1)



var arrObj = [
    {
        name : 'hoang abc qwdwqe',
        age: 15
    },
    {
        name : 'tuan ana asdasdsa',
        age: 16
    },
    {
        name : 'thuan nguyen asdasdas asdas',
        age: 12
    }
]
// arrObj.sort(function(param1, param2) {
//     return param1.age > param2.age
// })

var newArr = arrObj.map(function(item) {
    // var char = item.name.charAt(0)
    // item.name = item.name.replace(char, char.toUpperCase())
    // var char = item.name.split('');
    // item.name = item.name.replace(char[0], char[0].toUpperCase())
    item.name = item.name.charAt(0).toUpperCase() + item.name.substring(1)
    //item.name = item.name.charAt(0).toUpperCase() + item.name.slice(1)
    //item.name = item.name.charAt(0).toUpperCase() + item.name.substr(1)
    // let str =item.name.split(' ')
    // let str1 = ''
    // str.forEach(element => {
    //    str1 += element.charAt(0).toUpperCase() + element.substr(1) + ' '; 
    // });
    // item.name = str1
    return item
    
})


console.log(newArr)


// var str = 'hoang nguyen tien';
// var str1 = str.split(' ');
// var str2 = '';
// str1.forEach(function(item) {
//     // body
//     str2 += item.charAt(0).toUpperCase() + item.substr(1) + ' ';
// });
// // str2 = str1.toString();
//  console.log(str2);


