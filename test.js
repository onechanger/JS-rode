let arrayLenth = arr => {
  console.log(arr.length);
};

let arrayPop = arr => {
  console.log(arr.pop());
};
a = [1, 2, 3];
var b = function() {
  console.log("6");
};

let arrayLoop = arr => {
  arr.forEach(b);
};

let arrayAdd = arr => {
  arr.push("something");
  return arr;
};

let orderWords = ori_array => {
  var wordlist = [];
  ori_array.forEach(function(oneword) {
    if (oneword) {
      if (wordlist.indexOf(oneword.toLocaleLowerCase()) == -1) {
        wordlist.push(oneword);
      }
    }
  });
  wordlist.sort(function(a, b) {
    if (a[0].toLocaleLowerCase() === b[0].toLocaleLowerCase()) {
      return a > b ? 1 : -1;
    } else {
      return a.toLocaleLowerCase() > b.toLocaleLowerCase() ? 1 : -1;
    }
  });
  return wordlist;
};

// ori_array.sort(function(a, b) {
//   if (a[0].toLocaleLowerCase() == b[0].toLocaleLowerCase()) {
//     return a > b;
//   } else {
//     return a.toLocaleLowerCase() > b.toLocaleLowerCase();
//   }
// });
// function postData(url, data) {
//   // Default options are marked with *
//   return fetch(url, {
//     body: JSON.stringify(data), // must match 'Content-Type' header
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, same-origin, *omit
//     headers: {
//       'user-agent': 'Mozilla/4.0 MDN Example',
//       'content-type': 'application/json'
//     },
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, cors, *same-origin
//     redirect: 'follow', // manual, *follow, error
//     referrer: 'no-referrer', // *client, no-referrer
//   })
//   .then(response => response.json()) // parses response to JSON
// }

// setTimeout(function() {
//   console.log(4);
// }, 0);
// new Promise(function(resolve) {
//   console.log(1);
//   for (var i = 0; i < 10000; i++) {
//     i == 9999 && resolve();
//   }
//   console.log(2);
// }).then(function() {
//   console.log(5);
// });
// console.log(3);

`let can't use arguments`;
//
// }
//
//   strl += arguments[i];
//
// for (i = 0, len = arguments.length, strl = ""; i < len; i++) {
// function strConnection() {
//   strl = "66";
//   console.log({ ...arguments });
//   a = ["55", "666"];
//   strl.concat(...a);
//   return `拼接后的字符串为: ${strl}`;
// }
// // console.log(strConnection("55", "66"));
// // str = "ssss";
// // console.log(str.concat("sssccc", "sssccc"));
// wordlist = ["ssdas", "sdas"];
// console.log(wordlist.join(""));

// new Promise((resolve, reject) => {
//   console.log("Initial");
//   let line = "try";
//   resolve(line);
//   // reject();
// })
//   .then(line => {
//     console.log(line);
//     throw new Error("Something failed");

//     console.log("Do this");
//   })
//   .catch(() => {
//     console.log("Do that");
//   })
//   .then(line => {
//     console.log(line);
//     console.log("Do this whatever happened before");
//   });
// console.log("print this");
// arr = [1, 1, 33, 3, 4, , 2, 1, 2, 2];

// // var arrlist = new Set(arr);
// var test = { sa: 77 };
// // arrlist.add(arr);
// console.log(arr.notempty());

` The main process has something that will never execute the micro process.`;
// setTimeout(function() { // console.log("start");
//   new Promise((rs) => {
//     console.log("yes");
//     let line = "--insde";
//     rs(line);
//     // return 7;
//   })
//     .then(function(value) {
//       console.log();
//     })
//   console.log("dingshi");
// }, 0);
// new Promise((rs, re) => {
//   console.log("yes");
//   let line = "line";
//   rs(line);
//   // return 7;
// })
//   .then(function(value) {
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value);
//     return value;
//     // throw new Error("Something failed");
//     // ressadadadasd;
//   })
//   .catch(value => {
//     console.log(`this is catch value is ${value}`);
//     return value * 2;
//   })
//   .then(value => console.log(`this is end value is ${value}`));
// console.log("end postion");
// console.log("end end postion");
// setTimeout(function() {
//   console.log("settime2");
// }, 0);
// let showValue = () => {
//   console.log(i);
// };
`&&: if first variable is ture next variable will being executed if false will be never being executed`;
`||: exactly the opposite`;
`!(condition)`;
// for (i = 1; i < 10; i++) {
//   !(i == 9) || showValue();
// }
`code can continue execution when promise resolve or reject function executed, but will not accept return parameter,`;
`Function never accept return parameter  `;
// new Promise((resolve, reject) => {
//   console.log("Initial");
//   let line = "try";
//   let string = "failure";
//   resolve();
//   console.log("Initial");
//   return "this";
//   reject(string);
//   resolve(line);
// })
//   .then(value => console.log(value))
//   .catch(value => console.log(value));
