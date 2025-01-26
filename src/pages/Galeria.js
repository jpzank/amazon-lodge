import React, { useState } from 'react';
import { folderImageMapping, getFolderImage } from '../config/cloudinaryConfig';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to get all images from a category
  const getCategoryImages = (category) => {
    return Object.entries(folderImageMapping[category] || {}).map(([key, value]) => ({
      id: value,
      name: key,
      category: category,
      url: getFolderImage(category, key)
    }));
  };

  // Get all categories and their images
  const categories = Object.keys(folderImageMapping);

  // Handle image click
  const handleImageClick = (image, category, index) => {
    setSelectedImage(image);
    setSelectedCategory(category);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedCategory(null);
    document.body.style.overflow = 'unset';
  };

  // Handle navigation
  const handlePrevImage = () => {
    const images = getCategoryImages(selectedCategory);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  const handleNextImage = () => {
    const images = getCategoryImages(selectedCategory);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') handleCloseModal();
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, selectedCategory, currentIndex]);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${getFolderImage('home', 'vista-aerea-lodge')})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Galeria de Fotos</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Explore nossa coleção de imagens do Jardim da Amazônia
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-16">
        {categories.map((category) => {
          const images = getCategoryImages(category);
          if (images.length === 0) return null;

          return (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 capitalize">
                {category.replace(/-/g, ' ')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((image, index) => (
                  <div
                    key={image.id}
                    className="relative group overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer"
                    onClick={() => handleImageClick(image, category, index)}
                  >
                    <img
                      src={image.url}
                      alt={image.name.replace(/-/g, ' ')}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm capitalize">
                        {image.name.replace(/-/g, ' ')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors duration-300"
          >
            <IoClose size={32} />
          </button>

          <button
            onClick={handlePrevImage}
            className="absolute left-4 text-white hover:text-accent transition-colors duration-300"
          >
            <IoIosArrowBack size={32} />
          </button>

          <button
            onClick={handleNextImage}
            className="absolute right-4 text-white hover:text-accent transition-colors duration-300"
          >
            <IoIosArrowForward size={32} />
          </button>

          <div className="w-full max-w-6xl px-16">
            <img
              src={selectedImage.url}
              alt={selectedImage.name.replace(/-/g, ' ')}
              className="w-full h-[85vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-lg capitalize">
              {selectedImage.name.replace(/-/g, ' ')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria; 