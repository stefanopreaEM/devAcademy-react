import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import './ImageSlider.css';
// import { useEffect, useLayoutEffect } from "react";
// import { useEffect, useRef } from "react";


function ImageSlider({
  photos
}) {


  // ref

  // const divRef = useRef(null);

  // useEffect(() => {
  //   const divElement = divRef.current;

  //   if (divElement) {
  //     console.log(divElement);
  //     console.log(divElement.getBoundingClientRect());
  //   }


  // },[]);

  const [sliderRef, slider] = useKeenSlider({
    drag: true,
    loop: true,
    // optionsChanged: (slider) => {
    //   slider.destroy();
    //   slider.update({
    //     drag: true,
    //     loop: true,
    //   })
    // }
  });

  const handleNext = () => {
    slider.current.next();
  };
  const handlePrev = () => {
    slider.current.prev();
  };

  // useLayoutEffect(() => { // -> a layer arround useEffect that executes before every paint, commonly used with UI updates
  //   slider.current.destroy();

  //   slider.current.update({
  //     drag: true,
  //     loop: true,
  //   })

  // }, [photos.length, slider]);

  return (
    <div className="KeenSliderWrapper">
      {photos.length && (
        <div ref={sliderRef} className="keen-slider">
          {
            photos.map((photo) => {
              const { id, thumbnailUrl, title } = photo;

              return (
                <div className="keen-slider__slide PhotoSlide" key={id}>
                  <img 
                    src={thumbnailUrl}
                    alt={title}
                  />
                </div>
              )
            })
          }
        </div>
      )}
      <button
        onClick={handlePrev}
        type="button"
        className="SliderButton Prev"
      >
        {"<"}
      </button>
      <button
        onClick={handleNext}
        type="button"
        className="SliderButton Next"
      >
        {">"}
      </button>
    </div>
  );
}

export default ImageSlider;