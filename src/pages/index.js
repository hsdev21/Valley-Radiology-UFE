import React from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Button } from "react-bootstrap"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import homePageStyles from "./index.module.scss"
import GravityForm from "../components/gravity-form/gravity-form"
import SEO from "../components/seo"
import { GetHomePageMeta } from "../hooks/getHomePageMeta"
import { graphql, Link } from "gatsby"
import Slider from "../components/slider/slider"

import aetna from "../images/aetna.jpg"
import blueShield from "../images/blue.jpg"
import cigna from "../images/cigna.jpg"
import humana from "../images/humana.jpg"
import medicaid from "../images/medicaid.jpg"
import united from "../images/united.jpg"

import "./index.scss"

const IndexPage = ({ data }) => {
  const {
    seo: {
      schema: { siteUrl, siteName },
    },
    pages: { nodes },
  } = GetHomePageMeta()
  const { seo, date } = nodes[0]

  return (
    <Layout>
      <SEO seoInfo={seo} siteUrl={siteUrl} siteName={siteName} date={date} />
      <BackgroundImage
        fluid={data.section1.childImageSharp.fluid}
        className={`${homePageStyles.section1} ${homePageStyles.genericSection}`}
        style={{
          backgroundPosition: "top",
        }}
      >
        <Container>
          <Row className={homePageStyles.row}>
            <Col lg={6} className={`${homePageStyles.text}`}>
              <h1>
                Do you know relief from uterine fibroids is possible without
                surgery?
              </h1>
              <p>
                Valley Radiology has a safe and effective solution for you --
                Uterine Fibroid Embolization. We provide personalized care for
                your uterine fibroids.
              </p>
              <p>
                Valley Radiology specializes in the diagnosis and treatment of
                uterine fibroids. With a strong focus and understanding of
                effective therapy, our team of interventional specialists
                provides minimally invasive treatment without the need for
                extensive surgery or long recovery times.{" "}
              </p>
            </Col>
            <Col lg={6} className={homePageStyles.heroForm}>
              <p>
                <small>
                  Contact Us. We're ready to help.
                  <br />
                  Call <a href="+1-910-486-5700">910-486-5700</a>
                  <br />
                  Or Use Our Online Contact Form
                </small>
              </p>
              <div className={`${homePageStyles.gravityForm} gravityForm`}>
                <GravityForm className={homePageStyles.gravityForm} />
              </div>
            </Col>
          </Row>
        </Container>
      </BackgroundImage>
      <Container fluid className={homePageStyles.callOut}>
        <Container>
          UFE can relieve your symptoms. Get treatment for your fibroids now.
          Schedule a consultation today.
        </Container>
      </Container>
      <Container fluid className={homePageStyles.section2}>
        <Container className={homePageStyles.genericSection}>
          <Row className={homePageStyles.mobileReverse}>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>Have you been diagnosed with uterine fibroids?</h2>
              <p>
                Between 20-70% of women develop fibroids. Uterine Fibroids are
                one of the most common diagnoses in reproductive women. The good
                news is they are benign and harmless growths in your uterus.
                However, the fibroids can be extremely painful and challenging
                to live with.
              </p>
              <strong>Don’t ignore the symptoms:</strong>
              <ul>
                <li>Heavy bleeding</li>
                <li>Abdominal pain</li>
                <li>Back pain</li>
                <li>Prolonged periods</li>
                <li>Frequent urination</li>
                <li>Bowel issues</li>
              </ul>
              <p>
                <Button
                  variant={"primary"}
                  className={homePageStyles.secondaryBtn}
                  href="/contact/"
                >
                  Learn More
                </Button>
              </p>
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={homePageStyles.homeImg}
                fluid={data.section2.childImageSharp.fluid}
                alt="A man holding his leg."
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className={homePageStyles.lightBack}>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={`${homePageStyles.homeImg} ${homePageStyles.blueBorder}`}
                fluid={data.section3.childImageSharp.fluid}
                alt="A couple sitting together."
              />
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>Uterine Fibroid Embolization (UFE) Relieves Symptoms</h2>
              <p>
                Pelvic pain from fibroids can range in severity from person to
                person. Uterine fibroid embolization (UFE) is a minimally
                invasive treatment option. Our specialists perform uterine
                fibroid embolization to relieve the symptoms of fibroids without
                a lengthy hospital stay or extended recovery time.
              </p>
              <p className={homePageStyles.buttonBottom}>
                <Button
                  variant={"primary"}
                  className={homePageStyles.mainBtn}
                  href="/uterine-fibroid-embolization-ufe/"
                >
                  Relief Is Here
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid style={{ display: "none" }}>
        <Container
          className={`${homePageStyles.genericSection} ${homePageStyles.testimonialSlider}`}
        >
          <div className={"text-center"}>
            <Slider>
              <p>
                <em>
                  "Dr. Meka was Exceptionally kind. He calmly explained the
                  procedure to be performed on my next visit. Answered all of my
                  questions and reassured me that all should go well. I felt
                  well cared for. And I must add that the receptionist at the
                  entrance was very kind and polite as well. She took my
                  temperature, summoned the elevator for me, and wished me a
                  safe and enjoyable weekend!"
                </em>
                <br />
                <span className={homePageStyles.author}>M. Williams</span>
              </p>
              <p>
                <em>
                  "My foot was turning purple from poor circulation. They looked
                  at it and set an appointment for the next day for an
                  ultrasound. As I was walking out the door, they called out to
                  see if I wanted to do the ultrasound now. That was huge in my
                  mind. Then they set an appointment for an angiogram the next
                  morning. I have only great thoughts on how I was treated. I
                  would absolutely recommend them."
                </em>
                <br />
                <span className={homePageStyles.author}>D. Romstadt</span>
              </p>
              <p>
                <em>
                  "To Dr. Meka and all members of this dynamic team of Medical
                  staff and all Kind, Patient, Caring, Compassionate Healthcare
                  providers. Thank you for being super Sheroes and Heroes! Bless
                  you!"
                </em>
                <br />
                <span className={homePageStyles.author}>Ms. M. Williams</span>
              </p>
              <p>
                <em>
                  "The best &amp; most caring medical professionals & staff
                  EVER!! It always made me feel like I was the only patient they
                  had! I only wish I had met Dr. Meka a lot sooner than I did!
                  But so glad I finally did."
                </em>
                <br />
                <span className={homePageStyles.author}>D. Denham</span>
              </p>
            </Slider>
          </div>
        </Container>
      </Container>
      <Container fluid>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>
                <Link style={{ color: "#000" }} to="/our-specialists/">
                  Meet Murali Meka, MD, Tirth Patel, MD and Osmani Deochand, MD
                </Link>
              </h2>
              <p>
              Our board-certified vascular and interventional specialists, Murali Meka, M.D., Tirth Patel, M.D. and Osmani Deochand, M.D., specialize in diagnosing and treating PAD. They each bring a strong focus and extensive training in effective therapy through interventional radiology. Having this expertise in a single location, focused on you, means that you’re receiving the most innovative treatment methods possible. Regardless of your diagnosis, we can help determine the next steps and provide a treatment option that works for you.
              </p>
              <p className={homePageStyles.buttonBottom}>
                <Button
                  variant={"primary"}
                  className={homePageStyles.secondaryBtn}
                  href="/our-specialists/"
                >
                  Meet Our Expert Team
                </Button>
              </p>
            </Col>
            <Col
              lg={6}
              className={homePageStyles.verticalCenter}
              style={{ marginBottom: "20px" }}
            >
              <Img
                className={homePageStyles.homeImg}
                fluid={data.section5.childImageSharp.fluid}
                alt="Doctors Murali Meka, M.D., Tirth Patel, M.D. and Osmani Deochand, M.D."
                style={{ marginBottom: "5px" }}
              />
              {/* <Row>
                <Col xs={6}>Dr. Murali Meka</Col>
                <Col xs={6}>Dr. Bryan Swilley</Col>
              </Row> */}
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className={homePageStyles.lightBack}>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={`${homePageStyles.homeImg} ${homePageStyles.blueBorder}`}
                fluid={data.section6.childImageSharp.fluid}
                alt="A couple sitting together."
              />
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>Avoid a Hysterectomy</h2>
              <p>
                UFE is a treatment option with low-risk and high success. UFE is
                performed in an outpatient setting and the routine procedure
                time is typically under an hour. With the use of a specialized
                camera, a catheter is inserted into the uterine vessels. Embolic
                material is injected into the vessels that feed the fibroids,
                depriving them of their blood supply. Over time the fibroids
                begin to shrink and disappear, along with the symptoms. UFE Is
                one of the safest and most successful alternatives to a
                hysterectomy and is performed by our interventional specialists
                at Valley Radiology.
              </p>
              <p className={homePageStyles.buttonBottom}>
                <Button
                  variant={"primary"}
                  className={homePageStyles.mainBtn}
                  href="/contact/"
                >
                  Recover Faster
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={12} className={homePageStyles.verticalCenter}>
              <h3 className={`text-center`}>
                We Accept Many Plans from All Major Insurance Carriers
              </h3>
            </Col>
          </Row>
          <div className={`${homePageStyles.insurances}`}>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={aetna} alt="Aetna insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={blueShield} alt="Blue Shield insurance logo" />
            </div>
            <div className={homePageStyles.insuranceItem}>
              <img src={cigna} alt="Cigna insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={humana} alt="Humana insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={medicaid} alt="Medicaid insurance logo" />
            </div>
            <div className={homePageStyles.insuranceItem}>
              <img src={united} alt="United Healthcare insurance logo" />
            </div>
          </div>
          <Row>
            <Col lg={12} className={`text-center`}>
              <p>
                <Button
                  variant={"primary"}
                  className={homePageStyles.mainBtn}
                  href="/insurance/"
                >
                  Learn More
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className={homePageStyles.lightBack}>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={homePageStyles.homeImg}
                fluid={data.section7.childImageSharp.fluid}
                alt="Valley Radiology's building location."
              />
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>Quality Care Close to Home</h2>
              <p>
                Receive the specialized care you deserve at Valley Radiology.
                Our Fayetteville based Valley Radiology clinic offers diagnosis
                and treatment for men and women with peripheral artery disease
                and is now accepting new patients. Schedule your appointment to
                discuss your individualized treatment plan now.
              </p>
              <p className={homePageStyles.buttonBottom}>
                <Button
                  variant={"primary"}
                  className={homePageStyles.mainBtn}
                  href="/contact/"
                >
                  Book Online
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <BackgroundImage
        fluid={data.contactSection.childImageSharp.fluid}
        className={`${homePageStyles.contactSection}`}
        alt="A technician with a patient under a machine."
      >
        <Container>
          <Row>
            <Col
              lg={{ span: 6, offset: 3 }}
              className={homePageStyles.formContainer}
            >
              <h2>
                Contact Us.
                <br />
                We're Ready to Help.
              </h2>
              <p className="text-center">
                {" "}
                Call <a href="tel:+1-910-486-5700">910-486-5700</a>
                <br />
                <small>Or Use Our Easy Online Form.</small>
              </p>
              <div className="gravityForm">
                <GravityForm />
              </div>
            </Col>
          </Row>
        </Container>
      </BackgroundImage>
    </Layout>
  )
}

export const query = graphql`
  query {
    section1: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    section2: file(relativePath: { eq: "section-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    section3: file(relativePath: { eq: "section-3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    section4: file(relativePath: { eq: "section-4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    section5: file(relativePath: { eq: "section-5.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    section6: file(relativePath: { eq: "section-6.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    section7: file(relativePath: { eq: "section-7.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    aetna: file(relativePath: { eq: "aetna.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    blue: file(relativePath: { eq: "blue.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    contactSection: file(relativePath: { eq: "contact-us-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sliderImage: file(relativePath: { eq: "slider.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
