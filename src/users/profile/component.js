System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var UserProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UserProfileComponent = (function () {
                function UserProfileComponent(router, injector) {
                    this.router = router;
                    var params = injector.parent.parent.get(router_1.RouteParams);
                    this.user = {
                        name: params.get("name")
                    };
                }
                UserProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'user-profile',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n    <div>\n      <h3>Profile {{ user.name }}</h3>\n      <a [routerLink]=\"['/Users']\">Go to users list</a>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, core_1.Injector])
                ], UserProfileComponent);
                return UserProfileComponent;
            })();
            exports_1("UserProfileComponent", UserProfileComponent);
        }
    }
});
//# sourceMappingURL=component.js.map