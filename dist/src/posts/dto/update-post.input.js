"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostInput = void 0;
const create_post_input_1 = require("./create-post.input");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdatePostInput extends (0, mapped_types_1.PartialType)(create_post_input_1.CreatePostInput) {
}
exports.UpdatePostInput = UpdatePostInput;
//# sourceMappingURL=update-post.input.js.map