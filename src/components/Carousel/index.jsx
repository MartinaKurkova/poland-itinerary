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

  // Pokud používáš vlastní `render()` systém, můžeš zavolat handleMount po vykreslení
  setTimeout(handleMount, 0);

  return (
    <div class="carousel">
      <div class="carousel-track">
        <img src="../../img/apartment1.webp" class="carousel-slide" />
        <img src="../../img/bathroom.jpg" class="carousel-slide" />
        <img src="../../img/bedroom.jpg" class="carousel-slide" />
      </div>
      <button class="carousel-button prev">‹</button>
      <button class="carousel-button next">›</button>
    </div>
  );
};
