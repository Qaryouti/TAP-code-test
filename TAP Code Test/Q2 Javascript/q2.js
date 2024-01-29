var twoSum = function(nums, target) {
    for(let i = 0; i <= nums.length; i++){
        for(let j = i+1; j <= nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};
// Test case #1 
let  nums = [2,7,11,15];
let  target = 9;
console.log(twoSum(nums ,target));//[0,1]

// test case #2
nums = [3,2,4,7,8,5];
target = 10;
console.log(twoSum(nums ,target)); // [0,3]
