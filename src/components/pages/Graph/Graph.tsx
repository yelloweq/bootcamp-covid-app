import { IonApp, IonPage, IonToolbar, IonButtons, IonTitle, IonBackButton } from '@ionic/react';
import React from 'react';
import Chart from '../../Chart/Chart';
import './Graph.css';

const Graph: React.FC = (props) => (

    <IonApp>
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/home" />
                </IonButtons>
                <IonTitle>Local graph of COVID</IonTitle>
            </IonToolbar>
            <Chart data={props}></Chart>
        </IonPage>
    </IonApp>
);

export default Graph;
