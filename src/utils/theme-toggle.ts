
 export const handleClick = (): void => {
  const html = document.documentElement;
  const currentTheme = html.classList.contains('light') ? 'dark' : 'light';

  html.classList.remove('light', 'dark');
  html.classList.add(currentTheme);

  localStorage.setItem('theme', currentTheme);
};



