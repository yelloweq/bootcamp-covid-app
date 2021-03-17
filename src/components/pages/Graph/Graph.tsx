import { IonApp, IonPage, IonToolbar, IonButtons, IonTitle, IonBackButton, IonHeader, IonContent } from '@ionic/react';
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
        </IonHeader>

        <IonContent>
            
<<<<<<< HEAD

        </IonContent>
    </IonPage>

=======
            <Chart data={props}></Chart>
        </IonPage>
    </IonApp>
>>>>>>> ad7fec6 (Updated API and updated app.js to link new data)
);

export default Graph;
