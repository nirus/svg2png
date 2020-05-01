## Browser `Canvas` based SVG to PNG converter

The goal of this project is to convert SVG document + embedded SVG `fontface` to PNG image using browser `canvas`.

### [Let's get to work](#how-to-get-this-working-) or Continue to read the story.

### Libraries used:

- Next.js & Express.js - ***Running server locally and quick React.js UI setup***
- Isomorphic-Fetch - ***Building reverse proxy to bypass CORS for remote SVG Url's***
- Finally, :heartpulse: of this POC - [***img-conv.js***](https://github.com/nirus/SVG-PNG-Convert/blob/master/pages/img-conv.js)

### Problem statement & Why this?

Well i tried [imagemagick](https://imagemagick.org/index.php) and [Apache Batik](https://xmlgraphics.apache.org/batik/)


  Both are best for image manipulation, but they dont do a good job of converting SVG with `@font-face` CSS embedded for custom font to be converted into PNG image that we expect.

### Boring solutions to above:

  1. Install the fonts on the system where conversion happens - ( ***No way on Linux VM's*** )
  2. Convert those fonts to [SVG fonts](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_fonts) using [fontforge](https://fontforge.org/en-US/) and embed it inside the original SVG document to be converted - ( ***Phew! tedious work damn!*** )
  3. Take a screenshot & use Photoshop - ( ***Wait what!*** )

### Simple solution, a Eurekha moment!

Use browser `canvas` to do the heavy lifting using simple Javascript program. ( ***Yay!*** )

### Any down side for this?

Hmmm, You need a working browser to run this project ( ***I can live with that!*** )

#### Tips - *Use a [headless browser](https://github.com/dhamaniasad/HeadlessBrowsers) to run the modified version of this project to achieve your goal on cloud VM's*

## How to get this Working !

- Make sure [nodejs](https://nodejs.org/en/) is installed on your local machine

- Checkout the Repo to your local machine

- Next run `npm i` on the project root from terminal

- Now run `npm start` to start the server from terminal

- Copy the url printed on the terminal window to your browser whick looks similar to `http://localhost:3000`

## How to verify the sample image ?

Sample test image is inside the folder `image-samples`.

#### Follow these teps:

- Now the server is up & running

- It will be available as `http://localhost:3000/sample/pockethash.svg` ( *static resource served from `image-samples` folder* )

- Paste it in **textbox** and click **send**. Your PNG will rendered.

- Click on the **download** button to donwload the image.

### Thanks

Contribution and suggestions are welcomed.

**Nirus**
