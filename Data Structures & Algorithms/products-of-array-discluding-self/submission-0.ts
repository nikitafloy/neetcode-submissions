class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const multiply = [];

        for (let i = 0; i < nums.length; i++) {
            multiply.push(nums.reduce((prev, cur, j) => {
                if (i === j) {
                    return prev;
                }
                return prev * cur;
            }, 1));
        }

        return multiply;
    }
}
