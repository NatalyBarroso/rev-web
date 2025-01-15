import React, { useState } from 'react';
import Image from 'next/image'
import styles from './MovieSlider.module.css'
import movie1 from '../../../../public/images/movie1.jpg'
import movie2 from '../../../../public/images/movie2.jpg'
import movie3 from '../../../../public/images/movie3.jpg'
import movie4 from '../../../../public/images/movie4.jpg'
import movie5 from '../../../../public/images/movie5.jpg'

const movies = [
  {
    id: 1, title: "All About Lily Chou-Chou", year: "2001", image: movie1,
  },
  {
    id: 2, title: "The Last 10 Years", year: "2022", image: movie2,
  },
  {
    id: 3, title: "Millennium Mambo", year: "2001", image: movie3,
  },
  {
    id: 4, title: "Monster", year: "2023", image: movie4,
  },
  {
    id: 5, title: "Better Days", year: "2019", image: movie5,
  }
]

const MovieSlider = () => {

  const [ currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const getVisibleSlides = () => {
    const prev = currentIndex === 0 ? movies.length - 1 : currentIndex - 1;
    const next = currentIndex === movies.length - 1 ? 0 : currentIndex + 1;
    return [prev, currentIndex, next]
  }

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.slides}>
          {getVisibleSlides().map((index, position) => (
            <div
              key={movies[index].id}
              className={`${styles.slide} ${
                position === 0 
                  ? styles.slidePrevious 
                  : position === 2 
                  ? styles.slideNext 
                  : styles.sliderCurrent
              }`}
              onClick={() => position === 0 ? prevSlide() : position === 2 ? nextSlide() : null}>
                <Image
                  src={movies[index].image}
                  alt={movies[index].title}
                  className={styles.image}/>
                {position === 1 && (
                  <div className={styles.content}>
                    <h2 className={styles.title}>
                      {movies[index].title}
                    </h2>
                    <p className={styles.year}>
                      {movies[index].year}
                    </p>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSlider;
