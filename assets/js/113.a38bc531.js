(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{478:function(t,s,a){"use strict";a.r(s);var n=a(45),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_47-subprocess模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_47-subprocess模块"}},[t._v("#")]),t._v(" 47. subprocess模块")]),t._v(" "),a("h1",{attrs:{id:"subprocess模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subprocess模块"}},[t._v("#")]),t._v(" subprocess模块")]),t._v(" "),a("p",[t._v("subprocess模块在这里暂时不会讲太多")]),t._v(" "),a("h2",{attrs:{id:"使用subprocess模块来操作系统的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用subprocess模块来操作系统的命令"}},[t._v("#")]),t._v(" 使用subprocess模块来操作系统的命令")]),t._v(" "),a("p",[t._v("在这里使用subprocess模块中的popen类，这里先说一下，要使用的命令跟类的参数")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" subprocess\nsp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Popen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cmd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("shell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("stdout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PIPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("stderr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PIPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cmd : 代表系统命令")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# shell = True   代表这条命令是 系统命令,告诉操作系统,将cmd当成系统命令去执行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stdout   是执行完系统命令之后,用于保存结果的一个管道")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stderr   是执行完系统命令之后,用于保存错误结果的一个管道")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 执行命令得到的结果要怎么看")]),t._v("\nsp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##查看系统命令执行成功后的结果")]),t._v("\nsp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stderr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##查看系统命令执行错误后的结果")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 注意：在stdout跟stderr的结果只允许获取一次，简单说，就是你获取一次stdout的结果，那么在获取一次，就是为空")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 所以目前一般都是用变量的赋值，让获取到的值可以进行多次利用")]),t._v("\nstdout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstderr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stderr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 注意，当前的环境是win10，在执行命令后得到的结果是bytes类型的，想看真正的结果，要进行转码")]),t._v("\nstdout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gbk"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstderr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stderr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gbk"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"简单的练习题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单的练习题"}},[t._v("#")]),t._v(" 简单的练习题")]),t._v(" "),a("p",[t._v("通过socket模块，简单实现，可以在客户端操作服务端的操作系统")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 服务端的代码 server.py")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" socket\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" subprocess\nsk "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("addr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accept"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("102400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    sp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Popen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("shell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("stdout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PIPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("stderr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PIPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    sp_stdout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    sp_stderr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stderr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" sp_stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sp_stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" sp_stderr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sp_stderr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"出错"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gbk"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 客户端的代码 client.py")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" socket\nsk "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入命令："')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    sk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gbk"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=p.exports}}]);