import {bootstrap} from 'angular2/platform/browser';
import {provide, Component, View} from 'angular2/core'
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {UserComponent} from './users/user/usercomponent'
import {UsersComponent} from './users/list/component'


@Component({
    selector: 'app',
    template: `
        <h1 class="text-center text-muted">Child Routes with Angular 2</h1>
         <div class="row">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', as: 'UsersList', component: UsersComponent },
    { path: '/users', as: 'Users', component: UsersComponent },
    { path: '/users/:name/...', as: 'User', component: UserComponent }
])

export class App {
    constructor(private router:Router) {
        this.router = router;
    }
}

bootstrap(App, [
    ROUTER_PROVIDERS,
    ROUTER_DIRECTIVES,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
]);