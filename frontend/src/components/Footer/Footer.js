import React from "react";
import "../../assets/styles/footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>
          Made with <span role="img" aria-label="love">❤️</span> by Mohit Pati
        </p>
        <p>For Hackerearth Hackathon</p>
      </div>
      <div className="footer-right">
        <a href="https://github.com/your-github-link" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <img src="C:\Users\Mohit\Desktop\angelHack\frontend\src\img\github.png" alt="github" srcset="" />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-link" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <img src="C:\Users\Mohit\Desktop\angelHack\frontend\src\img\linkedin.png" alt="github" srcset="" />
        </a>
      </div>
      <div className="footer-bottom">
        <p>
          <span role="img" aria-label="copyright">©️</span> Copyright 2024 @Mohit Pati
        </p>
      </div>
    </footer>
  );
};

export default Footer;
