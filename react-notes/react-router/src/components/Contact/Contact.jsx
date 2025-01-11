import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Contact(){
  const navigate = useNavigate();
  function logout(){
    navigate('/');
  }
  return(
    <div>
      <Header />
      Contact
      <button onClick={logout}>Logout</button>
      <Footer />
    </div>
  )
}
export default Contact;