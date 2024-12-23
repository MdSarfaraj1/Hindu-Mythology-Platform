import React from "react";
import Hero from "./Hero";
import Layout from "../Layout";
function Home() {
    return ( 
        <>
        <Layout children={<Hero/>}/>
        </>
     );
}

export default Home;