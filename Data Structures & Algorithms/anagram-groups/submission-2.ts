class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // // Хеш-мап для сравнения (accbb === accbb), сортируем один раз
        // const sortedStrsMap: Map<string, string> = new Map();

        // for (const str of strs) {
        //     sortedStrsMap.set(str, str.split("").sort().join(""));
        // }

        const results: Map<string, string[]> = new Map();
        // const results: string[][] = [];

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            // const sortedStrs = sortedStrsMap.get(str);
            const sortedStr = this.getSortedString(str);

            results.set(sortedStr, [...(results.get(sortedStr) ?? []), str]);

            // const iterationResults = [];

            // for (let j = i + 1; j < strs.length;) {
            //     if (sortedStrsMap.get(strs[i]) == sortedStrsMap.get(strs[j])) {
            //         iterationResults.push(strs[j]);
            //         sortedStrsMap.delete(strs[j]);
            //     }
            // }

            // results.push(iterationResults);
        }

        // for (let i = 0; i < strs.length; i++) {
        //     for (let j = i + 1; j < strs.length; j++) {
        //         if (strs[i].split("").sort().join("") == strs[j].split("").sort().join("")) {
        //             results.set(strs[i], [...(results.get(strs[i]) ?? []), strs[j]]);

        //             delete strs[j];
        //         }
        //     }
        // }

        return Array.from(results.entries()).map(([_, matches]) => matches);
        // return results;
    }

    getSortedString(str: string): string {
        return str.split("").sort().join("");
    }
}
