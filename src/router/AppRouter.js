import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import { GanbatteStudio } from '../pages/GanbatteStudio'
import { Orders } from "../pages/orders";
import { Requisitions } from "../pages/requisitions";
import { Layouts } from "../layouts/Layouts";
import { ProductsDetail }  from "../pages/productsDetail";
import { OrdersDetail }  from "../pages/ordersDetail";
import { RequisitionsDetail }  from "../pages/requisitionsDetail";
import { SuppliesForm } from "../pages/suppliesForm";
import { OrdersForm } from "../pages/ordersForm";
import { RequisitionsForm } from "../pages/requisitionsForm";
import { DetailsMovements } from "../pages/detailsMovements";
import { UpdateSupplie } from "../pages/updateSupplie";


export const AppRouter = () => {

    return (
        <Layouts>
        <Router>
            {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/orders" exact >
                    <Orders />
                </Route>
                <Route path="/requisitions" exact>
                    <Requisitions />
                </Route>
                <Route path="/products/:id" exact >
                    <ProductsDetail />
                </Route>
                <Route path="/products/delete/:id" exact >
                    <DetailsMovements />
                </Route>
                <Route path="/products/updateSupplie/:id" exact >
                   <UpdateSupplie />
                </Route>
                <Route path="/orders/:id" exact>
                    <OrdersDetail />
                </Route>
                <Route path="/requisitions/:id" exact >
                    <RequisitionsDetail />
                </Route>
                <Route path="/newSupplie" exact>
                    <SuppliesForm/>
                </Route>
                <Route path="/newOrder" exact >
                    <OrdersForm/>
                </Route>
                <Route path="/newRequisition" exact >
                    <RequisitionsForm/>
                </Route>
                <Route path="/" >
                    <GanbatteStudio />
                </Route>
            </Switch>
        </Router >
        </Layouts>
    );

}
