import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Row>
        <Col lg={12} style={{padding: '3em 0'}}>
          <h1>NOT FOUND</h1>
          <p>This page does not exist.</p>
          <Button href="/">Return to Homepage</Button>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default NotFoundPage
