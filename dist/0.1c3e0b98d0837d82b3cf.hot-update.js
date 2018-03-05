webpackHotUpdate(0,{

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _auth = __webpack_require__(60);\n\nvar _pubsubJs = __webpack_require__(8);\n\nvar _pubsubJs2 = _interopRequireDefault(_pubsubJs);\n\n__webpack_require__(62);\n\nvar _router = __webpack_require__(63);\n\nvar _router2 = _interopRequireDefault(_router);\n\nvar _reactRouterDom = __webpack_require__(11);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/*import DashBoard from './components/layout/Dashboard';\nimport Landing from './components/layout/Landing'; */\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = {\n      \"isLoggedIn\": window.localStorage.getItem('isLoggedIn')\n    };\n    _this.auth = new _auth.Auth();\n    _this.auth.validateToken(function () {\n      this.props.history.push(\"/login\");\n    });\n\n    _this.mySubscriber = _this.mySubscriber.bind(_this);\n    _pubsubJs2.default.subscribe('IS_LOGIN', _this.mySubscriber);\n\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: 'mySubscriber',\n    value: function mySubscriber(msg, data) {\n      if (data.status) {\n        window.localStorage.setItem('accessToken', data.token);\n        window.localStorage.setItem('userid', data.userid);\n        window.localStorage.setItem('isLoggedIn', true);\n      } else {\n        window.localStorage.removeItem('accessToken');\n        window.localStorage.removeItem('userid');\n        window.localStorage.removeItem('isLoggedIn');\n      }\n      this.isLoggedIn();\n    }\n  }, {\n    key: 'isLoggedIn',\n    value: function isLoggedIn() {\n      var boolFlag = window.localStorage.getItem('isLoggedIn');\n      this.setState({\n        isLoggedIn: boolFlag !== null && boolFlag !== '' ? JSON.parse(boolFlag) : false\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_router2.default, { islogin: this.state.isLoggedIn })\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = (0, _reactRouterDom.withRouter)(App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0FwcC5qcz9hMGY1Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXV0aCIsInZhbGlkYXRlVG9rZW4iLCJoaXN0b3J5IiwicHVzaCIsIm15U3Vic2NyaWJlciIsImJpbmQiLCJzdWJzY3JpYmUiLCJtc2ciLCJkYXRhIiwic3RhdHVzIiwic2V0SXRlbSIsInRva2VuIiwidXNlcmlkIiwicmVtb3ZlSXRlbSIsImlzTG9nZ2VkSW4iLCJib29sRmxhZyIsInNldFN0YXRlIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBR0E7OztJQUdNQSxHOzs7QUFFSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1ZBLEtBRFU7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYLG9CQUFjQyxPQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE2QixZQUE3QjtBQURILEtBQWI7QUFHQSxVQUFLQyxJQUFMLEdBQVksZ0JBQVo7QUFDQSxVQUFLQSxJQUFMLENBQVVDLGFBQVYsQ0FBeUIsWUFBWTtBQUNsQyxXQUFLTixLQUFMLENBQVdPLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLFFBQXhCO0FBQ0YsS0FGRDs7QUFJQyxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsdUJBQU9DLFNBQVAsQ0FBa0IsVUFBbEIsRUFBOEIsTUFBS0YsWUFBbkM7O0FBWmdCO0FBY2xCOzs7O2lDQUVZRyxHLEVBQUtDLEksRUFBTTtBQUN0QixVQUFJQSxLQUFLQyxNQUFULEVBQWlCO0FBQ2ZaLGVBQU9DLFlBQVAsQ0FBb0JZLE9BQXBCLENBQTZCLGFBQTdCLEVBQTRDRixLQUFLRyxLQUFqRDtBQUNBZCxlQUFPQyxZQUFQLENBQW9CWSxPQUFwQixDQUE2QixRQUE3QixFQUF1Q0YsS0FBS0ksTUFBNUM7QUFDQWYsZUFBT0MsWUFBUCxDQUFvQlksT0FBcEIsQ0FBNkIsWUFBN0IsRUFBMkMsSUFBM0M7QUFDRCxPQUpELE1BSU87QUFDTGIsZUFBT0MsWUFBUCxDQUFvQmUsVUFBcEIsQ0FBZ0MsYUFBaEM7QUFDQWhCLGVBQU9DLFlBQVAsQ0FBb0JlLFVBQXBCLENBQWdDLFFBQWhDO0FBQ0FoQixlQUFPQyxZQUFQLENBQW9CZSxVQUFwQixDQUFnQyxZQUFoQztBQUNEO0FBQ0EsV0FBS0MsVUFBTDtBQUNBOzs7aUNBRVk7QUFDYixVQUFJQyxXQUFXbEIsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsWUFBN0IsQ0FBZjtBQUNBLFdBQUtpQixRQUFMLENBQWU7QUFDYkYsb0JBQWFDLGFBQWEsSUFBYixJQUFxQkEsYUFBYSxFQUFuQyxHQUF5Q0UsS0FBS0MsS0FBTCxDQUFZSCxRQUFaLENBQXpDLEdBQWlFO0FBRGhFLE9BQWY7QUFHRDs7OzZCQUVVO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSwwREFBUyxTQUFTLEtBQUtuQixLQUFMLENBQVdrQixVQUE3QjtBQURGLE9BREY7QUFLSDs7Ozs7O2tCQUlZLGdDQUFXcEIsR0FBWCxDIiwiZmlsZSI6IjU5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0F1dGh9IGZyb20gJy4vY29tbW9uL2F1dGgnO1xuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xuaW1wb3J0ICcuL3N0eWxlL2Nzcy9BcHAuc2Nzcyc7XG5pbXBvcnQgUm91dGluZyBmcm9tICcuL3JvdXRlci9yb3V0ZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cblxuLyppbXBvcnQgRGFzaEJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvRGFzaGJvYXJkJztcbmltcG9ydCBMYW5kaW5nIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvTGFuZGluZyc7ICovXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpO1xuICAgICBcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgXCJpc0xvZ2dlZEluXCI6IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSAoJ2lzTG9nZ2VkSW4nKVxuICAgIH07XG4gICAgdGhpcy5hdXRoID0gbmV3IEF1dGggKCk7XG4gICAgdGhpcy5hdXRoLnZhbGlkYXRlVG9rZW4gKGZ1bmN0aW9uICgpIHtcbiAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9sb2dpblwiKTtcbiAgICB9KTtcblxuICAgICB0aGlzLm15U3Vic2NyaWJlciA9IHRoaXMubXlTdWJzY3JpYmVyLmJpbmQgKHRoaXMpO1xuICAgICBQdWJTdWIuc3Vic2NyaWJlICgnSVNfTE9HSU4nLCB0aGlzLm15U3Vic2NyaWJlcik7XG4gICAgXG4gIH1cbiAgXG4gIG15U3Vic2NyaWJlcihtc2csIGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zdGF0dXMpIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSAoJ2FjY2Vzc1Rva2VuJywgZGF0YS50b2tlbik7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0gKCd1c2VyaWQnLCBkYXRhLnVzZXJpZCk7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0gKCdpc0xvZ2dlZEluJywgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSAoJ2FjY2Vzc1Rva2VuJyk7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0gKCd1c2VyaWQnKTtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSAoJ2lzTG9nZ2VkSW4nKTtcbiAgICB9XG4gICAgIHRoaXMuaXNMb2dnZWRJbiAoKTtcbiAgICB9XG4gICBcbiAgICBpc0xvZ2dlZEluKCkge1xuICAgIHZhciBib29sRmxhZyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSAoJ2lzTG9nZ2VkSW4nKTtcbiAgICB0aGlzLnNldFN0YXRlICh7XG4gICAgICBpc0xvZ2dlZEluOiAoYm9vbEZsYWcgIT09IG51bGwgJiYgYm9vbEZsYWcgIT09ICcnKSA/IEpTT04ucGFyc2UgKGJvb2xGbGFnKSA6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgO1xuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoIFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxSb3V0aW5nIGlzbG9naW49e3RoaXMuc3RhdGUuaXNMb2dnZWRJbn0gLz5cbiAgICAgICAgPC9kaXY+KTtcbiAgICAgIFxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBcHApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9BcHAuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///59\n");

/***/ })

})