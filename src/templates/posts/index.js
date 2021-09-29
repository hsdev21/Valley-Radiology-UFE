import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GravityForm from "../../components/gravity-form/gravity-form";
import PageHeader from "../../components/page-header/page-header";
import { Container, Row, Col } from "react-bootstrap";
import pageStyles from '../pages/pageStyles.module.scss';
import contentParser from 'gatsby-wpgraphql-inline-images';

const Post = (
    {
        data: {
            wpcontent: {
                seo: {
                    schema: {
                        siteUrl,
                        siteName
                    }
                },
                post: {
                    seo,
                    title,
                    content,
                    date,
                    author: {
                        node: {
                            authorName
                        }
                    }
                }
            }
        },
        pageContext: {
            pluginOptions: {
                wordPressUrl,
                uploadsUrl
            }
        }
    }) => {
    const pageContent = contentParser({ content }, {wordPressUrl, uploadsUrl});
    const newDateObject = new Date(Date.parse(date));
    const readableDate = `${newDateObject.toLocaleString('default', {month: 'long'})} ${newDateObject.getUTCDate()}, ${newDateObject.getUTCFullYear()}`
    return (
        <Layout>
            <SEO
                seoInfo={ seo }
                siteUrl={ siteUrl }
                siteName={ siteName }
                date={ date }/>
            <PageHeader pageTitle={ title }/>
            <Container style={{paddingTop: "50px"}}>
                <Row>
                    <Col lg={8} className={pageStyles.pageContent}>
                        <h2>{title}</h2>
                        <p>{readableDate}</p>
                        <p>By {authorName}</p>
                        <div>{pageContent}</div>
                    </Col>
                    <Col lg={4} className={pageStyles.sidebar} >
                        <p>To Request an Appointment</p>
                        <p>Call <a href={'tel:+1-214-739-1706'}>214-739-1706</a></p>
                        <p>or</p>
                        <p>Use Our Easy Online Contact Form</p>
                        <GravityForm/>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export const query = graphql`
  query GetPostQuery($id: ID!) {
  wpcontent {
    seo {
      schema {
        siteUrl
        siteName
      }
    }
    post(id: $id) {
      content
      title
      uri
      date
      author {
        node {
            authorName: name
        }
      }
      seo {
          metaDesc
          metaKeywords
          opengraphAuthor
          opengraphDescription
          opengraphImage {
            altText
            sourceUrl
            mediaDetails {
                height
                width
            }
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

export default Post
