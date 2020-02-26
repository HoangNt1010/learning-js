var str = 'xin chao cac ban toi ten la hong';

//Str. =>
    /*
        charAt(x):
        subString(x;y):
        splice()
        slice()
        split('')
        trim()

    */

// var a = [1,4,6,8,10,14];

// for (var i = a.length -1  ; i >= 0 ;i--) {
//     console.log(a[i]);
// }

// function fromCharCode() {
//     // viết code ở đây.]
//     var str = '';
//     for(var x = 97; x < 123;x++) {
//         str += String.fromCharCode(x)
//     }
//     return str;
//    }
// console.log(fromCharCode())

// function sum(array,value) {
//     // var count = 0;
//     var flag = false;
//     // var tong = 0;
//     for(var i = 0; i < array.length;i++) {
//         // tong += array[i];
//         if(array[i] == value) {
//             // count++
//             flag = true;
//         }
//     }
//     // if(count > 0) {
//     //     flag = true;
//     // } else {
//     //     flag = false;
//     // }
//     return console.log(flag);
// }






//   sum([1,2,3],4);




// const isPrimeNumber = (num) => {
//     let flag = true;
//     if(num < 2) {
//         flag = false;
//     } else {
//         for(let i = 2 ; i < num; i++) {
//             if(num % i == 0) {
//                 flag = false;
//                 break;
//             }
//         }
//     }
//     if(flag == true) {
//         console.log(`${num} is prime`);
//     } else if(flag == false) {
//         console.log(`${num} is not prime`);
//     }
// }

// isPrimeNumber(11);



// console.log((2.3+2.4));


// var str = [
//     {
//         name : 'nguyen tien hoang'
//     },
//     {
//         name : 'thuan abc'
//     },
//     {name : 'tuan anh'}
// ]

// var str1 = str.name.split(' ');
// console.log(str1);

var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
  
 
    for (const key in apartment) {
        console.log(key);
    }
  