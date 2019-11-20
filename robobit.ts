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

    export function setLEDColor(LED: Led, Red: number): void {

        pins.spiWrite(LED + Red)
        pins.spiWrite(10)
    }

}
