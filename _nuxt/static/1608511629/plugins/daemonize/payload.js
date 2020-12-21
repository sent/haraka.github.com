__NUXT_JSONP__("/plugins/daemonize", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return {data:[{document:{slug:g,title:g,position:43,category:"Plugins",toc:[{id:h,depth:i,text:j},{id:k,depth:i,text:l}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"IMPORTANT NOTE: This plugin should not be used any more and it will\nthrow an error and prevent Haraka from starting."},{type:b,tag:f,props:{},children:[]},{type:a,value:"\nDaemonization is now built into Haraka.  If the 'daemon' module is\ninstalled you simply set daemonize=true in config\u002Fsmtp.ini now."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To use this plugin you have to install the 'daemon' module by running\n'npm install daemon' in your Haraka configuration directory."},{type:b,tag:f,props:{},children:[]},{type:a,value:"\nIf daemon is not found then the plugin will log a notice and Haraka will\ncontinue running in the foreground."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This plugin should be listed at the top of your config\u002Fplugins file so that\nHaraka goes into the background before any other plugins are run."}]},{type:a,value:c},{type:b,tag:m,props:{id:h},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#configuration",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:j}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This plugin looks for daemonize.ini in your configuration directory and the\nfollowing options can be set:"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"log_file  (default: \u002Fvar\u002Flog\u002Fharaka.log)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The file that STDOUT should be redirected to.  It is recommended that\nyou use this plugin with the log.syslog plugin instead."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"pid_file  (default: \u002Fvar\u002Frun\u002Fharaka.pid)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"File where the master process PID should be written to.  If this file\ncannot be locked then start-up will fail."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:k},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#init-script",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A RedHat\u002FCentOS compatible init-script is provided for use with this module\nwhich can be found in the plugins directory called haraka.init."},{type:b,tag:f,props:{},children:[]},{type:a,value:"\nIt should be copied to \u002Fetc\u002Finit.d\u002Fharaka and registered with\n'chkconfig --add haraka' to activate haraka at system boot."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The init-script presumes that Haraka is installed as \u002Fusr\u002Flocal\u002Fbin\u002Fharaka\nand main configuration file is \u002Fetc\u002Fharaka\u002Fconfig\u002Fsmtp.ini."},{type:b,tag:f,props:{},children:[]},{type:a,value:"\nIf this is not the case on your system, then you should create the file\n\u002Fetc\u002Fsysconfig\u002Fharaka which accepts the following configuration:"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"exec  (default: exec=\u002Fusr\u002Flocal\u002Fbin\u002Fharaka)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The path to Haraka script"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"config  (default: config=\u002Fetc\u002Fharaka\u002Fconfig\u002Fsmtp.ini)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The path to the Haraka smtp.ini configuration script"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"max_open_files  (default: 65535)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The maximum number of open files allowed per process.  If you are\nrunning Haraka using the 'cluster' module, then this is the per-child\nlimit."}]},{type:a,value:c}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Fplugins",path:"\u002Fen\u002Fplugins\u002Fdaemonize",extension:".md",createdAt:u,updatedAt:u,to:"\u002Fplugins\u002Fdaemonize"},prev:{slug:v,title:v,to:"\u002Fplugins\u002Fconnect.rdns_access"},next:{slug:w,title:w,to:"\u002Fplugins\u002Fdata.headers"}}],fetch:[],mutations:[]}}("text","element","\n","p","li","br","daemonize","configuration",2,"Configuration","init-script","Init-Script","h2","a","true",-1,"span","icon","icon-link","ul","2020-12-21T00:45:07.188Z","connect.rdns_access","data.headers")));