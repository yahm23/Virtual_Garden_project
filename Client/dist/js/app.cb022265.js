(function(e){function n(n){for(var o,l,i=n[0],c=n[1],s=n[2],m=0,d=[];m<i.length;m++)l=i[m],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(n);while(d.length)d.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,i=1;i<t.length;i++){var c=t[i];0!==a[c]&&(o=!1)}o&&(r.splice(n--,1),e=l(l.s=t[0]))}return e}var o={},a={app:0},r=[];function l(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=o,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)l.d(t,o,function(n){return e[n]}.bind(null,o));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var u=c;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var o=t("85ec"),a=t.n(o);a.a},"240c":function(e,n,t){},"3e00":function(e,n,t){"use strict";var o=t("240c"),a=t.n(o);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("6cc5");var o=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("header"),e.showWelcome?t("welcome"):e._e(),e.showEnvironment?t("create-environment",{staticClass:"show-env",class:{hidden:!e.showEnvironment}}):e._e(),e.showGarden?t("virtual-garden",{attrs:{gardenWOEID:e.gardenWOEID}}):e._e()],1)},r=[],l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"welcome-intro"},[e._m(0),t("button",{staticClass:"btn welcomeBtn",attrs:{type:"button",value:"Proceed"},on:{click:e.onClick}},[e._v("Build Your Garden Environment!")]),t("p5-example")],1)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h1",[t("span",[e._v("Welcome to ")]),e._v("Virtual Garden")])}],c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{},[t("map-environment")],1)},s=[],u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{lang:"html"}},[t("environment-detail",{attrs:{allWeather:e.allWeather}}),t("div",{},[t("l-map",{staticClass:"full-map",attrs:{id:"clicky",zoom:e.zoom,"min-zoom":e.minZoom,"max-zoom":e.maxZoom,position:e.zoomPosition}},[t("l-tile-layer",{attrs:{url:e.url}}),t("l-marker",{attrs:{"lat-lng":e.marker,draggable:e.draggable,icon:e.icon},on:{mouseup:e.onDrop}})],1)],1),t("button",{attrs:{type:"button",name:"button"},on:{click:e.onClick}},[e._v("Pick your location!")])],1)},m=[],d=(t("99af"),t("d3b7"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{},[e.coords?t("div",[e.allWeather?t("div",[t("p",[e._v("Temperature: "+e._s(e.allWeather[0]["the_temp"].toPrecision(2))+"°C")]),t("p",[e._v("Weather State: "+e._s(e.allWeather[0]["weather_state_name"]))]),t("p",[e._v("Humidity: "+e._s(e.allWeather[0]["humidity"])+"%")])]):e._e(),e._v(" Your lat is "+e._s(e.lat)+" and long "+e._s(e.lng)+" ")]):e._e()])}),p=[],h={name:"environment-detail",props:["allWeather"],data:function(){return{coords:[],lat:"10",lng:"0"}},computed:{},mounted:function(){var e=this;ue.$on("latAndLng",(function(n){e.coords=n,e.lat=n["lat"],e.lng=n["lng"]}))},methods:{}},f=h,v=t("2877"),_=Object(v["a"])(f,d,p,!1,null,"75527dc5",null),w=_.exports,g=(t("e11e"),t("2699")),b=t("a40a"),y=t("4e2b"),W=t("c8b6"),O={name:"map-fullscreen",components:{LMap:g["a"],LTileLayer:b["a"],LMarker:y["a"],LControlZoom:W["a"],"environment-detail":w},mounted:function(){var e=this;ue.$on("weatherData",(function(n){e.allWeather=n["consolidated_weather"],e.woeid=n["woeid"]}))},computed:{},methods:{onDrop:function(e){var n=this;ue.$emit("latAndLng",e.latlng);var t=e.latlng["lat"],o=e.latlng["lng"];fetch("http://localhost:3000/weather/".concat(t,"/").concat(o)).then((function(e){return e.json()})).then((function(e){fetch("http://localhost:3000/woeid/".concat(e[0]["woeid"])).then((function(e){return e.json()})).then((function(e){ue.$emit("weatherData",e),n.weatherToSend=e,n.woeid=e["woeid"]}))}))},onClick:function(){ue.$emit("showEnvironment",!1),ue.$emit("weatherDataSend",this.weatherToSend),ue.$emit("gardenWOEID",this.woeid)}},data:function(){return{test:"",allWeather:"",weatherToSend:"",woeid:"yup",maxZoom:10,minZoom:2,zoom:2,zoomPosition:"bottomleft",url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",marker:L.latLng(10,0),draggable:!0,visible:!0,icon:L.icon({iconSize:[90,95],iconAnchor:[45,95],iconUrl:"../img/map_marker.svg"})}}},E=O,$=(t("3e00"),Object(v["a"])(E,u,m,!1,null,"b46b4396",null)),j=$.exports,x={name:"create-environment",components:{"map-environment":j}},k=x,D=Object(v["a"])(k,c,s,!1,null,"d2dba36c",null),P=D.exports,C={name:"welcome",data:function(){return{}},components:{"create-environment":P},methods:{onClick:function(){ue.$emit("showWelcome",!1)}}},S=C,T=Object(v["a"])(S,l,i,!1,null,"21fd7b3a",null),z=T.exports,I=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{},[t("p",[e._v("Virtual Garden connected")]),t("environment-detail",{attrs:{allWeather:e.allWeather}}),t("p",[e._v("Recomended Plants: "+e._s(e.recomendedPlants))]),t("p"),t("plant-list"),t("div",{},[t("plant-search"),t("plant-list")],1),t("canvascomp")],1)},A=[],G=(t("4de4"),t("d81d"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v(" Plant list linked "),t("single-plant")],1)}),M=[],Z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{},[e._v(" single plant linked ")])},B=[],F={name:"single-plant"},R=F,J=Object(v["a"])(R,Z,B,!1,null,"8d339038",null),V=J.exports,Y={name:"plant-list",components:{"single-plant":V}},H=Y,U=Object(v["a"])(H,G,M,!1,null,"66c89142",null),q=U.exports,K=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{},[e._v(" Canvas linked "),t("single-plant")],1)},N=[],Q={name:"canvas-component",components:{"single-plant":V}},X=Q,ee=Object(v["a"])(X,K,N,!1,null,"146164ba",null),ne=ee.exports,te={name:"virtual-garden",components:{"plant-list":q,"plant-search":q,canvascomp:ne,"environment-detail":w},props:["gardenWOEID"],data:function(){return{recomendedPlants:"",allWeather:"",minTempF:"",humidityAsCm:"",allReccomendedData:[]}},methods:{},mounted:function(){var e=this;fetch("http://localhost:3000/woeid/".concat(this.gardenWOEID)).then((function(e){return e.json()})).then((function(n){e.allWeather=n["consolidated_weather"],e.minTempF=1.8*e.allWeather[0]["the_temp"]+32,e.humidityAsCm=.03*e.allWeather[0]["humidity"],fetch("http://localhost:3000/plants/".concat(e.minTempF,"/").concat(e.humidityAsCm)).then((function(e){return e.json()})).then((function(n){e.recomendedPlants=n.map((function(e){return e["common_name"]})).filter((function(e){return null!=e})),e.allReccomendedData=n.filter((function(e){return null!=e.common_name}))}))})),ue.$on("weatherDataSend",(function(n){e.allWeather=n["consolidated_weather"]}))}},oe=te,ae=Object(v["a"])(oe,I,A,!1,null,"1680f47c",null),re=ae.exports,le={name:"app",data:function(){return{showWelcome:!0,showEnvironment:!1,showGarden:null,userID:"",gardenWOEID:""}},components:{welcome:z,"create-environment":P,"virtual-garden":re},mounted:function(){var e=this;ue.$on("showWelcome",(function(n){e.showWelcome=n,e.showEnvironment=!0})),ue.$on("showEnvironment",(function(n){e.showEnvironment=n,e.showGarden=!0})),ue.$on("gardenWOEID",(function(n){return e.gardenWOEID=n}))}},ie=le,ce=(t("034f"),Object(v["a"])(ie,a,r,!1,null,null,null)),se=ce.exports;t.d(n,"eventBus",(function(){return ue})),o["a"].config.productionTip=!1;var ue=new o["a"];new o["a"]({render:function(e){return e(se)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.cb022265.js.map