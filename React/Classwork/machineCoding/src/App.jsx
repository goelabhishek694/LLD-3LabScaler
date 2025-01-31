import { useEffect, useState } from "react";
import "./App.css";
import ImageCarousel from "./Components/ImageCarousel";
import Modal from "./Components/Modal";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import useVisibility from "./usevisibility";
import TypeAhead from "./Components/TypeAhead/TypeAhead";

function App() {
  // const { isVisible, hide, show, toggle } = useVisibility(true);
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress((prev) => {
  //       if (prev == 100) {
  //         clearInterval(interval);
  //         alert("Data Loaded");
  //         return 100;
  //       }
  //       return prev + 1;
  //     });
  //   }, 100);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <>
      {/* <ImageCarousel/> */}

      {/* <h1>Cutom Hook Example</h1>
    <button onClick={show}>Show Modal</button>
    <button onClick={toggle}>Toggle Modal</button>
    <Modal hide={hide} isVisible={isVisible}></Modal> */}

      {/* <ProgressBar width={progress} text={progress} /> */}

      <TypeAhead/>
    </>
  );
}

export default App;
