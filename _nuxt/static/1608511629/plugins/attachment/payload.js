__NUXT_JSONP__("/plugins/attachment", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){return {data:[{document:{slug:p,title:p,position:37,category:"Plugins",toc:[{id:q,depth:g,text:r},{id:s,depth:g,text:t},{id:u,depth:g,text:v},{id:w,depth:g,text:x}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"This plugin allows you to reject messages based on Content-Type within\nthe message or any MIME parts or on the filename of any attachments."}]},{type:a,value:c},{type:b,tag:h,props:{id:q},children:[{type:b,tag:f,props:{href:"#limitations",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This plugin cannot detect forged MIME types where the sender is lying\nabout the type.  The type is not confirmed in any way currently."}]},{type:a,value:c},{type:b,tag:h,props:{id:s},children:[{type:b,tag:f,props:{href:"#requirements",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To be able to check filenames inside archive files the npm module\n"},{type:b,tag:n,props:{},children:[{type:a,value:y}]},{type:a,value:" is required and the "},{type:b,tag:n,props:{},children:[{type:a,value:z}]},{type:a,value:" binary must be available (in\n\u002Fbin \u002Fusr\u002Fbin or \u002Fusr\u002Flocal\u002Fbin)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If either "},{type:b,tag:n,props:{},children:[{type:a,value:y}]},{type:a,value:" or "},{type:b,tag:n,props:{},children:[{type:a,value:z}]},{type:a,value:" are unavailable then the plugin will\nautomatically disable expansion of archive files."}]},{type:a,value:c},{type:b,tag:h,props:{id:u},children:[{type:b,tag:f,props:{href:"#logging",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"At INFO level logging this plugin will output the filename and type\nof each attached file along with an MD5 checksum of the contents.\nThe MD5 checksum is useful to check against "},{type:b,tag:f,props:{href:"http:\u002F\u002Fwww.virustotal.com",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"www.virustotal.com"}]}]},{type:a,value:c},{type:b,tag:h,props:{id:w},children:[{type:b,tag:f,props:{href:"#configuration",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"attachment.ini"}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"archive_max_depth\n(default: 5)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The maximum level of nested archives that will be unpacked.\nIf this is exceeded the message will be rejected."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"archive_extns\n(default: .zip,.tar,.tgz,.taz,.z,.gz,.rar,.7z)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"File extensions that should be treated as archives.\nThis can be any file type supported by bsdtar."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"allow_encrypted_archives\n(default: false)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Allow archives that cannot be read by bsdtar because\nthey are encrypted."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"timeout\n(default: 30)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Timeout in seconds before the plugin will abort."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"attachment.filename.regex"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This file contains a list of regular expressions, one per line that\nwill be tested against each filename found within a message.\nThe first regexp to match will cause the message to be rejected."},{type:b,tag:"br",props:{},children:[]},{type:a,value:"\nAny invalid regexps will be detected, reported and skipped."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"attachment.filename.wc"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"attachment.archive.filename.regex"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This file contains a list of regular expressions, one per line that\nwill be tested against each filename found within an archive file.\nThe first regexp to match will cause the message to be rejected.\nAny invalid regexps will be detected, reported and skipped."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"attachment.archive.filename.wc"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"attachment.ctype.regex"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This file contains a list of regular expressions, one per line that\nwill be tested against each MIME Content-Type header in the message.\nThe first regexp to match will cause the message to be rejected.\nAny invalid regexps will be detected, reported and skipped."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"attachiment.ctype.wc"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:c}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Fplugins",path:"\u002Fen\u002Fplugins\u002Fattachment",extension:".md",createdAt:B,updatedAt:B,to:"\u002Fplugins\u002Fattachment"},prev:{slug:C,title:C,to:"\u002Fplugins\u002Faliases"},next:{slug:"avg",title:"avg - Anti-Virus scanner",to:"\u002Fplugins\u002Favg"}}],fetch:[],mutations:[]}}("text","element","\n","p","li","a",2,"h2","true",-1,"span","icon","icon-link","code","As above, except this expects wildcards instead of regular expressions.","attachment","limitations","Limitations","requirements","Requirements","logging","Logging","configuration","Configuration","tmp","bsdtar","ul","2020-12-21T00:45:07.188Z","aliases")));