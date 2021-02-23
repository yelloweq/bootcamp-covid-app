import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { IonTabs, IonTabBar, IonTabButton, IonBadge } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>landing page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      <IonCard>
          <IonCardHeader>
          <img src="mohanad-img.jpg"></img>
            <IonCardSubtitle>Welcome</IonCardSubtitle>
            <IonCardTitle>Amazing Canoes </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
           <p>Amazing Canoes consists of a small developers team that aim to rise awareness on the rising number of Coronavirus cases around the world.</p>
           <br></br>
           <p> Here you can find reliable data on Covid-19 and some advice on how to protect yourself and the people around you. Our goal is to help and share information to the public in order to highlight the danger of this pandamic and save lives.  </p>
      </IonCardContent>
        </IonCard>

        
        <IonButton expand="block" fill="outline">Outline + Block</IonButton>
        <IonButton expand="block" fill="outline">Outline + Block</IonButton>
        
        
      

      
      </IonContent>
    </IonPage>
  );
};

export default Home;
