import { useState, useEffect } from "react";

function Github(){
  const [user , setUser] = useState([])
  const [userImage , setUserImage] = useState([])
  useEffect(()=>{
    async function getData(){
      try{
        const res = await fetch('https://api.github.com/users/santanuhtml');
        const data = await res.json();
        return data;
      }
      catch(error){
        console.error(error.message);
      }
    }
    getData().then((data)=>{
      console.log(data);
      setUser(data.login);
      setUserImage(data.avatar_url);
    })
  }, [])
  return(
    <>
      <div>
      <img src={userImage} style={{borderRadius:'50px', width:'100px'}} alt={user} />
      {user}
      </div>
    </>
  )
}
export default Github;