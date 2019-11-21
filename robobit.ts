enum Led {
    //% block="left"
    Left = 32,
    //% block="right"
    Right = 64
}

enum Motor {
    //% block="left"
    Leftf = 16,
    //% block="right"
    Rightf = 17,
 
}
enum Dir {
    //% block="forward"
    Forward = 0,
    //% block="reverse"
    Reverse = 128
}
/**
 * Functions to operate the robo:bit
 */
//% color=#104242 icon="\uf1b9" block="robo:bit"
namespace robobit {
	/**
	 * Sets the Speed of Motor.
     * @param MOTOR #
     * @param Dir Disretion of Motor
     * @param Speed Speed of Motor, eg: 50
	 */
    //% blockId="robobit_setMotorSpeed" block="MOTOR %Motor Direction %Dir Speed %Speed"
    //% Speed.min=0 Speed.max=100
    //% weight=100
    export function setMotorSpeed(MOTOR: Motor, Direction: Dir, Speed: number): void {
        if (Speed > 100) Speed = 100

        pins.spiWrite(MOTOR)
        pins.spiWrite(Speed + Direction)
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
        if (R > 16) R = 16
        if (G > 16) G = 16
        if (B > 16) B = 16

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
