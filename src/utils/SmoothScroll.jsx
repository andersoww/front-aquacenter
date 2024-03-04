function SmoothScroll(e) {
  e.preventDefault();

  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  // get the element by id and use scrollIntoView
  const elem = document.getElementById(targetId);

  if (elem) {
    elem.scrollIntoView({
      behavior: "smooth",
    });
  }
}
export { SmoothScroll };
