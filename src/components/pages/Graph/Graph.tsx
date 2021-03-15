import { IonApp, IonPage, IonToolbar, IonButtons, IonTitle, IonBackButton } from '@ionic/react';
import React from 'react';
import Chart from '../../Chart/Chart';
import './Graph.css';

const Graph: React.FC = () => (
    <IonApp>
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/home" />
                </IonButtons>
                <IonTitle>Title of page</IonTitle>
            </IonToolbar>
            

        </IonPage>
    </IonApp>
);

export default Graph;
