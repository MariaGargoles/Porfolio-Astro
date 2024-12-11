export default function Slider() {
    if (typeof document === "undefined") return; 
    const slider = document.querySelector<HTMLDivElement>("#slider");
    const prevButton = document.querySelector<HTMLButtonElement>("#prev");
    const nextButton = document.querySelector<HTMLButtonElement>("#next");
  
    let currentIndex = 0;
  
    const updateSlider = () => {
      if (slider) {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    };
  
    if (prevButton && nextButton) {
      prevButton.addEventListener("click", () => {
        currentIndex = Math.max(0, currentIndex - 1);
        console.log("click1")
        updateSlider();
      });
  
      nextButton.addEventListener("click", () => {
        const sliderChildren = slider?.children.length || 1;
        currentIndex = Math.min(sliderChildren - 1, currentIndex + 1);
        console.log("clickdere")
        updateSlider();
      });
    }
  }
  