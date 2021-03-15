import { IonApp, IonPage, IonToolbar, IonButtons, IonTitle, IonBackButton, IonHeader } from '@ionic/react';
import React from 'react';
import Chart from '../../Chart/Chart';
import './Graph.css';

const Graph: React.FC = () => (
    <IonPage>

        <IonHeader>
            <IonToolbar>
                <IonTitle>
                    Graph page
                </IonTitle>
            </IonToolbar>
        </IonHeader>

    </IonPage>

);

export default Graph;
