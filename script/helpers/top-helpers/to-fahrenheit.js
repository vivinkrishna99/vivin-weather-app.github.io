/** convert from celcius to fahrenheit.
 * @param {integer} temp - temperature in celsius.
 */

export function toFahrenheit(temp){
    let f = (temp * 9 / 5 + 32).toFixed(0)
    return f;
}