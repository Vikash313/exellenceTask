//Question: 1

let x = [20,21,22,23,24,25,26,27,28,29,30]
 let y = []

 for(var i =0; i<x.length; i++){
     if(x[i] % 2 === 0){       
     y.push(x[i])
}
 }
console.log("Array after taking even number from x",y);


//question: 2

 let arr = [0,1,1,0,0,0,1,1,0,0,1,0];
  let sum = 0;
  let max = 0; 
  for(var i = 0; i<arr.length; i++){
      if(arr[i] === 0){
          sum = 0;
      }else{
          sum++;
          if(sum > max)
          max = sum
      }
  }
console.log("The maximum consecutive 1's in an array of 0's and 1's:", max);


//Question: 3
function matchedArray(arr) {
    repeatedElement=[],
    counts={};

for (var i=0;i<arr.length;i++) {
  var data = arr[i];
  counts[data] = counts[data] >= 1 ? counts[data] + 1 : 1;
  if (counts[data] === 2) {
    repeatedElement.push(data);
  }
}
console.log("repeatedElement",repeatedElement);
return repeatedElement;

}
matchedArray([2,3,4,4,4,5,6,7,7,7]);

//Question:4 
//answer in components/Todo.js
//given api not workins so I use another dumy api

//Question: 5

var obj = [
    {
    "id": 4,
    "name" : "abc"},
     {
    "id" : 10,
    "name" : "ab2"},
    {
    "id" : 5, 
    "name" : "abc3"},
    {
    "id" : 6, 
    "name": "abc5"
   }]
   

var sortedAray = obj.sort(function(a, b) {
    return (a.id - b.id);
});

console.log("sortedAray",sortedAray);
