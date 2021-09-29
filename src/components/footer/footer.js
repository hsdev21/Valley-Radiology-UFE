import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import footerStyles from "./footer.module.scss"
import FooterNav from "./footer-navigaton/footer-navigation"
import logo from "../../images/logo.png"

const Footer = () => (
  <footer>
    <Container className={footerStyles.footerTextContainer}>
      <Row>
        <Col className={`${footerStyles.footerLogo} text-center`}>
          <img
            className={footerStyles.footerLogo}
            src={logo}
            alt="Valley Radiology logo"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12} className={`${footerStyles.map} text-center`}>
          <h3>
            Telephone: <a href="tel:+1-910-486-5700">910-486-5700</a>
          </h3>
          <h3>Fax: 910-486-5950</h3>
          <p>
            3186 Village Drive, Suite 201
            <br />
            Fayetteville, North Carolina 28304
            <br />
            Monday - Friday: 8am - 5pm
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1250.884551881121!2d-78.93104563756188!3d35.032741073280114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ab149e1c473d15%3A0x72ee1c539cb47cdf!2sValley%20Radiology%20Vascular%20%26%20Interventional%20Clinic!5e0!3m2!1sen!2sus!4v1627513661334!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: "1px solid #C1D72F", maxWidth: "600px" }}
            loading="lazy"
            title="Fayetteville location map"
          ></iframe>
        </Col>
      </Row>
      <Row>
        <Col className={footerStyles.footerNav}>
          <FooterNav />
        </Col>
      </Row>
    </Container>
    <Container className={footerStyles.footerCopyRight} fluid>
      <span>
        &copy; {new Date().getFullYear()} Valley Radiology. All rights reserved.
        | Website by{" "}
        <a href="https://patientfetch.com" target="_blank" rel={"noreferrer"}>
          PatientFetch
        </a>
      </span>
    </Container>
  </footer>
)

export default Footer
