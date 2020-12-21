__NUXT_JSONP__("/core/HAProxy", (function(a,b,c,d,e,f,g,h,i,j,k,l,m){return {data:[{document:{slug:"HAProxy",title:"HAProxy PROXY protocol extension support",position:9,category:"Core",toc:[],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Haraka natively supports the PROXY protocol [1]."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This allows an upstream proxy to pass IP address and port of the client which\nHaraka will use instead of the socket IP address (which is of the proxy).\nThis allows DNSBLs and access control lists to operate on the proxied address."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Support is disabled by default and if HAProxy or other attempts to send a\nPROXY command then Haraka will return a DENYSOFTDISCONNECT error.\nDENYSOFT is used to prevent configuration errors from rejecting valid mail."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To enable support for PROXY you must create a "},{type:b,tag:e,props:{},children:[{type:a,value:f}]},{type:a,value:" configuration\nfile which should contain a list of IP addresses of the HAProxy hosts\nthat should be allowed to send the PROXY command. A range of IP\naddresses can be specified by it's CIDR network address."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When a host connects to Haraka that matches an IP address present in the\n"},{type:b,tag:e,props:{},children:[{type:a,value:f}]},{type:a,value:" file - a banner is not sent, instead Haraka waits for the\nPROXY command to be sent before proceeding.  The connection will timeout\nwith "},{type:b,tag:e,props:{},children:[{type:a,value:"421 PROXY timed out"}]},{type:a,value:" if the command is not sent within 30 seconds."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"NOTE: because Haraka does not send a banner when a listed HAProxy host\nconnects you must set check-send-proxy to ensure that the service checks\nsend a PROXY command before they run."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"[1] "},{type:b,tag:"a",props:{href:g,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:g}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"HAProxy supports the PROXY protocol in version 1.5 or later however there\nare patches available to add support for 1.4."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here is an example listener section for haproxy.cfg:"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"listen smtp :25\n        mode tcp\n        option tcplog\n        option smtpchk\n        balance roundrobin\n        server smtp1 ip.of.haraka.server1:25 check-send-proxy check inter 10s send-proxy\n        server smtp2 ip.of.haraka.server2:25 check-send-proxy check inter 10s send-proxy\n        server smtp3 ip.of.haraka.server3:25 check-send-proxy check inter 10s send-proxy\n        server smtp4 ip.of.haraka.server4:25 check-send-proxy check inter 10s send-proxy\n        server smtp5 ip.of.haraka.server5:25 check-send-proxy check inter 10s send-proxy\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The important part is "},{type:b,tag:e,props:{},children:[{type:a,value:"send-proxy"}]},{type:a,value:" which causes HAProxy to send the PROXY\nextension on connection."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When using "},{type:b,tag:e,props:{},children:[{type:a,value:"option smtpchk"}]},{type:a,value:" you will see CONNRESET errors reported in the Haraka logs as\nsmtpchk drops the connection before the HELO response is still being written.\nYou can use the "},{type:b,tag:e,props:{},children:[{type:a,value:"option tcp-check"}]},{type:a,value:" instead to provide a better service check by having\nthe check wait for the banner, send QUIT and then check the response:"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"        option tcp-check\n        tcp-check expect rstring ^220\\ \n        tcp-check send QUIT\\r\\n\n        tcp-check expect rstring ^221\\ \n"}]}]}]}]},dir:"\u002Fen\u002Fcore",path:"\u002Fen\u002Fcore\u002FHAProxy",extension:".md",createdAt:m,updatedAt:m,to:"\u002Fcore\u002FHAProxy"},prev:{slug:"CustomReturnCodes",title:"Custom Return Codes",to:"\u002Fcore\u002FCustomReturnCodes"},next:{slug:"Logging_API",title:"Logging API",to:"\u002Fcore\u002FLogging_API"}}],fetch:[],mutations:[]}}("text","element","\n","p","code","haproxy_hosts","http:\u002F\u002Fhaproxy.1wt.eu\u002Fdownload\u002F1.5\u002Fdoc\u002Fproxy-protocol.txt","div","nuxt-content-highlight","pre","language-text","line-numbers","2020-12-21T00:45:07.184Z")));