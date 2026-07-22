class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.reduce((prev, cur) => prev + String(cur).length + "#" + cur, "");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result = [];

        while (str !== "") {
            const delimiterIndex = str.indexOf("#");
            const s = str.substring(0, delimiterIndex);

            if (!isNaN(+s)) {
                result.push(str.substring(delimiterIndex + 1, delimiterIndex + +s + 1));
            }

            str = str.substring(delimiterIndex + +s + 1);
        };

        return result;
    }
}
