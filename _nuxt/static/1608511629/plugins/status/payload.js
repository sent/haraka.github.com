__NUXT_JSONP__("/plugins/status", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){return {data:[{document:{slug:"status",title:"Status",position:74,category:"Plugins",toc:[{id:m,depth:n,text:o},{id:p,depth:3,text:q},{id:r,depth:n,text:s}],body:{type:"root",children:[{type:b,tag:"p",props:{},children:[{type:a,value:"This plugin allows to get internal status of queues and pools with SMTP commands sent from localhost."}]},{type:a,value:c},{type:b,tag:t,props:{id:m},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#communication",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:v,props:{},children:[{type:a,value:"Request"}]},{type:a,value:" → "},{type:b,tag:e,props:{},children:[{type:a,value:"STATUS \u003CCMD\u003E [param1] [param2]...."}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:v,props:{},children:[{type:a,value:"Response"}]},{type:a,value:" ← "},{type:b,tag:f,props:{},children:[{type:a,value:"\u003CSMTP code 211 or 500\u003E\u003Cspace\u003E\u003Cjson encoded response\u003E\\r\\n"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"h3",props:{id:p},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#example",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"\u003C 220 example.com ESMTP Haraka ready\n\u003E STATUS QUEUE LIST\n\u003C 211 {\"delivery_queue\":[],\"temp_fail_queue\":[]}\n"}]}]}]},{type:a,value:c},{type:b,tag:t,props:{id:r},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#available-commands-list",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"STATUS POOL LIST"}]},{type:a,value:" - list of active pools"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"STATUS QUEUE STATS"}]},{type:a,value:" - queue statistics in format \"\u003Cin_progress\u003E\u002F\u003Cdelivery_queue length\u003E\u002F\u003Ctemp_fail_queue length\u003E\""}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"STATUS QUEUE LIST"}]},{type:a,value:" - list of parsed queue files with "},{type:b,tag:f,props:{},children:[{type:a,value:"uuid, domain, mail_from, rcpt_to"}]},{type:a,value:" attributes"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"STATUS QUEUE INSPECT"}]},{type:a,value:" - returns content of "},{type:b,tag:f,props:{},children:[{type:a,value:"outbound.delivery_queue"}]},{type:a,value:" and "},{type:b,tag:f,props:{},children:[{type:a,value:"outbound.temp_fail_queue"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"STATUS QUEUE DISCARD file"}]},{type:a,value:" - stop delivering email file"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"STATUS QUEUE PUSH file"}]},{type:a,value:" - try to re-deliver email immediately"}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Fplugins",path:"\u002Fen\u002Fplugins\u002Fstatus",extension:".md",createdAt:w,updatedAt:w,to:"\u002Fplugins\u002Fstatus"},prev:{slug:x,title:x,to:"\u002Fplugins\u002Fspf"},next:{slug:y,title:y,to:"\u002Fplugins\u002Ftarpit"}}],fetch:[],mutations:[]}}("text","element","\n","li","code","em","a","true",-1,"span","icon","icon-link","communication",2,"Communication","example","Example","available-commands-list","Available commands list","h2","ul","strong","2020-12-21T00:45:07.188Z","spf","tarpit")));