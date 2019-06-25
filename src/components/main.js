import React, { Component } from 'react';
import Form from "./form";
import LineTop from '../components/others/LineTop';
import VisionSection from '../components/others/VisionSection';
import MissionSection from '../components/others/MissionSection';
import WeSection from '../components/others/WeSection';
import ValuesTitle from '../components/others/ValuesTitle';
import ValueCard from '../components/others/ValueCard';

class Main extends Component {
  render() {
    return (
      <main>

        {/*Section of Service*/}
        <section id="servicesSection" className="intro">
          <h2 className="subtiitle" style={styles.subtitle}>SERVICIOS</h2>
          <div>
            <p style={styles.textJustify}>
              Somos una empresa generada e impulsada por gente joven y
              emprendedora, con ganas de hacer cosas positivas y diferentes por la
              sociedad e Iniciativa Pública y Privada brindando siempre un Servicio de Calidad Total.
            </p>
          </div>
        </section>

        {/*Section of Gallery*/}
        <div className="gallery">
          <div className="gallery-item-one"></div>
          <div className="gallery-item-two"></div>
          <div className="gallery-item-three"></div>
          <div className="gallery-item-four"></div>
          <div className="gallery-item-five"></div>
          <div className="gallery-item-six"></div>

        </div>

        {/*Section of company*/}
        <div id="WeSection">
          <WeSection/>
        </div>

        <div className="sections">
          {/*Section of Mision of company*/}
          <MissionSection />
          
          {/*Section of Vision of company*/}
          <VisionSection />
        </div>

        <LineTop/>

        {/*Section of Values of company*/}
        <ValuesTitle/>

        {/*Cards of values Grid*/}
        <div className="cards">
          <ValueCard icon={require('../images/values/idea.png')} content="Ambición y mejora continua integral." title="Innovación"/>
          <ValueCard icon={require('../images/values/peace.png')} content="Respeto y aprecio por la multiculturalidad." title="Respeto"/>
          <ValueCard icon={require('../images/values/teamwork.png')} content="Trabajo efectivo en equipo." title="Eficiencia"/>
          <ValueCard icon={require('../images/values/support.png')} content="Comunicación franca y efectiva." title="Comunicación"/>
          <ValueCard icon={require('../images/values/handshake.png')} content="Compramiso total con la empresa." title="Compromiso"/>
        </div>


        <section id="contact">
          <h2 className="contact-title">Contactanos</h2>
          <Form />
        </section>

      </main>
    );
  }
}

/* Styles of component*/
const styles = {
  textJustify: {
    textAlign: 'justify',
    paddingLeft: '30px'
  },
  subtitle: {
    paddingTop: '8px',
    paddingBottom: '8px'
  }
}

export default Main;
