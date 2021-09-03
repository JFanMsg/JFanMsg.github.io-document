(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{371:function(e,t,r){"use strict";r.r(t);var v=r(45),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"_1-kubernetes概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-kubernetes概述"}},[e._v("#")]),e._v(" 1. Kubernetes概述")]),e._v(" "),r("h1",{attrs:{id:"kubernetes是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes是什么"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Kubernetes是什么")])]),e._v(" "),r("p",[e._v("kubernetes(k8s)是自动化容器操作的开源平台，这些操作包含 部署，调度，节点集群间的扩展等，支持二个容器技术，docker,rocket")]),e._v(" "),r("ol",[r("li",[e._v("Kubernetes是GOOGLE在2014年开源的一个容器集群管理系统，Kubernetes简称K8S")]),e._v(" "),r("li",[e._v("Kubernetes用于容器化应用程序的部署，扩展和管理")]),e._v(" "),r("li",[e._v("Kubernetes提供了容器编排，资源调度，弹性伸缩，部署管理，服务发现等一系列功能")]),e._v(" "),r("li",[e._v("Kubernetes目标是让部署容器化应用简单高效")]),e._v(" "),r("li",[e._v("官方网站：http://www.kubernetes.io")])]),e._v(" "),r("h1",{attrs:{id:"kubernetes的特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes的特性"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Kubernetes的特性")])]),e._v(" "),r("ol",[r("li",[r("strong",[e._v("自我修复")]),e._v("：在节点故障时重新启动失败的容器，替换和重新部署，保证预期的副本数量；杀死健康检查失败的容器，并且在未准备好之前不会处理客户端请求，确保线上服务不中断")]),e._v(" "),r("li",[r("strong",[e._v("弹性伸缩")]),e._v("：使用命令、UI或者基于CPU使用情况自动快速扩容和缩容应用程序实例，保证应用业务高峰并发时的高可用性；业务低峰时回收资源，以最小成本运行服务。")]),e._v(" "),r("li",[r("strong",[e._v("自动部署和回滚")]),e._v("：K8S采用滚动更新策略更新应用，一次更新一个Pod，而不是同时删除所有Pod，如果更新过程中出现问题，将回滚更改，确保升级不受影响业务。")]),e._v(" "),r("li",[r("strong",[e._v("服务发现和负载均衡")]),e._v("：K8S为多个容器提供一个统一访问入口（内部IP地址和一个DNS名称），并且负载均衡关联的所有容器，使得用户无需考虑容器IP问题")]),e._v(" "),r("li",[r("strong",[e._v("机密和配置管理")]),e._v("：管理机密数据和应用程序配置，而不需要把敏感数据暴露在镜像里，提高敏感数据安全性。并可以将一些常用的配置存储在K8S中，方便应用程序使用，对于一些机密信息，可以使用k8s的机密管理。")]),e._v(" "),r("li",[r("strong",[e._v("存储编排")]),e._v("：挂载外部存储系统，无论是来自本地存储，公有云（如AWS），还是网络存储（如NFS、GlusterFS、Ceph）都作为集群资源的一部分使用，极大提高存储使用灵活性。")]),e._v(" "),r("li",[r("strong",[e._v("批处理")]),e._v("：提供一次性任务，定时任务，短暂性任务；满足批量数据处理和分析的场景。")])]),e._v(" "),r("h1",{attrs:{id:"kubernetes集群架构与组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes集群架构与组件"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Kubernetes集群架构与组件")])]),e._v(" "),r("p",[e._v("Kubernetes架构主要分为Master跟Node")]),e._v(" "),r("h2",{attrs:{id:"master组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#master组件"}},[e._v("#")]),e._v(" Master组件")]),e._v(" "),r("p",[e._v("Master主要负责集群的调度")]),e._v(" "),r("ol",[r("li",[r("strong",[e._v("kube-apiserver")]),e._v("：Kubernetes API，集群的统一入口，各组件协调者，以RESTful API提供接口服务，所有对象资源的增删改查和监听操作都交给APIServer处理后再提交给Etcd存储。")]),e._v(" "),r("li",[r("strong",[e._v("kube-controller-manager")]),e._v("：处理集群中常规后台任务，一个资源对应一个控制器，而ControllerManager就是负责管理这些控制器的。")]),e._v(" "),r("li",[r("strong",[e._v("kube-scheduler")]),e._v("：根据调度算法为新创建的Pod选择一个Node节点，可以任意部署,可以部署在同一个节点上,也可以部署在不同的节点上。")]),e._v(" "),r("li",[r("strong",[e._v("etcd")]),e._v("：分布式键值存储系统。用于保存集群所有数据，状态数据，比如Pod、Service等对象信息。")])]),e._v(" "),r("h2",{attrs:{id:"node组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node组件"}},[e._v("#")]),e._v(" Node组件")]),e._v(" "),r("p",[e._v("Node是工作节点")]),e._v(" "),r("ol",[r("li",[r("strong",[e._v("kubelet")]),e._v("：kubelet是Master在Node节点上的Agent，管理本机运行容器的生命周期，比如创建容器、Pod挂载数据卷、下载secret、获取容器和节点状态等工作。kubelet将每个Pod转换成一组容器。")]),e._v(" "),r("li",[r("strong",[e._v("kube-proxy")]),e._v("：在Node节点上实现Pod网络代理，维护网络规则和四层负载均衡工作。")]),e._v(" "),r("li",[r("strong",[e._v("docker或rocket")]),e._v("：容器引擎，运行容器。")])]),e._v(" "),r("h2",{attrs:{id:"架构图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构图"}},[e._v("#")]),e._v(" 架构图")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://s1.ax1x.com/2020/04/18/Jm9x6e.png",alt:"Jm9x6e.png"}})]),e._v(" "),r("p",[r("a",{attrs:{href:"https://imgchr.com/i/JmCkff",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://s1.ax1x.com/2020/04/18/JmCkff.png",alt:"JmCkff.png"}}),r("OutboundLink")],1)]),e._v(" "),r("h1",{attrs:{id:"kubernetes核心概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes核心概念"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Kubernetes核心概念")])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://s1.ax1x.com/2020/04/18/JmdFUJ.png",alt:"JmdFUJ.png"}})]),e._v(" "),r("p",[r("strong",[e._v("Pod(单元)")])]),e._v(" "),r("ol",[r("li",[e._v("最小部署单元 一组容器的集合")]),e._v(" "),r("li",[e._v("一个Pod中的容器共享网络命名空间")]),e._v(" "),r("li",[e._v("Pod是短暂的")])]),e._v(" "),r("p",[r("strong",[e._v("Controllers(控制器)")])]),e._v(" "),r("p",[e._v("更高级层次对象，部署和管理Pod")]),e._v(" "),r("ol",[r("li",[e._v("ReplicaSet ：确保预期的Pod副本数量")]),e._v(" "),r("li",[e._v("Deployment ：无状态应用部署")]),e._v(" "),r("li",[e._v("StatefulSet ：有状态应用部署")]),e._v(" "),r("li",[e._v("DaemonSet ：确保所有Node运行同一个Pod")]),e._v(" "),r("li",[e._v("Job ：一次性任务")]),e._v(" "),r("li",[e._v("Cronjob ：定时任务")])]),e._v(" "),r("p",[r("strong",[e._v("configuration(存储机密信息跟配置文件)")])]),e._v(" "),r("ol",[r("li",[e._v("secrets")]),e._v(" "),r("li",[e._v("Configmap")])]),e._v(" "),r("p",[r("strong",[e._v("Service")])]),e._v(" "),r("ol",[r("li",[e._v("防止Pod失联")]),e._v(" "),r("li",[e._v("定义一组Pod的访问策略")])]),e._v(" "),r("p",[r("strong",[e._v("storage(数据卷)")])]),e._v(" "),r("ol",[r("li",[e._v("volumes")]),e._v(" "),r("li",[e._v("Persistent Volumes")])]),e._v(" "),r("p",[r("strong",[e._v("policies(资源管理)")]),e._v("：Resource Quotar，用于管理跟限制资源")]),e._v(" "),r("p",[r("strong",[e._v("Label")]),e._v(" ：标签，附加到某个资源上，用于关联对象、查询和筛选")]),e._v(" "),r("p",[r("strong",[e._v("Namespaces")]),e._v("：命名空间，将对象逻辑上隔离")]),e._v(" "),r("p",[r("strong",[e._v("Annotations")]),e._v(" ：注释")])])}),[],!1,null,null,null);t.default=_.exports}}]);