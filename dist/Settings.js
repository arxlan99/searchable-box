"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Settings = props => {
  const {
    setIsAlwaysOpen,
    setTheme
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "settings__container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "settings__container__item"
  }, /*#__PURE__*/_react.default.createElement("div", null, "Title:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Enter title",
    defaultValue: 'Type to search',
    onChange: e => props.setTitle(e.target.value)
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "settings__container__item"
  }, /*#__PURE__*/_react.default.createElement("div", null, "Theme:"), /*#__PURE__*/_react.default.createElement("select", {
    onChange: e => {
      setTheme(e.target.value === 'dark' ? true : false);
    }
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "light"
  }, "Light"), /*#__PURE__*/_react.default.createElement("option", {
    value: "dark"
  }, "Dark"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "settings__container__item"
  }, /*#__PURE__*/_react.default.createElement("div", null, "Always Open:"), /*#__PURE__*/_react.default.createElement("input", {
    defaultChecked: true,
    type: "checkbox",
    onChange: e => {
      setIsAlwaysOpen(e.target.checked);
    }
  })));
};

Settings.propTypes = {
  setIsAlwaysOpen: _propTypes.default.func,
  setTheme: _propTypes.default.func,
  setTitle: _propTypes.default.func
};
var _default = Settings;
exports.default = _default;