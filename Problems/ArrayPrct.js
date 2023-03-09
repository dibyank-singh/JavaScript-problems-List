// This is another file for Practice problem questions based on Array only.

// 1. Write a JavaScript program to count the number of arrays inside a given array

// Input= [2,8,[6],3,3,5,3,4,[5,4]]
// output=2

 let Input= [2,8,[6],3,3,5,3,4,[5,4]]

 function findnumofarry(Input){
   
    return Input.filter((elm)=> Array.isArray(elm)).length
 }
 console.log(`Num of array present in this Array ${findnumofarry(Input)}`)

//  2. Write a JavaScript program to check if an array is a factor chain or not ?

// Input= ([2, 4, 8, 16, 32]) -> true

let input2=[2, 4, 8, 16, 32]
function checkFact(nums){

    for(var i=0; i<nums.length-1;i++){
       
        if(nums[i+1]% nums[i] !=0){
            return false
        }
    }
    return true;
}
console.log(checkFact(input2))

// 3. Write a JavaScript function to filter false, null, 0 and blank values from an array
// input=[58, '', 'abcd', true, null, false, 0]
// output=[58, "abcd", true]

function filter_array_values(arr) {
    arr = arr.filter(isEligible);
    return arr;
  }
  
  function isEligible(value) {
    if(value !== false || value !== null || value !== 0 || value !== "") {
      return value;
    }
  }
  
  console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));

//   4. Convert a given number into exact decimal points to rigt side ?

const num= 2345.3424222
const resnum= num.toFixed(3)
console.log(resnum)  

// 5. Find the most frequent element in an array ?

// input=[2,3,4,2,3,5,5,5,5]
// output=5

let input3=[2,3,4,2,3,5,5,5,5]
function maxtimenum(arr){
    let freq = arr.reduce((acc, val) => {
        acc[val] = acc[val] ? acc[val] + 1 : 1;
        return acc; 
      }, {});
//  return freq

  let mostFreq = 0;
  let result = null;

  for (let elem in freq) {
    if (freq[elem] > mostFreq) {
      mostFreq = freq[elem];
      result = elem;
      debugger 
    }
  }

  return result;
}    
console.log(maxtimenum(input3))

//6. Write a function that takes in a string and returns the longest word in the string.

// let inputstr='hello divyank kumar singh"
// output= "divyank" - Cuz it's longest words in this given string.

let inputstr='hello divyank kumar singh'
   function findLongWord(str){
       let words= str.split(" ")
         
       let longestword=""
       for( var i=0; i<words.length;i++){


        if(words[i].length>longestword.length){
            longestword=words[i]
        }
       }
       
       return longestword
   }
   console.log(findLongWord(inputstr))

//    7.Write a function that takes in an array of objects and returns
//    a new array containing only the objects that have a property called "name".  ?

function filterObjectsWithNames(arr) {
    return arr.filter(obj => obj.hasOwnProperty('name'));
  }

// 8. Write a function that takes in two arrays and returns 
// a new array containing only the elements that are common between the two arrays. ?
 
  let Arrinput=[2,3,5,5,6,4,2,3]
  let Arrinput2=[4,2,4,5,6,7,2,2]

// To retun value in Boolean only.

//   function SingleComArr(arr, arr2){
//      let res= arr.some((elm)=> arr2.includes(elm))
    
//   }
//   console.log(SingleComArr(Arrinput,Arrinput2))

// 2nd approch

function getCommonElements(arr1, arr2) {
    const commonElements = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        commonElements.push(arr1[i]);
      }
    }
    return commonElements;
  }

console.log( getCommonElements(Arrinput, Arrinput2))