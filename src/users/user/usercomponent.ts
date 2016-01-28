import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'
import {UserJobsComponent} from '../jobs/component'
import {UserProfileComponent} from '../profile/component'


@Component({
    selector: 'user',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <h2 class="text-center text-muted">User Component</h2>
        <router-outlet></router-outlet>
    `
})

@RouteConfig([
    { path: '/jobs', as: 'UserJobsComponent', component: UserJobsComponent },
    { path: '/profile', as: 'UserProfileComponent', component: UserProfileComponent }
])

export class UserComponent{

}