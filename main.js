(()=>{"use strict";let t=1,e=[];const n=()=>{let t=document.querySelector("#todo-list");e.forEach((function(e,n){t.appendChild(e)}))};let r=[],a=[];const i=()=>{let n,i,o,u=document.getElementById("todo-input"),s=document.getElementById("submit"),d=document.getElementById("todo-date");s.addEventListener("click",(function(){u.value?n=u.value:alert("Input cannot be empty. Please enter a todo!"),o=new Date;let s=String(o.getDate()).padStart(2,"0"),c=String(o.getMonth()+1).padStart(2,"0"),l=o.getFullYear();o=`${l}-${c}-${s}`,i=d.value;let h=document.querySelector("#todo-list"),m=((e,n)=>{let r=document.createElement("div");r.classList.add("todo-item");let a=document.createElement("div");a.classList.add("checkmark"),r.appendChild(a),a.addEventListener("click",(function(){a.classList.toggle("gradient"),""===a.innerHTML?a.innerHTML="<img src='images/check-bold.svg' />":a.innerHTML="",i.classList.toggle("strikethrough")}));let i=document.createElement("p");i.innerText=e,r.appendChild(i);let o=document.createElement("input");o.setAttribute("type","date"),o.setAttribute("id","todo-date"),o.setAttribute("name","todo-date"),o.setAttribute("value",n),r.appendChild(o);let u=document.createElement("p");return u.innerText="X",u.classList.add("remove"),r.appendChild(u),u.addEventListener("click",(function(){r.remove()})),r.dataset.indexNumber=t,t++,r})(n,i);n&&(h.appendChild(m),e.push(m)),d.value===o&&r.push(m),d.value===o&&a.push(m)}))},o=()=>{let t=document.querySelector(".main-content"),e=document.getElementById("new-todo"),n=document.createElement("div");n.classList.add("new-todo-text"),e.appendChild(n);let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","todo-input"),r.setAttribute("name","todo-input"),r.setAttribute("placeholder","Create a new todo... "),n.appendChild(r);let a=document.createElement("input");a.setAttribute("type","date"),a.setAttribute("id","todo-date"),a.setAttribute("name","todo-date"),n.appendChild(a);let i=document.createElement("button");i.id="submit",i.innerText="Submit",n.appendChild(i);let o=document.createElement("button");o.id="cancel",o.innerText="Cancel",n.appendChild(o),t.prepend(e)};function u(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function s(t){return u(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function d(t){u(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function c(t){if(u(1,arguments),!s(t)&&"number"!=typeof t)return!1;var e=d(t);return!isNaN(Number(e))}var l={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function h(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}const m={date:h({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:h({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:h({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var f={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function g(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const w={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:g({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:g({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:g({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:g({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:g({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function v(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,u=i[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?b(s,(function(t){return t.test(u)})):y(s,(function(t){return t.test(u)}));o=t.valueCallback?t.valueCallback(d):d,o=n.valueCallback?n.valueCallback(o):o;var c=e.slice(u.length);return{value:o,rest:c}}}function y(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function b(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var p,T={ordinalNumber:(p={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(p.matchPattern);if(!n)return null;var r=n[0],a=t.match(p.parsePattern);if(!a)return null;var i=p.valueCallback?p.valueCallback(a[0]):a[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(r.length);return{value:i,rest:o}}),era:v({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:v({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:v({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:v({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:v({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const C={code:"en-US",formatDistance:function(t,e,n){var r,a=l[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:m,formatRelative:function(t,e,n,r){return f[t]},localize:w,match:T,options:{weekStartsOn:0,firstWeekContainsDate:1}};function M(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function S(t,e){u(2,arguments);var n=d(t).getTime(),r=M(e);return new Date(n+r)}function D(t,e){u(2,arguments);var n=M(e);return S(t,-n)}var k=864e5;function x(t){u(1,arguments);var e=1,n=d(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function E(t){u(1,arguments);var e=d(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=x(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=x(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function P(t){u(1,arguments);var e=E(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=x(n);return r}var U=6048e5;function W(t,e){u(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:M(a),o=null==n.weekStartsOn?i:M(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=d(t),c=s.getUTCDay(),l=(c<o?7:0)+c-o;return s.setUTCDate(s.getUTCDate()-l),s.setUTCHours(0,0,0,0),s}function q(t,e){u(1,arguments);var n=d(t),r=n.getUTCFullYear(),a=e||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,s=null==o?1:M(o),c=null==a.firstWeekContainsDate?s:M(a.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,c),l.setUTCHours(0,0,0,0);var h=W(l,e),m=new Date(0);m.setUTCFullYear(r,0,c),m.setUTCHours(0,0,0,0);var f=W(m,e);return n.getTime()>=h.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function L(t,e){u(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:M(a),o=null==n.firstWeekContainsDate?i:M(n.firstWeekContainsDate),s=q(t,e),d=new Date(0);d.setUTCFullYear(s,0,o),d.setUTCHours(0,0,0,0);var c=W(d,e);return c}var Y=6048e5;function N(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const O=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return N("yy"===e?r%100:r,e.length)},H=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):N(n+1,2)},A=function(t,e){return N(t.getUTCDate(),e.length)},F=function(t,e){return N(t.getUTCHours()%12||12,e.length)},j=function(t,e){return N(t.getUTCHours(),e.length)},z=function(t,e){return N(t.getUTCMinutes(),e.length)},B=function(t,e){return N(t.getUTCSeconds(),e.length)},Q=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return N(Math.floor(r*Math.pow(10,n-3)),e.length)};function X(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+N(i,2)}function G(t,e){return t%60==0?(t>0?"-":"+")+N(Math.abs(t)/60,2):I(t,e)}function I(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+N(Math.floor(a/60),2)+n+N(a%60,2)}const R={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return O(t,e)},Y:function(t,e,n,r){var a=q(t,r),i=a>0?a:1-a;return"YY"===e?N(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):N(i,e.length)},R:function(t,e){return N(E(t),e.length)},u:function(t,e){return N(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return N(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return N(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return H(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return N(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){u(1,arguments);var n=d(t),r=W(n,e).getTime()-L(n,e).getTime();return Math.round(r/Y)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):N(a,e.length)},I:function(t,e,n){var r=function(t){u(1,arguments);var e=d(t),n=x(e).getTime()-P(e).getTime();return Math.round(n/U)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):N(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):A(t,e)},D:function(t,e,n){var r=function(t){u(1,arguments);var e=d(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/k)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):N(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return N(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return N(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return N(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return F(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):j(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):N(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):N(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):z(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):B(t,e)},S:function(t,e){return Q(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return G(a);case"XXXX":case"XX":return I(a);default:return I(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return G(a);case"xxxx":case"xx":return I(a);default:return I(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+X(a,":");default:return"GMT"+I(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+X(a,":");default:return"GMT"+I(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return N(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return N((r._originalDate||t).getTime(),e.length)}};function J(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function _(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}const $={p:_,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return J(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",J(a,e)).replace("{{time}}",_(i,e))}};function K(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var V=["D","DD"],Z=["YY","YYYY"];function tt(t){return-1!==V.indexOf(t)}function et(t){return-1!==Z.indexOf(t)}function nt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var rt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,at=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,it=/^'([^]*?)'?$/,ot=/''/g,ut=/[a-zA-Z]/;function st(t){return t.match(it)[1].replace(ot,"'")}console.log("this is working still"),function(t,e,n){u(2,arguments);var r=String(e),a=n||{},i=a.locale||C,o=i.options&&i.options.firstWeekContainsDate,s=null==o?1:M(o),l=null==a.firstWeekContainsDate?s:M(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=i.options&&i.options.weekStartsOn,m=null==h?0:M(h),f=null==a.weekStartsOn?m:M(a.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var g=d(t);if(!c(g))throw new RangeError("Invalid time value");var w=K(g),v=D(g,w),y={firstWeekContainsDate:l,weekStartsOn:f,locale:i,_originalDate:g};r.match(at).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,$[e])(t,i.formatLong,y):t})).join("").match(rt).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return st(n);var o=R[r];if(o)return!a.useAdditionalWeekYearTokens&&et(n)&&nt(n,e,t),!a.useAdditionalDayOfYearTokens&&tt(n)&&nt(n,e,t),o(v,n,i.localize,y);if(r.match(ut))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(new Date(2014,1,11),"yyyy-MM-dd");const dt=[new Date(1995,6,2),new Date(1987,1,11),new Date(1989,6,10)];console.log(dt.sort((function(t,e){u(2,arguments);var n=d(t),r=d(e),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}))),o(),n(),(()=>{let t=!1;const e=document.querySelector(".icon"),n=document.querySelector(".header"),r=document.querySelector(".main-content"),a=document.querySelector("#todo-list"),i=document.querySelector("footer"),o=document.querySelector(".fh5"),u=document.querySelector(".footer-img");e.addEventListener("click",(function(){(e.src="./images/icon-sun.svg")&&(n.classList.toggle("light-header"),r.classList.toggle("light-background")),n.classList.contains("light-header")?e.src="./images/icon-moon.svg":e.src="./images/icon-sun.svg",t?(a.style.background="rgba(77, 80, 102, 0.5)",t=!1):(a.style.background="rgba(77, 80, 102, 0.5)",t=!0),i.classList.toggle("light-footer"),o.classList.toggle("light-footer"),u.classList.toggle("light-footer-image"),console.log(todoText.classList)}))})(),i(),(()=>{let t=document.getElementById("home"),e=document.querySelector("#todo-list"),r=document.querySelector("#new-todo");t.addEventListener("click",(function(){r.innerHTML="",e.innerHTML="",o(),n(),i()}))})(),(()=>{let t=document.querySelector(".today"),e=document.querySelector("#new-todo"),n=document.querySelector("#todo-list");t.addEventListener("click",(function(){e.innerHTML="TODAY",e.style.fontSize="2rem",n.innerHTML="",(()=>{let t=document.getElementById("todo-list");r.forEach((function(e,n){t.appendChild(e)}))})()}))})(),(()=>{let t=document.querySelector(".week"),e=document.querySelector("#new-todo"),n=document.querySelector("#todo-list");t.addEventListener("click",(function(){e.innerHTML="THIS WEEK",e.style.fontSize="2rem",n.innerHTML="",(()=>{let t=document.getElementById("todo-list");a.forEach((function(e,n){t.appendChild(e)}))})()}))})()})();