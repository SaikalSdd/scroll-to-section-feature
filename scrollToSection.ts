export const scrollToSection = (
  selectedSection: string,
  offset = 64,
  smooth = false
) => {
  const target = document.getElementById(selectedSection);
  if (target) {
    const top =
      target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: smooth ? "smooth" : "auto" });
  }
};
