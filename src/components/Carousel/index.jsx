import "./style.css";

export const Carousel = () => {
  let currentIndex = 0;

  const handleMount = () => {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');

    const updateSlide = () => {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    prevBtn?.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlide();
    });

    nextBtn?.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide();
    });
  };

  setTimeout(handleMount, 0);

  return (
    <div className="carousel">
      <div className="carousel-track">
        <img src="../../img/apartment1.webp" className="carousel-slide" />
        <img src="../../img/bathroom.jpg" className="carousel-slide" />
        <img src="../../img/bedroom.jpg" className="carousel-slide" />
        <img src="../../img/kitchen.jpg" className="carousel-slide" />
        <img src="../../img/living_room.jpg" className="carousel-slide" />
        <img src="../../img/outdoor.webp" className="carousel-slide" />
      </div>
      <button className="carousel-button prev">‹</button>
      <button className="carousel-button next">›</button>
    </div>
  );
};
