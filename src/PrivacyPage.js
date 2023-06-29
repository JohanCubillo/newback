import React from 'react';
import ExampleComponent from './ExampleComponent';
import './PrivacyPage.css'; // Importa el archivo de estilos CSS
import SocialMediaList from './SocialMediaList';

class PrivacyPage extends React.Component {
  constructor(props) {
    super(props);
    // Aquí puedes inicializar cualquier estado necesario para el componente
  }

  render() {
    return (
      <div className='lolo'>
      <main className='megadeath'>
      <div style={{ backgroundColor: 'black', height: '10px' }}>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6527724668452654" crossorigin="anonymous"></script>

        <ExampleComponent />
        
        <SocialMediaList />
      </div>
      </main>
      
      <div className='lolito'>
      <h1 className='polici'>Politicas de privacidad</h1>
        <section>
            <h2>Información que recopilamos</h2>
            <p>Aquí puedes describir detalladamente la información que recopilas de los usuarios, como nombres, direcciones de correo electrónico, ubicación geográfica, etc.</p>
        </section>

        <section>
            <h2>Uso de la información recopilada</h2>
            <p>Explica cómo utilizas la información recopilada, ya sea para personalizar la experiencia del usuario, mejorar los servicios o enviar comunicaciones relacionadas.</p>
        </section>

        <section>
            <h2>Divulgación de información</h2>
            <p>Indica con quién compartes la información recopilada, como proveedores de servicios externos, y menciona casos en los que podrías divulgar información por requerimientos legales.</p>
        </section>

        <section>
            <h2>Seguridad de la información</h2>
            <p>Destaca las medidas de seguridad que implementas para proteger la información personal recopilada y alienta a los usuarios a tomar precauciones adicionales.</p>
        </section>

        <section>
            <h2>Derechos de los usuarios</h2>
            <p>Informa a los usuarios sobre sus derechos en relación con sus datos personales, como el derecho de acceder, corregir, eliminar o solicitar la limitación del procesamiento de sus datos.</p>
        </section>
    </div>
     
    </div>
          
    );
  }
}

export default PrivacyPage;