import React, { useState } from "react";

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
      {nbMax > 1 ? (
        <button
          className="slideshow-button slideshow-button-left"
          onClick={changeSlide}
        >
          <img src="/img/slideshow-arrow.png" alt="" />
        </button>
      ) : (
        <React.Fragment></React.Fragment>
      )}

      <img src={images[counter]} alt="" />
      {nbMax > 1 ? (
        <React.Fragment>
          <button
            className="slideshow-button slideshow-button-right"
            onClick={changeSlide}
          >
            <img src="/img/slideshow-arrow.png" alt="" />
          </button>
          <p className="slideshow-counter">
            {counter + 1}/{nbMax}
          </p>
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </div>
  );
}

export default SlideShow;
