/**
 * debugext blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace debugext {
    /**
     * call showString
     * @param s the text, eg: "ByeBye"
     */
    //% block
    export function print( s: string): void {
        basic.showString(s)
    }
}
