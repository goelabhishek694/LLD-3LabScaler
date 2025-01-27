import React, { useEffect, useState } from "react";

function ImageCarousel() {
  const [currentItem, setCurrentItem] = useState(0);
  const items = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 1",
      description: "Description of item 1",
    },
    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 2",
      description: "Description of item 2",
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 3",
      description: "Description of item 3",
    },
  ];

  useEffect(() => {
    const timerid = setInterval(() => {
      nextImage();
    }, 2500);
    return () => clearInterval(timerid);
  }, [currentItem]);

  const nextImage = () => {
    if (currentItem == items.length - 1) setCurrentItem(0);
    else setCurrentItem((prevItem) => prevItem + 1);
  };

  const prevImage = () => {
    if (currentItem == 0) setCurrentItem(items.length - 1);
    else setCurrentItem((prevItem) => prevItem - 1);
  };

  return (
    <div>
      <button onClick={prevImage}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <div className="carousel-item">
        <img
          src={items[currentItem]["imageUrl"]}
          alt={items[currentItem]["description"]}
          height="200"
          width="200"
        />
        <h2>{items[currentItem]["title"]}</h2>
        <p>{items[currentItem]["description"]}</p>
      </div>
      <button onClick={nextImage}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default ImageCarousel;
