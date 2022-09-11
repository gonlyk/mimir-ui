'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary = false, backgroundColor = undefined, size = 'medium', label, onClick }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (React__default["default"].createElement("button", { type: "button", className: ['storybook-button', `storybook-button--${size}`, mode].join(' '), style: backgroundColor ? { backgroundColor: backgroundColor } : undefined, onClick: onClick }, label));
};

const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (React__default["default"].createElement("header", null,
    React__default["default"].createElement("div", { className: "wrapper" },
        React__default["default"].createElement("div", null,
            React__default["default"].createElement("svg", { width: "32", height: "32", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg" },
                React__default["default"].createElement("g", { fill: "none", fillRule: "evenodd" },
                    React__default["default"].createElement("path", { d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z", fill: "#FFF" }),
                    React__default["default"].createElement("path", { d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z", fill: "#555AB9" }),
                    React__default["default"].createElement("path", { d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z", fill: "#91BAF8" }))),
            React__default["default"].createElement("h1", null, "Acme")),
        React__default["default"].createElement("div", null, user ? (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement("span", { className: "welcome" },
                "Welcome, ",
                React__default["default"].createElement("b", null, user.name),
                "!"),
            React__default["default"].createElement(Button, { size: "small", onClick: onLogout, label: "Log out" }))) : (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(Button, { size: "small", onClick: onLogin, label: "Log in" }),
            React__default["default"].createElement(Button, { primary: true, size: "small", onClick: onCreateAccount, label: "Sign up" })))))));

module.exports = Header;
