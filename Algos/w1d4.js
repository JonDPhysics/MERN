// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// To test the function, use Shell in the terminal on the right. Type node W1D1.js


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {         //Start at  2nd position
        let number = nums[i];                         // Temp Variable that has number at second position
        let j = i-1;                                  // j = Number to Left of i
        while (number < nums[j]){                        // Temp number aka (i) < array of [j] run loop
        nums[j+1] = nums[j];                           // Swap position (i) with j
        j--;                                           // Decreases position of J
        }
        nums[j+1] = number;                              // Drop temp number into index
    }
    return nums;
  //given an unsorted array, sort the array using insertSort
  // i.e. sort the first element. When it goes the a new element, move the element to the right position. 

  // step1: [9, 2, 5, 6, 4]; (9 is sorted)
  // step2: [2, 9, 5, 6, 4]; ([2,9] is sorted)
  // step3: [2, 5, 9, 6, 4]; ([2,5,9] is sorted)
  // 5 is smaller than 9, so we move 5 to the correct position.
  // step4: [2, 5, 6, 9, 4]; ([2,5,6,9] is sorted) 
  // step5: [2, 4, 5, 6, 9]; ([2,4,5,6,9] is sorted) 
}

console.log(insertionSort(numsRandomOrder))
console.log(insertionSort(numsReversed))

const arr1 = [2,4,8,3]
const arr2 = [2,4,8,1]

// [ 2 , 4 , 3 ,8 ]
// [ 2,  3,  4, 8 ]

function insertionHelper(arr){
    // given an array with everything sorted except for the last element
  // insert the last element to the right position
}