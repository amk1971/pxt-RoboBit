enum Led {
    //% block="left"
    Left = 32,
    //% block="right"
    Right = 64
}

/**
 * Functions to operate the robo:bit
 */
//% color=#104242 icon="\uf1b9" block="robo:bit"
namespace robobit {
	/**
	 * Sets the color and brightness of LED.
     * @param LED #
     * @param R brightness, eg: 8
     * @param G brightness, eg: 8
     * @param B brightness, eg: 8
	 */
    //% blockId="robobit_setLED" block="LED %LED_number Color is as %R %G %B"
    //% R.min=0 R.max=15
    //% G.min=0 G.max=15
    //% B.min=0 B.max=15
    //% weight=80
    export function setLEDColor(LED: Led, R: number, G: number, B: number): void {
        pins.spiWrite(LED + R)
        pins.spiWrite(G * 16 + B)
    }
	/**
	 * Initialize the SPI 
     */
    //% blockId="robobit_init" block="Init SPI Speed to %Speed"
    //Speed.defl = 62500
    export function Init(Speed: number): void {
        pins.spiFrequency(Speed)
    }
}
