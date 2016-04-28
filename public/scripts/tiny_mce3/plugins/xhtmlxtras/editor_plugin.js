(function(){tinymce.create("tinymce.plugins.XHTMLXtrasPlugin",{init:function(b,c){b.addCommand("mceCite",function(){b.windowManager.open({file:c+"/cite.htm",width:350+parseInt(b.getLang("xhtmlxtras.cite_delta_width",0)),height:250+parseInt(b.getLang("xhtmlxtras.cite_delta_height",0)),inline:1},{plugin_url:c})});b.addCommand("mceAcronym",function(){b.windowManager.open({file:c+"/acronym.htm",width:350+parseInt(b.getLang("xhtmlxtras.acronym_delta_width",0)),height:250+parseInt(b.getLang("xhtmlxtras.acronym_delta_width",0)),inline:1},{plugin_url:c})});b.addCommand("mceAbbr",function(){b.windowManager.open({file:c+"/abbr.htm",width:350+parseInt(b.getLang("xhtmlxtras.abbr_delta_width",0)),height:250+parseInt(b.getLang("xhtmlxtras.abbr_delta_width",0)),inline:1},{plugin_url:c})});b.addCommand("mceDel",function(){b.windowManager.open({file:c+"/del.htm",width:340+parseInt(b.getLang("xhtmlxtras.del_delta_width",0)),height:310+parseInt(b.getLang("xhtmlxtras.del_delta_width",0)),inline:1},{plugin_url:c})});b.addCommand("mceIns",function(){b.windowManager.open({file:c+"/ins.htm",width:340+parseInt(b.getLang("xhtmlxtras.ins_delta_width",0)),height:310+parseInt(b.getLang("xhtmlxtras.ins_delta_width",0)),inline:1},{plugin_url:c})});b.addCommand("mceAttributes",function(){b.windowManager.open({file:c+"/attributes.htm",width:380,height:370,inline:1},{plugin_url:c})});b.addButton("cite",{title:"xhtmlxtras.cite_desc",cmd:"mceCite"});b.addButton("acronym",{title:"xhtmlxtras.acronym_desc",cmd:"mceAcronym"});b.addButton("abbr",{title:"xhtmlxtras.abbr_desc",cmd:"mceAbbr"});b.addButton("del",{title:"xhtmlxtras.del_desc",cmd:"mceDel"});b.addButton("ins",{title:"xhtmlxtras.ins_desc",cmd:"mceIns"});b.addButton("attribs",{title:"xhtmlxtras.attribs_desc",cmd:"mceAttributes"});if(tinymce.isIE){function a(d,e){if(e.set){e.content=e.content.replace(/<abbr([^>]+)>/gi,"<html:abbr $1>");e.content=e.content.replace(/<\/abbr>/gi,"</html:abbr>")}}b.onBeforeSetContent.add(a);b.onPostProcess.add(a)}b.onNodeChange.add(function(e,d,g,f){g=e.dom.getParent(g,"CITE,ACRONYM,ABBR,DEL,INS");d.setDisabled("cite",f);d.setDisabled("acronym",f);d.setDisabled("abbr",f);d.setDisabled("del",f);d.setDisabled("ins",f);d.setDisabled("attribs",g&&g.nodeName=="BODY");d.setActive("cite",0);d.setActive("acronym",0);d.setActive("abbr",0);d.setActive("del",0);d.setActive("ins",0);if(g){do{d.setDisabled(g.nodeName.toLowerCase(),0);d.setActive(g.nodeName.toLowerCase(),1)}while(g=g.parentNode)}});b.onPreInit.add(function(){b.dom.create("abbr")})},getInfo:function(){return{longname:"XHTML Xtras Plugin",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/default.php/TinyMCE:Plugins/xhtmlxtras",version:tinymce.majorVersion+"."+tinymce.minorVersion}}});tinymce.PluginManager.add("xhtmlxtras",tinymce.plugins.XHTMLXtrasPlugin)})();