import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter, FaBloggerB } from 'react-icons/fa';

import Link from '@/components/Link';
import DefaultOneCol from '@/components/DefaultOneCol';
import COLORS from '@/theme/colors';

const BottomBarSection = styled.section`
    width: 100%;
    padding-top: 1rem;
    margin-top: 1rem;

    border-top: 1px solid ${COLORS.highlight1};

    font-size: 0.8rem;
`;

const StyledUl = styled.ul`
    margin: 0;
    padding-left: 0;
    list-style: none;
`;

const StyledLi = styled.li`
    margin: 0.5rem 0;
`;

const StyledSpan = styled.span`
    display: inline-block;
    margin-left: 0.5rem;
`;

export const BottomBar = () => (
    <BottomBarSection>
        <DefaultOneCol>
            <StyledUl>
                <StyledLi>
                    <Link
                        as="a"
                        href="https://www.linkedin.com/in/fernando-augusto-l%C3%B3pez-plascencia-0797a111/"
                    >
                        <FaLinkedin />
                        <StyledSpan>LinkedIn</StyledSpan>
                    </Link>
                </StyledLi>
                <StyledLi>
                    <Link
                        as="a"
                        href="https://www.github.com/sgenius"
                    >
                        <FaGithub />
                        <StyledSpan>Github</StyledSpan>
                    </Link>
                </StyledLi>
                <StyledLi>
                    <Link
                        as="a"
                        href="https://twitter.com/sgenius"
                    >
                        <FaTwitter />
                        <StyledSpan>Twitter</StyledSpan>
                    </Link>
                </StyledLi>
                <StyledLi>
                    <Link
                        as="a"
                        href="http://mapasmapas.blogspot.com/"
                    >
                        <FaBloggerB />
                        <StyledSpan>My old map blog</StyledSpan>
                    </Link>
                </StyledLi>
            </StyledUl>
        </DefaultOneCol>
    </BottomBarSection>
);

export default BottomBar;