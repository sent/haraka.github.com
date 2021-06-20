__NUXT_JSONP__("/plugins/queue/rabbitmq_amqplib", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){return {data:[{document:{slug:"rabbitmq_amqplib",title:"queue\u002Frabbitmq_amqplib",position:31,category:"Plugins",toc:[{id:g,depth:h,text:i},{id:j,depth:h,text:k}],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"This plugin delivers emails to RabbitMQ queue for further processing. Based on "},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:" but using "},{type:b,tag:d,props:{},children:[{type:a,value:m}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:n,props:{id:g},children:[{type:b,tag:f,props:{href:"#dependency",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:i}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:u,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:m}]},{type:a,value:" - "},{type:b,tag:f,props:{href:v,rel:[w,x,y],target:z},children:[{type:a,value:v}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:j},children:[{type:b,tag:f,props:{href:"#configuration",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:k}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"config\u002Frabbitmq.ini"}]},{type:a,value:" - Connection, exchange and queue settings"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Example:"}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"  [rabbitmq]\n  ; Connection\n  ; Protocol. Either \"amqp\" or \"amqps\"\n  protocol = amqp\n  host = localhost\n  port = 5672\n  ;Virtual Host. Start with \"\u002F\". Leave blank or not use if you don't want to use virtual hosts.\n  vhost = \u002Fharaka\n  ;Credentials\n  user = guest\n  password = guest\n  ; Exchange\n  exchangeName  = email_messages\n  exchangeType = direct\n  ; Queue\n  queueName = emails\n  deliveryMode = 2\n  confirm = true\n  durable = true\n  autoDelete = false\n"}]}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"More information about RabbitMQ can be found at "},{type:b,tag:f,props:{href:A,rel:[w,x,y],target:z},children:[{type:a,value:A}]}]}]},dir:"\u002Fen\u002Fplugins\u002Fqueue",path:"\u002Fen\u002Fplugins\u002Fqueue\u002Frabbitmq_amqplib",extension:".md",createdAt:B,updatedAt:B,to:"\u002Fplugins\u002Fqueue\u002Frabbitmq_amqplib"},prev:{slug:"rabbitmq",title:l,to:"\u002Fplugins\u002Fqueue\u002Frabbitmq"},next:{slug:"smtp_bridge",title:"queue\u002Fsmtp_bridge",to:"\u002Fplugins\u002Fqueue\u002Fsmtp_bridge"}}],fetch:[],mutations:[]}}("text","element","\n","code","p","a","dependency",2,"Dependency","configuration","Configuration","queue\u002Frabbitmq","amqplib","h2","true",-1,"span","icon","icon-link","ul","li","https:\u002F\u002Fgithub.com\u002Fsquaremo\u002Famqp.node","nofollow","noopener","noreferrer","_blank","https:\u002F\u002Fwww.rabbitmq.com\u002F","2021-06-20T10:01:43.413Z")));