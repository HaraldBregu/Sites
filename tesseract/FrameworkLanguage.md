# Framework Language
The new user interfaces and applications will have a new programming language for frameworks, a layer above the current programming language and libraries. Here some examples of the programming language for frameworks.

## Control
This file is an example of the control file, that manage the views, controls.

```swift

// Control.file

View("id_298665", white, padding(20))

Label("id_2343", "Harald", red, multiline, top(34), bottom(3), backgroundWhite)

Button("id_2343", "Button name", red, multiline, top(34), bottom(3), "backgroundWhite", func() {

  Label("id_2343", "Harald Bregu")

})

```
