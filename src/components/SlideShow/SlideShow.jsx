import { useState } from "react";

function SlideShow({ images }) {
  const [counter, setCounter] = useState(0);
  const nbMax = images.length;

  function changeSlide(e) {
    if (e.target.classList.contains("slideshow-button-left")) {
      setCounter(counter === 0 ? nbMax - 1 : counter - 1);
    } else {
      setCounter(counter === nbMax - 1 ? 0 : counter + 1);
    }
  }

  return (
    <div className="slideshow">
      <button
        className="slideshow-button slideshow-button-left"
        onClick={changeSlide}
      >
        <img src="/img/slideshow-arrow.png" alt="" />
      </button>
      <img src={images[counter]} alt="" />
      <button
        className="slideshow-button slideshow-button-right"
        onClick={changeSlide}
      >
        <img src="/img/slideshow-arrow.png" alt="" />
      </button>
      <p className="slideshow-counter">
        {counter + 1}/{nbMax}
      </p>
    </div>
  );
}

export default SlideShow;
