import React, { useState } from 'react';
import Modal from '../Modal';

function PhotoList({ category }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [photos] = useState([
        {
          name: 'SeeVee',
          category: 'portfolio',
          description: 'This is a social media site intended to help new developers find gainful employment. It utilizes Javascript, HTML, CSS, Nodejs, Sql, sequelize, and handlebars!',
          link: 'https://see-vee-bnh.herokuapp.com/'
        },
        {
          name: 'HTML, CSS portfolio',
          category: 'portfolio',
          description: 'This is a bare bones basic website intended to showcase my competencies of HTML, and CSS!',
          link: 'https://diirtydog.github.io/Portfolio/'
        },
        {
          name: 'Trekkie for Techy',
          category: 'portfolio',
          description: 'This is a blogging site that is intended to showcase my competencies in Sql, sequelize, Nodejs, Javascript, HTML, CSS, and handlebars!',
          link: 'https://awtrekkie.herokuapp.com/'
        },
    ]);
    const currentPhotos = photos.filter((photo) => photo.category === category);
    const [currentPhoto, setCurrentPhoto] = useState();
    const toggleModal = (image, i) => {
      // current photo
      setCurrentPhoto({...image, index: i});
      setIsModalOpen(!isModalOpen);
    }
    return (
    <div>
      {isModalOpen && (
         <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
        <div className="flex-row card">
          {currentPhotos.map((image, i) => (
              <div>
                  <div>
                    <img
                        src={require(`../../assets/large/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                  </div>
                <a classname='img-a' href={image.link}>Wanna see it 👀!</a>
              </div>
          ))}
        </div>
    </div>
  
    )
}

export default PhotoList;