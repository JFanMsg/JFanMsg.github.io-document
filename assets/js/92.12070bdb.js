(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{455:function(t,s,a){"use strict";a.r(s);var _=a(45),n=Object(_.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_31-面向对象总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_31-面向对象总结"}},[t._v("#")]),t._v(" 31. 面向对象总结")]),t._v(" "),a("br"),t._v(" "),a("h1",{attrs:{id:"面向对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向对象"}},[t._v("#")]),t._v(" 面向对象")]),t._v(" "),a("p",[t._v("一直都在说python一切都是对象，那么面向对象什么时候用合适，也不是所有的都适合面向对象")]),t._v(" "),a("ol",[a("li",[t._v("在代码量多的时候")]),t._v(" "),a("li",[t._v("处理比较复杂角色之间的关系的时候\n"),a("ol",[a("li",[t._v("如QQ的关系，简单来说：QQ分为，好友、情侣、陌生人、群员、组员等等")]),t._v(" "),a("li",[t._v("如复杂的电商程序关系等")]),t._v(" "),a("li",[t._v("如复杂的人员架构关系等")])])]),t._v(" "),a("li",[t._v("可以将自身的代码理清晰化\n"),a("ol",[a("li",[t._v("提高代码的可读性，能够明确分辨出每个角色拥有的方法和属性")]),t._v(" "),a("li",[t._v("增强了代码可扩展性")]),t._v(" "),a("li",[t._v("增加了代码的复用性")]),t._v(" "),a("li",[t._v("使自身的代码更加规范化，更加合理")])])])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("在python中，一切皆为对象，无论是基本数据类型还是其他，都是对象")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("类：类还分为元类跟父类")])]),t._v(" "),a("p",[t._v("在python中，如果创建一个类，没有指定元类跟父类，那么python默认的自动的将其归为默认的元类跟父类，元类：type，父类：object")]),t._v(" "),a("p",[t._v("例如抽象类，如果把一个普通的类转化成抽象类，class 类名(metaclass=ABCMeta)，只有把类中的默认元类转成ABCMeta类，这个类才是抽象类")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" abc "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ABCMeta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("abstractmethod\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metaclass"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ABCMeta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n执行结果：\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc.ABCMeta'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("很明确的指出类的元类是那个")]),t._v(" "),a("p",[t._v("又可以这样说")]),t._v(" "),a("ol",[a("li",[t._v("class 类名(metaclass=ABCMeta)，这抽象类是Python解释器使用ABCMeta来创建，那么ABCMeta就是这个类的元类")]),t._v(" "),a("li",[t._v("clasas 类名，这类没有指定用什么来创建，那么Python解释器会默认使用type来创建，那么type就是这类的元类")])]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("类跟对象的执行过程")])]),t._v(" "),a("p",[a("strong",[t._v("类:")])]),t._v(" "),a("ol",[a("li",[t._v("生成一个类空间")]),t._v(" "),a("li",[t._v("把类中的静态属性执行一遍并保存在类空间中")]),t._v(" "),a("li",[t._v("把类中的动态方法(属性)的内存地址保存在类空间中")]),t._v(" "),a("li",[t._v("最后在把类空间赋值给类名")])]),t._v(" "),a("p",[a("strong",[t._v("对象(实例化过程)：")])]),t._v(" "),a("ol",[a("li",[t._v("生成一个对象空间\n"),a("ol",[a("li",[t._v("使用__new__来创建一个对象空间，如果类中没有__new__方法，那会去父类中找")]),t._v(" "),a("li",[t._v("创建完毕，并把这对象空间的内存地址返回给__init__方法")])])]),t._v(" "),a("li",[t._v("把__init__方法中的属性加载到对象空间中")]),t._v(" "),a("li",[t._v("如果__init__方法中函数方法，那么对象空间也只会保存函数方法的内存地址")]),t._v(" "),a("li",[t._v("在对象本身中只会存储一些只属对象的属性")]),t._v(" "),a("li",[t._v("在生成一个指针，这个指针称为：类指针，记录着当前类的内存地址，方便对象去类中查找")]),t._v(" "),a("li",[t._v("最后把生成的对象空间赋值给调用者")])]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("组合")]),t._v("：什么有什么关系，把一个类的对象作为另一个类对象的属性")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("继承")])]),t._v(" "),a("p",[t._v("继承分为：单继承跟多继承")]),t._v(" "),a("p",[t._v("单继承：")])])}),[],!1,null,null,null);s.default=n.exports}}]);