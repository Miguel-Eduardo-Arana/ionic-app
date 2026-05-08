// Tab1.tsx - Pestaña de Inicio
// Componente de la pestaña Inicio.
// Muestra una tarjeta con imágen, mensaje de bienvenida y una breve descripción de la app.
// No contiene lógica adicional, solo presentación.

import { IonContent,
         IonHeader,
         IonPage, 
         IonTitle, 
         IonToolbar, 
         IonCard, 
         IonCardHeader, 
         IonCardTitle, 
         IonCardContent, 
         IonButtons, 
         IonMenuButton } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start"><IonMenuButton /></IonButtons>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="tab1-content">
        <div className="logo-container">
          <img src="/Soporte_Técnico.png" alt="Logo Soporte Técnico" className="logo-image" />
        </div>
        <div className="message-container">
          <IonCard className="message-card">
            <IonCardHeader className="ion-text-center">
              <IonCardTitle className="card-title">SoporTechVzla</IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="ion-text-center">
              <p className="message-text">Bienvenidos a Nuestro Site</p>
              <p className="message-text">Soporte Técnico Especializado</p>
              <p className="message-text">Atención 24x7</p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;