import React from "react";

const images = [
  "./images/gallery/gallery-1.jpg",
  "./images/gallery/gallery-2.jpg",
  "./images/gallery/gallery-3.jpg",
  "./images/gallery/gallery-4.jpg",
  "./images/gallery/gallery-5.jpg",
  "./images/gallery/gallery-6.jpg",
  "./images/gallery/gallery-7.jpg",
  "./images/gallery/gallery-8.jpg",
];

const Gallery = () => {
  return (
    <div className="bg-white p-20 gap-8 flex flex-col items-center">
      <h1 className="font-bold text-3xl text-darkBrand">Gallery</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo assumenda
        perspiciatis soluta laudantium eum, delectus asperiores dolores nostrum
        maiores est impedit numquam vitae labore explicabo, adipisci laboriosam
        sit accusantium molestias enim voluptatem provident consectetur! Error
        ullam aliquam non assumenda fugit!
      </p>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="gallery"
            className="w-full h-[200px] object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
