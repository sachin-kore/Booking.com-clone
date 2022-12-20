import React from 'react'
import { Featured } from '../../components/Featured/Featured'
import { FeaturedPropertyList } from '../../components/featurePropertyList/FeaturedPropertyList'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { MailList } from '../../components/mailList/MailList'
import { Navbar } from '../../components/Navbar/Navbar'
import { PropertyList } from '../../components/PropertyList/PropertyList'
import './Home.css'


export const Home = () => {
    return (
        <div style={{ backgroundColor: "white" }}>
            <Navbar />
            <Header />
            <div className='homeContainer'>
                <Featured />
                <h1 className='homeTitle'>Browse by property type</h1>
                <PropertyList />
                <h1 className='homeTitle'>Homes guests love</h1>
                <FeaturedPropertyList />
                <MailList />
                <Footer />
            </div>

        </div>
    )
}
