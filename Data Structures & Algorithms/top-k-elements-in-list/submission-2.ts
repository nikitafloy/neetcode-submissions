class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numsCount: Map<number, number> = new Map();

        for (const num of new Set(nums)) {
            numsCount.set(
                num,
                nums.reduce((prev, cur) => (cur == num ? prev + 1 : prev), 0),
            );
        }

        return Array.from(numsCount)
            .sort((a, b) => b[1] - a[1])
            .splice(0, k)
            .map(([num]) => num);
    }
}
