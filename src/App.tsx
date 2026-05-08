// App.tsx - documentado
// Este archivo configura las rutas principales y la barra de pestañas.
// Las tres pestañas representan los menús solicitados: Inicio, Información personal y Contacto.
// Se importan iconos de 'ionicons' para mejorar la interfaz.
// La ruta raíz redirige a '/tab1' (Inicio).import { Redirect, Route } from 'react-router-dom';
// En App.tsx Se modificaron los iconos y etiquetas de las pestañas para cumplir
// con los tres menús requeridos: Inicio, Información personal y Contacto. 

// Incluye menú lateral y barra inferior con 4 pestañas: Inicio, Información personal, Contacto, Acerca de.

import { Redirect, Route } from 'react-router-dom';
import {
  IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar,
  IonTabButton, IonTabs, IonMenu, IonHeader, IonToolbar,
  IonTitle, IonContent, IonList, IonItem, setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, personOutline, mailOutline, build, informationCircleOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';

/* CSS de Ionic */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* Menú lateral */}
      <IonMenu contentId="main-content" menuId="main-menu">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Menú</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="/info" routerDirection="forward">
              <IonIcon icon={personOutline} slot="start" />
              <IonLabel>Información personal</IonLabel>
            </IonItem>
            <IonItem routerLink="/contacto" routerDirection="forward">
              <IonIcon icon={mailOutline} slot="start" />
              <IonLabel>Contacto</IonLabel>
            </IonItem>
            <IonItem routerLink="/acerca_de" routerDirection="forward">
              <IonIcon icon={informationCircleOutline} slot="start" />
              <IonLabel>Acerca de</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Pestañas inferiores */}
      <IonTabs>
        <IonRouterOutlet id="main-content">
          <Route exact path="/inicio" component={Tab1} />
          <Route exact path="/info" component={Tab2} />
          <Route exact path="/contacto" component={Tab3} />
          <Route exact path="/acerca_de" component={Tab4} />
          <Route exact path="/">
            <Redirect to="/inicio" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="inicio" href="/inicio">
            <IonIcon icon={homeOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="info" href="/info">
            <IonIcon icon={personOutline} />
            <IonLabel>Información personal</IonLabel>
          </IonTabButton>
          <IonTabButton tab="contacto" href="/contacto">
            <IonIcon icon={mailOutline} />
            <IonLabel>Contacto</IonLabel>
          </IonTabButton>
          <IonTabButton tab="acerca" href="/acerca_de">
            <IonIcon icon={informationCircleOutline} />
            <IonLabel>Acerca de</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;