export default function typeWriter(text: string, elementId: string, speed: number): void {
    let index = 0;
  
    const writeText = (): void => {
      const dynamicText = document.getElementById(elementId);
      if (!dynamicText) return;
  
      if (index < text.length) {
        dynamicText.innerHTML += text.charAt(index);
        index++;
        setTimeout(writeText, speed);
      }
    };
  
    writeText();
  }