"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlJwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../auth/auth.guard");
let GraphqlJwtAuthGuard = class GraphqlJwtAuthGuard extends auth_guard_1.AuthGuard {
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
};
GraphqlJwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], GraphqlJwtAuthGuard);
exports.GraphqlJwtAuthGuard = GraphqlJwtAuthGuard;
//# sourceMappingURL=graphql-jwt-auth.guard.js.map