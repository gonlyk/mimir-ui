'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 
 * @param {{
 *     children: JSX.Element
 *     theme: 'mimir-ui__standard'
 * }} param0 
 * @returns 
 */
function StyleProvider(_ref) {
  var children = _ref.children,
      theme = _ref.theme;
  return /*#__PURE__*/React.createElement("div", {
    className: theme
  }, children);
}

exports.StyleProvider = StyleProvider;
