"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./ToggleTheme.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ToggleTheme = props => {
  const {
    theme,
    setTheme
  } = props;

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    className: "toggle",
    onClick: () => handleToggle()
  }, theme));
};

var _default = ToggleTheme;
exports.default = _default;