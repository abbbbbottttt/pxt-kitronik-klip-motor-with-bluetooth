# pxt-kitronik-klip-motor

Custom blocks for www.kitronik.co.uk/5655 :CREATE Klip Motor for BBC micro:bit.
The blocks in this extension are in two main groups, Motors and ZIP LEDs.

## Motors

There are two blocks in the Motors section; one to start the motors turning, and one to stop them.

This block starts a specific motor (either 1 or 2) spinning in a set direction (forward or reverse) at a set speed (0 to 100%):
```blocks
kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 80)
```

The second block stops a specific motor spinning (either 1 or 2):
```blocks
kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
```

## ZIP LEDs

The rest of the blocks deal with the control of ZIP LEDs.

The first block sets up the ZIP LEDs attached to the Klip Motor board as a variable, enabling them to be controlled in the program. The number of ZIP LEDs can be changed to match the number connected, but BBC micro:bit pin connection is automatically assigned:
```blocks
prettyLights = kitronik_klip_motor.createZIPString(5)
```

The next block sets all the ZIP LEDs to be the colour selected in the colour picker and then makes those changes visible:
```blocks
prettyLights.showColor(0x00ff00)
```

The next block makes changes visible on the ZIP LEDs, such as setting individual ZIP LED colours or rotating the LEDs:
```blocks
prettyLights.show()
```

The next block turns off all the ZIP LEDs attached to the Klip Motor board:
```blocks
prettyLights.clear()
```

The next block sets a rainbow pattern to be displayed across all the ZIP LEDs attached to the Klip Motor board. It can be used in conjunction with the rotate and show changes blocks to make the rainbow pattern move across all the ZIP LEDs:
```blocks
prettyLights.showRainbow()
```

The next block moves all the colour settings for the ZIP LEDs along a certain number of ZIP LEDs in the string (the default is 1). The rotate block views the string of ZIP LEDs as a continuous loop, so the settings of the last ZIP LED will move to the first ZIP LED and so on:
```blocks
prettyLights.rotate(1)
```

The next block sets the brightness of the ZIP LEDs to one of the four brightness options. These approximate to the following percentages: Dim = 10%, Normal = 50%, Bright = 80%, Super Bright = 100%. (Note: The brightness will only change for events occurring after this block is used):
```blocks
prettyLights.setBrightness(kitronik_klip_motor.ZipLedBrightness.Dim)
```

The final block sets a particular ZIP LED to be the colour selected in the colour picker. However, this will not be made visible until the show changes block is called. (Note: The first ZIP LED in the string connected to the Klip Motor board will be ‘ZIP LED 0’, and the numbers count up from there):
```blocks
prettyLights.setZipLedColor(0, 0x0000ff)
```

## License

MIT

## Supported targets

* for PXT/microbit

