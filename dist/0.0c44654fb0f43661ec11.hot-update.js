webpackHotUpdate(0,{106:function(e,t,a){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),s=a(0),o=function(e){return e&&e.__esModule?e:{default:e}}(s);a(6);var c=function(e){function t(e){l(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={editable:"hidden",simpletext:"",formdata:{occupation:"",company:"",skill:""}},a.changeState=a.changeState.bind(a),a}return i(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){if(e.userdata.hasOwnProperty("userDetail")&&null!==e.userdata.userDetail.professional){var t={occupation:e.userdata.userDetail.professional.occupation,company:e.userdata.userDetail.professional.company,skill:e.userdata.userDetail.professional.skill};this.setState({formdata:t,edit:e.userdata.edit})}}},{key:"saveBtnClick",value:function(){var e=this,t={};Object.keys(this.refs).forEach(function(a,l){t[a]=e.refs[a].value}),this.setState({formdata:t},function(){e.SaveEnableHandler()}),this.setState({editable:"hidden",simpletext:""})}},{key:"SaveEnableHandler",value:function(){var e=window.localStorage.getItem("userid");fetch("/api/updateuserdetail",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({professional:this.state.formdata,userId:e})}).then(function(e){return e.json()}).then(function(e){e.hasOwnProperty("list")})}},{key:"changeState",value:function(e){var t=this;Object.keys(this.refs).forEach(function(e,a){t.refs[e].value=void 0==t.state.formdata[e]?"":t.state.formdata[e]}),this.setState({editable:"",simpletext:"hidden"})}},{key:"cancelClickState",value:function(e){this.setState({editable:"hidden",simpletext:""})}},{key:"render",value:function(){var e=this;return o.default.createElement("div",{className:"panel panel-default"},o.default.createElement("div",{className:"panel-heading clearfix"},o.default.createElement("h3",{className:"panel-title pull-left"},"Professional Information"),function(){if(e.state.edit)return o.default.createElement("btn",null,o.default.createElement("a",{href:"javascript:void(0)",className:e.state.simpletext},o.default.createElement("i",{onClick:function(){return e.changeState("basicinfo")},className:"glyphicon glyphicon-pencil pull-right"})),o.default.createElement("button",{type:"button",onClick:function(){return e.cancelClickState("basicinfo")},className:"pull-right btn btn-secondary  "+e.state.editable},"Cancel"))}()),o.default.createElement("div",{className:"panel-body"},o.default.createElement("div",{className:"row"},o.default.createElement("label",{className:"col-sm-2 col-form-label"},"Occupation:"),o.default.createElement("div",{className:"col-sm-4 "+this.state.simpletext},o.default.createElement("div",null," ",this.state.formdata.occupation)),o.default.createElement("div",{className:"col-sm-4 "+this.state.editable},o.default.createElement("input",{type:"text",ref:"occupation",className:"form-control input-sm",placeholder:"Ex:Art Director, Student"})),o.default.createElement("label",{className:"col-sm-2 col-form-label"},"Company:"),o.default.createElement("div",{className:"col-sm-4 "+this.state.simpletext},o.default.createElement("p",null," ",this.state.formdata.company," ")),o.default.createElement("div",{className:"col-sm-4 "+this.state.editable},o.default.createElement("input",{type:"text",ref:"company",className:"form-control input-sm",placeholder:"Company"})))),o.default.createElement("div",{className:"panel-body"},o.default.createElement("div",{className:"row"},o.default.createElement("label",{className:"col-sm-2 col-form-label"},"Skills:"),o.default.createElement("div",{className:"col-sm-4 "+this.state.simpletext},o.default.createElement("div",null," ",this.state.formdata.skill)),o.default.createElement("div",{className:"col-sm-4 "+this.state.editable},o.default.createElement("input",{type:"text",ref:"skill",className:"form-control input-sm",placeholder:"Ex:Art Director, Student"})))),function(){if(""==e.state.editable)return o.default.createElement("div",{className:"panel-heading clearfix"},o.default.createElement("button",{type:"button",onClick:function(){return e.saveBtnClick("basicinfo")},className:"btn btn-primary pull-right"},"Save Information"))}())}}]),t}(s.Component);t.default=c}});