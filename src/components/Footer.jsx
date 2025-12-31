const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
      <footer>
        <p className="copyright">© {currentYear} Jason Niebauer</p>
      </footer>
    );
}

export default Footer;