import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <Header title="Galería de Imágenes de Mascotas"/>
    <div className="container">
      <div className="row">
        <Card
          title="El Gato Rene"
          image="galeria4"
          description="Le encanta jugar con sus lanas."
        />
        <Card
          title="La Nutria Veloz"
          image="galeria2"
          description="Le gusta bañarse en el rio."
        />
        <Card
          title="EL Perro Ragnar"
          image="galeria3"
          description="Es un perrito muy loco."
        />
      </div>
    </div>
     <Footer menssage="Copyright Galeria de mascotas, Todos los derechos reservados " />
    </div>
    
  );
}

export default App;
