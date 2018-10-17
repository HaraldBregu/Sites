# Tesseract

This app is created to show demos of Machine Learning Models. The basic idea is to load remote Models and predict something based on what it does. Tess is composed by packages similar to apps in a device.

## Package
The package is a JSON file that contain all information of the author, final app, model, functions, actions.

- name
- description
- version
- license
- author
- function (link to function)

```JSON
{
  "name" : "AGEFinder",
  "description" : "I can find your exact age."
}
```


## Function
The function is an important sub-level of the package and is responsible on showing user interface, user experience, actions to make.
You can ask the operative system to use plugins as Camera, Microphone, Geolocation etc. The models that you are going to use in the app. The inputs that user has to give to make the app work and the output that user expect to get.

- models [Avnet(in out), AgeNet(in out), MNIST(in out)]
- plugins [camera, microphone, geolocation, accelerometer]
- inputs []
- outputs []
- actions []

## Model
The model is the most important file for the package, is the file pre-trained for Machine Learning. You can get his information from the package file but the model is on remote repository or downloaded in local. The model basically are shared between developers if public, and purchasable if are trained with private or custom data.

- name
- description
- version (incremental)
- license
- author
- privacy (private, public)
- input (type)
- output (type, data)
- price (free)
