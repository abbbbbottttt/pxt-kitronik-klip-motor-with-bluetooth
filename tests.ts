let prettyLights: kitronik_klip_motor.ZIPString = null
input.onButtonPressed(Button.B, function () {
    prettyLights.showColor(0xff0080)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 75)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 75)
    basic.pause(2000)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor2)
    basic.pause(500)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, 50)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Reverse, 50)
    basic.pause(2000)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor2)
})
input.onButtonPressed(Button.A, function () {
    prettyLights.showRainbow()
    for (let i = 0; i < 25; i++) {
        prettyLights.rotate(1)
        prettyLights.show()
    }
    prettyLights.clear()
})
prettyLights = kitronik_klip_motor.createZIPString(5)
prettyLights.setBrightness(kitronik_klip_motor.ZipLedBrightness.Normal)
prettyLights.setZipLedColor(0, 0x00ff55)
