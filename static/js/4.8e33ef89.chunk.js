(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[4],{118:function(t,e,i){},120:function(t,e,i){},121:function(t,e,i){},33:function(t,e,i){"use strict";i.r(e);var a=i(76),n=i(0),d=(i(118),i(1)),o=i(12),s=i(17),r=i(48),c=i(6),m=function(t){var e=t.id,i=t.tagHandler,a=Object(n.useContext)(r.a),m="/"+a[e].markdown,l=function(t){var e=function(t,e){var i=e.find((function(e){return Object(d.e)(t,{path:e.path,exact:e.exact})}));return i?i.component:null}(t,s.a);e&&e.preload&&e.preload()};return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)(o.b,{to:m,className:"link",onMouseOver:function(){return l(m)},children:a[e].title}),Object(c.jsx)("p",{children:a[e].description}),Object(c.jsx)("div",{className:"card-tags",children:a[e].tags.map((function(t){return Object(c.jsx)("div",{className:"card-tag",onClick:function(){return i(t)},children:t},t)}))})]})},l=i(77),p=i.n(l),_=(i(120),function(t){var e=t.currentPage,i=t.postCount,a=t.pageSize,n=t.pageHandler,d=Math.ceil(i/a);if(1===d)return null;var o=p.a.range(1,d+1);return Object(c.jsx)("div",{className:"pagination",children:o.map((function(t){return Object(c.jsx)("div",{className:t===e?"page-item active":"page-item",style:{cursor:"pointer"},children:Object(c.jsx)("div",{className:"page-link",onMouseDown:function(){return n(t)},children:t})},"pagination-".concat(t))}))})});i(121),e.default=function(){var t=Object(n.useContext)(r.a),e=Object(n.useState)("all"),i=Object(a.a)(e,2),d=i[0],o=i[1],s=Object(n.useState)(1),l=Object(a.a)(s,2),h=l[0],u=l[1],g=Object(n.useState)(Object.values(t).slice(0,8)),k=Object(a.a)(g,2),b=k[0],w=k[1],f=Object(n.useState)(Object.values(t).length),j=Object(a.a)(f,2),x=j[0],y=j[1],S=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,a=p.a.pickBy(t,(function(t){return"all"===i||t.tags.includes(i)})),n=Object.values(a),s=8*(e-1);y(n.length),w(p()(n).slice(s).take(8).value()),u(e),o(i)},T=function(t){S(1,t)},O=function(){var e=new Set(["all"]);for(var i in t)t[i].tags.forEach((function(t){return e.add(t)}));var a=Array.from(e);return Object(c.jsx)("div",{className:"tags",children:a.map((function(t){return Object(c.jsx)("div",{className:"tag",onClick:function(){S(1,t)},children:t},t)}))},"main-tags-key")};return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)(O,{}),Object(c.jsxs)("h2",{children:[d," (",x,")"]},"main-tag-key"),b.map((function(t){return Object(c.jsx)(m,{id:t.markdown,tagHandler:T},t.id)})),Object(c.jsx)(_,{currentPage:h,postCount:x,pageSize:8,pageHandler:S},"pagenation")]})}},43:function(t){t.exports=JSON.parse('{"bubble_sort.md":{"id":0,"title":"Bubble Sort (\ubc84\ube14\uc815\ub82c)","description":"\ubc84\ube14\uc18c\ud2b8\ub294 \uc778\uc811\ud55c \uc694\uc18c\ub4e4\uc744 \ube44\uad50\ud558\uc5ec \uc815\ub82c\ud558\ub294 \uc54c\uace0\ub9ac\uc998\uc785\ub2c8\ub2e4.\uc778\uc811\ud55c \ub450\uac1c\uc758 \uc694\uc18c\ub4e4\uc744 \ube44\uad50\ud558\uc5ec \ud06c\uae30\uac00 \uc21c\uc11c\ub300\ub85c \ub418\uc5b4\uc788\uc9c0 \uc54a\uc73c\uba74 \uc11c\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4.O(n^2)\uc758 \uc2dc\uac04\ubcf5\uc7a1\ub3c4\ub97c \uac00\uc9c0\uc9c0\ub9cc \ucf54\ub4dc\uac00 \ub2e8\uc21c\ud558\uc5ec \uc790\uc8fc \uc0ac\uc6a9\ub429\ub2c8\ub2e4.Bubble Sort \uc815\ub82c\uacfc\uc815","markdown":"bubble_sort.md","path":"algorithm/sort/bubble_sort.md","tags":["algorithm","sort"]},"heap_sort.md":{"id":1,"title":"Heap Sort (\ud799\uc815\ub82c)","description":"\ud799 \uc815\ub82c\uc740 \ube44\uad50\uae30\ubc18 \uc815\ub82c \uc54c\uace0\ub9ac\uc998\uc73c\ub85c \uc120\ud0dd\uc815\ub82c\uc758 \ud5a5\uc0c1\ub41c \ubc84\uc804\uc73c\ub85c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\uc120\ud0dd\uc815\ub82c\uacfc \uc720\uc0ac\ud558\uac8c \uc815\ub82c\ub41c \uc601\uc5ed\uacfc \uc815\ub82c\ub418\uc9c0 \uc54a\uc740 \uc601\uc5ed\uc73c\ub85c \ub098\ub204\uace0 \uc815\ub82c\ub418\uc9c0 \uc54a\uc740 \uc601\uc5ed\uc758 \uac00\uc7a5 \ud070 \uc694\uc18c\ub97c \ucd94\ucd9c\ud55c \ud6c4 \uc815\ub82c\ub41c \uc601\uc5ed\uc5d0 \uc0bd\uc785\ud569\ub2c8\ub2e4.","markdown":"heap_sort.md","path":"algorithm/sort/heap_sort.md","tags":["algorithm","sort"]},"insertion_sort.md":{"id":2,"title":"Insertion Sort (\uc0bd\uc785\uc815\ub82c)","description":"\uc0bd\uc785\uc815\ub82c\uc740 \uc790\ub8cc \ubc30\uc5f4\uc758 \ubaa8\ub4e0 \uc694\uc18c\ub97c \uc55e\uc5d0\uc11c\ubd80\ud130 \ucc28\ub840\ub300\ub85c \uc774\ubbf8 \uc815\ub82c\ub41c \ubc30\uc5f4 \ubd80\ubd84\uacfc \ube44\uad50\ud558\uc5ec \uc790\uc2e0\uc758 \uc704\uce58\ub97c \ucc3e\uc544 \uc0bd\uc785\ud568\uc73c\ub85c\uc368 \uc815\ub82c\ud558\ub294 \uc54c\uace0\ub9ac\uc998\uc785\ub2c8\ub2e4.O(n^2)\uc758 \uc2dc\uac04\ubcf5\uc7a1\ub3c4\ub97c \uac00\uc9c0\uc9c0\ub9cc \uc120\ud0dd\uc815\ub82c, \ubc84\ube14\uc815\ub82c \uc54c\uace0\ub9ac\uc998\uc5d0 \ube44\ud574 \ube60\ub985\ub2c8\ub2e4.","markdown":"insertion_sort.md","path":"algorithm/sort/insertion_sort.md","tags":["algorithm","sort"]},"selection_sort.md":{"id":3,"title":"Selection Sort (\uc120\ud0dd\uc815\ub82c)","description":"\uc120\ud0dd\uc815\ub82c\uc740 \uc815\ub82c\ub418\uc9c0 \uc54a\uc740 \ubd80\ubd84\uc5d0\uc11c \uac00\uc7a5 \ucd5c\uc18c\uc758 \uac12\uc744 \ucc3e\uc544 \uc2dc\uc791\ubd80\ubd84\uc5d0 \ubc30\uce58\ud558\uc5ec \uc815\ub82c\ud558\ub294 \uc54c\uace0\ub9ac\uc998\uc785\ub2c8\ub2e4.O(n^2)\uc758 \uc2dc\uac04\ubcf5\uc7a1\ub3c4\ub97c \uac00\uc9c0\uba70 \uc54c\uace0\ub9ac\uc998\uc774 \ub2e8\uc21c\ud558\uc5ec \uba54\ubaa8\ub9ac\uac00 \uc81c\ud55c\uc801\uc778 \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9\uc2dc \uc131\ub2a5 \uc0c1\uc758 \uc774\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.Selection Sort \uc815\ub82c\uacfc\uc815","markdown":"selection_sort.md","path":"algorithm/sort/selection_sort.md","tags":["algorithm","sort"]},"\ub3c4\ucee4_\uba85\ub839\uc5b4.md":{"id":4,"title":"\ub3c4\ucee4 \uba85\ub839\uc5b4","description":"docker ps \ucee8\ud14c\uc774\ub108 \ud655\uc778docker images \ub3c4\ucee4 \uc774\ubbf8\uc9c0 \ud655\uc778docker top $CONTAINER_ID \ucee8\ud14c\uc774\ub108 \ub0b4 running process \ud655\uc778docker build -t $IMAGE_NAME:$TAG . \ube4c\ub4dc\ud558\uae30","markdown":"\ub3c4\ucee4_\uba85\ub839\uc5b4.md","path":"container/docker/\ub3c4\ucee4_\uba85\ub839\uc5b4.md","tags":["container","docker"]},"\ucfe0\ubc84\ub124\ud2f0\uc2a4_\uba85\ub839\uc5b4.md":{"id":5,"title":"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uba85\ub839\uc5b4","description":"1. EVENTkubectl get events --sort-by=.metadata.creationTimestamp \uc2dc\uac04\uc21c\uc73c\ub85c \ucd9c\ub825kubectl get events --field-selector type=Warning Warning \uc774\ubca4\ud2b8\ub9cc \ucd9c\ub825","markdown":"\ucfe0\ubc84\ub124\ud2f0\uc2a4_\uba85\ub839\uc5b4.md","path":"container/kubernetes/\ucfe0\ubc84\ub124\ud2f0\uc2a4_\uba85\ub839\uc5b4.md","tags":["container","kubernetes"]},"TDD.md":{"id":6,"title":"\ud14c\uc2a4\ud2b8 \uc8fc\ub3c4 \uac1c\ubc1c (TDD: Test Driven Development)","description":"1. TDD \ub780?TDD\ub294 \ub9e4\uc6b0 \uc9e7\uc740 \uac1c\ubc1c \uc0ac\uc774\ud074\uc744 \ubc18\ubcf5\ud558\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c \ud504\ub85c\uc138\uc2a4 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4. \uc6b0\uc120 \uac1c\ubc1c\uc790\ub294 \uc694\uad6c\ub418\ub294 \uc0c8\ub85c\uc6b4 \uae30\ub2a5\uc5d0 \ub300\ud55c \uc790\ub3d9\ud654\ub41c \ud14c\uc2a4\ud2b8\ucf00\uc774\uc2a4\ub97c \uc791\uc131\ud558\uace0, \uadf8 \ud6c4\uc5d0 \ud574\ub2f9 \ud14c\uc2a4\ud2b8\ub97c \ud1b5\uacfc\ud558\ub294 \uac00\uc7a5 \ucd5c\uc18c\ud55c\uc758 \ucf54\ub4dc\ub97c \uc791\uc131\ud569\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc0c1\ud669\uc5d0 \ub9de\ub3c4\ub85d \ub9ac\ud329\ud1a0\ub9c1\ud569\ub2c8\ub2e4.","markdown":"TDD.md","path":"etc/TDD.md","tags":["etc"]},"WEB_\uc11c\ubc84\uc640_WAS.md":{"id":7,"title":"WEB \uc11c\ubc84\uc640 WAS","description":"WEB \uc11c\ubc84WEB \uc11c\ubc84\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\ub85c \ubd80\ud130 HTTP\uc694\uccad\uc744 \ubc1b\uc544\ub4e4\uc774\uace0 \ubc18\uc751\ud558\ub294 \uc5ed\ud560\uc744 \ud55c\ub2e4.\uc8fc\ub85c \uc815\uc801 \ucee8\ud150\uce20(\uc774\ubbf8\uc9c0, \ube44\ub514\uc624, HTML)\ub97c \uc11c\ube44\uc2a4\ud55c\ub2e4.\ub300\ud45c\uc801\uc73c\ub85c Apache, Nginx\uac00 \uc788\ub2e4.WAS (Web Application Server)","markdown":"WEB_\uc11c\ubc84\uc640_WAS.md","path":"etc/WEB_\uc11c\ubc84\uc640_WAS.md","tags":["etc"]},"\uba54\uc18c\ub4dc_\uccb4\uc774\ub2dd.md":{"id":8,"title":"\uba54\uc18c\ub4dc \uccb4\uc774\ub2dd (Method Chaining)","description":"OOP\uc5d0\uc11c \uc5ec\ub7ec \uba54\uc18c\ub4dc\ub97c \uc774\uc5b4\uc11c \ud638\ucd9c\ud558\ub294 \ubb38\ubc95\uc785\ub2c8\ub2e4.\uba54\uc18c\ub4dc\uac00 \uac1d\uccb4(this)\ub97c \ubc18\ud658\ud558\uc5ec \uc5ec\ub7ec \uba54\uc18c\ub4dc\ub97c \uc21c\ucc28\uc801\uc73c\ub85c \uc120\uc5b8\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4.\uba54\uc18c\ub4dc \uccb4\uc774\ub2dd\uc744 \uc774\uc6a9\ud558\uba74 \ucf54\ub4dc\uac00 \uac04\uacb0\ud574\uc838 \ud558\ub098\uc758 \ubb38\uc7a5\ucc98\ub7fc \uc77d\ud788\uac8c \ud560 \uc218 \uc788\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uace0 \uc7a5\uae30\uc801\uc73c\ub85c\ub294 \uc720\uc9c0\ubcf4\uc218\uc5d0 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4.","markdown":"\uba54\uc18c\ub4dc_\uccb4\uc774\ub2dd.md","path":"etc/\uba54\uc18c\ub4dc_\uccb4\uc774\ub2dd.md","tags":["etc"]},"\ucf58\uc194_\ucc3d_\uc5c6\uc774_\ubc30\uce58\ud30c\uc77c_\uc2e4\ud589.md":{"id":9,"title":"\ucf58\uc194 \ucc3d \uc5c6\uc774 \ubc30\uce58 \ud30c\uc77c \uc2e4\ud589","description":"run.vbsSet oShell = CreateObject(\\"Wscript.Shell\\")Dim strArgsstrArgs = \\"cmd /c file_name.bat\\"oShell.Run strArgs, 0, false","markdown":"\ucf58\uc194_\ucc3d_\uc5c6\uc774_\ubc30\uce58\ud30c\uc77c_\uc2e4\ud589.md","path":"etc/\ucf58\uc194_\ucc3d_\uc5c6\uc774_\ubc30\uce58\ud30c\uc77c_\uc2e4\ud589.md","tags":["etc"]},"\uc790\uac00_\uc11c\uba85_\uc778\uc99d\uc11c_\uc0dd\uc131.md":{"id":10,"title":"\uc790\uac00 \uc11c\uba85 \uc778\uc99d\uc11c \uc0dd\uc131","description":"\uc778\uc99d\uc11c\ub294 \uac1c\uc778\ud0a4 \uc18c\uc720\uc790\uc758 \uacf5\uac1c\ud0a4(public key)\uc5d0 \uc778\uc99d\uae30\uad00\uc758 \uac1c\uc778\ud0a4(private key)\ub85c \uc804\uc790\uc11c\uba85\ud55c \ub370\uc774\ud130\uc785\ub2c8\ub2e4.\ubaa8\ub4e0 \uc778\uc99d\uc11c\ub294 \ubc1c\uae09\uae30\uad00(Certificate Authority: CA)\uac00 \uc788\uc5b4\uc57c \ud558\uc9c0\ub9cc \uc790\uac00 \uc11c\uba85 \uc778\uc99d\uc11c\ub294 \uc11c\uba85\ud574\uc904 \uc0c1\uc704 \uc778\uc99d\uae30\uad00\uc774 \uc5c6\uc73c\ubbc0\ub85c \uac1c\uc778\ud0a4\ub85c \uc2a4\uc2a4\ub85c \uc11c\uba85\ud558\uc5ec \uc778\uc99d\uc11c\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.","markdown":"\uc790\uac00_\uc11c\uba85_\uc778\uc99d\uc11c_\uc0dd\uc131.md","path":"etc/\uc778\uc99d\uc11c/\uc790\uac00_\uc11c\uba85_\uc778\uc99d\uc11c_\uc0dd\uc131.md","tags":["etc","\uc778\uc99d\uc11c"]},"\uc815\uaddc\ud45c\ud604\uc2dd.md":{"id":11,"title":"\uc815\uaddc\ud45c\ud604\uc2dd (Regular Expression)","description":"\uc815\uaddc \ud45c\ud604\uc2dd\uc740 \ud2b9\uc815\ud55c \uaddc\uce59\uc744 \uac00\uc9c4 \ubb38\uc790\uc5f4\uc758 \uc9d1\ud569\uc744 \ud45c\ud604\ud558\ub294 \ub370 \uc0ac\uc6a9\ud558\ub294 \ud615\uc2dd \uc5b8\uc5b4\uc774\ub2e4.\uc815\uaddc \ud45c\ud604\uc2dd\uc740 \ub9ce\uc740 \ud14d\uc2a4\ud2b8 \ud3b8\uc9d1\uae30\uc640 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc5d0\uc11c \ubb38\uc790\uc5f4\uc758 \uac80\uc0c9\uacfc \uce58\ud658\uc744 \uc704\ud574 \uc9c0\uc6d0\ud558\uace0 \uc788\ub2e4.\uc815\uaddc\ud45c\ud604\uc2dd \ubb38\ubc95* .(dot): 1\uac1c\uc758 \ubb38\uc790","markdown":"\uc815\uaddc\ud45c\ud604\uc2dd.md","path":"etc/\uc815\uaddc\ud45c\ud604\uc2dd/\uc815\uaddc\ud45c\ud604\uc2dd.md","tags":["etc","\uc815\uaddc\ud45c\ud604\uc2dd"]},"\ub364\ud504\ud30c\uc77c_\uc0dd\uc131\ubc29\ubc95.md":{"id":12,"title":"\ub364\ud504\ud30c\uc77c \uc0dd\uc131\ubc29\ubc95","description":"Heap dumpjmap\uc740 JVM \ud504\ub85c\uc138\uc2a4\uc758 heap \ub364\ud504\ub97c \uc0dd\uc131\ud558\ub294 \uba85\ub839\uc5b4\uc774\ub2e4.jmap -dump:format=b,file=`hostname`_dump.hprof $pidThread dumpjstack\uc740 JVM \ud504\ub85c\uc138\uc2a4\uc758 thread \ub364\ud504\ub97c \uc0dd\uc131\ud558\ub294 \uba85\ub839\uc5b4\uc774\ub2e4.","markdown":"\ub364\ud504\ud30c\uc77c_\uc0dd\uc131\ubc29\ubc95.md","path":"etc/\ud2b8\ub7ec\ube14\uc288\ud305/\ub364\ud504\ud30c\uc77c_\uc0dd\uc131\ubc29\ubc95.md","tags":["etc","\ud2b8\ub7ec\ube14\uc288\ud305"]},"\ud2b8\ub7ec\ube14_\uc288\ud305_\ud234.md":{"id":13,"title":"\ud2b8\ub7ec\ube14 \uc288\ud305 \ud234","description":"GC- [GCViewer](https://github.com/chewiebug/GCViewer)- [IBM GC Analyzer](https://www.ibm.com/support/pages/ibm-pattern-modeling-and-analysis-tool-java-garbage-collector-pmat)","markdown":"\ud2b8\ub7ec\ube14_\uc288\ud305_\ud234.md","path":"etc/\ud2b8\ub7ec\ube14\uc288\ud305/\ud2b8\ub7ec\ube14_\uc288\ud305_\ud234.md","tags":["etc","\ud2b8\ub7ec\ube14\uc288\ud305"]},"du_\uba85\ub839\uc5b4.md":{"id":14,"title":"du \uba85\ub839\uc5b4","description":"du\ub294 \ub514\ub809\ud1a0\ub9ac\ubcc4 \ub514\uc2a4\ud06c \uc0ac\uc6a9\ub7c9\uc744 \uc54c \uc218 \uc788\ub294 \uba85\ub839\uc5b4\uc785\ub2c8\ub2e4.\uc0ac\uc6a9\ubc95du [OPTION] [FILE]-a : \ub514\ub809\ud1a0\ub9ac + \ubaa8\ub4e0 \ud30c\uc77c\ub4e4\uc758 \uc0ac\uc6a9\ub7c9 \ud45c\uc2dc-s : \uc6a9\ub7c9\uc758 \ud569\uacc4\ub97c \ubcf4\uc5ec\uc90c-h : \uc0ac\ub78c\uc774 \ubcf4\uae30 \ud3b8\ud55c \ud3ec\uba67\uc73c\ub85c \ubcf4\uc5ec\uc90c (e.g., 1K 234M 2G)","markdown":"du_\uba85\ub839\uc5b4.md","path":"linux/du_\uba85\ub839\uc5b4.md","tags":["linux"]},"find_\uba85\ub839\uc5b4.md":{"id":15,"title":"find \uba85\ub839\uc5b4","description":"find \uba85\ub839\uc5b4\ub294 \ub9ac\ub205\uc2a4\uc5d0\uc11c \ud30c\uc77c \ubc0f \ub514\ub809\ud1a0\ub9ac\ub97c \uac80\uc0c9\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \uba85\ub839\uc5b4\uc785\ub2c8\ub2e4.\uc5ec\ub7ec \uc635\uc158(type,perm,name,mtime...)\uc744 \uc774\uc6a9\ud558\uc5ec \uc6d0\ud558\ub294 \ud30c\uc77c\uc744 \uac80\uc0c9\ud560 \uc218 \uc788\uace0 exec \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \uac80\uc0c9\ud55c \ud30c\uc77c\uc744 \uc81c\uc5b4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","markdown":"find_\uba85\ub839\uc5b4.md","path":"linux/find_\uba85\ub839\uc5b4.md","tags":["linux"]},"logrotate.md":{"id":16,"title":"logrotate","description":"logroate\ub294 \ub85c\uadf8\ub97c \uad00\ub9ac\ud558\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4./etc/logrotate.conf \ub610\ub294 /etc/logrotate.d/* \uc5d0 \uc124\uc815\ud569\ub2c8\ub2e4.logrotate \uc635\uc158- daily, weekly, monthy, yearly => \ub9e4\uc77c, \ub9e4\uc8fc, \ub9e4\ub2ec, \ub9e4\ub144 \uc2dc\ud589","markdown":"logrotate.md","path":"linux/logrotate.md","tags":["linux"]},"scp_\uba85\ub839\uc5b4.md":{"id":17,"title":"SCP \uba85\ub839\uc5b4","description":"scp(secure copy)\ub294 ssh \ud1b5\uc2e0\uc744 \uc774\uc6a9\ud55c \ud30c\uc77c \uc804\uc1a1 \uba85\ub839\uc5b4\uc785\ub2c8\ub2e4.\uc0ac\uc6a9\ubc95scp file user@host:/path/to/file \ub9ac\ubaa8\ud2b8 \uc11c\ubc84\ub85c \ud30c\uc77c \uc804\uc1a1scp user@host:/path/to/file /local/path/to/file \ub9ac\ubaa8\ud2b8 \uc11c\ubc84\uc5d0\uc11c \ud30c\uc77c \uac00\uc838\uc624\uae30","markdown":"scp_\uba85\ub839\uc5b4.md","path":"linux/scp_\uba85\ub839\uc5b4.md","tags":["linux"]},"sudo_\ud328\uc2a4\uc6cc\ub4dc_\uc5c6\uc774_\uc0ac\uc6a9.md":{"id":18,"title":"sudo \ud328\uc2a4\uc6cc\ub4dc\uc5c6\uc774 \uc0ac\uc6a9","description":"\ub9ac\ub205\uc2a4\uc5d0\uc11c sudo\ub97c \ud328\uc2a4\uc6cc\ub4dc\uc5c6\uc774 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.root \uacc4\uc815\uc73c\ub85c /etc/sudoers.d/[\uc0ac\uc6a9\uc790\uba85] \ud30c\uc77c\uc5d0 \uc544\ub798 \ub0b4\uc6a9\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4.\uc544\ub798 \uc608\uc81c\uc5d0\uc11c NOPASSWD: \ub97c \ube7c\uba74 sudo \uad8c\ud55c\ub9cc \ubd80\uc5ec (sudo \uc2e4\ud589\uc2dc \ud328\uc2a4\uc6cc\ub4dc \uc785\ub825\ud544\uc694)","markdown":"sudo_\ud328\uc2a4\uc6cc\ub4dc_\uc5c6\uc774_\uc0ac\uc6a9.md","path":"linux/sudo_\ud328\uc2a4\uc6cc\ub4dc_\uc5c6\uc774_\uc0ac\uc6a9.md","tags":["linux"]},"TOP_\uba85\ub839\uc5b4.md":{"id":19,"title":"top \uba85\ub839\uc5b4","description":"\uc2e4\uc2dc\uac04\uc73c\ub85c \ub9ac\ub205\uc2a4\uc758 CPU, MEM \uc0ac\uc6a9\ub7c9\uc744 \uccb4\ud06c\ud560 \uc218 \uc788\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4.\uc0ac\uc6a9\ubc95top <\uc635\uc158>top \uc635\uc158* -a : \uba54\ubaa8\ub9ac \uc0ac\uc6a9\uc5d0 \ub530\ub77c \uc815\ub82c* -b : \ubc30\uce58 \ubaa8\ub4dc\uc5d0\uc11c \uc2dc\uc791* -c : \uba85\ub839\uc5b4 \ub300\uc2e0 \uba85\ub839\uc5b4 \ub77c\uc778\uc744 \ubcf4\uc5ec\uc90c* -d : \uc5c5\ub370\uc774\ud2b8 \uac04\uaca9\uc744 \uc870\uc815","markdown":"TOP_\uba85\ub839\uc5b4.md","path":"linux/TOP_\uba85\ub839\uc5b4.md","tags":["linux"]},"ulimit_\uba85\ub839\uc5b4.md":{"id":20,"title":"ulimit","description":"ulimit\uc740 \ud504\ub85c\uc138\uc2a4\uc758 \uc790\uc6d0 \ud55c\ub3c4\ub97c \uc124\uc815\ud558\ub294 \uba85\ub839\uc5b4\uc785\ub2c8\ub2e4.ulimit\uc5d0\ub294 soft\ud55c\ub3c4\uc640 hard\ud55c\ub3c4\uac00 \uc788\uc2b5\ub2c8\ub2e4.- soft\ud55c\ub3c4: \uc0c8\ub85c\uc6b4 \ud504\ub85c\uadf8\ub7a8\uc744 \uc0dd\uc131\ud558\uba74 \uae30\ubcf8\uc73c\ub85c \uc801\uc6a9\ub418\ub294 \ud55c\ub3c4- hard\ud55c\ub3c4: \uc18c\ud504\ud2b8 \ud55c\ub3c4\uc5d0\uc11c \ucd5c\ub300\ub85c \ub298\ub9b4 \uc218 \uc788\ub294 \ud55c\ub3c4 (\uc288\ud37c\uc720\uc800\uc5d0 \uc758\ud574\uc11c\ub9cc \uc870\uc815\uac00\ub2a5)","markdown":"ulimit_\uba85\ub839\uc5b4.md","path":"linux/ulimit_\uba85\ub839\uc5b4.md","tags":["linux"]},"vi_\ud14d\uc2a4\ud2b8_\ubcc0\uacbd.md":{"id":21,"title":"vi \ud14d\uc2a4\ud2b8 \ubcc0\uacbd","description":"vi\uc5d0\uc11c \ud574\ub2f9 \ud14d\uc2a4\ud2b8\ub97c \ucc3e\uc544 \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95\uc774\ub2e4. (orgin_text -> replace_text):%s/{origin_text}/{replace_text}","markdown":"vi_\ud14d\uc2a4\ud2b8_\ubcc0\uacbd.md","path":"linux/vi_\ud14d\uc2a4\ud2b8_\ubcc0\uacbd.md","tags":["linux"]},"\ub9ac\ub205\uc2a4_\ub178\ud2b8\ubd81_\ub36e\uac1c_\uc601\ud5a5_\uc5c6\uc560\uae30.md":{"id":22,"title":"\ub9ac\ub205\uc2a4 \ub178\ud2b8\ubd81 \ub36e\uac1c \uc601\ud5a5 \uc5c6\uc560\uae30","description":"\ub9ac\ub205\uc2a4\uc5d0\uc11c \ub178\ud2b8\ubd81\uc758 \ub36e\uac1c\ub97c \ub2eb\uc558\uc744 \ub54c \ub3d9\uc791\ud558\uc9c0 \uc54a\ub294 \ud604\uc0c1\uc744 \uc5c6\uc560\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.\uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud558\uc5ec /etc/systemd/logind.conf \ud30c\uc77c\uc744 \uc5f4\uc5b4\uc90d\ub2c8\ub2e4.sudo vi /etc/systemd/logind.conf","markdown":"\ub9ac\ub205\uc2a4_\ub178\ud2b8\ubd81_\ub36e\uac1c_\uc601\ud5a5_\uc5c6\uc560\uae30.md","path":"linux/\ub9ac\ub205\uc2a4_\ub178\ud2b8\ubd81_\ub36e\uac1c_\uc601\ud5a5_\uc5c6\uc560\uae30.md","tags":["linux"]},"\uc0ac\uc6a9\uc790_\uadf8\ub8f9_\ucd94\uac00_\ubc0f_\uc0ad\uc81c.md":{"id":23,"title":"\uc0ac\uc6a9\uc790 \uadf8\ub8f9 \ucd94\uac00 \ubc0f \uc0ad\uc81c","description":"\uc0ac\uc6a9\uc790 \uadf8\ub8f9\uc744 \uc0dd\uc131\ud558\uc5ec \uc0ac\uc6a9\uc790\ub4e4\uc744 \ud558\ub098\uc758 \uadf8\ub8f9\uc73c\ub85c \uc18c\uc18d\ub418\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\uadf8\ub8f9\uc5d0 \uc18d\ud55c \uc0ac\uc6a9\uc790\ub4e4\uc740 \ud2b9\uc815 \uad8c\ud55c\uc744 \uac00\uc9c0\uace0 \uc788\uc5b4 \ud30c\uc77c\uc774\ub098 \ud3f4\ub354\ub4f1\uc744 \uacf5\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\uadf8\ub8f9 \ucd94\uac00groupadd\uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uadf8\ub8f9\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","markdown":"\uc0ac\uc6a9\uc790_\uadf8\ub8f9_\ucd94\uac00_\ubc0f_\uc0ad\uc81c.md","path":"linux/\uc0ac\uc6a9\uc790_\uadf8\ub8f9_\ucd94\uac00_\ubc0f_\uc0ad\uc81c.md","tags":["linux"]},"\uc555\ucd95_\uba85\ub839\uc5b4.md":{"id":24,"title":"\uc555\ucd95 \uba85\ub839\uc5b4","description":"tartar\uc758 \uc635\uc158* -c : \ud30c\uc77c\uc744 tar\ub85c \ubb36\uc74c* -p : \ud30c\uc77c \uad8c\ud55c \ud655\uc7a5* -v : \uc555\ucd95\ud558\uac70\ub098 \ud574\uc81c\ud560 \ub54c \uacfc\uc815\uc744 \ucd9c\ub825* -f : \ud30c\uc77c \uc774\ub984\uc744 \uc9c0\uc815* -C : \uacbd\ub85c\ub97c \uc9c0\uc815* -x : tar \uc555\ucd95 \ud480\uae30* -z : gzip\uc73c\ub85c \uc555\ucd95\ud558\uac70\ub098 \ud574\uc81c\ud568","markdown":"\uc555\ucd95_\uba85\ub839\uc5b4.md","path":"linux/\uc555\ucd95_\uba85\ub839\uc5b4.md","tags":["linux"]},"\uc6b0\ubd84\ud22c_\uc778\uc99d\uc11c_\uc124\uce58.md":{"id":25,"title":"ubuntu \uc778\uc99d\uc11c \uc124\uce58","description":"\ud504\ub85d\uc2dc\ub97c \uc0ac\uc6a9\ud558\ub294 \ud658\uacbd\uc5d0\uc11c https \ud504\ub85c\ud1a0\ucf5c\uc744 \uc774\uc6a9\ud560 \ub54c \uc778\uc99d\uc624\ub958\uac00 \ub098\ub294 \uacbd\uc6b0\uac00 \uc788\ub2e4.\ud504\ub85d\uc2dc \ud658\uacbd\uc744 \uc704\ud574 \uc81c\uacf5\ub418\ub294 ca-certificates \ud30c\uc77c\uc744 \uc801\uc6a9\ud558\uc5ec \ud574\uacb0\ud560 \uc218 \uc788\ub2e4.\uc778\uc99d\uc11c \uc124\uce58 \uc21c\uc11c/usr/share/ca-certificates\uc5d0 \ud3f4\ub354\ub97c \ud558\ub098 \ub9cc\ub4e0\ub2e4.","markdown":"\uc6b0\ubd84\ud22c_\uc778\uc99d\uc11c_\uc124\uce58.md","path":"linux/\uc6b0\ubd84\ud22c_\uc778\uc99d\uc11c_\uc124\uce58.md","tags":["linux"]},"HTTP_GET\uacfc_POST.md":{"id":26,"title":"HTTP GET\uacfc POST","description":"GET\uacfc POST\ub294 \uac00\uc7a5 \ud754\uc774 \uc4f0\uc774\ub294 HTTP \uba54\uc18c\ub4dc\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc11c\ubc84\ub85c \uc694\uccad\uc744 \ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.GETGET \ubc29\uc2dd\uc740 \uc11c\ubc84\ub85c\ubd80\ud130 \uc815\ubcf4\ub97c **\uc870\ud68c**\ud558\uae30 \uc704\ud574 \uc124\uacc4\ub41c \uba54\uc18c\ub4dc\uc785\ub2c8\ub2e4.GET \ubc29\uc2dd\uc740 \uc694\uccad\ud558\ub294 \ub370\uc774\ud130\uac00 URL\uc5d0 \ub2f4\uaca8\uc11c \uc804\uc1a1\ub429\ub2c8\ub2e4. (URL\uc0c1 ?\ub4a4 key, value\ub85c \uc30d\uc744 \uc774\ub8e8\ub294 QueryString\uc774 \ud3ec\ud568\ub428)","markdown":"HTTP_GET\uacfc_POST.md","path":"network/HTTP_GET\uacfc_POST.md","tags":["network"]},"nmap_\uba85\ub839\uc5b4.md":{"id":27,"title":"nmap \uba85\ub839\uc5b4","description":"nmap\uc740 \ud638\uc2a4\ud2b8\ub098 \ub124\ud2b8\uc6cc\ud06c\ub97c \uc2a4\uce90\ub2dd \ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 port scanning tool\uc785\ub2c8\ub2e4.nmap\uc744 \uc774\uc6a9\ud558\uc5ec \ubc29\ud654\ubcbd\uc774 \uc624\ud508\ub418\uc5b4\uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\uc0ac\uc6a9\ubc95nmap <\uc635\uc158> <\ud638\uc2a4\ud2b8>* -sT: TCP open scan","markdown":"nmap_\uba85\ub839\uc5b4.md","path":"network/nmap_\uba85\ub839\uc5b4.md","tags":["network"]},"SSH_\ud3ec\ud2b8\ud3ec\uc6cc\ub529.md":{"id":28,"title":"SSH \ud3ec\ud2b8\ud3ec\uc6cc\ub529","description":"\ud3ec\ud2b8\ud3ec\uc6cc\ub529\uc740 \ud558\ub098\uc758 IP \uc8fc\uc18c\uc640 \ud3ec\ud2b8 \ubc88\ud638 \uacb0\ud569\uc758 \ud1b5\uc2e0 \uc694\uccad\uc744 \ub2e4\ub978 \uacf3\uc73c\ub85c \ub118\uaca8\uc8fc\ub294 \ub124\ud2b8\uc6cc\ud06c \uc8fc\uc18c \ubcc0\ud658(NAT)\uc758 \uc751\uc6a9\uc785\ub2c8\ub2e4. (\uc704\ud0a4\ud53c\ub514\uc544 \ucc38\uc870)SSH \ud3ec\ud2b8\ud3ec\uc6cc\ub529\uc740 SSH \uc11c\ubc84\ub97c Proxy\ucc98\ub7fc \ud65c\uc6a9\ud558\uc5ec \ud130\ub110\ub9c1(tunneling)\uc774\ub77c\uace0\ub3c4 \ubd80\ub974\uba70 \ud1b5\uc2e0\uc2dc SSH\ub97c \uc774\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \ud1b5\uc2e0\ub0b4\uc6a9\uc774 \uc554\ud638\ud654\ub418\uc5b4 \uc804\uc1a1\ub429\ub2c8\ub2e4.","markdown":"SSH_\ud3ec\ud2b8\ud3ec\uc6cc\ub529.md","path":"network/SSH_\ud3ec\ud2b8\ud3ec\uc6cc\ub529.md","tags":["network"]},"flask_\ud30c\uc77c_\uc5c5\ub85c\ub4dc.md":{"id":29,"title":"flask \ud30c\uc77c \uc5c5\ub85c\ub4dc","description":"flask\ub97c \uc774\uc6a9\ud558\uc5ec \uc11c\ubc84\uc5d0 \ud30c\uc77c\uc744 \uc5c5\ub85c\ub4dc \ud558\ub294 \ubc29\ubc95\uc744 \uc815\ub9ac\ud558\uc600\uc2b5\ub2c8\ub2e4.upload_main()\uc740 \ud30c\uc77c \uc5c5\ub85c\ub4dc\ub97c \uc704\ud55c html\ub97c \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4.upload_files()\uc740 \uc11c\ubc84\uc5d0 \ud30c\uc77c\uc744 \uc5c5\ub85c\ub4dc\ud558\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4.\uc0ac\uc6a9\uc790\uac00 \uc11c\ubc84\uc758 \ud30c\uc77c\uc2dc\uc2a4\ud15c\uc774 \uc788\ub294 \ud30c\uc77c\uc744 \uc218\uc815\ud558\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 secure_filename()\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.","markdown":"flask_\ud30c\uc77c_\uc5c5\ub85c\ub4dc.md","path":"python/flask_\ud30c\uc77c_\uc5c5\ub85c\ub4dc.md","tags":["python"]},"json\uc5d0\uc11c_dictionary\ub85c_\ubcc0\ud658\ud558\ub294_\ubc29\ubc95.md":{"id":30,"title":"json\uc5d0\uc11c dictionary\ub85c \ubcc0\ud658\ud558\ub294 \ubc29\ubc95","description":"\ud30c\uc774\uc36c\uc5d0\uc11c dictionary\ub97c json\ub97c \ubcc0\ud658\ud558\uac70\ub098 json\uc744 dictionary\ub85c \ubcc0\ud658\ud574\uc57c\ud558\ub294 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4.json \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 loads\uc640 dumps\ub97c \uc774\uc6a9\ud558\uc5ec dictionary\uc640 json\uac04\uc758 \ubcc0\ud658\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.","markdown":"json\uc5d0\uc11c_dictionary\ub85c_\ubcc0\ud658\ud558\ub294_\ubc29\ubc95.md","path":"python/json\uc5d0\uc11c_dictionary\ub85c_\ubcc0\ud658\ud558\ub294_\ubc29\ubc95.md","tags":["python"]},"md5_checksum_\uad6c\ud558\ub294_\ubc29\ubc95.md":{"id":31,"title":"python\uc5d0\uc11c md5 checksum \uad6c\ud558\ub294 \ubc29\ubc95","description":"\ud30c\uc77c\uc744 \uc804\uc1a1, \ub2e4\uc6b4\ub85c\ub4dc\ud560 \ub54c \ud30c\uc77c\uc758 \ubb34\uacb0\uc131\uc744 \ud655\uc778\ud574\uc57c \ud558\ub294 \uacbd\uc6b0\uac00 \uc0dd\uae34\ub2e4.python\uc73c\ub85c file\uc758 md5 checksum\uc744 \uad6c\ud558\ub294 \ubc29\ubc95\uc744 \uc815\ub9ac\ud574\ubcf4\uc558\ub2e4.file md5 checksum \uc18c\uc2a4\ucf54\ub4dc\uc544\ub798\uc758 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\uba74 /path/to/file\uc758 hash\uac12\uc744 \uc5bb\uc744 \uc218 \uc788\ub2e4.","markdown":"md5_checksum_\uad6c\ud558\ub294_\ubc29\ubc95.md","path":"python/md5_checksum_\uad6c\ud558\ub294_\ubc29\ubc95.md","tags":["python"]},"REST_API_\ud638\ucd9c.md":{"id":32,"title":"REST API \ud638\ucd9c","description":"\ud30c\uc774\uc36c\uc758 requests, urllib \ubaa8\ub4c8\uc744 \uc0ac\uc6a9\ud558\uc5ec REST API \ud638\ucd9c\ud558\ub294 \ubc29\ubc95\uc744 \uc815\ub9ac\ud558\uc600\uc2b5\ub2c8\ub2e4.\u203b requests\ub294 Apache License 2.0\uc758 \ub77c\uc774\uc13c\uc2a4\ub97c \uac00\uc9c4 python HTTP \ub77c\uc774\ube0c\ub7ec\ub9ac ([requests \uacf5\uc2dd\ubb38\uc11c](https://requests.readthedocs.io/en/latest/))","markdown":"REST_API_\ud638\ucd9c.md","path":"python/REST_API_\ud638\ucd9c.md","tags":["python"]},"scp\ub97c_\uc774\uc6a9\ud55c_\ud30c\uc77c\uc804\uc1a1.md":{"id":33,"title":"scp\ub97c \uc774\uc6a9\ud55c \ud30c\uc77c\uc804\uc1a1","description":"python\uc758 paramiko\uc640 scp\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud30c\uc77c\uc804\uc1a1\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.\ub77c\uc774\ube0c\ub7ec\ub9ac \uc124\uce58scp \uc804\uc1a1\uc744 \uc704\ud574 \uc0ac\uc6a9\ub420 paramiko, scp \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc124\uce58\ud569\ub2c8\ub2e4.pip install paramikopip install scp","markdown":"scp\ub97c_\uc774\uc6a9\ud55c_\ud30c\uc77c\uc804\uc1a1.md","path":"python/scp\ub97c_\uc774\uc6a9\ud55c_\ud30c\uc77c\uc804\uc1a1.md","tags":["python"]},"shell_\uba85\ub839\uc5b4_\uc2e4\ud589.md":{"id":34,"title":"Shell \uba85\ub839\uc5b4 \uc2e4\ud589\ubc95","description":"Python\uc5d0\uc11c Shell \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uace0 \uc2f6\uc744 \ub54c\uac00 \uc788\uc2b5\ub2c8\ub2e4.\ud30c\uc774\uc36c\uc758 subprocess\ub97c \ud65c\uc6a9\ud558\uc5ec shell \uba85\ub839\uc5b4 \uc2e4\ud589\ud558\ub294 \uc608\uc81c\ucf54\ub4dc\ub97c \uc791\uc131\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.\u203b subprocess\ub294 \uc0c8\ub85c\uc6b4 \ud504\ub85c\uc138\uc2a4\ub97c \uc0dd\uc131\ud558\uc5ec input/output/error pipes\uc640 \uc5f0\uacb0\uc744 \uc81c\uacf5\ud558\ub294 \ud30c\uc774\uc36c\uc758 \ubaa8\ub4c8","markdown":"shell_\uba85\ub839\uc5b4_\uc2e4\ud589.md","path":"python/shell_\uba85\ub839\uc5b4_\uc2e4\ud589.md","tags":["python"]},"text_hash_\uac12_\uad6c\ud558\uae30.md":{"id":35,"title":"text hash \uac12 \uad6c\ud558\uae30","description":"python\uc758 hashlib\ub97c \uc774\uc6a9\ud558\uc5ec \uc5ec\ub7ec hash \uc54c\uace0\ub9ac\uc998(md5,sha1,sha224,sha256,sha384,sha512,...)\uc5d0 \ub9e4\uce6d\ub418\ub294 hash \uac12\uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\uc544\ub798\uc5d0 hashlib\uc758 hash \ud568\uc218\ub97c \uc774\uc6a9\ud55c hash\uac12 \uc0dd\uc131 \uc608\uc81c\ucf54\ub4dc\ub97c \uc791\uc131\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.","markdown":"text_hash_\uac12_\uad6c\ud558\uae30.md","path":"python/text_hash_\uac12_\uad6c\ud558\uae30.md","tags":["python"]},"wget_\uc0ac\uc6a9\ubc95.md":{"id":36,"title":"Python wget \uc0ac\uc6a9\ubc95","description":"Python\uc5d0\uc11c wget\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.wget \ub77c\uc774\ube0c\ub7ec\ub9ac \uc124\uce58\uba3c\uc800 wget\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 python wget \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc124\uce58\ud569\ub2c8\ub2e4.pip install wgetwget\uc73c\ub85c \ub2e4\uc6b4\ub85c\ub4dcwget\ub97c import\ud558\uace0 wget.download\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","markdown":"wget_\uc0ac\uc6a9\ubc95.md","path":"python/wget_\uc0ac\uc6a9\ubc95.md","tags":["python"]},"Hook.md":{"id":37,"title":"Hook","description":"Hook\uc740 React 16.8\ubc84\uc804\uc5d0 \uc0c8\ub85c \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4.Hook\uc740 \ud568\uc218 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c React \uc0c1\ud0dc\uc640 \uc0dd\uba85\uc8fc\uae30 \uae30\ub2a5\uc744 \uc5f0\ub3d9 \ud560 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.Hook\uc744 \uc774\uc6a9\ud558\uc5ec Class \uc791\uc131\uc5c6\uc774 \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub3c4 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","markdown":"Hook.md","path":"react/Hook.md","tags":["react"]}}')},48:function(t,e,i){"use strict";var a=i(0),n=i(43),d=Object(a.createContext)(n);e.a=d}}]);
//# sourceMappingURL=4.8e33ef89.chunk.js.map