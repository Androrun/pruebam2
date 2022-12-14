"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReptilesController = void 0;
const common_1 = require("@nestjs/common");
const reptiles_service_1 = require("./reptiles.service");
const create_reptile_dto_1 = require("./dto/create-reptile.dto");
const update_reptile_dto_1 = require("./dto/update-reptile.dto");
let ReptilesController = class ReptilesController {
    constructor(reptilesService) {
        this.reptilesService = reptilesService;
    }
    create(createReptileDto) {
        return [this.reptilesService.create(createReptileDto)];
    }
    findAll() {
        return this.reptilesService.findAll();
    }
    findOne(id) {
        return this.reptilesService.findOne(+id);
    }
    update(id, updateReptileDto) {
        return this.reptilesService.update(+id, updateReptileDto);
    }
    remove(id) {
        return this.reptilesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reptile_dto_1.CreateReptileDto]),
    __metadata("design:returntype", void 0)
], ReptilesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReptilesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReptilesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_reptile_dto_1.UpdateReptileDto]),
    __metadata("design:returntype", void 0)
], ReptilesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReptilesController.prototype, "remove", null);
ReptilesController = __decorate([
    (0, common_1.Controller)('reptiles'),
    __metadata("design:paramtypes", [reptiles_service_1.ReptilesService])
], ReptilesController);
exports.ReptilesController = ReptilesController;
//# sourceMappingURL=reptiles.controller.js.map