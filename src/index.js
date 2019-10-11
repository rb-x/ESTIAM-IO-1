import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Routes from "./Routes";
import LoginProvider from "./contexts/LoginContext";
import ProtectedRoute from "./components/ProtectedRoute";
import UnProtectedRoute from "./components/UnProtectedRoute";
import ReactDOM from "react-dom";
import GAListener from "./components/TrackerGA";
import "./styles.css";

// == INSCRIPTION IMPORT == //
const HomePage = lazy(() => import("./pages/Inscription/HomePage"));
const Inscription = lazy(() => import("./pages/Inscription/Registration"));
const Confirmation = lazy(() => import("./pages/Inscription/Confirm"));
const Connexion = lazy(() => import("./pages/Inscription/Login"));
const GeneralInformations = lazy(() =>
  import("./pages/Inscription/Step/GeneralInformations")
);
const GeneralInformationsPlace = lazy(() =>
  import("./pages/Inscription/Step/GeneralInformationsPlace")
);
const GenralInformationsEnd = lazy(() =>
  import("./pages/Inscription/Step/GenralInformationsEnd")
);
const CurrentSituation = lazy(() =>
  import("./pages/Inscription/Step/CurrentSituation")
);
const CurrentSituationInstitution = lazy(() =>
  import("./pages/Inscription/Step/CurrentSituationInstitution")
);
const CurrentSituationEnd = lazy(() =>
  import("./pages/Inscription/Step/CurrentSituationEnd")
);
const FormationWishes = lazy(() =>
  import("./pages/Inscription/Step/FormationWishes")
);
const FormationWishesInstitution = lazy(() =>
  import("./pages/Inscription/Step/FormationWishesInstitution")
);
const FormationWishesEnd = lazy(() =>
  import("./pages/Inscription/Step/FormationWishesEnd")
);
const AdditionalDocuments = lazy(() =>
  import("./pages/Inscription/Step/AdditionalDocuments")
);
const PasswordReset = lazy(() => import("./pages/Inscription/PasswordReset"));
const UserReset = lazy(() => import("./pages/Inscription/UserReset"));
const Recap = lazy(() => import("./pages/Inscription/Recap"));
const UnknownPage = lazy(() => import("./pages/Inscription/404.js"));

// == DASHBOARD IMPORT == //
const Tasks = lazy(() => import("./pages/Dashboard-User/pages/Tasks"));
const Dashboard = lazy(() => import("./pages/Dashboard-User/Dashboard"));
const ResultsGraph = lazy(() =>
  import("./pages/Dashboard-User/pages/ResultsGraph")
);
const Tutorials = lazy(() => import("./pages/Dashboard-User/pages/Tutorial"));

// == DASHBOARD ADMIN IMPORT == //
const DashboardAdmin = lazy(() => import("./pages/Dashboard-Admin/Homepage"));
const AnalyticsAdmin = lazy(() =>
  import("./pages/Dashboard-Admin/pages/Analytics")
);

function App() {
  return (
    <Suspense
      fallback={
        <div className="loader">
          <div className="outer" />
          <div className="middle" />
          <div className="inner" />
        </div>
      }
    >
      <LoginProvider>
        <Switch>
          <UnProtectedRoute exact path={Routes.HOME} component={HomePage} />
          <UnProtectedRoute
            exact
            path={Routes.REGISTER}
            component={Inscription}
          />
          <UnProtectedRoute
            exact
            path={Routes.MAILCONFIRMATION}
            component={Confirmation}
          />
          <UnProtectedRoute exact path={Routes.LOGIN} component={Connexion} />
          {/* Access should be based on Candidature Contexte synced with cache-DB */}
          <ProtectedRoute
            exact
            path={Routes.GENERAL_INFO}
            component={GeneralInformations}
          />
          <ProtectedRoute
            exact
            path={Routes.PERSONAL_INFO}
            component={GeneralInformationsPlace}
          />
          <ProtectedRoute
            exact
            path={Routes.END_INFO}
            component={GenralInformationsEnd}
          />
          <ProtectedRoute
            exact
            path={Routes.CURRENT_SITUATION}
            component={CurrentSituation}
          />
          <ProtectedRoute
            exact
            path={Routes.CURRENT_SITUATION_PREV_SCHOOL}
            component={CurrentSituationInstitution}
          />
          <ProtectedRoute
            exact
            path={Routes.CURRENT_SITUATION_END}
            component={CurrentSituationEnd}
          />
          <ProtectedRoute
            exact
            path={Routes.WISHES_FORMATION}
            component={FormationWishes}
          />
          <ProtectedRoute
            exact
            path={Routes.WISHES_CAMPUS}
            component={FormationWishesInstitution}
          />
          <ProtectedRoute
            exact
            path={Routes.WISHES_END}
            component={FormationWishesEnd}
          />
          <ProtectedRoute
            exact
            path={Routes.UPLOAD_FILE}
            component={AdditionalDocuments}
          />
          {/* Until here */}
          <UnProtectedRoute
            exact
            path={Routes.USER_RESET}
            component={UserReset}
          />
          <UnProtectedRoute
            exact
            path={Routes.PASSWORD_RESET}
            component={PasswordReset}
          />
          <ProtectedRoute
            exact
            path={Routes.RECAPITULATION}
            component={Recap}
          />
          <ProtectedRoute exact path={Routes.DASHBOARD} component={Dashboard} />
          <ProtectedRoute
            exact
            path={Routes.DASHBOARD_HELP}
            component={Tutorials}
          />
          <ProtectedRoute
            exact
            path={Routes.DASHBOARD_TASKS}
            component={Tasks}
          />
          <ProtectedRoute
            exact
            path={Routes.DASHBOARD_RESULTS}
            component={ResultsGraph}
          />
          <Route exact path={Routes.ADMIN} component={DashboardAdmin} />
          <Route
            exact
            path={Routes.ADMIN_ANALYTICS}
            component={AnalyticsAdmin}
          />
          <Route path="*" component={UnknownPage} />
        </Switch>
      </LoginProvider>
    </Suspense>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <GAListener trackingId="UA-149840700-1">
      <App />
    </GAListener>
  </BrowserRouter>,
  rootElement
);
