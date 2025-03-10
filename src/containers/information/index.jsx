import React, { useState, useEffect } from "react";
import avatar from "../../assets/img/chan-dung-edit.png";
import avatarIcon from "../../assets/img/avatar.webp";
import "./styles.css";
import { Link } from "react-router-dom";
import Greeting from "../../components/greeting";
import { FaArrowCircleUp } from "react-icons/fa";
import Spinner from "../../components/Spinner";

const Information = () => {
  const [visible, setVisible] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <div className="app">
      {spinner ? (
        <Spinner />
      ) : (
        <>
          <div className="scrollToTop">
            <FaArrowCircleUp
              onClick={scrollToTop}
              style={{ display: visible ? "inline" : "none" }}
            />
          </div>

          <div className="intro-wrapper1">
            <div className="nav-wrapper">
              <div className="nav-wrapper-left__dots-wrapper">
                <div className="browser-dot dot-1"></div>
                <div className="browser-dot dot-2"></div>
                <div className="browser-dot dot-3"></div>
              </div>
            </div>

            <div className="information">
              <img src={avatar} alt="avatar" />
              <h2>AITCO Profile</h2>

              <div className="social">
                <Link to="/portfolio">
                  <div className="icon">
                    <img src={avatarIcon} alt="website" />
                  </div>
                  <p>Profile</p>
                  <div className=""></div>
                </Link>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.aitcosa.com"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/domain--v1.png"
                      alt="website"
                    />
                  </div>
                  <p>AITCO Website</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="mailto:engsalah@aitcosa.com"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/ms-outlook.png" 
                      alt="ms-outlook"
                    />
                  </div>
                  <p>Email</p>
                  <div className=""></div>
                </a>
              </div>


              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="tel:+00966540619187"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/ios/150/40C057/apple-phone.png" 
                      alt="apple-phone"
                    />
                   
                  </div>
                  <p>Phone</p>
                  <div className=""></div>
                </a>
              </div>


              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.linkedin.com/company/aitcosa/posts/?feedView=all"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/linkedin.png" 
                      alt="linkedin"
                    />
                  </div>
                  <p>Linkedin</p>
                  <div className=""></div>
                </a>
              </div>


              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://x.com/aitcosa/status/1828032718174576974"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/ios-filled/50/twitterx--v1.png"
                      alt="twitterx--v1"
                    />
                  </div>
                  <p>X</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.facebook.com/aitcosa"
                  aria-label="Facebook"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/ios-filled/50/228BE6/facebook-new.png"
                      alt="facebook-new"
                    />
                  </div>
                  <p>Facebook</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noreferrer"
                  target="__blank"
                  href="https://www.facebook.com/messages/t/1704965813155815"
                  aria-label="Facebook"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/fluency/50/000000/facebook-messenger--v2.png"
                      alt="messenger"
                    />
                  </div>
                  <p>Messenger</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.instagram.com/aitcosa/"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/3d-fluency/94/instagram-new.png" 
                      alt="instagram-new"
                    />
                  </div>
                  <p>Instagram</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.youtube.com/@aitcosa"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/youtube-play.png" 
                      alt="youtube-play"
                    />
                  </div>
                  <p>youtube</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a href="whatsapp://send?text=AITCO&phone=+966540619187">
                  <div className="icon">
                  <img 
                  src="https://img.icons8.com/pastel-glyph/128/40C057/whatsapp--v2.png" 
                  alt="whatsapp--v2"
                  />
              
                  </div>
                  <p>WhatsApp</p>
                  <div className=""></div>
                </a>
              </div>

              <Greeting />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Information;
