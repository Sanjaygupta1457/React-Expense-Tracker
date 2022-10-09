import React, { useState,Fragment,useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";
import Footer from "./Footer";
import MainBody from "./MainBody";
import NavBar from "./NavBar";

function Dashboard() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);
  return (
    <Fragment>
    {loading ? (
      <div className="spinner">
        <DotLoader color={"#33bbff"} loading={loading} size={120} />
      </div>
    ) : (
        <>
        <NavBar/>
         <MainBody/>
        <Footer/>
        </>
    )}
    </Fragment>
    )
}

export default Dashboard

