# Touch Dictionary: Super Fast Dictionary for Touch Devices

![logo](https://user-images.githubusercontent.com/36166146/166674433-7321bbee-1716-4954-be37-7195293a86ab.png)

Touch Dictionary is a fork of [Mouse Dictionary](https://mouse-dictionary.netlify.app/en/) ([original repo](https://github.com/wtetsu/mouse-dictionary)).

The main focus of this extension is offering touch-friendly UI for devices like smartphones or tablets.

Features:

- Slidable bottom sheet
- Hold down and move your finger along text to view definitions of the each word

## Screenshots

![touch-dictionary-demo-mini](https://user-images.githubusercontent.com/36166146/166674107-6aa795a0-0a33-4e54-96ce-58f450845148.gif)

## Install

This project is still experimental.
Users are expected to know the basic setup of Mouse Dictionary (see [Getting started of Mouse Dictionary](https://github.com/wtetsu/mouse-dictionary/wiki/Getting-started))

### Android

1. Install kiwi browser
2. Download a zip file from releases page
3. Install the zip file into kiwi browser

## How to develop

### Preparation

Use [Node.js](https://nodejs.org/en/download/) 16+.

```sh
npm install
```

### Build

```sh
npm run chrome-watch	# Build with hot reloading
npm run chrome-package	# Build zip file
```

see [package.json](./package.json) for other commands.

## License

Touch Dictionary is published under the MIT license.

## Third-party data

This project includes some third-party data:

### Dictionary data

- [ejdic-hand](https://github.com/kujirahand/EJDict) (Public Domain)

### Images

- [WPZOOM Developer Icon Set](https://www.iconfinder.com/iconsets/wpzoom-developer-icon-set) ([CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/))
- [Heroicons UI icon set](https://www.iconfinder.com/iconsets/heroicons-ui) ([MIT](https://opensource.org/licenses/MIT))

### Built-in PDF viewer

- [Mouse Dictionary's built-in PDF viewer](https://github.com/wtetsu/pdf.js) is based on [PDF.js](https://github.com/mozilla/pdf.js) ([Apache-2.0](https://github.com/mozilla/pdf.js/blob/master/LICENSE))

### Great JavaScript libraries

- See [package.json](./package.json) and [license.json](https://github.com/wtetsu/mouse-dictionary/actions/workflows/license.yml)
