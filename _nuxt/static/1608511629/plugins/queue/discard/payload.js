__NUXT_JSONP__("/plugins/queue/discard", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I){return {data:[{document:{slug:l,title:l,position:26,category:"Plugins",toc:[],body:{type:"root",children:[{type:b,tag:h,props:{},children:[{type:a,value:"This plugin will discard a message by pretending that the message was queued."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"It is designed to be used by other plugins which request the message be\ndiscard by setting a connection or transaction note that this plugin\nchecks."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"It uses the 'queue' hook, so it runs after all the plugins that hook on "},{type:b,tag:j,props:{},children:[{type:a,value:"data_post"}]},{type:a,value:i}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"If you use the 'quarantine' plug-in then this plugin should run "},{type:b,tag:"em",props:{},children:[{type:a,value:"after"}]},{type:a,value:" it."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"USE THIS PLUGIN WITH CARE!"}]},{type:a,value:e},{type:b,tag:o,props:{id:"enable"},children:[{type:b,tag:p,props:{ariaHidden:m,href:"#enable",tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:"Enable"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Enable by adding a "},{type:b,tag:j,props:{},children:[{type:a,value:"queue\u002Fdiscard"}]},{type:a,value:" entry in "},{type:b,tag:j,props:{},children:[{type:a,value:"config\u002Fplugins"}]},{type:a,value:f},{type:b,tag:"strong",props:{},children:[{type:a,value:"before"}]},{type:a,value:" your\nother queue plugins that perform actual deliveries."}]},{type:a,value:e},{type:b,tag:o,props:{id:"usage"},children:[{type:b,tag:p,props:{ariaHidden:m,href:"#usage",tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:"Usage"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Set"}]},{type:a,value:e},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,x]},children:[{type:b,tag:j,props:{},children:[{type:a,value:y},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:H}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"or"}]},{type:a,value:e},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,x]},children:[{type:b,tag:j,props:{},children:[{type:a,value:y},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"transaction"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:H}]},{type:a,value:e}]}]}]}]},dir:"\u002Fen\u002Fplugins\u002Fqueue",path:"\u002Fen\u002Fplugins\u002Fqueue\u002Fdiscard",extension:".md",createdAt:I,updatedAt:I,to:"\u002Fplugins\u002Fqueue\u002Fdiscard"},prev:{slug:"deliver",title:"queue\u002Fdeliver",to:"\u002Fplugins\u002Fqueue\u002Fdeliver"},next:{slug:"lmtp",title:"queue\u002Flmtp",to:"\u002Fplugins\u002Fqueue\u002Flmtp"}}],fetch:[],mutations:[]}}("text","element","span","token","\n"," ","punctuation","p",".","code","property-access","discard","true","operator","h1","a",-1,"icon","icon-link","div","nuxt-content-highlight","pre","language-javascript","line-numbers","connection","notes","=","[","number","1","|","boolean","]",";","2020-12-21T00:45:07.188Z")));