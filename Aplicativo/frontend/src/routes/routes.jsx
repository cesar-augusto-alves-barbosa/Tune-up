import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserRegistration from "../pages/UserRegistration";
import HomeMechanic from "../pages/HomeMechanic";
import LoginSystemPostOwner from "../pages/LoginSystemPostOwner";
import LoginSystemPostUser from "../pages/LoginSystemPostUser";
import HomeUser from "../pages/HomeUser";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Home_System from "../pages/Home_System";
import Dashboard from "../pages/Dashboard";
import SearchResult from "../pages/SearchResult";
import ProfileWorkshop from "../pages/ProfileWorkshop";
import RegistrationService from "../pages/RegistrationService"
import ServiceOrder from "../pages/ServiceOrder";
import ServiceRequest from "../pages/ServiceRequest";
import CustomerView from "../pages/CustomerView";
import StaffVisualization from "../pages/StaffVisualization";
import ModalCustomer from "../pages/ModalCustomer";
import ModalStaff from "../pages/ModalStaff";
import ModalService from "../pages/ModalService";
import RegisterEmployee from "../pages/ResgisterEmployee";
import OwnerRegistration from "../pages/OwnerRegistration";
import CustomerRegistration from "../pages/CustomerRegistration";
import WorkshopRegistration from "../pages/WorkshopRegistration";



export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="home" />
                </Route>
                <Route path="/workshop-registration" component={WorkshopRegistration} />
                <Route path="/customer-registration" component={CustomerRegistration} />
                <Route path="/owner-registration" component={OwnerRegistration} />
                <Route path="/home" component={Home} />
                <Route path="/user-registration" component={UserRegistration} />
                <Route path="/home-mechanic" component={HomeMechanic} />
                <Route path="/home-user" component={HomeUser} />
                <Route path="/proprietarios/login" component={LoginSystemPostOwner} />
                <Route path="/usuarios/login" component={LoginSystemPostUser} />
                <Route path="/home-system" component={Home_System} />
                {/* <Route path="/dashboard" component={Dashboard} /> */}
                <Route path="/search-result" component={SearchResult} />
                <Route path="/profile-workshop/:id" component={ProfileWorkshop} />
                <Route path="/ordem-de-servico/:idRemover?" component={ServiceRequest} />
                <Route path="/visualizacao-cliente" component={CustomerView} />
                <Route path="/visualizacao-funcionario" component={StaffVisualization} />
                <Route path="/modal-cliente/:id" component={ModalCustomer} />
                <Route path="/modal-funcionario/:id" component={ModalStaff} />
                <Route path="/modal-ordem-de-servico/:id/:fk/:fkVeiculo" component={ModalService} />
                <Route path="/employee-registration" component={RegisterEmployee} />
                <Route path="/registration-service" component={RegistrationService} />
                <Route path="/service-order" component={ServiceOrder} />
                <Route path="*" component={NotFound} />

            </Switch>
        </Router>
    )
}