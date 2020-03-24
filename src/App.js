import React from "react";
import HomeScreen from "./screens/home-screen";
import ReportDetailsScreen from "./screens/report-details-screen";
import NewReportScreen from "./screens/new-report-screen";
import ReportsScreen from "./screens/reports-screen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import Splash from "./components/splash";
import configureStore from "./store/configure-store";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Layout from "./components/main-layout";
import Session from "./components/session";

const { persistor, store } = configureStore(); // Using a persisted store

function App() {
    return (

        <Provider store={ store }>
            <PersistGate loading={ <Splash message={ "Loading..." }/> } persistor={ persistor }>
                <Session>
                    <Router>
                        <Layout>
                            <div className="App">
                                <Switch>
                                    <Route path="/reports/new" exact={ true }>
                                        <NewReportScreen/>
                                    </Route>
                                    <Route path="/reports/:id" exact={ true }
                                           render={
                                               ({ match }) =>(<ReportDetailsScreen match={ match }/>)
                                           }/>
                                    <Route path="/reports" exact={ true }>
                                        <ReportsScreen/>
                                    </Route>
                                    <Route path="/">
                                        <HomeScreen/>
                                    </Route>
                                </Switch>
                            </div>
                        </Layout>
                    </Router>
                </Session>
            </PersistGate>
        </Provider>
    )
        ;

}

export default App;
