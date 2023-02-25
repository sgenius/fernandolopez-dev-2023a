import React from 'react';

import IntroRow from '@/components/Index/IntroRow';
import HeaderRow from '@/components/Index/HeaderRow';
import ProjectsRow from '@/components/Index/ProjectsRow';
import BottomBar from '@/components/BottomBar';

export const metadata = {
  title: 'The website of frontend developer Fernando Lopez',
};

export default function Home() {
    return (
        <>
            <HeaderRow />
            <IntroRow />
            <ProjectsRow />
            <BottomBar />
        </>
    )
}
