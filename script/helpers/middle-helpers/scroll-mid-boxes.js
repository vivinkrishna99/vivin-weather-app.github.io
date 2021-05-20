/** this function used to scroll the middle section boxes
 * @param {strings} buttonRight- document object for right button.
 * @param {strings} buttonLeft- document object for left button.
 * @param {strings} card_box- document object for card container button.
 */

export function toScrollBoxes(buttonRight,buttonLeft,card_box){
    buttonRight.addEventListener('click', () => {
        card_box.scrollLeft += 320; //300px which is the width of cards
    });
    buttonLeft.addEventListener('click', () => {
        card_box.scrollLeft -= 320; //300px which is the width of cards
    });
}