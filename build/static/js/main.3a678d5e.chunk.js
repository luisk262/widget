(this["webpackJsonpmy-widget"]=this["webpackJsonpmy-widget"]||[]).push([[0],{39:function(t,e,a){},41:function(t,e,a){"use strict";a.r(e);var c=a(0),s=a(2),n=a.n(s),r=a(15),o=a.n(r),i=a(5),d=a.n(i),l=(a(39),a(6)),m=a(3),b=a.n(m),x="".concat("http://api.marketstack.com/v1","/intraday"),h="".concat("http://api.marketstack.com/v1","/tickers");var j=function(t){var e=Object(s.useState)({price:"--",var:"--",time:"--"}),a=Object(l.a)(e,2),n=a[0],r=a[1],o=Object(s.useState)({stockExchange:"N/A",name:"N/A"}),i=Object(l.a)(o,2),d=i[0],m=i[1];Object(s.useEffect)((function(){y.get(x,{params:{access_key:"the-key",symbols:t.symbol,interval:"15min",date_from:b()().subtract(1,"day").format("YYYY-MM-DD"),date_to:b()().format("YYYY-MM-DD"),limit:"1"}}).then((function(t){if(t.data.data&&!(t.data.data.length<=0)){var e=t.data.data[0];r({price:e.last,var:Math.trunc(1e4*-(1-e.last/e.open))/100,time:b()(e.date).format("YYYY-MM-DD HH:mm")})}}))})),Object(s.useEffect)((function(){y.get("".concat(h,"/").concat(t.symbol),{params:{access_key:"the-key"}}).then((function(t){t.data&&m({stockExchange:t.data.stock_exchange.acronym,name:t.data.name})}))}));var j=n.var<0?"text-red-500":"text-green-500";return Object(c.jsxs)("div",{className:"quote rounded-lg shadow-md p-4 bg-gray-800",children:[Object(c.jsx)("span",{className:"quoteSymbol text-sm text-white font-bold",children:t.symbol}),Object(c.jsx)("span",{className:"quoteSymbol text-2xs text-gray-400 ml-1",children:d.name}),Object(c.jsxs)("span",{className:"quoteSymbol text-2xs text-gray-400 ml-1",children:["(",d.stockExchange,")"]}),Object(c.jsxs)("div",{className:"quote flex flex-row justify-between mt-1",children:[Object(c.jsxs)("div",{className:"quotePrice self-center text-2xl font-bold items-center text-white",children:["$",n.price]}),Object(c.jsxs)("div",{className:"flex flex-col text-right",children:[Object(c.jsxs)("div",{className:"quoteVar "+j,children:[n.var,"%"]}),Object(c.jsx)("div",{className:"quoteTime text-right text-2xs text-gray-400",children:n.time})]})]})]})};var u=function(t){return Object(c.jsx)("div",{children:Object(c.jsx)(j,{symbol:t.symbol})})};d.a.defaults.headers={Accept:"application/json"};var f=d.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_VERSION:"0.1.0",REACT_APP_MARKETSTACK_BASE_URL:"http://api.marketstack.com/v1",REACT_APP_MARKETSTACK_ACCESS_KEY:"the-key"}).REACT_APP_BASE_URL}),y=e.default=f;document.querySelectorAll(".nicoraynaud-finance-widget").forEach((function(t){o.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(u,{symbol:t.dataset.symbol})}),t)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.3a678d5e.chunk.js.map