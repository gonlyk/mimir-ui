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

const Page = () => {
    const [user, setUser] = React__default["default"].useState();
    return (React__default["default"].createElement("article", null,
        React__default["default"].createElement(Header, { user: user, onLogin: () => setUser({ name: 'Jane Doe' }), onLogout: () => setUser(undefined), onCreateAccount: () => setUser({ name: 'Jane Doe' }) }),
        React__default["default"].createElement("section", null,
            React__default["default"].createElement("h2", null, "Pages in Storybook"),
            React__default["default"].createElement("p", null,
                "We recommend building UIs with a",
                ' ',
                React__default["default"].createElement("a", { href: "https://componentdriven.org", target: "_blank", rel: "noopener noreferrer" },
                    React__default["default"].createElement("strong", null, "component-driven")),
                ' ',
                "process starting with atomic components and ending with pages."),
            React__default["default"].createElement("p", null, "Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"),
            React__default["default"].createElement("ul", null,
                React__default["default"].createElement("li", null, "Use a higher-level connected component. Storybook helps you compose such data from the \"args\" of child component stories"),
                React__default["default"].createElement("li", null, "Assemble data in the page component from your services. You can mock these services out using Storybook.")),
            React__default["default"].createElement("p", null,
                "Get a guided tutorial on component-driven development at",
                ' ',
                React__default["default"].createElement("a", { href: "https://storybook.js.org/tutorials/", target: "_blank", rel: "noopener noreferrer" }, "Storybook tutorials"),
                ". Read more in the",
                ' ',
                React__default["default"].createElement("a", { href: "https://storybook.js.org/docs", target: "_blank", rel: "noopener noreferrer" }, "docs"),
                "."),
            React__default["default"].createElement("div", { className: "tip-wrapper" },
                React__default["default"].createElement("span", { className: "tip" }, "Tip"),
                " Adjust the width of the canvas with the",
                ' ',
                React__default["default"].createElement("svg", { width: "10", height: "10", viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" },
                    React__default["default"].createElement("g", { fill: "none", fillRule: "evenodd" },
                        React__default["default"].createElement("path", { d: "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z", id: "a", fill: "#999" }))),
                "Viewports addon in the toolbar"))));
};

module.exports = Page;
