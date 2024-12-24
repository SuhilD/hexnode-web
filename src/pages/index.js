import React from "react";
import Layout from "../components/layout";
import TryHexnode from "../components/TryHexnode/TryHexnode";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import Endpoint from "../components/Endpoint/Endpoint";
import Banner from "../components/Banner/Banner";
import BannerBottom from "../components/BannerBottom/BannerBottom";
import MultiPlatform from "../components/MultiPlatform/MultiPlatform"
import CustomerSay from "../components/CustomerSay/CustomerSay"
import WhyHexnode from "../components/WhyHexnode/WhyHexnode";

const Home = () => {
  return(
    <Layout>   
      <Banner /> 
      <BannerBottom/>
      <WhyHexnode/>  
      <Endpoint />
      <MultiPlatform />
      <CustomerSay />      
      <ProductSlider />
      <TryHexnode />    
    </Layout>
  )
}

export default Home