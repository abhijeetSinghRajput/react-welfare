import React from "react";
import "../../stylesheets/footer.css";
import MapEmbed from "../../components/MapEmbed";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <h4>Quick Links</h4>
          <ul className="links">
            <li>
              <i className="uil uil-angle-right"></i>
              <a href="#">Accessibility Statement</a>
            </li>
            <li>
              <i className="uil uil-angle-right"></i>
              <a href="#">Copyright Policy</a>
            </li>
            <li>
              <i className="uil uil-angle-right"></i>
              <a href="#">Disclaimer</a>
            </li>
            <li>
              <i className="uil uil-angle-right"></i>
              <a href="#">FAQs</a>
            </li>
            <li>
              <i className="uil uil-angle-right"></i>
              <a href="#">Feedback</a>
            </li>
            <li>
              <i className="uil uil-angle-right"></i>
              <a href="#">Help</a>
            </li>

            <li>
              <i className="uil uil-angle-right"></i>
              <a href="#">Hyperlink Policy</a>
            </li>
            <li>
              <i className="uil uil-angle-right"></i>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <i className="uil uil-angle-right"></i>
              <a href="#">Vigilance Complaint</a>
            </li>
            <li>
              <i className="uil uil-angle-right"></i>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <i className="uil uil-angle-right"></i>
              <a href="#">Department Application</a>
            </li>
            <li>
              <i className="uil uil-angle-right"></i>
              <a href="#">EIMS</a>
            </li>
            <li>
              <i className="uil uil-angle-right"></i>
              <a href="#">Address</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Address</h4>

          <p>
            Department of Social Welfare, Government of NCT of Delhi, 7th Floor,
            MSO Building, ITO, I.P Estate New Delhi-110002
          </p>
        </div>

        <div>
          <h4>Map of Social Welfare/Rehabilitation Services</h4>
          <MapEmbed />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
