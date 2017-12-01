//Iterate with JavaScript For Loops 

var myArray = [];

for (var i = 1; i < 6; i++){
  myArray.push(i);
}

output - [1,2,3,4,5]



//Iterate Odd Numbers With a For Loop

var myArray = [];

for (var i = 1; i < 11; i +=2) {
  myArray.push(i);
}

ouput - [1,3,5,7,9]



//Count Backwards With a For Loop

var myArray = [];

for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

output -  [9,7,5,3,1]


//Nesting For Loops

function multiplyAll(arr) {
  var product = 1;
   for (var i=0; i<arr.length; i++) {
    for (var q=0; q<arr[i].length; q++){
      product *= arr[i][q];
    }
  }
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

output - 5040




//Iterate with JavaScript While Loops

var myArray = [];

var i = 0;
while(i < 5){
  myArray.push(i);
  i++;
}

output - [0,1,2,3,4]
