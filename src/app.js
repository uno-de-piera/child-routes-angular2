System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', './users/user/usercomponent', './users/list/component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, router_1, usercomponent_1, component_1;
    var App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (usercomponent_1_1) {
                usercomponent_1 = usercomponent_1_1;
            },
            function (component_1_1) {
                component_1 = component_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(router) {
                    this.router = router;
                    this.router = router;
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n        <h1 class=\"text-center text-muted\">Child Routes with Angular 2</h1>\n         <div class=\"row\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', as: 'UsersList', component: component_1.UsersComponent },
                        { path: '/users', as: 'Users', component: component_1.UsersComponent },
                        { path: '/users/:name/...', as: 'User', component: usercomponent_1.UserComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], App);
                return App;
            })();
            exports_1("App", App);
            browser_1.bootstrap(App, [
                router_1.ROUTER_PROVIDERS,
                router_1.ROUTER_DIRECTIVES,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map