/**
 * Blocks for driving the Kitronik Klip Motor Board
 */
//% weight=100 color=#00A654 icon="\uf0c6" block="Klip Motor"
//% groups='["Motors & Servos"]'
namespace kitronik_klip_motor_with_bluetooth {
    /*Note that Forward and reverse are slightly arbitrary, as it depends on how the motor is wired...*/
    /**
     * Different directions for motors to turn
     */
    export enum MotorDirection {
        //% block="forward"
        Forward,
        //% block="reverse"
        Reverse
    }

    /**
     * Motor outputs available on board
     */
    export enum Motors {
        //% block="motor 1"
        Motor1,
        //% block="motor 2"
        Motor2,
        //% block="both"
        Both
    }

    /**
     * Servo pin connection options
     */
    export enum Servos {
        //% block="Pin 0"
        pin0 = 0,
        //% block="Pin 1"
        pin1 = 1,
        //% block="Pin 2"
        pin2 = 2,
        //% block="ZIP Pin"
        zipPin = 8
    }

	/**
     * Turns on motor in the direction specified at the requested speed 
	 * @param motor which motor to turn on
	 * @param dir   which direction to go
	 * @param speed how fast to spin the motor
     */
    //% group="Motors & Servos"
    //% blockId=kitronik_klip_motor_motor_on
    //% block="turn %motor|%dir|at speed %speed"
    //% weight=100 blockGap=8
    //% speed.min=0 speed.max=100
    export function motorOn(motor: Motors, dir: MotorDirection, speed: number): void {
        /*first convert 0-100 to 0-1024 (approx) We wont worry about the lsat 24 to make life simpler*/
        let OutputVal = Math.clamp(0, 100, speed) * 10;

        switch (motor) {
            case Motors.Motor1: /*Motor 1 uses Pins 15 and 16*/
                switch (dir) {
                    case MotorDirection.Forward:
                        pins.analogWritePin(AnalogPin.P15, OutputVal);
                        pins.digitalWritePin(DigitalPin.P16, 0); /*Write the low side digitally, to allow the 3rd PWM to be used if required elsewhere*/
                        break
                    case MotorDirection.Reverse:
                        pins.analogWritePin(AnalogPin.P16, OutputVal);
                        pins.digitalWritePin(DigitalPin.P15, 0);
                        break
                }

                break;
            case Motors.Motor2: /*Motor 2 uses Pins 13 and 14*/
                switch (dir) {
                    case MotorDirection.Forward:
                        pins.analogWritePin(AnalogPin.P13, OutputVal);
                        pins.digitalWritePin(DigitalPin.P14, 0); /*Write the low side digitally, to allow the 3rd PWM to be used if required elsewhere*/
                        break
                    case MotorDirection.Reverse:
                        pins.analogWritePin(AnalogPin.P14, OutputVal);
                        pins.digitalWritePin(DigitalPin.P13, 0);
                        break
                }

                break;
        }
    }

	/**
     * Turns off the specified motor
     * @param motor which motor to turn off
     */
    //% group="Motors & Servos"
    //% blockId=kitronik_klip_motor_motor_off
    //%block="turn off %motor"
    //% weight=99 blockGap=8
    export function motorOff(motor: Motors): void {
        switch (motor) {
            case Motors.Motor1:
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P16, 0);
                break
            case Motors.Motor2:
                pins.digitalWritePin(DigitalPin.P13, 0);
                pins.digitalWritePin(DigitalPin.P14, 0);
                break
        }
    }

    /**
     * Sets servo connected to Pin 0 to specific angle (for 180 deg servos) or rotation speed (360 deg servos)
     * @param angle angle/speed for servo to turn to/at eg: 90
     */
    //% group="Motors & Servos"
    //% blockId=kitronik_klip_motor_servo_on
    //% block="turn servo on %servoPin|to %angle"
    //% angle.min=0 angle.max=180
    //% weight=98 blockGap=8
    export function servoTurn(servo: Servos, angle: number): void {
        let currentServo = 0
        switch (servo) {
            case 0:
                currentServo = AnalogPin.P0
                break
            case 1:
                currentServo = AnalogPin.P1
                break
            case 2:
                currentServo = AnalogPin.P2
                break
            case 8:
                currentServo = AnalogPin.P8
                break
        }
        pins.servoWritePin(currentServo, angle)
    }

    /**
     * Turns off Servo output
     */
    //% group="Motors & Servos"
    //% blockId=kitronik_klip_motor_servo_off
    //% block="turn off servo on %servo"
    //% weight=97 blockGap=8
    export function allOff(servo: Servos): void {
        switch (servo) {
            case 0:
                pins.digitalWritePin(DigitalPin.P0, 0)
                break
            case 1:
                pins.digitalWritePin(DigitalPin.P1, 0)
                break
            case 2:
                pins.digitalWritePin(DigitalPin.P2, 0)
                break
            case 8:
                pins.digitalWritePin(DigitalPin.P8, 0)
                break
        }
    }
}