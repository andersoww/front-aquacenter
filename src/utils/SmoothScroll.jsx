function SmoothScroll(e) {
  e.preventDefault();

  const targetId = e.currentTarget?.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);

  const sections = {
    Home: targetElement?.offsetTop - 100,
    "Quem Somos": targetElement?.offsetTop - 60,
    Serviços: targetElement?.offsetTop - 100,
    "Redes sociais": targetElement?.offsetTop - 100,
    Contato: targetElement?.offsetTop - 60,
  };

  if (targetElement) {
    const offsetTop = sections[targetId];

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}
export { SmoothScroll };
