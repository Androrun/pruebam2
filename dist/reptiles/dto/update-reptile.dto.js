"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReptileDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_reptile_dto_1 = require("./create-reptile.dto");
class UpdateReptileDto extends (0, mapped_types_1.PartialType)(create_reptile_dto_1.CreateReptileDto) {
}
exports.UpdateReptileDto = UpdateReptileDto;
//# sourceMappingURL=update-reptile.dto.js.map