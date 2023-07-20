import React, { useEffect, useState } from "react"
import ImageSlider from "../components/image-slider/ImageSlider"

function Home() {


  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/photos')
    // .then(res => {
    //   return res.json()
    // })
    // .then(json => {
    //   console.log(json)
    // });

    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=10');
        const data = await res.json();

        if(!Array.isArray(data)) {
          throw new Error('The data received from BE is not an array');
        }

        setPhotos(data)
      } catch (err) {
        setPhotos([]);
        console.log(err);
      }
    };

    fetchData();
  }, [])


  return (
    <ImageSlider photos={photos}/>
  )
}

export default Home;