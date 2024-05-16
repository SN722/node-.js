var url = require('url');
var adr = 'https://www.bing.com/search?q=lsg+match&cvid=2498c27293474036b552fc5411c85d6a&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDQwMjhqMGo3qAIIsAIB&FORM=ANNTA0&PC=U531';

var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;

console.log(qdata.match);