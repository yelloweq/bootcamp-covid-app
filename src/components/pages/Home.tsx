import React from 'react';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonMenu,
  IonList,
  IonIcon,
  IonListHeader,
  IonMenuToggle,
  IonLabel,
  IonPage,
  IonButtons,
  IonButton,
  IonItem
} from '@ionic/react';

import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

import { menu, home } from 'ionicons/icons'

import landingpage from '../resources/images/landingpage.jpg';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './Home.css';

/* Theme variables */
import '../theme/variables.css';
const Home: React.FC = () => (
  <IonApp>
    <IonMenu content-id="main-content">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonListHeader>
            Navigate
        </IonListHeader>
          <IonMenuToggle auto-hide="false">
            <IonItem button>
              <IonIcon slot="start" icon={home}></IonIcon>
              <IonLabel>
                Home
            </IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>

    <IonPage className="ion-page" id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuToggle>
              <IonButton>
                <IonIcon slot="icon-only" icon={menu}></IonIcon>
              </IonButton>
            </IonMenuToggle>
          </IonButtons>
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Amazing Canoes</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p className="sometext">Amazing Canoes consists of a small developers team that aim to rise awareness on the rising number of Coronavirus cases around the world.</p>
            <br></br>
            <p> Here you can find reliable data on Covid-19 and some advice on how to protect yourself and the people around you. Our goal is to help and share information to the public in order to highlight the danger of this pandamic and save lives.  </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  </IonApp>
);

export default Home;
