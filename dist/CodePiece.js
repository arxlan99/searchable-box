"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CodePiece = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "codepiece__container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "code__block"
  }, /*#__PURE__*/_react.default.createElement("div", null, "import react-searchable-component from '@arxlan99/react-searchable-component';"), /*#__PURE__*/_react.default.createElement("div", null, "\n          const array = [\n            {\n              id: 1,\n              name: 'Youtube',\n              imageUrl: 'https://www.youtube.com/favicon.ico',\n            },\n            {\n              id: 2,\n              name: 'Facebook',\n              imageUrl: 'https://www.facebook.com/favicon.ico',\n            },\n            {\n              id: 3,\n              name: 'Twitter',\n              imageUrl: 'https://www.twitter.com/favicon.ico',\n            },\n            {\n              id: 4,\n              name: 'Instagram',\n              imageUrl: 'https://www.instagram.com/favicon.ico',\n            },\n            {\n              id: 5,\n              name: 'Reddit',\n              imageUrl: 'https://www.reddit.com/favicon.ico',\n            },\n          ];\n        "), /*#__PURE__*/_react.default.createElement("div", null, " <SearchableBox\n            darkTheme={theme}\n            placeholder\n            title={title}\n            items={array}\n            alwaysOpen={isAlwaysOpen}\n          >\n            {(items) =>\n              items.map((item, index) => (\n                <BoxItem key={index}>\n                  <div>\n                    <img src={item.imageUrl} alt=\"\" width={22} />\n                  </div>\n                  <div>{item.name}</div>\n                </BoxItem>\n              ))\n            }\n         </SearchableBox>")));
};

var _default = CodePiece;
exports.default = _default;