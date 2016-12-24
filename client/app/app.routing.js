"use strict";
const router_1 = require('@angular/router');
const dashboard_component_1 = require('./components/dashboard/dashboard.component');
const accounts_component_1 = require('./components/accounts/accounts.component');
const account_detail_component_1 = require('./components/accountDetail/account-detail.component');
const appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: account_detail_component_1.AccountDetailComponent
    },
    {
        path: 'accounts',
        component: accounts_component_1.AccountsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map