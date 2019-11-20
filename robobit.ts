enum Led {
    //% block="left"
    Left = 32,
    //% block="right"
    Right = 64
}

/**
 * Functions to operate the roboo:bit
 */
//% color=#104242 icon="\uf1b9" block="robo:bit"
namespace robobit {
	/**
	 * Sets the color and brightness of LED.
     * @param LED #
     * @param cRed Value, eg: 8
     * @param cGreen Value, eg: 8
     * @param cBlue Value, eg: 8
	 */
    export function setLEDColor(LED: Led, cRed: number, cGreen: number, cBlue: number): void {

        pins.spiWrite(LED + cRed)
        pins.spiWrite(cGreen * 16 + cBlue)
    }

}
