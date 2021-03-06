import {Component, Injector} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router'

@Component({
    selector: 'user-jobs',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div>
      <h3>Jobs {{ user.name }}</h3>
      <a [routerLink]="['/Users']">Go to users list</a>
    </div>
    `
})

export class UserJobsComponent{
    user: Object;
    constructor(private router: Router, injector: Injector) {
        let params = injector.parent.parent.get(RouteParams);
        this.user = {
            name: params.get("name")
        }
    }
}