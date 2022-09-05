"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Searchable.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BoxItem = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "box__item"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "box__item_title"
  }, children));
};

BoxItem.propTypes = {
  children: _propTypes.default.node
};
var _default = BoxItem;
exports.default = _default;