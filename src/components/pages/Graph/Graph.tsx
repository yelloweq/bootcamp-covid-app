import { IonApp, IonPage, IonToolbar, IonButtons, IonTitle, IonBackButton } from '@ionic/react';
import React from 'react';
import Charting from '../../Chart/Chart';
import './Graph.css';

import * as HighCharts from 'highcharts';

const Graph: React.FC = (props) => (

    <IonApp>
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/home" />
                </IonButtons>
                <IonTitle>Local graph of COVID</IonTitle>
            </IonToolbar>
            <Charting data={props}></Charting>
        </IonPage>
    </IonApp>
);

export default Graph;
