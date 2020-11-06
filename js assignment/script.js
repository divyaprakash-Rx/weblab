var nums=[587,23,132,4,45];

function insertionSort(nums){
    console.log(`Before sorting, elements in array is:- \n ${nums}`);
   for (let i = 1; i < nums.length; i++) {
     let j = i - 1;
     let temp = nums[i];
     while (j >= 0 && nums[j] > temp) {
       nums[j + 1] = nums[j];
       j--;
     }
     nums[j + 1] = temp;
   }
   return nums;
}

var sortedNums=insertionSort(nums);
console.log(`After applying insertion sort, array is:- \n`)
console.log(sortedNums);
