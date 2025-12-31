const NavBar = (props) => {
  const links = [
    {
      title: 'About',
      url: '#about',
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jasonniebauer',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/jasonniebauer'
    },
  ];

  const navigationLinks = links.map(link =>
    <a
      key={link.title}
      href={link.url}
      onClick={link.title === 'About' ? props.showAboutSection : null}
    >{link.title}</a>
  );

  return (
    <nav>
      {navigationLinks}
    </nav>
  );
}

export default NavBar;