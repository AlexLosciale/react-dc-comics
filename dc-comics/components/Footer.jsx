const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
          <div>
              <h3>DC COMICS</h3>
              <ul>
                  <li>Characters</li>
                  <li>Comics</li>
                  <li>Movies</li>
                  <li>TV</li>
                  <li>Games</li>
                  <li>Videos</li>
                  <li>News</li>
              </ul>
          </div>
          <div>
              <h3>SHOP</h3>
              <ul>
                  <li>Shop DC</li>
                  <li>Shop DC Collectibles</li>
              </ul>
          </div>
          <div>
              <h3>DC</h3>
              <ul>
                  <li>Terms Of Use</li>
                  <li>Privacy Policy</li>
                  <li>Ad Choices</li>
                  <li>Advertising</li>
                  <li>Jobs</li>
              </ul>
          </div>
      </div>
      <button className="signup-btn">SIGN-UP NOW!</button>
      <div className="socials">
          <span>FOLLOW US</span>
          <img src="src/assets/img/footer-facebook.png" alt="facebook" />
          <img src="src/assets/img/footer-twitter.png" alt="twitter" />
          <img src="src/assets/img/footer-youtube.png" alt="youtube" />
          <img src="src/assets/img/footer-pinterest.png" alt="pinterest" />
          <img src="src/assets/img/footer-twitter.png" alt="twitter" />
      </div>
    </footer>
  )
};
export default Footer;