import { useNavigate, useParams } from "react-router-dom";
import ImageSlider from "../../components/image-slider/ImageSlider";
import "./Album.css";
import { useEffect, useState } from "react";

function AlbumItemPage() {


  const { id } = useParams();


  const [photos, setPhotos] = useState([]);
  const [pending, setPending] = useState(true);
 
  useEffect(() => {
    if(photos.length > 0) {
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
        const data = await res.json();

        if(!Array.isArray(data)) {
          throw new Error('The data received from BE is not an array');
        }

        setPhotos(data)
      } catch (err) {
        setPhotos([]);
        console.log(err);
      } finally {
        setPending(false);
      }
    };

    fetchData();

  }, [id, pending, photos.length]);


  useEffect(() => {
    // UNMOUNT
    return () => {
      setPhotos([]); // BIG DATA LISTS >
    }
  }, []) // EMPTY DEPENDENCY ARRAY


  const navigate = useNavigate();

  useEffect(() => {
    if(!pending && photos.length === 0) {
      navigate('404');
    }
  }, [navigate, pending, photos.length])

  return (
    <section className="AlbumItemWrapper">
      <h1>This is album no: {id}</h1>

      {pending && <p>Is loading...</p>}
      {!pending && photos.length > 0 && <ImageSlider photos={photos}/>}
      {/* {!pending && photos.length === 0 && <p>This album is empty or it doesn't exist</p>} */}
    </section>
  );
}

export default AlbumItemPage;