import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHeader from "../../components/page-header/page-header";
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import pageStyles from '../pages/pageStyles.module.scss';
import contentParser from 'gatsby-wpgraphql-inline-images';

const PageNoSidebar = (
    {
      data: {
          wpcontent: {
              page: {
                  seo,
                  title,
                  content
              }
          }
      },
      pageContext: {
          pluginOptions: {
              wordPressUrl,
              uploadsUrl
          }
      }
    }) => (
        <Layout title={ title }>
            <SEO title={ seo.title } seoInfo={ seo } />
            <PageHeader pageTitle={ title }/>
            <Container style={{paddingTop: "50px"}}>
                <Row>
                    <Col className={pageStyles.pageContent}>
                        <div>{contentParser({ content }, {wordPressUrl, uploadsUrl})}</div>
                    </Col>
                </Row>
            </Container>
        </Layout>
)

export const query = graphql`
  query NoSidebarQuery($id: ID!) {
  wpcontent {
    page(id: $id) {
      content
      title
      uri
      seo {
          metaDesc
          metaKeywords
          opengraphAuthor
          opengraphDescription
          opengraphImage {
            altText
            sourceUrl
          }
          opengraphModifiedTime
          opengraphPublishedTime
          opengraphPublisher
          opengraphSiteName
          opengraphTitle
          opengraphType
          opengraphUrl
          title
        }
    }
  }
}
`

export default PageNoSidebar;
