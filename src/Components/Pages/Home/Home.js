import React from 'react'
import Activities from './Activities/Activities'
import Header from './Headers/HeaderSection/Header'
import OfferingServices from './OfferingServices/OfferingServices'
import Offers from './Offers/Offers'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OfferingServices></OfferingServices>
            <Activities></Activities>
            <Offers></Offers>
        </div>
    )
}

export default Home
