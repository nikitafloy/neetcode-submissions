class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const sMap = this.createCharactersMap(s);
        const tMap = this.createCharactersMap(t);

        for (const c of s) {
            if (sMap.get(c) !== tMap.get(c)) {
                return false;
            }
        }

        return true;
    }

    createCharactersMap(s: string): Map<string, number> {
        const map = new Map();

        for (const c of s) {
            map.set(c, (map.get(c) ?? 0) + 1);
        }

        return map;
    }
}
