/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header/header"
import "./layout.css"
import Footer from "./footer/footer"
import BackToTop from "./backToTop"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
    <BackToTop showBelow={250} />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
