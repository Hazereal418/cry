(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[3564],{12491:e=>{e.exports=function(e){const n="[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*",a="\\|[^]*?\\|",i="(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?",s={className:"literal",begin:"\\b(t{1}|nil)\\b"},l={className:"number",variants:[{begin:i,relevance:0},{begin:"#(b|B)[0-1]+(/[0-1]+)?"},{begin:"#(o|O)[0-7]+(/[0-7]+)?"},{begin:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{begin:"#(c|C)\\("+i+" +"+i,end:"\\)"}]},b=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),t=e.COMMENT(";","$",{relevance:0}),g={begin:"\\*",end:"\\*"},c={className:"symbol",begin:"[:&]"+n},r={begin:n,relevance:0},d={begin:a},o={contains:[l,b,g,c,{begin:"\\(",end:"\\)",contains:["self",s,b,l,r]},r],variants:[{begin:"['`]\\(",end:"\\)"},{begin:"\\(quote ",end:"\\)",keywords:{name:"quote"}},{begin:"'"+a}]},m={variants:[{begin:"'"+n},{begin:"#'"+n+"(::"+n+")*"}]},u={begin:"\\(\\s*",end:"\\)"},v={endsWithParent:!0,relevance:0};return u.contains=[{className:"name",variants:[{begin:n,relevance:0},{begin:a}]},v],v.contains=[o,m,u,s,l,b,t,g,c,d,r],{name:"Lisp",illegal:/\S/,contains:[l,e.SHEBANG(),s,b,t,o,m,u,r]}}}}]);
//# sourceMappingURL=3564.e1d4da9993f41f931d4a.js.map