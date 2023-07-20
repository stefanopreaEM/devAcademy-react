import './CountBox.css';
import React, { useEffect, useState } from "react";

function CountBox({ 
  showAnotherMessage,
  onCountChange,
 }) {
  const [count, setCount] = useState(0); // state is reactive

  const [showMessage, setShowMessage] = useState();

  // https://react.dev/reference/react/useEffect#useeffect

  useEffect(
    // setup function
    () => {
      console.log('COMPONENT MOUNT');

      // fetch('https://jsonplaceholder.typicode.com/photos')
      //   .then(res => res.json())
      //   .then(json => console.log(json))


      if (count === 10) {
        setShowMessage(`Count is ${count}`);
        onCountChange(count);
      } else {
        setShowMessage('');
      }
            

      return () => {
        // cleanup function
        // UNMOUNT
        console.log('UNMOUNT');
      }
    }, 
    // dependency array
    [count, onCountChange]); // it should be a reactive value

  // empty dependency array -> on component mount
  // no depdendecy array -> runs on every rerender
  // depenncy array with elements -> runs on every element update

  useEffect(() => {
    console.log('COMPONENT RERENDER');
  });

  // state -> + 1 -> we trigger a rerender (per se state update)
  console.log(count);

  // MOUNT -> component is added on the DOM
  // RERENDER -> component is updated
  // UNMOUNT -> component is removed from the DOM


  // React fragment behaves like a virtual parent for jsx elements which are on the same level
  return ( 
    <div className='CountBoxWrapper'>
      <h1>COUNT BOX</h1>
      <button className="Button" onClick={() => {
        setCount(prevState => {
          return prevState + 1;
        });
      }}>
        Click me
      </button>
      <div className='CountBox'>{count}</div>
      <p className="Message">{showMessage}</p>
      {showAnotherMessage && 
      <p className="Message">Message from parent {showAnotherMessage}</p>}
    </div>
  );
}


export default CountBox;