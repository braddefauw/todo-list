(()=>{"use strict";let t=1;const e=(e,n)=>{let r=document.createElement("div");r.classList.add("todo-item");let a=document.createElement("div");a.classList.add("checkmark"),r.appendChild(a),a.addEventListener("click",(function(){a.classList.toggle("gradient"),""===a.innerHTML?a.innerHTML="<img src='images/check-bold.svg' />":a.innerHTML="",i.classList.toggle("strikethrough")}));let i=document.createElement("p");i.innerText=e,r.appendChild(i);let o=document.createElement("input");o.setAttribute("type","date"),o.setAttribute("id","todo-date"),o.setAttribute("name","todo-date"),o.setAttribute("value",n),r.appendChild(o);let u=document.createElement("p");return u.innerText="X",u.classList.add("remove"),r.appendChild(u),u.addEventListener("click",(function(){r.remove()})),r.dataset.indexNumber=t,t++,r},n=()=>{let t=document.querySelector("#todo-list");t.appendChild(e("Run","2022-05-12")),t.appendChild(e("Code","2022-05-26")),t.appendChild(e("Eat","2022-05-26"))},r=()=>{let t=document.querySelector(".main-content"),e=document.getElementById("new-todo"),n=document.createElement("div");n.classList.add("new-todo-text"),e.appendChild(n);let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","todo-input"),r.setAttribute("name","todo-input"),r.setAttribute("placeholder","Create a new todo... "),n.appendChild(r);let a=document.createElement("input");a.setAttribute("type","date"),a.setAttribute("id","todo-date"),a.setAttribute("name","todo-date"),n.appendChild(a);let i=document.createElement("button");i.id="submit",i.innerText="Submit",n.appendChild(i);let o=document.createElement("button");o.id="cancel",o.innerText="Cancel",n.appendChild(o),t.prepend(e)};function a(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function i(t){return a(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function o(t){a(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function u(t){if(a(1,arguments),!i(t)&&"number"!=typeof t)return!1;var e=o(t);return!isNaN(Number(e))}var s={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function d(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}const c={date:d({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:d({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:d({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var l={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function h(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const m={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:h({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:h({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:h({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:h({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:h({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function f(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,u=i[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?w(s,(function(t){return t.test(u)})):g(s,(function(t){return t.test(u)}));o=t.valueCallback?t.valueCallback(d):d,o=n.valueCallback?n.valueCallback(o):o;var c=e.slice(u.length);return{value:o,rest:c}}}function g(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function w(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var v,b={ordinalNumber:(v={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(v.matchPattern);if(!n)return null;var r=n[0],a=t.match(v.parsePattern);if(!a)return null;var i=v.valueCallback?v.valueCallback(a[0]):a[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(r.length);return{value:i,rest:o}}),era:f({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:f({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:f({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:f({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:f({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const y={code:"en-US",formatDistance:function(t,e,n){var r,a=s[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:c,formatRelative:function(t,e,n,r){return l[t]},localize:m,match:b,options:{weekStartsOn:0,firstWeekContainsDate:1}};function p(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function T(t,e){a(2,arguments);var n=o(t).getTime(),r=p(e);return new Date(n+r)}function C(t,e){a(2,arguments);var n=p(e);return T(t,-n)}var M=864e5;function D(t){a(1,arguments);var e=1,n=o(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function S(t){a(1,arguments);var e=o(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=D(r),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var s=D(u);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function k(t){a(1,arguments);var e=S(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=D(n);return r}var x=6048e5;function P(t,e){a(1,arguments);var n=e||{},r=n.locale,i=r&&r.options&&r.options.weekStartsOn,u=null==i?0:p(i),s=null==n.weekStartsOn?u:p(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=o(t),c=d.getUTCDay(),l=(c<s?7:0)+c-s;return d.setUTCDate(d.getUTCDate()-l),d.setUTCHours(0,0,0,0),d}function U(t,e){a(1,arguments);var n=o(t),r=n.getUTCFullYear(),i=e||{},u=i.locale,s=u&&u.options&&u.options.firstWeekContainsDate,d=null==s?1:p(s),c=null==i.firstWeekContainsDate?d:p(i.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,c),l.setUTCHours(0,0,0,0);var h=P(l,e),m=new Date(0);m.setUTCFullYear(r,0,c),m.setUTCHours(0,0,0,0);var f=P(m,e);return n.getTime()>=h.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function E(t,e){a(1,arguments);var n=e||{},r=n.locale,i=r&&r.options&&r.options.firstWeekContainsDate,o=null==i?1:p(i),u=null==n.firstWeekContainsDate?o:p(n.firstWeekContainsDate),s=U(t,e),d=new Date(0);d.setUTCFullYear(s,0,u),d.setUTCHours(0,0,0,0);var c=P(d,e);return c}var W=6048e5;function q(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const L=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return q("yy"===e?r%100:r,e.length)},Y=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):q(n+1,2)},N=function(t,e){return q(t.getUTCDate(),e.length)},O=function(t,e){return q(t.getUTCHours()%12||12,e.length)},H=function(t,e){return q(t.getUTCHours(),e.length)},A=function(t,e){return q(t.getUTCMinutes(),e.length)},F=function(t,e){return q(t.getUTCSeconds(),e.length)},j=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return q(Math.floor(r*Math.pow(10,n-3)),e.length)};function z(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+q(i,2)}function B(t,e){return t%60==0?(t>0?"-":"+")+q(Math.abs(t)/60,2):Q(t,e)}function Q(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+q(Math.floor(a/60),2)+n+q(a%60,2)}const X={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return L(t,e)},Y:function(t,e,n,r){var a=U(t,r),i=a>0?a:1-a;return"YY"===e?q(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):q(i,e.length)},R:function(t,e){return q(S(t),e.length)},u:function(t,e){return q(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return q(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return q(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return Y(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return q(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var i=function(t,e){a(1,arguments);var n=o(t),r=P(n,e).getTime()-E(n,e).getTime();return Math.round(r/W)+1}(t,r);return"wo"===e?n.ordinalNumber(i,{unit:"week"}):q(i,e.length)},I:function(t,e,n){var r=function(t){a(1,arguments);var e=o(t),n=D(e).getTime()-k(e).getTime();return Math.round(n/x)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):q(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):N(t,e)},D:function(t,e,n){var r=function(t){a(1,arguments);var e=o(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/M)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):q(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return q(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return q(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return q(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return O(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):q(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):q(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):A(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):F(t,e)},S:function(t,e){return j(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return B(a);case"XXXX":case"XX":return Q(a);default:return Q(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return B(a);case"xxxx":case"xx":return Q(a);default:return Q(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+z(a,":");default:return"GMT"+Q(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+z(a,":");default:return"GMT"+Q(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return q(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return q((r._originalDate||t).getTime(),e.length)}};function G(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function R(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}const I={p:R,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return G(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",G(a,e)).replace("{{time}}",R(i,e))}};function J(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var _=["D","DD"],$=["YY","YYYY"];function V(t){return-1!==_.indexOf(t)}function K(t){return-1!==$.indexOf(t)}function Z(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var tt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,et=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,nt=/^'([^]*?)'?$/,rt=/''/g,at=/[a-zA-Z]/;function it(t){return t.match(nt)[1].replace(rt,"'")}console.log("this is working still!"),function(t,e,n){a(2,arguments);var r=String(e),i=n||{},s=i.locale||y,d=s.options&&s.options.firstWeekContainsDate,c=null==d?1:p(d),l=null==i.firstWeekContainsDate?c:p(i.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=s.options&&s.options.weekStartsOn,m=null==h?0:p(h),f=null==i.weekStartsOn?m:p(i.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var g=o(t);if(!u(g))throw new RangeError("Invalid time value");var w=J(g),v=C(g,w),b={firstWeekContainsDate:l,weekStartsOn:f,locale:s,_originalDate:g};r.match(et).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,I[e])(t,s.formatLong,b):t})).join("").match(tt).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return it(n);var a=X[r];if(a)return!i.useAdditionalWeekYearTokens&&K(n)&&Z(n,e,t),!i.useAdditionalDayOfYearTokens&&V(n)&&Z(n,e,t),a(v,n,s.localize,b);if(r.match(at))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(new Date(2014,1,11),"yyyy-MM-dd");const ot=[new Date(1995,6,2),new Date(1987,1,11),new Date(1989,6,10)];console.log(ot.sort((function(t,e){a(2,arguments);var n=o(t),r=o(e),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}))),r(),n(),(()=>{let t=!1;const e=document.querySelector(".icon"),n=document.querySelector(".header"),r=document.querySelector(".main-content"),a=document.querySelector(".new-todo-text"),i=document.querySelector("#todo-list"),o=document.querySelector("footer"),u=document.querySelector(".fh5"),s=document.querySelector(".footer-img");e.addEventListener("click",(function(){(e.src="./images/icon-sun.svg")&&(n.classList.toggle("light-header"),r.classList.toggle("light-background"),a.classList.toggle("light-overlay")),n.classList.contains("light-header")?e.src="./images/icon-moon.svg":e.src="./images/icon-sun.svg",t?(i.style.background="rgba(77, 80, 102, 0.5)",t=!1):(i.style.background="white",t=!0),o.classList.toggle("light-footer"),u.classList.toggle("light-footer"),s.classList.toggle("light-footer-image")}))})(),(()=>{let t,n,r,a=document.getElementById("todo-input"),i=document.getElementById("submit"),o=document.getElementById("todo-date"),u=[];i.addEventListener("click",(function(){a.value?t=a.value:alert("Input cannot be empty. Please enter a todo!"),r=new Date;let i=String(r.getDate()).padStart(2,"0"),s=String(r.getMonth()+1).padStart(2,"0"),d=r.getFullYear();r=`${d}-${s}-${i}`,n=o.value,document.querySelector("#todo-list").appendChild(e(t,n)),o.value===r&&(u.push(e(t,n)),console.log(u))}))})(),(()=>{let t=document.getElementById("home"),e=document.querySelector("#todo-list"),a=document.querySelector("#new-todo");t.addEventListener("click",(function(){console.log(a),a.innerHTML="",e.innerHTML="",r(),n()}))})(),(()=>{let t=document.querySelector(".today"),e=document.querySelector("#new-todo"),n=document.querySelector("#todo-list");t.addEventListener("click",(function(){e.innerHTML="",n.innerHTML="",r()}))})()})();