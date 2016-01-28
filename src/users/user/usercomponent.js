System.register(['angular2/core', 'angular2/router', '../jobs/component', '../profile/component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, component_1, component_2;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (component_1_1) {
                component_1 = component_1_1;
            },
            function (component_2_1) {
                component_2 = component_2_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent() {
                }
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'user',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n        <h2 class=\"text-center text-muted\">User Component</h2>\n        <router-outlet></router-outlet>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/jobs', as: 'UserJobsComponent', component: component_1.UserJobsComponent },
                        { path: '/profile', as: 'UserProfileComponent', component: component_2.UserProfileComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], UserComponent);
                return UserComponent;
            })();
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=usercomponent.js.map