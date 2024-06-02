import React, {useState, useEffect} from "react";
import axios from "axios";

const url = "https://api.github.com/users/QuincyLarson";

const ConditionalCompining = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('user');

  const getData = async () => {

    //setto l'errore a false per default
    setIsError(false);

    //setto il loading a true
    setIsLoading(true);
    try{
    //setto la chiamata
    const response = await axios.get(url)
    //setto il login
    setUser(response.data);
    //setto il loading a false se la chiamata è andata a buon fine
    }catch(error){
      //setto l'errore a true se la chiamata non va a buon fine
      setIsError(true);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);
  
  //se isLoading è true mostro il componente Loading
  if (isLoading) {
    return <Loading/>;
  }
  if (isError) {
    return <Error/>;
  }

  return (
    <div className="card d-flex shadow align-items-center">
      <h2>Conditional Rendering</h2>
      <img className="my-4 shadow" src={user.avatar_url} alt={user.name} 
        style={{width: '80px', height: '80px', borderRadius: '50%'}}
      />
      <h3>Account loggato: {user.login}</h3> 
      <h6>Nome: {user.name}</h6>
    </div>
  );
};

const Loading = () => (
  <div>
    <h2>Loading...</h2>
  </div>
);

const Error = () => (
  <div>
    <h2>Error...</h2>
  </div>
);

export default ConditionalCompining;
