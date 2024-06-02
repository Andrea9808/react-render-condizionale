import React, {useState} from "react";

const ShortRender = () => {

  const [parola, setParola] = useState('Valore');
  const [toggle, setToggle] = useState(false);

  //short circuit Evaluation con or
  //const esempio = parola || 'Sono un esempio';

  //short circuit Evaluation con and
  //const esempio2= parola && "Ho un valore";

  //short circuit Evaluation con ternary operator
  //const esempio3 = parola ? "Ho un valore" : "Non ho un valore";

  return (
    <div className="mt-5 text-center">
        <h1>SHORT RENDER</h1>
      {/* <h2>short render Component</h2>
      <h2>Or (||): {esempio}</h2>
      {parola && <h2>Ciao sono un componente</h2>}
      <h2>And (&&): {esempio2}</h2>
      <h2>Ternario (?): {esempio3}</h2> */}

      <h2>{parola || 'Sono un esempio se non è inserito un valore' }</h2>
      {
        toggle ? <h2 className="text-success">Vero</h2> 
        : <h2 className="text-danger">Falso</h2>
      }
      {/* Se diverso da toggle cambia il valore */}
      <button className="btn btn-success" onClick={() => setToggle(!toggle)}>
        Cambia
      </button>
    </div>
  );
};

export default ShortRender;
