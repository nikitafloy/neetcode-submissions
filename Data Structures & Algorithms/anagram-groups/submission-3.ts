class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const results: Map<string, string[]> = new Map();

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            const sortedStr = this.getSortedString(str);

            results.set(sortedStr, [...(results.get(sortedStr) ?? []), str]);
        }

        return Array.from(results.entries()).map(([_, matches]) => matches);
    }

    getSortedString(str: string): string {
        return str.split("").sort().join("");
    }
}
