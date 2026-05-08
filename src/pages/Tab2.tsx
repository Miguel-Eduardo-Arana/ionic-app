// Tab2.tsx - Pestaña de Información personal
// Componente de Información personal.
// Incluye un avatar (imagen de perfil) y una lista con datos del usuario.
// Los datos son estáticos para fines de demostración.

import { IonContent,
         IonHeader, 
         IonPage, 
         IonTitle, 
         IonToolbar, 
         IonButtons, 
         IonMenuButton, 
         IonCard, IonCardHeader, 
         IonCardTitle, 
         IonCardContent, 
         IonList, 
         IonItem, 
         IonLabel } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start"><IonMenuButton /></IonButtons>
          <IonTitle>Información personal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="tab2-content">
        <div className="foto-container"> 
          <img src="mi-perfil.png" alt="Foto de perfil" className="avatar-image" />
        </div>
        <IonCard className="info-card">
          <IonCardHeader className="ion-text-center">
            <IonCardTitle>Datos Personales</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem><IonLabel><strong>Nombre:</strong> Miguel Eduardo Arana</IonLabel></IonItem>
              <IonItem><IonLabel><strong>Ocupación:</strong> Soporte Técnico Especializado</IonLabel></IonItem>
              <IonItem><IonLabel><strong>Ciudad:</strong> Caracas, Venezuela</IonLabel></IonItem>
              <IonItem><IonLabel><strong>Hobbies:</strong> Virtualización, Cloud, Código Abierto</IonLabel></IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;