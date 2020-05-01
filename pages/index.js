import { useState } from 'react';
import style from './style.module.css';
import convImg from './img-conv';

function HomePage() {
  /**
   * sample image: http://localhost:3000/sample/pockethash.svg
   * */

  const [finalImg, setFinaleImg] = useState({ link: '', name: '' });
  const cw = 1200; // Canvas width -> Facebook featured imagewidth
  const ch = 630; // Canvas height -> Facebook featured imageheight
  const scale = 0.75; //Scaling the image

  const onSubmit = async (imgUrl) => {
    try {
      const img = await convImg(imgUrl, cw, ch, scale);
      setFinaleImg(img);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <form className={style.formclass} method="get" onSubmit={(e) => {
        e.preventDefault();
        onSubmit(`/svg2img?url=${window.url.value}`)
      }}>
        <input placeholder="Paste your '.svg' image file link" type="text" name="url" id="url" />
        <button type="submit">Send</button>
      </form>
      {finalImg.link ?
        <div className={style.container}>
          <img src={finalImg.link} width="100%" />
          <button><a href={finalImg.link} download={finalImg.name}>Download</a></button>
        </div>
        : null}
    </>
  );
}

export default HomePage