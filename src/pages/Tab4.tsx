// Tab4.tsx - Pestaña "Acerca de"
// Información sobre la aplicación, el desarrollador y la universidad.
// Mismo estilo de tarjeta (card) que Tab1 para mantener coherencia visual.

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonMenuButton, IonList, IonItem, IonLabel } from '@ionic/react';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start"><IonMenuButton /></IonButtons>
          <IonTitle>Acerca de</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="tab4-content">
        <div className="logo-uneti-container">
          <img src="/logo-uneti.png" alt="Logo UNETI" className="logo-uneti" />
        </div>
        <IonCard className="about-card">
          <IonCardHeader className="ion-text-center">
            <IonCardTitle>Mi Ionic App</IonCardTitle>
            <IonCardTitle>Desarrollada por:</IonCardTitle>
            <IonCardTitle>Miguel Eduardo Arana - C.I. 6.914.378</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-center">
            <IonList>
              <IonItem><IonLabel><strong>Solución implementada con Ionic + React</strong></IonLabel></IonItem>
              <IonItem><IonLabel><strong>Para la UC Programación 3 M2 - Evaluación 1</strong></IonLabel></IonItem>
              <IonItem><IonLabel><strong>Docente Guía: Prof. Carlos Marquez</strong></IonLabel></IonItem>
              <IonItem><IonLabel><strong>Contiene menú lateral y pestañas inferiores para navegar</strong></IonLabel></IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;