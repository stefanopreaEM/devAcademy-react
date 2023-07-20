import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import ImageSlider from './components/image-slider/ImageSlider';
import AppRouter from './router/router';
import { useLocation } from 'react-router-dom';
// import CountBox from './components/count-box/CountBox';
// import { useState } from 'react';

function App() {

  // const [hasCountBox, setHasCountBox] = useState(true);


  // const [showAnotherMessage, setShowAnotherMessage] = useState();

  // const [count, setCount] = useState(0);

  // const handleDeleteParentMessage = (count) => {
  //   setShowAnotherMessage(count);
  // }

  // GET / POST / PUT /DELETE

  // GET ________ //


  const { pathname } = useLocation();

  return (
    <main className="App">
      <div className="Container">
        {/* {pathname !== '/user' && <Header title="React App" />} */}
        <Header title="React DevAcademy"/>
        <AppRouter />
        {/* {hasCountBox && <CountBox showAnotherMessage={showAnotherMessage} onCountChange={handleDeleteParentMessage}/>}
        <button className='Button' onClick={
          () => {
            setHasCountBox(prevHasCountBox => {
              return !prevHasCountBox;
            })
          }
        }>
          MOUNT/UNMOUNT COUNT BOX
        </button>
        <button className="Button"
          onClick={() => {
            setShowAnotherMessage('BAU BAU');
          }}
        >
          SHOW ANOTHER MESSAGE
        </button>
        <div className='MessageFromChild'>
          Message from child: {showAnotherMessage}
        </div> */}
        {/* <button className="Button"
          onClick={() => {
            setCount(prev => {
              return prev + 1;
            });
          }}
        >
          INCREASE COUNT
        </button> */}
        {/* <p>{JSON.stringify(data)}</p> */}
        {/* <ul className='PhotoList'> */}
            {/* {data.map((item) => {
              const { id, thumbnailUrl, title } = item;

              return (
                <li className='PhotoItem' key={id}>
                  <p>{title}</p>
                  <img
                    src={thumbnailUrl}
                    alt='thumnbnail'
                  />

                </li>
              );
            })} */}
        {/* </ul> */}
      </div>
    </main>
  );
}

export default App;
