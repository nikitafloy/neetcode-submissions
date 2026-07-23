class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const origS = s
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "")
            .split("");

        return origS.join("") === origS.reverse().join("");
    }
}
