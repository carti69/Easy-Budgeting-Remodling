import React, {useState, useEffect} from "react";


const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(()=>{
    //this function will be called when the components mounts
    const fetchMessage = async () =>{
      try{
        //fetch data from backend endpoint
        const response = await fetch('http://localhost:8080/api/hello');
        const data = await response.text();
        setMessage(data);
      }
      catch(error){
        console.error('Error fetching data: ',error);
        setMessage('Could not connect to backend');
      }
    };
    fetchMessage();
  },[]); //empty array ensures this effect runs only once
    return(
      <div className="App-header">
          <h1>Welcome to Easy Budgeting Remodling</h1>
          <p>Your one-stop solution for finding the best remodeling workers.</p>
          <p><strong>Message from backend: </strong>{message}</p>
      </div>
    );
};
export default Home;