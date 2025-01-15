'use client'
import { useState } from 'react';
import Header from '../presentation/components/common/Header'
import HomeSlider from '../presentation/components/sliders/HomeSlider'
import MovieSlider from '../presentation/components/sliders/MovieSlider'


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <main>
      <Header onMenuToggle={handleMenuToggle} />
      <HomeSlider isMenuOpen={isMenuOpen} />
      <div className="w-11/12 h-[2px] bg-white my-5 mx-auto"></div>
      <h3 className="text-zinc-50 ml-[4.5%] font-bold">Top Charts: Movies</h3>
      <MovieSlider />
    </main>
  );
}
