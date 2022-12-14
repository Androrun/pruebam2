"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReptilesModule = void 0;
const common_1 = require("@nestjs/common");
const reptiles_service_1 = require("./reptiles.service");
const reptiles_controller_1 = require("./reptiles.controller");
let ReptilesModule = class ReptilesModule {
};
ReptilesModule = __decorate([
    (0, common_1.Module)({
        controllers: [reptiles_controller_1.ReptilesController],
        providers: [reptiles_service_1.ReptilesService]
    })
], ReptilesModule);
exports.ReptilesModule = ReptilesModule;
//# sourceMappingURL=reptiles.module.js.map