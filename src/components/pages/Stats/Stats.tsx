import { IonApp, IonPage, IonToolbar, IonButtons, IonTitle, IonBackButton, useIonViewWillEnter, IonButton, IonIcon, IonLabel } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import Cards from '../../Cards/Cards';
import { fetchData } from '../../../api'
import { refresh } from 'ionicons/icons';
import './Stats.css';

const Stats: React.FC = (props) => {

    interface dataStructure {
        confirmed: number;
        recovered: number;
        deaths: number;
        lastUpdate: string;
    }
    const [data, setData] = useState<dataStructure | undefined>(undefined);

    return (
        <IonPage>
            <IonToolbar>
                <IonButtons slot="end">
                    <IonButton onClick={() => {
                        fetchData().then((res) => {
                            setData(res);
                        })
                    }}>
                        <IonIcon slot="icon-only" icon={refresh} />
                    </IonButton>
                </IonButtons>
                <IonTitle>Global Statistics</IonTitle>
            </IonToolbar>
            <Cards props={props} update={data} />
            {/* Data in cards needs to update on button click! */}
        </IonPage>
    );
};

export default Stats;
