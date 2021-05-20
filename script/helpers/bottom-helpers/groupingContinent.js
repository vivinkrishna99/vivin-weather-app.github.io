/** this function will map the continents with respective city details.
 * @param {Array} list - has the information of cities.
 * @param {function} keyGetter - has name of the continent.
 */


export function groupByContinents(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}