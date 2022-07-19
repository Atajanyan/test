//ex1


// let data = [
//     ["The","red", "horse"],
//     ["Plane","over","the","ocean"],
//     ["Chocolate","ice","cream","is","awesome"], 
//     ["this","is","a","long","sentence"]
//   ]
  
//   function groupeWords(array) {
//      let newArr = array.map(e=>e.join(' ').split().reduce((a,b)=>{a.concat(b)}))
//      return newArr
//   }
//   console.log(groupeWords(data));


//ex2

//2.  (+,-,*,/ operations).

// function Calculator() {
//      return function foo(oper1,oper2,operator){
//         console.log(oper1+operator+oper2);
//      }
// }

// let calc = new Calculator();
// calc(1,2,'+')

function Calculator() {
  return function foo(oper1,oper2,operator){
    switch(operator){
    case '+': console.log(oper1+oper2);
    break;
    case '-': console.log(oper1-oper2);
    break;
    case '*': console.log(oper1*oper2);
    break;
    case '/': console.log(oper1/oper2);
    break
    }
  }
}

let calc = new Calculator();
calc(1,2,'+')



//ex3


// let dupes = [1,2,3,'a','a','f',3,4,2,'d','d'];

// function removeDups(arr) {
//     let unic = []
//     let newArr = arr.reduce((a,b)=>{
//         if(!a[b]){
//             a[b]=1
//             if(a[b]===1){
//                 unic.push(b)
//             }
//         }
//         return a
//     },{})
//     return unic
// };
// console.log(removeDups(dupes));



//ex4


// let arr = [
//     {name: 'Alice', job: 'Data Analyst', country: 'AU'},
//     {name: 'Bob', job: 'Pilot', country: 'US'},
//     {name: 'Lewis', job: 'Pilot', country: 'US'},
//     {name: 'Karen', job: 'Software Eng', country: 'CA'},
//     {name: 'Jona', job: 'Painter', country: 'CA'},
//     {name: 'Jeremy', job: 'Artist', country: 'SP'},
//   ];
//   function groupe(arr, prop) {
//         let res = {};
//         for (let el of arr) {
//           if (res[el[prop]]) {
//             res[el[prop]].push(el);
//           } else {
//             res[el[prop]] = [];
//             res[el[prop]].push(el);
//           }
//         }
//         return res;
//       }
//       console.log(groupe(arr, "country"))


  //ex5

//   let S = 'i.like.this.program.very.much'
//   let newStr = S.split('.').reverse().join('.')
//   console.log(newStr);

  
  