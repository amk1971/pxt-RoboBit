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
     * @param brightness percent of maximum brightness, eg: 50
	 */
    //% blockId="robobit_setLED" block="light %LED_number %path|at %brightness|%"
    //% Red.min=0 Red.max=16
    //% Green.min=0 Green.max=16
    //% Blue.min=0 Blue.max=16
    //% weight=80
    export function setLEDColor(LED: Led, Red: number, Green: number, Blue: number): void {
    
        pins.spiWrite(LED + Red)
        pins.spiWrite(Green*16+Blue)
    }

}
