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
     * @param Red Value, eg: 8
     * @param Green Value, eg: 8
     * @param Blue Value, eg: 8
	 */
    export function setLEDColor(LED: Led, Red: number, Green: number, Blue: number): void {

        pins.spiWrite(LED + Red)
        pins.spiWrite(Green * 16 + Blue)
    }

}
