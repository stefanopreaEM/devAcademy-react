import { Link } from "react-router-dom";
import "./Album.css"
import { useState } from "react";

// -> /album route
function Album() {

  const [albumId, setAlbumId] = useState();

  const handleOnChange = (event) => {

    const { value } = event.target;

    setAlbumId(value);
  }

  return (
    <section className="AlbumPage">
      <label htmlFor="AlbumInput" className="LabelInputNumber">
        Please enter what album id you want from 1 to 50
      </label>
      <input 
        type="number"
        id="AlbumInput"
        className="InputNumber"
        onChange={handleOnChange}
      />
      <Link
        to={albumId}
        className="AlbumLink"
        >
          Go to album
      </Link>
    </section>
  );
}

export default Album;