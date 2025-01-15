'use client'
import React, { useEffect, useState } from 'react'
import styles from './HomeSlider.module.css'
import Image from 'next/image'
import sliderImg1 from '../../../../public/images/slider1.jpg'
import sliderImg2 from '../../../../public/images/slider2.jpg'
import sliderImg3 from '../../../../public/images/slider3.jpg'
import sliderImg4 from '../../../../public/images/slider4.jpg'

const data = [
  {title: 'Fallen Angels', image: sliderImg1, description: 'An assassin, his boss, an entrepreneur and two women cross paths in Hong Kong as their professional and love lives collide and influence each other, mostly without their knowledge.',},
  { title: 'All About Lily Chou-Chou', image: sliderImg2, description: 'High school kids in Japan negotiate teen badlands, school bullies, lurid snapshots of sex and death and much more. Their only sanctuary, even salvation, lies in the music of pop star Lily Chou-Chou.',},
  { title: 'The Last 10 Years', image: sliderImg3, description: 'Twenty-year-old Matsuri Takabayashi learns that she only has 10 years to live due to an incurable disease. She decides to not dwell on her life and not to fall in love, but she meets Kazuto Manabe at a school reunion.',},
  { title: 'Monster', image: sliderImg4, description: 'A single mother demands answers from a school teacher when her son begins acting strangely. A fight at school causes even more trouble.',}
]

interface HomeSliderProps {
  isMenuOpen: boolean;
}

const HomeSlider: React.FC<HomeSliderProps> = ({ isMenuOpen }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotsClick = (index: number): void => {
    setActiveIndex(index);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 100000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className={styles.sliderContainer}>
    <div className={styles.slider}>
      {[0,1,2,3].map((index) => (
      <div
        key={index}
        className={`${styles.sliderDot} ${activeIndex === index ? 'active' : ''}`}
        onClick={() => handleDotsClick(index)}>
      </div>
      ))}
    </div>
    <Image className={styles.image} src={data[activeIndex].image} alt={data[activeIndex].title}/>
    <div className={`${styles.sliderContent} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.titleContainer}>
        <div className={styles.imageTitle}>{data[activeIndex].title}</div>
        <div className={styles.raiting}>10</div>
      </div>
      <p className={styles.descriptionText}>{data[activeIndex].description}</p>
      <a href='' className={styles.reviewButton}>Review</a>
    </div>
  </div>
  )
}

export default HomeSlider;