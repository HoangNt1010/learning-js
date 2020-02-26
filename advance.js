//bài 2 : tính tổng cách phần tử trong mảng sau đó cho 1 callback để sau này sử dụng kết qả đó

// function showOut(sum) {
//     return `${sum} \nhello world`
    
// }

// function sumArr(arr,callback) {
//     console.log('hihi');
//     var sum = 0;
//     for(let i = 0 ; i< arr.length;i++) {
//         sum += arr[i];
//     }
//     return callback(sum)
// }

// console.log(sumArr([1,2,5,6],showOut));

//b9
/*
var promise1 = new Promise(function(res, rej) {
    setTimeout(function() {
        console.log(3);
        res(3)
    },3000)
});

var promise2 = new Promise(function(res, rej) {
    setTimeout(function() {
        console.log(2);
        res('2')
    },2000)
});

var promise3 = new Promise(function(res, rej) {
    setTimeout(function() {
        console.log(1);
        res(2)
    },1000)
});

Promise.all([promise1, promise2, promise3]).then(function(result) {
    console.log(result);
})
*/

//bai 10
/*
var p1 = new Promise(function(res, reg) {
    setTimeout(() => {
        console.log('3s lan 1');
        res(2)
    }, 3000);
})

var p2 =  p1.then(function(result) {
    return new Promise(function(res, rej) {
        setTimeout(() => {
            console.log('3s lan 2');
            res(result * 3)
        }, 3000);
    })
})

var p3 = p2.then(function(data) {
    if(data > 10) {
        console.log(false);
    } else {
        console.log(true);
    }
})

*/

//bai11:
var p1 = new Promise(function(res, rej) {
    setTimeout(() => {
        res(3)
        console.log('2s');
    }, 2000);
})

var p2 = new Promise(function(res, rej) {
    setTimeout(() => {
        res(7)
        console.log('5s');
    }, 5000);
})

Promise.all([p1,p2]).then(function(result) {
    
    let sum = 0;
    result.forEach(element => {
        sum += element
    });
    console.log(sum);
})