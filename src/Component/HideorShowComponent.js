import React, { useState, useEffect } from "react";

const HideorShowComponent = () => {

  const [show, setShow] = useState(false);


  return (
    <div className="text-center card shadow mt-5 p-5">
      <h1>Show or Hide</h1>

      <button className="btn btn-success w-50 col-6 offset-3"
        onClick={() => setShow(!show)}
      >
        {show ? "Nascondi" : "Mostra"}
      </button>
      {show && <Elemento />}
    </div>
  );
};

const Elemento = () => {
  const [contatore, setContatore] = useState(0);

  //con useEffect ritorniamo sempre qualcosa
  useEffect(() => {
    const timer = setTimeout(() => {
      setContatore(contatore + 1);
    },1000);

    //sempre il clear time out per evitare memory leak
    return () => clearTimeout(timer);
  });

  return <div>
    <h2>{contatore}</h2>
  </div>
};

export default HideorShowComponent;
