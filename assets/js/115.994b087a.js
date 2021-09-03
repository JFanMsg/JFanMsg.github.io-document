(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{480:function(_,v,l){"use strict";l.r(v);var i=l(45),t=Object(i.a)({},(function(){var _=this,v=_.$createElement,l=_._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[l("h1",{attrs:{id:"_49-进程-理论知识"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_49-进程-理论知识"}},[_._v("#")]),_._v(" 49. 进程 - 理论知识")]),_._v(" "),l("h1",{attrs:{id:"计算机跟操作系统的简介-理论知识"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#计算机跟操作系统的简介-理论知识"}},[_._v("#")]),_._v(" 计算机跟操作系统的简介 - 理论知识")]),_._v(" "),l("p",[_._v("这章节讲的全是理论知识，可以看一下，如果真的不感兴趣，也可以过滤")]),_._v(" "),l("h2",{attrs:{id:"最初始的计算机"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#最初始的计算机"}},[_._v("#")]),_._v(" 最初始的计算机")]),_._v(" "),l("h3",{attrs:{id:"手工操作-穿孔卡片"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#手工操作-穿孔卡片"}},[_._v("#")]),_._v(" 手工操作 - 穿孔卡片")]),_._v(" "),l("p",[_._v("1946年第一台计算机诞生--20世纪50年代中期，计算机工作还在采用手工操作方式。此时还没有操作系统的概念。")]),_._v(" "),l("p",[_._v("程序员将对应于程序和数据的已穿孔的纸带（或卡片）装入输入机，然后启动输入机把程序和数据输入计算机内存，接着通过控制台开关启动程序针对数据运行；计算完毕，打印机输出计算结果；用户取走结果并卸下纸带（或卡片）后，才让下一个用户上机。")]),_._v(" "),l("p",[l("strong",[_._v("手工操作方式两个特点：")])]),_._v(" "),l("ol",[l("li",[_._v("用户独占全机。不会出现因资源已被其他用户占用而等待的现象，但资源的利用率低。")]),_._v(" "),l("li",[_._v("CPU 等待手工操作。CPU的利用不充分。")])]),_._v(" "),l("p",[_._v("20世纪50年代后期，出现"),l("a",{attrs:{href:"https://baike.baidu.com/item/%E4%BA%BA%E6%9C%BA%E7%9F%9B%E7%9B%BE",target:"_blank",rel:"noopener noreferrer"}},[_._v("人机矛盾"),l("OutboundLink")],1),_._v("：手工操作的慢速度和计算机的高速度之间形成了尖锐矛盾，手工操作方式已严重损害了系统资源的利用率（使资源利用率降为百分之几，甚至更低），不能容忍。唯一的解决办法：只有摆脱人的手工操作，实现作业的自动过渡。这样就出现了成"),l("a",{attrs:{href:"https://baike.baidu.com/item/%E6%89%B9%E5%A4%84%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[_._v("批处理"),l("OutboundLink")],1),_._v("。")]),_._v(" "),l("h3",{attrs:{id:"批处理-磁带存储"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#批处理-磁带存储"}},[_._v("#")]),_._v(" 批处理 - 磁带存储")]),_._v(" "),l("p",[_._v("批处理系统：加载在计算机上的一个"),l("a",{attrs:{href:"https://baike.baidu.com/item/%E7%B3%BB%E7%BB%9F%E8%BD%AF%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[_._v("系统软件"),l("OutboundLink")],1),_._v("，在它的控制下，计算机能够自动地、成批地处理一个或多个用户的作业（这作业包括程序、数据和命令）。")]),_._v(" "),l("p",[l("strong",[_._v("联机批处理系统：首先出现的是联机批处理系统，即作业的输入/输出由CPU来处理。")])]),_._v(" "),l("ol",[l("li",[_._v("主机与输入机之间增加一个存储设备——磁带，在运行于主机上的监督程序的自动控制下，计算机可自动完成：成批地把输入机上的用户作业读入磁带，依次把磁带上的用户作业读入主机内存并执行并把计算结果向输出机输出。完成了上一批作业后，监督程序又从输入机上输入另一批作业，保存在磁带上，并按上述步骤重复处理。")]),_._v(" "),l("li",[_._v("监督程序不停地处理各个作业，从而实现了作业到作业的自动转接，减少了作业建立时间和手工操作时间，有效克服了人机矛盾，提高了计算机的利用率。")]),_._v(" "),l("li",[_._v("但是，在作业输入和结果输出时，主机的高速CPU仍处于空闲状态，等待慢速的输入/输出设备完成工作： 主机处于“忙等”状态")])]),_._v(" "),l("p",[_._v("脱机批处理系统：为克服与缓解：高速主机与慢速外设的矛盾，提高CPU的利用率，又引入了"),l("a",{attrs:{href:"https://baike.baidu.com/item/%E8%84%B1%E6%9C%BA%E6%89%B9%E5%A4%84%E7%90%86%E7%B3%BB%E7%BB%9F",target:"_blank",rel:"noopener noreferrer"}},[_._v("脱机批处理系统"),l("OutboundLink")],1),_._v("，即输入/输出脱离主机控制，产生了卫星机的存在")]),_._v(" "),l("p",[l("strong",[_._v("卫星机：一台不与主机直接相连而专门用于与输入/输出设备打交道的。")])]),_._v(" "),l("ol",[l("li",[_._v("从输入机上读取用户作业并放到输入磁带上。")]),_._v(" "),l("li",[_._v("从输出磁带上读取执行结果并传给输出机。")]),_._v(" "),l("li",[_._v("这样，主机不是直接与慢速的输入/输出设备打交道，而是与速度相对较快的磁带机发生关系，有效缓解了主机与设备的矛盾。主机与卫星机可并行工作，二者分工明确，可以充分发挥主机的高速计算能力。\\")]),_._v(" "),l("li",[_._v("脱机批处理系统:20世纪60年代应用十分广泛，它极大缓解了人机矛盾及主机与外设的矛盾。")]),_._v(" "),l("li",[_._v("不足：每次主机内存中仅存放一道作业，每当它运行期间发出输入/输出（I/O）请求后，高速的CPU便处于等待低速的I/O完成状态，致使CPU空闲。")]),_._v(" "),l("li",[_._v("为改善CPU的利用率，又引入了多道程序系统。")])]),_._v(" "),l("h3",{attrs:{id:"多道程序系统"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#多道程序系统"}},[_._v("#")]),_._v(" 多道程序系统")]),_._v(" "),l("p",[_._v("多道程序设计技术：所谓多道程序设计技术，就是指允许多个程序同时进入内存并运行。即同时把多个程序放入内存，并允许它们交替在CPU中运行，它们共享系统中的各种硬、软件资源。当一道程序因I/O请求而暂停运行时，CPU便立即转去运行另一道程序。")]),_._v(" "),l("p",[l("strong",[_._v("比如：")])]),_._v(" "),l("p",[_._v("将A、B两道程序同时存放在内存中，它们在系统的控制下，可相互穿插、交替地在CPU上运行：当A程序因请求I/O操作而放弃CPU时，B程序就可占用CPU运行，这样 CPU不再空闲，而正进行A I/O操作的I/O设备也不空闲，显然，CPU和I/O设备都处于“忙”状态，大大提高了资源的利用率，从而也提高了系统的效率，A、B全部完成所需时间<<T1+T2。")]),_._v(" "),l("p",[_._v("多道程序设计技术不仅使CPU得到充分利用，同时改善I/O设备和内存的利用率，从而提高了整个系统的资源利用率和系统吞吐量（单位时间内处理作业（程序）的个数），最终提高了整个系统的效率。")]),_._v(" "),l("p",[l("strong",[_._v("单处理机系统中多道程序运行时的特点：")])]),_._v(" "),l("ol",[l("li",[_._v("多道：计算机内存中同时存放几道相互独立的程序；")]),_._v(" "),l("li",[_._v("宏观上并行：同时进入系统的几道程序都处于运行过程中，即它们先后开始了各自的运行，但都未运行完毕；")]),_._v(" "),l("li",[_._v("微观上串行：实际上，各道程序轮流地用CPU，并交替运行")])]),_._v(" "),l("p",[_._v("多道程序系统的出现，标志着操作系统渐趋成熟的阶段，先后出现了作业调度管理、处理机管理、存储器管理、外部设备管理、文件系统管理等功能。")]),_._v(" "),l("p",[_._v("由于多个程序同时在计算机中运行，开始有了空间隔离的概念，只有内存空间的隔离，才能让数据更加安全、稳定。\n出了空间隔离之外，多道技术还第一次体现了时空复用的特点，遇到IO操作就切换程序，使得cpu的利用率提高了，计算机的工作效率也随之提高。")]),_._v(" "),l("p",[l("strong",[_._v("多道批处理系统：20世纪60年代中期，在前述的批处理系统中，引入多道程序设计技术后形成多道批处理系统（简称：批处理系统），它有两个特点")]),_._v("：")]),_._v(" "),l("ol",[l("li",[_._v("多道：系统内可同时容纳多个作业。这些作业放在外存中，组成一个后备队列，系统按一定的调度原则每次从后备作业队列中选取一个或多个作业进入内存运行，运行作业结束、退出运行和后备作业进入运行均由系统自动实现，从而在系统中形成一个自动转接的、连续的作业流。")]),_._v(" "),l("li",[_._v("成批：在系统运行过程中，不允许用户与其作业发生交互作用，即：作业一旦进入系统，用户就不能直接干预其作业的运行。")]),_._v(" "),l("li",[_._v("批处理系统的追求目标：提高系统资源利用率和系统吞吐量，以及作业流程的自动化。")]),_._v(" "),l("li",[_._v("批处理系统的一个重要缺点：不提供人机交互能力，给用户使用计算机带来不便。")]),_._v(" "),l("li",[_._v("虽然用户独占全机资源，并且直接控制程序的运行，可以随时了解程序运行情况。但这种工作方式因独占全机造成资源效率极低。")]),_._v(" "),l("li",[_._v("一种新的追求目标：既能保证计算机效率，又能方便用户使用计算机。 20世纪60年代中期，计算机技术和软件技术的发展使这种追求成为可能。")])]),_._v(" "),l("h3",{attrs:{id:"分时系统"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#分时系统"}},[_._v("#")]),_._v(" 分时系统")]),_._v(" "),l("p",[_._v("分时系统：由于CPU速度不断提高和采用分时技术，一台计算机可同时连接多个用户终端，而每个用户可在自己的终端上联机使用计算机，好象自己独占机器一样。")]),_._v(" "),l("p",[_._v("分时技术：把处理机的运行时间分成很短的时间片，按时间片轮流把处理机分配给各联机作业使用。")]),_._v(" "),l("p",[_._v("若某个作业在分配给它的时间片内不能完成其计算，则该作业暂时中断，把处理机让给另一作业使用，等待下一轮时再继续其运行。由于计算机速度很快，作业运行轮转得很快，给每个用户的印象是，好象他独占了一台计算机。而每个用户可以通过自己的终端向系统发出各种操作控制命令，在充分的人机交互情况下，完成作业的运行。")]),_._v(" "),l("p",[l("strong",[_._v("具有上述特征的计算机系统称为分时系统，它允许多个用户同时联机使用计算机")])]),_._v(" "),l("ol",[l("li",[_._v("多路性。若干个用户同时使用一台计算机。微观上看是各用户轮流使用计算机；宏观上看是各用户并行工作。")]),_._v(" "),l("li",[_._v("交互性。用户可根据系统对请求的响应结果，进一步向系统提出新的请求。这种能使用户与系统进行人机对话的工作方式，明显地有别于批处理系统，因而，分时系统又被称为交互式系统。")]),_._v(" "),l("li",[_._v("独立性。用户之间可以相互独立操作，互不干扰。系统保证各用户程序运行的完整性，不会发生相互混淆或破坏现象。")]),_._v(" "),l("li",[_._v("及时性。系统可对用户的输入及时作出响应。分时系统性能的主要指标之一是响应时间，它是指：从终端发出命令到系统予以应答所需的时间")])]),_._v(" "),l("p",[_._v("分时系统的主要目标：对用户响应的及时性，即不至于用户等待每一个命令的处理时间过长。")]),_._v(" "),l("p",[_._v("分时系统可以同时接纳数十个甚至上百个用户，由于内存空间有限，往往采用对换（又称交换）方式的存储方法。即将未“轮到”的作业放入磁盘，一旦“轮到”，再将其调入内存；而时间片用完后，又将作业存回磁盘（俗称“滚进”、“滚出“法），使同一存储区域轮流为多个用户服务。")]),_._v(" "),l("p",[_._v("多用户分时系统是当今计算机操作系统中最普遍使用的一类操作系统。")]),_._v(" "),l("p",[_._v("**注意：**分时系统的分时间片工作，在没有遇到IO操作的时候就用完了自己的时间片被切走了，这样的切换工作其实并没有提高cpu的效率，反而使得计算机的效率降低了。但是我们牺牲了一点效率，却实现了多个程序共同执行的效果，这样你就可以在计算机上一边听音乐一边聊qq了。")]),_._v(" "),l("h3",{attrs:{id:"实时系统"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#实时系统"}},[_._v("#")]),_._v(" 实时系统")]),_._v(" "),l("p",[_._v("虽然多道批处理系统和分时系统能获得较令人满意的资源利用率和系统响应时间，但却不能满足实时控制与实时信息处理两个应用领域的需求。于是就产生了实时系统，即系统能够及时响应随机发生的外部事件，并在严格的时间范围内完成对该事件的处理。")]),_._v(" "),l("p",[_._v("实时系统在一个特定的应用中常作为一种控制设备来使用。")]),_._v(" "),l("p",[l("strong",[_._v("实时系统可分成两类：")])]),_._v(" "),l("ol",[l("li",[_._v("实时控制系统。当用于飞机飞行、导弹发射等的自动控制时，要求计算机能尽快处理测量系统测得的数据，及时地对飞机或导弹进行控制，或将有关信息通过显示终端提供给决策人员。当用于轧钢、石化等工业生产过程控制时，也要求计算机能及时处理由各类传感器送来的数据，然后控制相应的执行机构。")]),_._v(" "),l("li",[_._v("实时信息处理系统。当用于预定飞机票、查询有关航班、航线、票价等事宜时，或当用于银行系统、情报检索系统时，都要求计算机能对终端设备发来的服务请求及时予以正确的回答。此类对响应及时性的要求稍弱于第一类")])]),_._v(" "),l("p",[l("strong",[_._v("实时操作系统的主要特点：")])]),_._v(" "),l("ol",[l("li",[_._v("及时响应。每一个信息接收、分析处理和发送的过程必须在严格的时间限制内完成。")]),_._v(" "),l("li",[_._v("高可靠性。需采取冗余措施，双机系统前后台工作，也包括必要的保密措施等")])]),_._v(" "),l("p",[_._v("分时系统和实时系统区别")]),_._v(" "),l("ol",[l("li",[_._v("分时：现在流行的PC，服务器都是采用这种运行模式，即把CPU的运行分成若干时间片分别处理不同的运算请求 linux系统")]),_._v(" "),l("li",[_._v("实时：般用于单片机上、PLC等，比如电梯的上下控制中，对于按键等动作要求进行实时处理")])]),_._v(" "),l("h2",{attrs:{id:"通用操作系统"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#通用操作系统"}},[_._v("#")]),_._v(" 通用操作系统")]),_._v(" "),l("p",[l("strong",[_._v("操作系统的三种基本类型：多道批处理系统、分时系统、实时系统。")])]),_._v(" "),l("ol",[l("li",[_._v("通用操作系统：具有多种类型操作特征的操作系统。可以同时兼有多道批处理、分时、实时处理的功能，或其中两种以上的功能。")]),_._v(" "),l("li",[_._v("例如：实时处理+批处理=实时批处理系统。首先保证优先处理实时任务，插空进行批处理作业。常把实时任务称为前台作业，批作业称为后台作业。")]),_._v(" "),l("li",[_._v("再如：分时处理+批处理=分时批处理系统。即：时间要求不强的作业放入“后台”（批处理）处理，需频繁交互的作业在“前台”（分时）处理，处理机优先运行“前台”作业。")])]),_._v(" "),l("p",[_._v("从上世纪60年代中期，国际上开始研制一些大型的通用操作系统。这些系统试图达到功能齐全、可适应各种应用范围和操作方式变化多端的环境的目标。但是，这些系统过于复杂和庞大，不仅付出了巨大的代价，且在解决其可靠性、可维护性和可理解性方面都遇到很大的困难。")]),_._v(" "),l("p",[_._v("相比之下，UNIX操作系统却是一个例外。这是一个通用的多用户分时交互型的操作系统。它首先建立的是一个精干的核心，而其功能却足以与许多大型的操作系统相媲美，在核心层以外，可以支持庞大的软件系统。它很快得到应用和推广，并不断完善，对现代操作系统有着重大的影响。\n至此，操作系统的基本概念、功能、基本结构和组成都已形成并渐趋完善。")]),_._v(" "),l("h3",{attrs:{id:"操作系统的进一步发展"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#操作系统的进一步发展"}},[_._v("#")]),_._v(" 操作系统的进一步发展")]),_._v(" "),l("p",[_._v("入20世纪80年代，大规模集成电路工艺技术的飞跃发展，微处理机的出现和发展，掀起了计算机大发展大普及的浪潮。一方面迎来了个人计算机的时代，同时又向计算机网络、分布式处理、巨型计算机和智能化方向发展。于是，操作系统有了进一步的发展，如："),l("strong",[_._v("个人计算机操作系统、网络操作系统、分布式操作系统")]),_._v("等")]),_._v(" "),l("p",[l("strong",[_._v("个人计算机操作系统")])]),_._v(" "),l("ol",[l("li",[_._v("个人计算机上的操作系统是联机交互的单用户操作系统，它提供的联机交互功能与通用分时系统提供的功能很相似。")]),_._v(" "),l("li",[_._v("由于是个人专用，因此一些功能会简单得多。然而，由于个人计算机的应用普及，对于提供更方便友好的用户接口和丰富功能的文件系统的要求会愈来愈迫切。")])]),_._v(" "),l("p",[l("strong",[_._v("网络操作系统")])]),_._v(" "),l("ol",[l("li",[_._v("计算机网络：通过通信设施，将地理上分散的、具有自治功能的多个计算机系统互连起来，实现信息交换、资源共享、互操作和协作处理的系统。")]),_._v(" "),l("li",[_._v("网络操作系统：在原来各自计算机操作系统上，按照网络体系结构的各个协议标准增加网络管理模块，其中包括：通信、资源共享、系统安全和各种网络应用服务。")])]),_._v(" "),l("p",[l("strong",[_._v("分布式操作系统")])]),_._v(" "),l("ol",[l("li",[_._v("表面上看，分布式系统与计算机网络系统没有多大区别。分布式操作系统也是通过通信网络，将地理上分散的具有自治功能的数据处理系统或计算机系统互连起来，实现信息交换和资源共享，协作完成任务。——硬件连接相同。")]),_._v(" "),l("li",[_._v("但有如下一些明显的区别：\n"),l("ol",[l("li",[_._v("分布式系统要求一个统一的操作系统，实现系统操作的统一性。")]),_._v(" "),l("li",[_._v("分布式操作系统管理分布式系统中的所有资源，它负责全系统的资源分配和调度、任务划分、信息传输和控制协调工作，并为用户提供一个统一的界面。")]),_._v(" "),l("li",[_._v("用户通过这一界面，实现所需要的操作和使用系统资源，至于操作定在哪一台计算机上执行，或使用哪台计算机的资源，则是操作系统完成的，用户不必知道，此谓：系统的透明性。")]),_._v(" "),l("li",[_._v("分布式系统更强调分布式计算和处理，因此对于多机合作和系统重构、坚强性和容错能力有更高的要求，希望系统有：更短的响应时间、高吞吐量和高可靠性。")])])])]),_._v(" "),l("h3",{attrs:{id:"操作系统的作用"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#操作系统的作用"}},[_._v("#")]),_._v(" 操作系统的作用")]),_._v(" "),l("p",[_._v("现代的计算机系统主要是由一个或者多个处理器，主存，硬盘，键盘，鼠标，显示器，打印机，网络接口及其他输入输出设备组成。")]),_._v(" "),l("p",[l("strong",[_._v("一般而言，现代计算机系统是一个复杂的系统：")])]),_._v(" "),l("ol",[l("li",[_._v("其一：如果每位应用程序员都必须掌握该系统所有的细节，那就不可能再编写代码了（严重影响了程序员的开发效率：全部掌握这些细节可能需要一万年....）")]),_._v(" "),l("li",[_._v("其二：并且管理这些部件并加以优化使用，是一件极富挑战性的工作，于是，计算安装了一层软件（系统软件），称为操作系统。它的任务就是为用户程序提供一个更好、更简单、更清晰的计算机模型，并管理刚才提到的所有设备。")])]),_._v(" "),l("p",[l("strong",[_._v("总结：")])]),_._v(" "),l("ol",[l("li",[_._v("程序员无法把所有的硬件操作细节都了解到，管理这些硬件并且加以优化使用是非常繁琐的工作，这个繁琐的工作就是操作系统来干的，有了他，程序员就从这些繁琐的工作中解脱了出来，只需要考虑自己的应用软件的编写就可以了，应用软件直接使用操作系统提供的功能来间接使用硬件。")]),_._v(" "),l("li",[_._v("精简的说的话，操作系统就是一个协调、管理和控制计算机硬件资源和软件资源的控制程序。操作系统所处的")])]),_._v(" "),l("p",[l("strong",[_._v("细说的话，操作系统应该分成两部分功能：")])]),_._v(" "),l("ol",[l("li",[_._v("一：隐藏了丑陋的硬件调用接口，为应用程序员提供调用硬件资源的更好，更简单，更清晰的模型（系统调用接口）。应用程序员有了这些接口后，就不用再考虑操作硬件的细节，专心开发自己的应用程序即可。\n"),l("ol",[l("li",[_._v("例如：操作系统提供了文件这个抽象概念，对文件的操作就是对磁盘的操作，有了文件我们无需再去考虑关于磁盘的读写控制（比如控制磁盘转动，移动磁头读写数据等细节），")])])]),_._v(" "),l("li",[_._v("二：将应用程序对硬件资源的竞态请求变得有序化\n"),l("ol",[l("li",[_._v("例如：很多应用软件其实是共享一套计算机硬件，比方说有可能有三个应用程序同时需要申请打印机来输出内容，那么a程序竞争到了打印机资源就打印，然后可能是b竞争到打印机资源，也可能是c，这就导致了无序，打印机可能打印一段a的内容然后又去打印c...,操作系统的一个功能就是将这种无序变得有序。")])])])]),_._v(" "),l("h1",{attrs:{id:"进程-理论知识"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#进程-理论知识"}},[_._v("#")]),_._v(" 进程 - 理论知识")]),_._v(" "),l("h2",{attrs:{id:"什么是进程"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#什么是进程"}},[_._v("#")]),_._v(" 什么是进程")]),_._v(" "),l("p",[_._v("进程（Process）是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是操作系统结构的基础。在早期面向进程设计的计算机结构中，进程是程序的基本执行实体；在当代面向线程设计的计算机结构中，进程是线程的容器，线程是程序的基本执行实体。程序是指令、数据及其组织形式的描述，进程是程序的实体。")]),_._v(" "),l("ol",[l("li",[_._v("狭义定义：进程是正在运行的程序的实例（an instance of a computer program that is being executed）。")]),_._v(" "),l("li",[_._v("广义定义：进程是一个具有一定独立功能的程序关于某个数据集合的一次运行活动。它是操作系统动态执行的基本单元，在传统的操作系统中，进程既是基本的分配单元，也是基本的执行单元。")])]),_._v(" "),l("p",[l("strong",[_._v("进程的概念")])]),_._v(" "),l("ol",[l("li",[_._v("第一：进程是一个实体。每一个进程都有它自己的地址空间，一般情况下，包括文本区域（text region）、数据区域（data region）和堆栈（stack region）。\n"),l("ol",[l("li",[_._v("文本区域存储处理器执行的代码；数据区域存储变量和进程执行期间使用的动态分配的内存；堆栈区域存储着活动过程调用的指令和本地变量。")])])]),_._v(" "),l("li",[_._v("第二：进程是一个“执行中的程序”。程序是一个没有生命的实体，只有处理器赋予程序生命时（操作系统执行之），它才能成为一个活动的实体，我们称其为进程。")]),_._v(" "),l("li",[_._v("第三：进程是操作系统中最基本、重要的概念。是多道程序系统出现后，为了刻画系统内部出现的动态情况，描述系统内部各道程序的活动规律引进的一个概念,所有多道程序设计操作系统都建立在进程的基础上。")])]),_._v(" "),l("p",[l("strong",[_._v("操作系统引入进程的概念的原因")])]),_._v(" "),l("ol",[l("li",[_._v("从理论角度看，是对正在运行的程序过程的抽象；")]),_._v(" "),l("li",[_._v("从实现角度看，是一种数据结构，目的在于清晰地刻画动态系统的内在规律，有效管理和调度进入计算机系统主存储器运行的程序。")])]),_._v(" "),l("p",[l("strong",[_._v("进程的特征")])]),_._v(" "),l("ol",[l("li",[_._v("动态性：进程的实质是程序在多道程序系统中的一次执行过程，进程是动态产生，动态消亡的。")]),_._v(" "),l("li",[_._v("并发性：任何进程都可以同其他进程一起并发执行")]),_._v(" "),l("li",[_._v("独立性：进程是一个能独立运行的基本单位，同时也是系统分配资源和调度的独立单位；")]),_._v(" "),l("li",[_._v("异步性：由于进程间的相互制约，使进程具有执行的间断性，即进程按各自独立的、不可预知的速度向前推进")]),_._v(" "),l("li",[_._v("结构特征：进程由程序、数据和进程控制块三部分组成。")]),_._v(" "),l("li",[_._v("多个不同的进程可以包含相同的程序：一个程序在不同的数据集里就构成不同的进程，能得到不同的结果；但是执行过程中，程序不能发生改变。")])]),_._v(" "),l("p",[l("strong",[_._v("进程与程序中的区别")])]),_._v(" "),l("ol",[l("li",[_._v("程序是指令和数据的有序集合，其本身没有任何运行的含义，是一个静态的概念。")]),_._v(" "),l("li",[_._v("而进程是程序在处理机上的一次执行过程，它是一个动态的概念。")]),_._v(" "),l("li",[_._v("程序可以作为一种软件资料长期存在，而进程是有一定生命期的。")]),_._v(" "),l("li",[_._v("程序是永久的，进程是暂时的")])]),_._v(" "),l("p",[l("strong",[_._v("注意：同一个程序执行两次，就会在操作系统中出现两个进程，所以我们可以同时运行一个软件，分别做不同的事情也不会混乱。")])]),_._v(" "),l("h2",{attrs:{id:"进程调度"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#进程调度"}},[_._v("#")]),_._v(" 进程调度")]),_._v(" "),l("p",[_._v("要想多个进程交替运行，操作系统必须对这些进程进行调度，这个调度也不是随机进行的，而是需要遵循一定的原则，由此就有了进程的调度算法。")]),_._v(" "),l("p",[l("strong",[_._v("先来先服务调度算法")])]),_._v(" "),l("ol",[l("li",[_._v("先来先服务（FCFS）调度算法：是一种最简单的调度算法，该算法既可用于作业调度，也可用于进程调度。")]),_._v(" "),l("li",[_._v("FCFS算法比较有利于长作业（进程），而不利于短作业（进程）。")]),_._v(" "),l("li",[_._v("由此可知，本算法适合于CPU繁忙型作业，而不利于I/O繁忙型的作业（进程）。")])]),_._v(" "),l("p",[l("strong",[_._v("短作业优先调度算法")])]),_._v(" "),l("ol",[l("li",[_._v("短作业（进程）优先调度算法（SJ/PF）：是指对短作业或短进程优先调度的算法，该算法既可用于作业调度，也可用于进程调度。")]),_._v(" "),l("li",[_._v("但其对长作业不利，不能保证紧迫性作业（进程）被及时处理；作业的长短只是被估算出来的。")])]),_._v(" "),l("p",[l("strong",[_._v("时间片轮转法")])]),_._v(" "),l("ol",[l("li",[_._v("时间片轮转(Round Robin，RR)算法：的基本思路是让每个进程在就绪队列中的等待时间与享受服务的时间成比例。在时间片轮转法中，需要将CPU的处理时间分成固定大小的时间片，")]),_._v(" "),l("li",[_._v("例如，几十毫秒至几百毫秒。如果一个进程在被调度选中之后用完了系统规定的时间片，但又未完成要求的任务，则它自行释放自己所占有的CPU而排到就绪队列的末尾，等待下一次调度。同时，进程调度程序又去调度当前就绪队列中的第一个进程。")]),_._v(" "),l("li",[_._v("显然，轮转法只能用来调度分配一些可以抢占的资源。这些可以抢占的资源可以随时被剥夺，而且可以将它们再分配给别的进程。\n"),l("ol",[l("li",[_._v("CPU是可抢占资源的一种。")]),_._v(" "),l("li",[_._v("但打印机等资源是不可抢占的。")]),_._v(" "),l("li",[_._v("由于作业调度是对除了CPU之外的所有系统硬件资源的分配，其中包含有不可抢占资源，所以作业调度不使用轮转法。")])])]),_._v(" "),l("li",[_._v("在轮转法中，时间片长度的选取非常重要。\n"),l("ol",[l("li",[_._v("首先，时间片长度的选择会直接影响到系统的开销和响应时间。")]),_._v(" "),l("li",[_._v("如果时间片长度过短，则调度程序抢占处理机的次数增多。这将使进程上下文切换次数也大大增加，从而加重系统开销。")]),_._v(" "),l("li",[_._v("反过来，如果时间片长度选择过长，例如，一个时间片能保证就绪队列中所需执行时间最长的进程能执行完毕，则轮转法变成了先来先服务法。")]),_._v(" "),l("li",[_._v("时间片长度的选择是根据系统对响应时间的要求和就绪队列中所允许最大的进程数来确定的。")])])]),_._v(" "),l("li",[_._v("在轮转法中，加入到就绪队列的进程有3种情况：\n"),l("ol",[l("li",[_._v("第一种：是分给它的时间片用完，但进程还未完成，回到就绪队列的末尾等待下次调度去继续执行。")]),_._v(" "),l("li",[_._v("第二种：是分给该进程的时间片并未用完，只是因为请求I/O或由于进程的互斥与同步关系而被阻塞。当阻塞解除之后再回到就绪队列。")]),_._v(" "),l("li",[_._v("第三种：就是新创建进程进入就绪队列。")])])]),_._v(" "),l("li",[_._v("如果对这些进程区别对待，给予不同的优先级和时间片从直观上看，可以进一步改善系统服务质量和效率。")]),_._v(" "),l("li",[_._v("例如，我们可把就绪队列按照进程到达就绪队列的类型和进程被阻塞时的阻塞原因分成不同的就绪队列，每个队列按FCFS原则排列，各队列之间的进程享有不同的优先级，但同一队列内优先级相同。")]),_._v(" "),l("li",[_._v("这样，当一个进程在执行完它的时间片之后，或从睡眠中被唤醒以及被创建之后，将进入不同的就绪队列")])]),_._v(" "),l("p",[l("strong",[_._v("多级反馈队列")])]),_._v(" "),l("ol",[l("li",[_._v("前面介绍的各种用作进程调度的算法都有一定的局限性。如短进程优先的调度算法，仅照顾了短进程而忽略了长进程，而且如果并未指明进程的长度，则短进程优先和基于进程长度的抢占式调度算法都将无法使用。")]),_._v(" "),l("li",[_._v("而多级反馈队列调度算法则不必事先知道各种进程所需的执行时间，而且还可以满足各种类型进程的需要，因而它是目前被公认的一种较好的进程调度算法。在采用多级反馈队列调度算法的系统中，调度算法的实施过程如下所述。\n"),l("ol",[l("li",[_._v("应设置多个就绪队列，并为各个队列赋予不同的优先级。第一个队列的优先级最高，第二个队列次之，其余各队列的优先权逐个降低。\n"),l("ol",[l("li",[_._v("该算法赋予各个队列中进程执行时间片的大小也各不相同，在优先权愈高的队列中，为每个进程所规定的执行时间片就愈小。")]),_._v(" "),l("li",[_._v("例如，第二个队列的时间片要比第一个队列的时间片长一倍，……，第i+1个队列的时间片要比第i个队列的时间片长一倍。")])])]),_._v(" "),l("li",[_._v("当一个新进程进入内存后，首先将它放入第一队列的末尾，按FCFS原则排队等待调度。\n"),l("ol",[l("li",[_._v("当轮到该进程执行时，如它能在该时间片内完成，便可准备撤离系统；如果它在一个时间片结束时尚未完成，调度程序便将该进程转入第二队列的末尾，再同样地按FCFS原则等待调度执行。")]),_._v(" "),l("li",[_._v("如果它在第二队列中运行一个时间片后仍未完成，再依次将它放入第三队列，……，如此下去，当一个长作业(进程)从第一队列依次降到第n队列后，在第n 队列便采取按时间片轮转的方式运行。")])])]),_._v(" "),l("li",[_._v("仅当第一队列空闲时，调度程序才调度第二队列中的进程运行，仅当第1～(i-1)队列均空时，才会调度第i队列中的进程运行。\n"),l("ol",[l("li",[_._v("如果处理机正在第i队列中为某进程服务时，又有新进程进入优先权较高的队列(第1～(i-1)中的任何一个队列)，则此时新进程将抢占正在运行进程的处理机，即由调度程序把正在运行的进程放回到第i队列的末尾，把处理机分配给新到的高优先权进程")])])])])])]),_._v(" "),l("h2",{attrs:{id:"进程的并行与并发"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#进程的并行与并发"}},[_._v("#")]),_._v(" 进程的并行与并发")]),_._v(" "),l("ol",[l("li",[_._v("并行 : 并行是指两者同时执行，比如有两条车道，在某一个时间点，两条车道上都有车在跑，（资源够用，比如三个线程，四核的CPU ）")]),_._v(" "),l("li",[_._v("并发 : 并发是指资源有限的情况下，两者交替轮流使用资源，比如只有一条车道(单核CPU资源)，那么就是A车先走，在某个时刻A车退出把道路让给B走，B走完继续给A ，交替使用，目的是提高效率。")])]),_._v(" "),l("p",[l("strong",[_._v("并行与并发区别:")])]),_._v(" "),l("ol",[l("li",[_._v("并行是从微观上，也就是在一个精确的时间片刻，有不同的程序在执行，这就要求必须有多个处理器。")]),_._v(" "),l("li",[_._v("并发是从宏观上，在一个时间段上可以看出是同时执行的，比如一个服务器同时处理多个session。")])]),_._v(" "),l("p",[l("strong",[_._v("注意：早期单核CPU时候，对于进程也是微观上串行（站在cpu角度看），宏观上并行（站在人的角度看就是同时有很多程序在执行）。")])]),_._v(" "),l("h2",{attrs:{id:"同步异步-跟-阻塞非阻塞"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#同步异步-跟-阻塞非阻塞"}},[_._v("#")]),_._v(" 同步异步 跟 阻塞非阻塞")]),_._v(" "),l("p",[_._v("进程由三大部分组成：代码段，数据段，PCB：进程管理控制")]),_._v(" "),l("p",[l("strong",[_._v("进程的三个状态")])]),_._v(" "),l("p",[_._v("在了解其他概念之前，我们首先要了解进程的几个状态。在程序运行的过程中，由于被操作系统的调度算法控制，程序会进入几个状态：就绪，运行和阻塞。")]),_._v(" "),l("ol",[l("li",[_._v("就绪(Ready)状态： 当进程已分配到除CPU以外的所有必要的资源，只要获得处理机便可立即执行，这时的进程状态称为就绪状态。")]),_._v(" "),l("li",[_._v("执行/运行（Running）状态： 当进程已获得处理机，其程序正在处理机上执行，此时的进程状态称为执行状态。")]),_._v(" "),l("li",[_._v("阻塞(Blocked)状态： 正在执行的进程，由于等待某个事件发生而无法执行时，便放弃处理机而处于阻塞状态。引起进程阻塞的事件可有多种，例如，等待I/O完成（input）、申请缓冲区不能满足、等待信件(信号)等。")])]),_._v(" "),l("p",[l("strong",[_._v("进程的一个特殊状态：")])]),_._v(" "),l("ol",[l("li",[_._v("挂起状态：是指因为种原因，进程放弃了cpu，导致进程无法继续执行，此时进程被踢出内存。")])]),_._v(" "),l("p",[l("strong",[_._v("同步和异步")])]),_._v(" "),l("ol",[l("li",[_._v("所谓同步就是一个任务的完成需要依赖另外一个任务时，只有等待被依赖的任务完成后，依赖的任务才能算完成，这是一种可靠的任务序列。要么成功都成功，失败都失败，两个任务的状态可以保持一致。")]),_._v(" "),l("li",[_._v("所谓异步是不需要等待被依赖的任务完成，只是通知被依赖的任务要完成什么工作，依赖的任务也立即执行，只要自己完成了整个任务就算完成了。至于被依赖的任务最终是否真正完成，依赖它的任务无法确定，所以它是不可靠的任务序列")]),_._v(" "),l("li",[_._v("例子：\n"),l("ol",[l("li",[_._v("比如我去银行办理业务，可能会有两种方式：\n"),l("ol",[l("li",[_._v("第一种 ：选择排队等候；")]),_._v(" "),l("li",[_._v("第二种 ：选择取一个小纸条上面有我的号码，等到排到我这一号时由柜台的人通知我轮到我去办理业务了；")]),_._v(" "),l("li",[_._v("第一种：前者(排队等候)就是同步等待消息通知，也就是我要一直在等待银行办理业务情况；")]),_._v(" "),l("li",[_._v("第二种：后者(等待别人通知)就  是异步等待消息通知。在异步消息处理中，等待消息通知者(在这个例子中就是等待办理业务的人)往往注册一个回调机制，在所等待的事件被触发时由触发机制(在这里是柜台的人)通过某种机制(在这里是写在小纸条上的号码，喊号)找到等待该事件的人。")])])])])])]),_._v(" "),l("p",[l("strong",[_._v("阻塞与非阻塞")])]),_._v(" "),l("p",[_._v("阻塞和非阻塞这两个概念与程序（线程）等待消息通知(无所谓同步或者异步)时的状态有关。也就是说阻塞与非阻塞主要是程序（线程）等待消息通知时的状态角度来说的")]),_._v(" "),l("p",[_._v("例子：")]),_._v(" "),l("ol",[l("li",[_._v("继续上面的那个例子，不论是排队还是使用号码等待通知，如果在这个等待的过程中，等待者除了等待消息通知之外不能做其它的事情，那么该机制就是阻塞的，表现在程序中,也就是该程序一直阻塞在该函数调用处不能继续往下执行。")]),_._v(" "),l("li",[_._v("相反，有的人喜欢在银行办理这些业务的时候一边打打电话发发短信一边等待，这样的状态就是非阻塞的，因为他(等待者)没有阻塞在这个消息通知上，而是一边做自己的事情一边等待。")]),_._v(" "),l("li",[_._v("注意：同步非阻塞形式实际上是效率低下的，想象一下你一边打着电话一边还需要抬头看到底队伍排到你了没有。如果把打电话和观察排队的位置看成是程序的两个操作的话，这个程序需要在这两种不同的行为之间来回的切换，效率可想而知是低下的；而异步非阻塞形式却没有这样的问题，因为打电话是你(等待者)的事情，而通知你则是柜台(消息触发机制)的事情，程序没有在两种不同的操作中来回切换。")])]),_._v(" "),l("p",[l("strong",[_._v("同步-异步 与 阻塞-非阻塞")])]),_._v(" "),l("ol",[l("li",[l("p",[_._v("同步阻塞形式：效率最低。拿上面的例子来说，就是你专心排队，什么别的事都不做。")])]),_._v(" "),l("li",[l("p",[_._v("异步阻塞形式：如果在银行等待办理业务的人采用的是异步的方式去等待消息被触发（通知），也就是领了一张小纸条，假如在这段时间里他不能离开银行做其它的事情，那么很显然，这个人被阻塞在了这个等待的操作上面；")]),_._v(" "),l("p",[l("strong",[_._v("异步操作是可以被阻塞住的，只不过它不是在处理消息时阻塞，而是在等待消息通知时被阻塞。")])])]),_._v(" "),l("li",[l("p",[_._v("同步非阻塞形式：实际上是效率低下的。")]),_._v(" "),l("ol",[l("li",[_._v("想象一下你一边打着电话一边还需要抬头看到底队伍排到你了没有（两个操作不能同时执行，因为是同步），")]),_._v(" "),l("li",[_._v("如果把打电话和观察排队的位置看成是程序的两个操作的话，这个程序需要在这两种不同的行为之间来回的切换，效率可想而知是低下的。")])])]),_._v(" "),l("li",[l("p",[_._v("异步非阻塞形式：效率更高")]),_._v(" "),l("ol",[l("li",[_._v("因为打电话是你(等待者)的事情，而通知你则是柜台(消息触发机制)的事情，程序没有在两种不同的操作中来回切换。")]),_._v(" "),l("li",[_._v("比如说，这个人突然发觉自己烟瘾犯了，需要出去抽根烟，于是他告诉大堂经理说，排到我这个号码的时候麻烦到外面通知我一下，那么他就没有被阻塞在这个等待的操作上面，自然这个就是异步+非阻塞的方式了。")])]),_._v(" "),l("p",[l("strong",[_._v("很多人会把同步和阻塞混淆，是因为很多时候同步操作会以阻塞的形式表现出来，同样的，很多人也会把异步和非阻塞混淆，因为异步操作一般都不会在真正的IO操作处被阻塞")])])])]),_._v(" "),l("h2",{attrs:{id:"进程的创建与结束"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#进程的创建与结束"}},[_._v("#")]),_._v(" 进程的创建与结束")]),_._v(" "),l("p",[l("strong",[_._v("进程的创建")])]),_._v(" "),l("ol",[l("li",[l("p",[_._v("但凡是硬件，都需要有操作系统去管理，只要有操作系统，就有进程的概念，就需要有创建进程的方式，一些操作系统只为一个应用程序设计，比如微波炉中的控制器，一旦启动微波炉，所有的进程都已经存在。")])]),_._v(" "),l("li",[l("p",[_._v("而对于通用系统（跑很多应用程序），需要有系统运行过程中创建或撤销进程的能力，主要分为4中形式创建新的进程：")]),_._v(" "),l("ol",[l("li",[_._v("系统初始化（查看进程linux中用ps命令，windows中用任务管理器，前台进程负责与用户交互，后台运行的进程与用户无关，运行在后台并且只在需要时才唤醒的进程，称为守护进程，如电子邮件、web页面、新闻、打印）")]),_._v(" "),l("li",[_._v("一个进程在运行过程中开启了子进程（如nginx开启多进程，os.fork,subprocess.Popen等）")]),_._v(" "),l("li",[_._v("用户的交互式请求，而创建一个新进程（如用户双击暴风影音）")]),_._v(" "),l("li",[_._v("一个批处理作业的初始化（只在大型机的批处理系统中应用）")])])]),_._v(" "),l("li",[l("p",[_._v("无论哪一种，新进程的创建都是由一个已经存在的进程执行了一个用于创建进程的系统调用而创建的。")])])]),_._v(" "),l("p",[l("strong",[_._v("创建进程")])]),_._v(" "),l("ol",[l("li",[_._v("在UNIX中该系统调用是：fork，fork会创建一个与父进程一模一样的副本，二者有相同的存储映像、同样的环境字符串和同样的打开文件（在shell解释器进程中，执行一个命令就会创建一个子进程）\n　　2. 在windows中该系统调用是：CreateProcess，CreateProcess既处理进程的创建，也负责把正确的程序装入新进程。")]),_._v(" "),l("li",[_._v("关于创建子进程，UNIX和windows\n"),l("ol",[l("li",[_._v("相同的是：进程创建后，父进程和子进程有各自不同的地址空间（多道技术要求物理层面实现进程之间内存的隔离），任何一个进程的在其地址空间中的修改都不会影响到另外一个进程。")]),_._v(" "),l("li",[_._v("不同的是：在UNIX中，子进程的初始地址空间是父进程的一个副本，提示：子进程和父进程是可以有只读的共享内存区的。但是对于windows系统来说，从一开始父进程与子进程的地址空间就是不同的。")])])])]),_._v(" "),l("p",[l("strong",[_._v("进程的结束")])]),_._v(" "),l("ol",[l("li",[_._v("正常退出（自愿，如用户点击交互式页面的叉号，或程序执行完毕调用发起系统调用正常退出，在linux中用exit，在windows中用ExitProcess）")]),_._v(" "),l("li",[_._v("出错退出（自愿，python a.py中a.py不存在）")]),_._v(" "),l("li",[_._v("严重错误（非自愿，执行非法指令，如引用不存在的内存，1/0等，可以捕捉异常，try...except...）")]),_._v(" "),l("li",[_._v("被其他进程杀死（非自愿，如kill -9）")])])])}),[],!1,null,null,null);v.default=t.exports}}]);