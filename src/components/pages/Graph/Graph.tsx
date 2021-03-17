import { IonApp, IonPage, IonToolbar, IonButtons, IonTitle, IonBackButton, IonHeader, IonContent } from '@ionic/react';
import React from 'react';
import Chart from '../../Chart/Chart';
import './Graph.css';

const Graph: React.FC = () => (
    <IonPage>

        <IonHeader>
            <IonToolbar mode="ios">
                <IonTitle>
                    Graph page
                </IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            

        </IonContent>
    </IonPage>

);

export default Graph;
