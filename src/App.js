import React from 'react';
import {
    IonApp,
    IonContent,
    IonLabel,
    IonPage,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonRouterOutlet,
    IonIcon
} from '@ionic/react';

import styles from './App.module.css';
import { fetchData, graphData } from './api';
import Home from './components/pages/Home/';
import Graph from './components/pages/Graph/Graph';
import Stats from './components/pages/Stats/Stats';
import { earth, statsChart, informationCircle } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from "react-router-dom";

class App extends React.Component {

    state = {
        data: {},

        // (IBN) Can't think of a better name
        graphData: {},

    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        console.log(fetchedData);
        this.setState({ data: fetchedData })

        // (IBN) Get data for Graph page
        const fetchedDataForGraph = await graphData();
        console.log(fetchedDataForGraph);
        this.setState({ graphData: fetchedDataForGraph })
    }

    render() {
        const { data, graphData } = this.state;
        return (
            <IonApp>
                <IonReactRouter>
                    <IonContent>
                        <IonTabs>

                            <IonRouterOutlet>
                                <Route path="/home" component={Home} exact />
                                <Route path="/graph" exact>
                                    <Graph props={graphData} />
                                </Route>
                                <Route path="/stats" exact>
                                    <Stats props={data} />
                                </Route>
                                <Redirect from="/" to="/home" exact />
                            </IonRouterOutlet>

                            <IonTabBar slot="bottom">

                                <IonTabButton tab="graph" href="/graph">
                                    <IonIcon icon={statsChart}></IonIcon>
                                
                                </IonTabButton>
                                <IonTabButton tab="home" href="/home">
                                    <IonIcon icon={informationCircle}></IonIcon>
                                   
                                </IonTabButton>
                                <IonTabButton tab="stats" href="/stats">
                                    <IonIcon icon={earth}></IonIcon>
                                    
                                </IonTabButton>
                            </IonTabBar>

                        </IonTabs>
                    </IonContent>
                </IonReactRouter>
            </IonApp>
        );
    }
}

export default App;
