function Footer() {
    const icons = [
      {
        name: "Github",
        link: "https://github.com/Faiza1st"
      },
      {
        name: "Gmail",
        link: "https://mail.google.com/mail"
      },
      {
        name: "Linkdin",
        link: "https://play.google.com/store/apps/details?id=com.linkedin.android&hl=en&gl=US"
      }
    ]
  
    return (
      <footer className="footer">
        {icons.map(icon =>
        (
          <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
        )
          )}
      </footer>
    );
  }
  
  export default Footer;
  