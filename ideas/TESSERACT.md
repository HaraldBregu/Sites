# Tesseract

This app is created to show demos of Machine Learning Models. The basic idea is to load remote Models and predict something based on what it does. Tess is composed by packages similar to apps in a device.

## Package
The package is a JSON file that contain all information of the author, final app, model, functions, actions.

- id
- name (the name of the package/app that solve a problem)
- description (short description of the package)
- version
- license
- author
- function

```JSON
{
  "id" : "KJ32794KLJNL34KJLK4",
  "name" : "AGEFinder",
  "description" : "I can find your exact age.",
  "version" : "0.9.0",
  "license" : "MIT",
  "author" : "John Doe",
  "function" : { }
}
```

## Function
The function is an important sub-level of the package and is responsible on showing user interface, user experience, actions to make.
You can ask the operative system to use plugins as Camera, Microphone, Geolocation etc. The models that you are going to use in the app. The inputs that user has to give to make the app work and the output that user expect to get.

- models (list of all models that you will use)
- plugins (the plugins that you will use from the OS)
- inputs []
- outputs []
- actions []

```JSON
{
  "models" : [],
  "plugins" : [ "Camera", "Microphone", "Geolocation", "Accelerometer" ],
  "inputs" : [],
  "outputs" : [],
  "actions" : []
}
```

## Model
The model is the most important file for the package, is the file pre-trained for Machine Learning. You can get his information from the package file but the model is on remote repository or downloaded in local. The model basically are shared between developers if public, and purchasable if are trained with private or custom data.

- id
- name
- description
- version
- license
- author
- privacy
- price
- file
- input
- output

```JSON
{
  "id" : "KJ32794KLJNL34KJLK4",
  "name" : "AgeNet",
  "description" : "Model trained to predict age based on a picture of a face.",
  "version" : "0.9.1",
  "license" : "MIT",
  "author" : "John Doe",
  "privacy" : {
    "public_read" : true,
    "public_write" : false
  },
  "price" : {
    "amount" : "234",
    "currency" : "EUR"
  },
  "file" : {
    "url" : "https://"
  },
  "input" : {
    "type" : "image"
  },
  "output" : {
    "type" : "text"
  }
}
```
