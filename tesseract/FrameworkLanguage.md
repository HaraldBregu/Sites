# Framework Language
The new user interfaces and applications will have a new programming language for frameworks, a layer above the current programming language and libraries. Here some examples of the programming language for frameworks.

## Control
This file is an example of the control file, that manage the views, controls.

```swift

// Control.file

Device(id: "3434", use: Microphone)

Device("3434", Camera)

View("main", white, padding(20))

Label("name", View("main") , "Harald", red, multiline, top(34), bottom(3), backgroundWhite)

Button("id_2343", "Button name", red, multiline, top(34), bottom(3), "backgroundWhite", func() {
  Label("id_2343", "Harald Bregu")
})

View("detail", white, padding(3), {
  Button("id_2343", "Button name", red, multiline, top(34), bottom(3), "backgroundWhite", func() {
    Label("id_2343", "Harald Bregu")
  })
})

View("4o54453t", red, top(34), bottom(3))

Table("main", "white").rows({ 45 }).view({ View("4o54453t") })

```
