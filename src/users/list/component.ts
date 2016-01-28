import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'src/users/list/users.html'
})

export class UsersComponent{
    users: Array<Object>;
    constructor() {
        this.users = [
            {id: 1, name: 'user1'},
            {id: 2, name: 'user2'},
            {id: 3, name: 'user3'},
            {id: 4, name: 'user4'},
            {id: 5, name: 'user5'},
        ]
    }
}