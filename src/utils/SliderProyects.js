export default function Slider() {
    console.log("Slider function initialized"); 
    if (typeof document === "undefined") {
      console.log("Document not defined");
      return;
    }
  
    const slider = document.querySelector<HTMLDivElement>("#slider");
    const prevButton = document.querySelector<HTMLButtonElement>("#prev");
    const nextButton = document.querySelector<HTMLButtonElement>("#next");
  
    if (!slider || !prevButton || !nextButton) {
      console.log("One or more elements are missing");
      return;
    }
  
    console.log("Elements found, attaching event listeners");
    let currentIndex = 0;
  
    const updateSlider = () => {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      console.log(`Slider moved to index ${currentIndex}`);
    };
  
    prevButton.addEventListener("click", () => {
      currentIndex = Math.max(0, currentIndex - 1);
      updateSlider();
    });
  
    nextButton.addEventListener("click", () => {
      const sliderChildren = slider.children.length;
      currentIndex = Math.min(sliderChildren - 1, currentIndex + 1);
      updateSlider();
    });
  }
  