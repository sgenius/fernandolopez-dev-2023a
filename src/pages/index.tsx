import React from 'react';

import TopBar from '@/components/TopBar';
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
            <TopBar />
            <HeaderRow />
            <IntroRow />
            <ProjectsRow />
            <BottomBar />
        </>
    )
}
