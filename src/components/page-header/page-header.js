import React from 'react';
import { Container } from "react-bootstrap";
import pageHeaderStyles from './page-header.module.scss'

const PageHeader = ({pageTitle}) => (
    <Container className={pageHeaderStyles.pageHeader} fluid>
        <Container>
            <h1>{pageTitle}</h1>
        </Container>
    </Container>
)

export default PageHeader;
