class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i=0;i<nums.length;i++){
            for(let j=0;j<nums.length;j++)
            {
                if(i!==j&&nums[i]+nums[j]===target)
                {
                    return [i,j];
                }
            }
        }
    }
}
// https://leetcode.com/problems/two-sum/
// https://neetcode.io/problems/two-integer-sum