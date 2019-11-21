enum Led {
    //% block="left"
    Left = 32,
    //% block="right"
    Right = 64
}

enum Motor {
    //% block="left"
    Left = 17,
    //% block="right"
    Right = 18
}
/**
 * Functions to operate the robo:bit
 */
//% color=#104242 icon="\uf1b9" block="robo:bit"
namespace robobit {
	/**
	 * Sets the Speed of LED.
     * @param Motor #
     * @param Speed Speed of Motor, eg: 50
	 */
    //% blockId="robobit_setMotorSpeed" block="MOTOR %Motor Speed %S"
    //% MOTOR.min=0 MOTOR.max=100
    //% weight=100
    export function setMotorSpeed(MOTOR: Motor, Speed: number): void {
        pins.spiWrite(MOTOR)
        pins.spiWrite(Speed)
    }
    /**
	 * Sets the color and brightness of LED.
     * @param LED #
     * @param R brightness, eg: 8
     * @param G brightness, eg: 8
     * @param B brightness, eg: 8
	 */
    //% blockId="robobit_setLED" block="LED %LED Red %R Green %G Blue %B"
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
     * @param Speed SPI Speed, eg: 62500
     */
    //% blockId="robobit_init" block="Init SPI Speed to %Speed"
    //Speed.defl = 62500
    export function Init(Speed: number): void {
        pins.spiFrequency(Speed)
    }
}
