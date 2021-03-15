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
import { fetchData } from './api';
import { Cards, Chart, CountryPicker } from './components';
import Home from './components/pages/Home/';
import Graph from './components/pages/Graph/Graph';
import Stats from './components/pages/Stats/Stats';
import { earth, statsChart, informationCircle } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from "react-router-dom";

class App extends React.Component {

    state = {
        data: {},

    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        console.log(fetchedData);
        this.setState({ data: fetchedData })
    }

    render() {
        const { data } = this.state;
        return (
            <IonApp>
                <IonReactRouter>
                    <IonContent>
                        <IonTabs>

                            <IonRouterOutlet>
                                <Route path="/home" component={Home} exact />
                                <Route path="/graph" component={Graph} exact />
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

            // <Router>
            //     <Route exact path="/home" component={Home}/>
            //     <Route exact path="/stats">
            //         <Stats props={data} />
            //     </Route>
            //     <Route exact path="/graph" component={Graph}/>
            //     <Route exact path="/" render={ () => <Redirect to="/home" />} />

            // </Router>
        );
    }
}

export default App;
