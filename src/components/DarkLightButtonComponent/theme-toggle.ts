
export function initThemeToggle(): void {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.className;
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.className = newTheme;
        localStorage.setItem('theme', newTheme);
      });
    }
  }