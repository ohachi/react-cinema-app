import React, { useState } from 'react';

import './MainContent.scss';
import Slideshow from '../slide-show/Slideshow';
import Paginate from '../paginate/Paginate';

const MainContent = () => {
  const images = [
    {
      url: 'https://thumbs.dreamstime.com/z/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'
    },
    {
      url: 'https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg'
    },
    {
      url: 'https://thumbs.dreamstime.com/b/woman-praying-free-birds-to-nature-sunset-background-woman-praying-free-birds-enjoying-nature-sunset-99680945.jpg'
    },
    {
      url: 'https://thumbs.dreamstime.com/b/healthy-food-background-fruits-vegetables-cereal-nuts-superfood-dietary-balanced-vegetarian-eating-products-kitchen-143677456.jpg'
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {
    if (type === 'prev' && currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      {/* display grid component */}
    </div>
  );
};

export default MainContent;
