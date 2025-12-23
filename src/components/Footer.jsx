const Footer = (props) => {
    const currentYear = new Date().getFullYear()

    return (
      <footer>
        {props.navLinks}
        <p className="copyright">© {currentYear} Jason Niebauer</p>
      </footer>
    );
}

export default Footer;