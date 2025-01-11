import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
//import React from "react";

function User(){
  const {userid} = useParams();
  return(
    <div>
      <Header />
      User {userid}
      <Footer />
    </div>
  )
}
export default User;