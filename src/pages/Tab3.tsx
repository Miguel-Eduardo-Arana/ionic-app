// Tab3.tsx - Pestaña de Contacto
// Componente de Contacto mejorado con redes sociales.
// Muestra información de contacto (email, teléfono, redes sociales) y botones de acción.
// Los botones de redes sociales tienen colores distintivos y ancho controlado.

import { IonContent, IonHeader, IonPage, IonTitle,
         IonToolbar, IonCard, IonCardHeader, IonCardTitle,
         IonCardContent, IonList, IonItem, IonLabel, IonIcon,
         IonButton, IonGrid, IonRow, IonCol, IonButtons,
         IonMenuButton } from '@ionic/react';
import { mailOutline, callOutline, logoGithub, logoLinkedin,
         logoWhatsapp, logoFacebook,
         logoInstagram, logoTiktok } from 'ionicons/icons';
import './Tab3.css';

/* Componente Tab3 - Contacto */
const Tab3: React.FC = () => {
  const enviarCorreo = () => window.location.href = 'mailto:miguel.eduardo.arana@uneti.edu.ve?subject=Contacto desde la App';
  const abrirWhatsApp = () => window.open('https://wa.me/584122370549?text=Hola', '_blank');
  const abrirFacebook = () => window.open('https://facebook.com/migueleduardo.aranaabreu', '_blank');
  const abrirInstagram = () => window.open('https://instagram.com/miguel.eduardo.arana', '_blank');
  const abrirTikTok = () => window.open('https://tiktok.com/@miguel.eduardo.arana', '_blank');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start"><IonMenuButton /></IonButtons>
          <IonTitle>Contacto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="tab3-content">
        <div className="centered-wrapper">
          <IonCard className="contact-card">
            <IonCardHeader className="ion-text-center">
              <IonCardTitle>Información de Contacto</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem><IonIcon icon={mailOutline} slot="start" /><IonLabel>Email: miguel.eduardo.arana@soportechvzla.com.ve</IonLabel></IonItem>
                <IonItem><IonIcon icon={callOutline} slot="start" /><IonLabel>Teléfono: +58 412 2370549</IonLabel></IonItem>
                <IonItem><IonIcon icon={logoGithub} slot="start" /><IonLabel>GitHub: /Miguel-Eduardo-Arana</IonLabel></IonItem>
                <IonItem><IonIcon icon={logoLinkedin} slot="start" /><IonLabel>LinkedIn: /in/miguel-eduardo-arana-abreu-b86663103</IonLabel></IonItem>
              </IonList>

              <IonButton expand="block" onClick={enviarCorreo} style={{ '--background': '#FFFFFF', width: '90%', margin: '15px auto', '--border-radius': '30px', color: '#4a98ff', fontWeight: 'bold' } as React.CSSProperties}>
                Enviar Información Contacto
              </IonButton>

              <div style={{ marginTop: '24px'}}>
                <h2 className="social-title">Redes Sociales</h2>
                <IonGrid>
                  <IonRow className="ion-justify-content-center">
                    <IonCol size="6" sizeMd="4" style={{ display: 'flex', justifyContent: 'center' }}>
                      <IonButton onClick={abrirWhatsApp} style={{ '--background': '#25D366', width: '90%', margin: '5px', '--border-radius': '30px' } as React.CSSProperties}>
                        <IonIcon slot="start" icon={logoWhatsapp} /> WhatsApp
                      </IonButton>
                    </IonCol>
                    <IonCol size="6" sizeMd="4" style={{ display: 'flex', justifyContent: 'center' }}>
                      <IonButton onClick={abrirFacebook} style={{ '--background': '#1877F2', width: '90%', margin: '5px', '--border-radius': '30px' } as React.CSSProperties}>
                        <IonIcon slot="start" icon={logoFacebook} /> Facebook
                      </IonButton>
                    </IonCol>
                    <IonCol size="6" sizeMd="4" style={{ display: 'flex', justifyContent: 'center' }}>
                      <IonButton onClick={abrirInstagram} style={{ '--background': '#E4405F', width: '90%', margin: '5px', '--border-radius': '30px' } as React.CSSProperties}>
                        <IonIcon slot="start" icon={logoInstagram} /> Instagram
                      </IonButton>
                    </IonCol>
                    <IonCol size="6" sizeMd="4" style={{ display: 'flex', justifyContent: 'center' }}>
                      <IonButton onClick={abrirTikTok} className="tiktok-btn" style={{ width: '90%', margin: '5px', '--border-radius': '30px' } as React.CSSProperties}>
                        <IonIcon slot="start" icon={logoTiktok} /> TikTok
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;