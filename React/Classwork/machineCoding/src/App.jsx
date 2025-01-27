import './App.css'
import ImageCarousel from './Components/ImageCarousel'
import Modal from './Components/Modal'
import useVisibility from './usevisibility'

function App() {
  const {isVisible, hide, show, toggle} = useVisibility(true);

  return (
    <>
    {/* <ImageCarousel/> */}
    
    <h1>Cutom Hook Example</h1>
    <button onClick={show}>Show Modal</button>
    <button onClick={toggle}>Toggle Modal</button>
    <Modal hide={hide} isVisible={isVisible}></Modal>
    </>
  )
}

export default App
