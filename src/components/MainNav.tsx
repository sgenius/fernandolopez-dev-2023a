"use client"

import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import Link from 'next/link';

const StyledNavContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid #eee;
`;

const StyledLink = styled(Link)`
    display: inline-block;
    color: #108db8;
    padding: 1rem 2rem;
    text-decoration: none;
`;

export const MainNav = () => (
    <StyledNavContainer>
        <Container>
            <Row>
                <Col xs={4} sm={6} lg={8} offset={{ sm: 1, lg: 2 }}>
                    <nav>
                        <StyledLink href="/">Home</StyledLink>
                    </nav>
                </Col>
            </Row>
        </Container>
    </StyledNavContainer>
);

export default MainNav;