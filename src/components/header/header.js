import React from "react"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"
import Navigation from "../navigation/navigation"
import headerStyles from "./header.module.scss"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          logo: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <div className="container" style={{ padding: 0 }}>
            <div className={headerStyles.headerWrap}>
              <div className="logo-wrap">
                <Link className="brand" to="/">
                  <Img
                    fluid={data.logo.childImageSharp.fluid}
                    style={{
                      marginBottom: 0,
                      width: "267px",
                    }}
                    alt="Valley Radiology logo"
                  />
                </Link>
              </div>
              <div className={headerStyles.headerRight}>
                <span>
                  Call{" "}
                  <a className="invoca" href="tel:910-486-5700">
                    <strong>910-486-5700</strong>
                  </a>
                  <br />
                  <small>
                    <em>Serving Fayetteville, Angier, and surrounding areas</em>
                  </small>
                </span>
                <Button
                  variant={"primary"}
                  as={Link}
                  className={headerStyles.headerBtn}
                  to={"/contact/"}
                >
                  Book Online
                </Button>
              </div>
            </div>
          </div>
          <Navigation />
        </>
      )}
    />
  )
}

export default Header
