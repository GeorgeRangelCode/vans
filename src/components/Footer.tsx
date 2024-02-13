export const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return <footer>&#169; {currentYear} #VANLIFE</footer>;
};
