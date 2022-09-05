"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./Searchable.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useClickOutside = handler => {
  let domNode = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    let maybeHandler = event => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', maybeHandler);
    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });
  return domNode;
};

const SearchableBox = props => {
  const {
    darkTheme,
    children,
    title,
    alwaysOpen,
    items
  } = props;
  const [filteredItems, setFilteredItems] = (0, _react.useState)(items);
  let [isOpen, setIsOpen] = (0, _react.useState)(alwaysOpen || false);

  const handleFocus = e => {
    setIsOpen(true);
  };

  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  const handleSearch = e => {
    const {
      value
    } = e.target;
    const filtered = items.filter(item => {
      var _item$name;

      return ((_item$name = item.name) === null || _item$name === void 0 ? void 0 : _item$name.toLowerCase().indexOf(value.toLowerCase())) !== -1;
    });
    setFilteredItems(filtered);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: domNode,
    className: "".concat(darkTheme && 'dark')
  }, /*#__PURE__*/_react.default.createElement("input", {
    onFocus: e => handleFocus(e),
    type: "text",
    placeholder: title,
    className: "input",
    onChange: e => handleSearch(e)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "input__content ".concat(isOpen || alwaysOpen ? 'visible' : 'hidden')
  }, children(filteredItems)));
};

SearchableBox.propTypes = {
  darkTheme: _propTypes.default.bool,
  children: _propTypes.default.node,
  title: _propTypes.default.string,
  alwaysOpen: _propTypes.default.bool,
  items: _propTypes.default.array
};
var _default = SearchableBox;
exports.default = _default;