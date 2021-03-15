import { IonApp, IonPage, IonToolbar, IonButtons, IonTitle, IonBackButton } from '@ionic/react';
import React from 'react';
import Cards from '../../Cards/Cards';
import './Stats.css';

const Stats: React.FC = (props) => (
    <IonApp>
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/home" />
                </IonButtons>
                <IonTitle>Global Statistics</IonTitle>
            </IonToolbar>
            <Cards data={props} />

        </IonPage>
    </IonApp>

);

export default Stats;
