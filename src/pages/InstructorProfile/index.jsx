import React from 'react';
import { Header } from '../../common/components/Header';
import PageHeader from '../../common/components/PageHeader';
import InstructorDetail from '../../common/components/InstructorDetail';
import Footer from '../../common/components/Footer';

const InstructorProfile = () => {
    return (
        <>
            <Header/>
            <PageHeader title='Teacher Profile'/>
            <InstructorDetail/>
            <Footer/>
        </>
        
    );
}

export default InstructorProfile;
