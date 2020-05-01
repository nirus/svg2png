/**
 * 
 * @param {string} imgUrl SVG image remote URL 
 * @param {integer} cw Output image width
 * @param {integer} ch Output image height
 * @param {float} scale Resize the scale of your output image
 */
function convertImage(imgUrl, cw, ch, scale) {

    return new Promise((resolve, reject) => {

        console.log('Image:', imgUrl);
        const canvas = document.createElement("canvas");
        const context = canvas.getContext('2d');
        const base_image = new Image();
        base_image.crossOrigin = "anonymous";
        base_image.src = imgUrl;

        base_image.onload = function (e) {
            canvas.width = cw;
            canvas.height = ch;
            const scaledX = this.naturalWidth * scale;
            const scaledY = this.naturalHeight * scale;
            const centerX = (canvas.width / 2) - scaledX / 2;
            const centerY = (canvas.height / 2) - scaledY / 2;

            /**
            * get color from the corner of the image
            * and fill as the background to the image
            * */

            const canvas2 = document.createElement('canvas');
            canvas2.width = this.naturalWidth;
            canvas2.height = this.naturalHeight;
            canvas2.getContext('2d').drawImage(base_image, 0, 0, this.naturalWidth, this.naturalHeight);
            const pixelData = canvas2.getContext('2d').getImageData(10, 10, 1, 1).data;
            console.log('pixel data:', pixelData);

            /**
             * Use the color data to fill the background of the canvas
             */
            context.fillStyle = `rgba(${pixelData.join(',')})`;
            context.fillRect(0, 0, canvas.width, canvas.height);

            /**
             * Overlay scaled image on top of the painted canvas
             */
            context.drawImage(base_image, 0, 0, this.naturalWidth, this.naturalHeight, centerX, centerY, scaledX, scaledY);

            /**
             * Sometime You get side borders as thin white line.
             * Below code paints that to backgroud color
             * Dirty work ;)
             * Feel free to comment if you dont need.
             */

            context.fillStyle = `rgba(${pixelData.join(',')})`;
            context.fillRect(centerX - 5, 0, 10, canvas.height);
            context.fillRect(centerX + scaledX - 5, 0, 10, canvas.height);

            // setFinaleImg({link: canvas.toDataURL('image/png'), name: imgUrl.split('/').pop().replace('.svg', '.png')});
            resolve({ link: canvas.toDataURL('image/png'), name: imgUrl.split('/').pop().replace('.svg', '.png') });
        }

        base_image.onerror = function (e) {
            reject(e);
        }
    })
};

module.exports = convertImage;