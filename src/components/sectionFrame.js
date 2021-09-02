import React from 'react';
import './sectionFrame.css';
import SideBar from './sideBar';
import MainContent from './mainContent';
const SectionFrame =()=>{
    return(
        <>
            <section className="mainSection">
                <SideBar/>
                <MainContent/>
            </section>
        </>
    );
}
export default SectionFrame;