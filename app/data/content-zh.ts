import type { ContentData } from "./content";

/** Simplified Chinese (Mandarin) content — mirrors the en/id structure. */
export const zh: ContentData = {
  meta: {
    title: "PT. Nyi Bahari Steel | 重型设备、K3 安全防护与人力外包",
    description:
      "位于西爪哇普哇加达的工程供应商：重型设备租赁、认证 K3 安全防护用品、技术工具、水管与电气安装，以及项目人力外包。",
    keywords:
      "PT Nyi Bahari Steel, 印尼重型设备租赁, 普哇加达挖掘机租赁, 西爪哇设备租赁, K3安全防护用品, 建筑劳保用品, 工业技术工具, 工厂水管电气安装, 工程人力外包, 印尼工程供应商",
  },
  nav: {
    home: "首页",
    about: "为什么选择我们",
    services: "服务",
    products: "产品",
    projects: "项目",
    contact: "联系我们",
  },
  hero: {
    tagline: "工业可靠性",
    headline: "为工业项目提供重型设备、安全防护装备与专业人力",
    description:
      "总部位于西爪哇普哇加达——我们供应重型设备、认证 K3 安全防护用品、技术工具、水管与电气安装，并为建筑和工业项目提供人力外包。",
    ctaContact: "联系我们",
    ctaServices: "查看服务",
    ctaQuotation: "获取报价",
  },
  about: {
    title: "关于我们",
    subtitle: "PT. Nyi Bahari Steel",
    whyTitle: "为什么选择我们",
    whySubtitle: "可靠的一站式供应商，让项目更安全、更顺畅。",
    description:
      "PT. Nyi Bahari Steel 是一家工程供应商，提供重型设备、安全防护用品、技术工具、水管与电气安装以及人力外包等全套项目需求。我们致力于成为建筑、工业和制造企业值得信赖的合作伙伴，以可靠的产品、专业的服务与快速的响应为您保驾护航。",
    visionTitle: "我们的愿景",
    vision:
      "成为印尼领先且最值得信赖的工业合作伙伴，提供高质量的工程供应、精准安装与合格人力，助力客户构建更安全、更高效的未来。",
    missionTitle: "我们的使命",
    mission: [
      "供应符合国际标准的优质技术设备与安全防护用品。",
      "根据项目需求提供技能娴熟、持证可靠的专业人力。",
      "以最高工程标准执行电气与水管基础设施安装。",
      "通过快速响应与绝对诚信建立长期共赢的合作关系。",
    ],
    valuesTitle: "公司价值观",
    values: [
      {
        title: "安全第一",
        description:
          "只供应经测试认证的 K3 安全防护用品，严格执行职业安全标准，保护生命与项目安全。",
      },
      {
        title: "绝对诚信",
        description:
          "以诚实的定价、透明的工期和说到做到的交付建立信任。",
      },
      {
        title: "卓越运营",
        description:
          "对重型设备机队、技术工具与手工工艺保持一贯的高品质要求。",
      },
      {
        title: "快速响应",
        description:
          "深知停工即成本。我们快速响应报价请求、现场变更与物流需求。",
      },
    ],
  },
  services: {
    title: "核心服务",
    subtitle: "为建筑、制造与工业运营提供全面解决方案。",
    ctaContact: "咨询服务",
    list: [
      {
        title: "重型设备供应",
        description:
          "提供保养良好的现代化重型机械，满足您的土方、吊装与运输需求。",
        items: [
          "挖掘机",
          "拖运服务",
          "叉车",
          "移动起重机",
          "自卸卡车",
          "推土机",
          "振动压路机",
          "项目配套机械",
        ],
        image: "/heavy-equipment.jpg",
      },
      {
        title: "安全防护用品供应",
        description:
          "为您的施工队伍配备可靠的职业健康与安全（K3）装备，降低风险并满足法规要求。",
        items: [
          "安全帽",
          "钢头安全鞋",
          "高可视反光背心",
          "工业手套",
          "全身式安全带",
          "安全护目镜",
          "口罩与呼吸器",
          "灭火器",
        ],
        image: "/safety-equipment.jpg",
      },
      {
        title: "技术工具与设备",
        description:
          "适用于车间、制造与结构装配的高品质工业电动工具及五金必需品。",
        items: [
          "焊机",
          "角磨机",
          "电动钻与起子",
          "重型工具套装",
          "精密测量工具",
          "工业切割工具",
          "电工手工具",
          "项目原材料",
        ],
        image: "/technical-tools.jpg",
      },
      {
        title: "水管与电气安装",
        description:
          "为商业楼宇、工厂和仓库提供专业的公用设施安装与维护服务。",
        items: [
          "净水管道敷设",
          "工业废水系统",
          "重型泵站安装",
          "电气配电柜组装",
          "布线与管理",
          "水管与电气维护",
        ],
        image: "/plumbing-electrical.jpg",
      },
      {
        title: "项目人力外包",
        description:
          "按需提供经过认证、训练有素的技术与普通工人，服务于土木与工业项目。",
        items: [
          "持证焊工",
          "普通帮工",
          "机械装配工",
          "重型设备操作员",
          "电气技术员",
          "水管技术员",
          "维护班组",
        ],
        image: "/manpower-outsourcing.jpg",
      },
    ],
  },
  products: {
    title: "产品类别",
    subtitle: "探索我们精选的工业材料、安全防护用品与技术机械目录。",
    ctaQuote: "获取报价",
    ctaDetails: "查看详情",
    list: [
      {
        category: "基础设施材料",
        slug: "infrastructure-materials",
        description:
          "工厂核心设施安装所必需的工业级管道、电缆、开关与阀门。",
        image: "/hydrant-cover.png",
        items: [
          "HDPE 与 PVC 水管",
          "潜水泵",
          "SGP 与黑钢管",
          "工业电缆",
        ],
        flagship: "消防栓系统安装 — 消防管道、水泵与阀门",
        detail: {
          tagline: "带出厂检验证书的公用设施级材料",
          overview: [
            "我们供应工业级管道、电缆、阀门与电气组件，用于工厂公用设施安装——从工厂净水系统到园区废水管网。每批材料均附带出厂检验证书与品牌文件。",
            "我们的团队还承接安装工程：管道敷设、连接、测试与电气端接，让您拥有对材料质量与施工质量全面负责的唯一责任方。",
          ],
          specGroups: [
            {
              title: "材料范围",
              specs: [
                { label: "水管", value: "HDPE PN10/PN16 与 PVC AW/D，20–630mm" },
                { label: "钢管", value: "SGP 与黑钢，schedule 40/80" },
                { label: "水泵", value: "潜水泵、离心泵与增压泵" },
                { label: "电缆", value: "NYY、NYFGBY、NYM 工业电力电缆" },
                { label: "阀门与管件", value: "闸阀、球阀、止回阀与 HDPE 管件" },
                { label: "电气", value: "配电柜、断路器、线管与桥架" },
              ],
            },
            {
              title: "质量与交付",
              specs: [
                { label: "认证", value: "每批附带出厂检验证书" },
                { label: "测试", value: "支持水压试验与连续性测试" },
                { label: "交期", value: "现货或订货 3–14 天" },
                { label: "安装", value: "可选供货加安装套餐" },
              ],
            },
          ],
          applications: [
            "工厂净水与废水系统",
            "工业园区公用设施管网",
            "消防喷淋与消防栓管道",
            "仓库与工厂配电",
            "泵房与公用设施间建设",
          ],
          gallery: [
            {
              src: "/real_life_photos.jpeg",
              alt: "港口物流堆场大型 HDPE 管道预制",
              caption: "HDPE 管道供应与预制 — 丹戎不碌",
            },
            {
              src: "/real_life_photos5.jpeg",
              alt: "石化厂高处消防喷淋管道安装",
              caption: "消防喷淋管道 — 芝勒贡",
            },
          ],
        },
      },
      {
        category: "项目人力外包",
        slug: "project-manpower-outsourcing",
        description:
          "熟练与半熟练劳工调度——焊工、装配工、操作员、起重工与普通帮工，灵活部署于建筑与工业现场。",
        image: "/manpower-outsourcing-cover.png",
        items: [
          "持证焊工与装配工",
          "重型设备操作员",
          "起重工与架子工",
          "普通帮工与技术员",
        ],
        detail: {
          tagline: "持证、久经现场考验的团队随时待命",
          overview: [
            "我们为西爪哇及周边地区的建筑、工业与制造项目调度持证技术工人与普通工人。每次派遣均根据您的施工范围匹配——从一名持证焊工到整支多工种队伍。",
            "所有工人均经过能力筛选，持有有效认证（操作员 SIO 证书、焊工资格考试、K3 基础培训），并享有工伤保险。我们负责薪资、许可与现场行政，让您的团队专注交付。",
          ],
          specGroups: [
            {
              title: "可提供的工种",
              specs: [
                { label: "持证焊工", value: "SMAW / GMAW / GTAW，3G–6G 位置" },
                { label: "机械装配工", value: "管道安装与结构装配" },
                { label: "重型设备操作员", value: "挖掘机、叉车、起重机 — SIO 持证" },
                { label: "起重工与架子工", value: "持证起重与脚手架班组" },
                { label: "技术员", value: "电气、水管与维护" },
                { label: "普通帮工", value: "经过培训的现场支持与物料搬运" },
              ],
            },
            {
              title: "派遣条款",
              specs: [
                { label: "合同期限", value: "按日、按周、按月或按项目" },
                { label: "到场时间", value: "订单后 3–7 个工作日" },
                { label: "覆盖区域", value: "西爪哇、雅加达、万丹、中爪哇" },
                { label: "合规", value: "含保险、许可与 PPE" },
              ],
            },
          ],
          applications: [
            "工厂维护与检修项目",
            "钢结构制作与吊装",
            "管道安装与维修班组",
            "仓库与工厂装修工程",
            "土木施工现场支援",
          ],
          gallery: [
            {
              src: "/real_life_photos6.jpeg",
              alt: "NBS 人工作业班组在石化现场进行管道防腐蚀涂装",
              caption: "涂装与防腐蚀班组 — 万丹芝勒贡",
            },
            {
              src: "/real_life_photos4.jpeg",
              alt: "技术员乘剪叉式升降机安装高层仓库公用设施",
              caption: "高层公用设施安装技术员 — 加拉璜",
            },
          ],
        },
      },
      {
        category: "重型设备机队",
        slug: "heavy-equipment-fleet",
        description:
          "高性能装载机、挖掘机与公用机械，可灵活短期或长期租赁。",
        image: "/heavy-equipment-cover.png",
        items: [
          "20 吨级挖掘机",
          "3–10 吨叉车",
          "25–50 吨移动起重机",
          "10 吨振动压路机",
        ],
        detail: {
          tagline: "保养良好的机械，配持证操作员",
          overview: [
            "我们的重型设备机队严格按保养计划维护，每次调遣前均经检查。设备可裸租，或配备我们 SIO 持证操作员，灵活满足土方、吊装与物料运输需求。",
            "我们支持临时项目的短期日租，也支持长期项目合同，并安排备用机组，确保设备故障时现场作业不中断。",
          ],
          specGroups: [
            {
              title: "机队亮点",
              specs: [
                { label: "挖掘机", value: "20 吨级，配破碎锤与螺旋钻附件" },
                { label: "叉车", value: "3–10 吨柴油机型，室内与越野" },
                { label: "移动起重机", value: "25–50 吨伸缩臂" },
                { label: "振动压路机", value: "10 吨，土方与沥青压实" },
                { label: "自卸卡车", value: "6x4，20–25 m³ 容积" },
                { label: "推土机", value: "D6 级，清表与整平" },
              ],
            },
            {
              title: "租赁条款",
              specs: [
                { label: "租期", value: "按日、按周或按月" },
                { label: "操作员", value: "可选 — 可配 SIO 持证操作员" },
                { label: "调遣", value: "由 NBS 安排低平板运输" },
                { label: "维护", value: "含现场服务与备用机组" },
              ],
            },
          ],
          applications: [
            "场地清表、挖填土方",
            "物料装载与堆场物流",
            "结构吊装与设备安装",
            "路基与土壤压实",
            "工业园区基础设施建设",
          ],
          gallery: [
            {
              src: "/real_life_photos2.jpeg",
              alt: "挖掘机开挖并安放工业排水管道",
              caption: "挖掘机辅助管道敷设 — 芝卡朗",
            },
            {
              src: "/real_life_photos3.jpeg",
              alt: "沿工业园区沟渠敷设长距离 HDPE 公用管道",
              caption: "主干公用管道土方工程 — 肯德尔",
            },
          ],
        },
      },
      {
        category: "K3 安全防护装备",
        slug: "k3-safety-gear",
        description:
          "从头到脚保护工人的认证安全装备，符合 SNI 与国际标准。",
        image: "/safety-equipment-cover.png",
        items: [
          "SNI 安全帽",
          "重型安全靴",
          "反光安全背心",
          "耐化学手套",
        ],
        detail: {
          tagline: "认证防护，文件齐全",
          overview: [
            "我们供应符合 SNI 及国际标准（ANSI、EN、CE）的职业健康与安全（K3）装备。每次交付均附合格证书与批次文件——这对通过客户安全审计至关重要。",
            "从单点班组到数百人的大型动员，我们以稳定的库存、定制品牌（可印公司标志）与长期项目定期补货方案支持批量订单。",
          ],
          specGroups: [
            {
              title: "产品系列",
              specs: [
                { label: "头部防护", value: "SNI 安全帽、防撞帽、面罩" },
                { label: "足部防护", value: "钢头靴与鞋、防滑、防静电" },
                { label: "高可视", value: "反光背心与工装，2/3 级" },
                { label: "手部防护", value: "耐化学、防割与焊接手套" },
                { label: "坠落防护", value: "全身式安全带、系索、锚点" },
                { label: "呼吸与眼部", value: "口罩、呼吸器、安全护目镜" },
              ],
            },
            {
              title: "标准与供应",
              specs: [
                { label: "合规", value: "SNI、ANSI、EN — 附证书" },
                { label: "消防", value: "APAR 灭火器、换装与检查" },
                { label: "定制", value: "可印/绣公司标志" },
                { label: "订单规模", value: "零售单件到项目批量" },
              ],
            },
          ],
          applications: [
            "新工地安全套装配置",
            "周期性 PPE 补货合同",
            "检修与大修班组装备",
            "安全审计合规升级",
            "承包商与访客 PPE 方案",
          ],
          gallery: [
            {
              src: "/safety-equipment.jpg",
              alt: "NBS 供应的各类认证 K3 安全防护用品",
              caption: "认证 PPE 系列 — SNI 与国际标准",
            },
          ],
        },
      },
      {
        category: "工业技术工具",
        slug: "industrial-technical-tools",
        description:
          "专为严苛日常现场作业设计的重型制造与装配机械。",
        image: "/technical-tools-cover.png",
        items: [
          "逆变焊机",
          "重型角磨机",
          "无线冲击钻",
          "机械工具套装（120+ 件）",
        ],
        detail: {
          tagline: "经得起日常现场高强度使用的车间级工具",
          overview: [
            "我们为车间、制造厂与结构装配现场供应工业电动工具与五金必需品。我们的目录专注经过验证的重型品牌，能承受持续现场作业——而非消费级替代品。",
            "除供应外，我们还根据施工范围提供选型建议、耗材（焊条、磨片、钻头），并协助通过授权服务中心处理保修。",
          ],
          specGroups: [
            {
              title: "工具类别",
              specs: [
                { label: "焊接", value: "逆变 MMA/MIG 焊机，200–400A" },
                { label: "研磨与切割", value: "4–7 英寸角磨机、切割机" },
                { label: "钻孔与紧固", value: "无线冲击钻、电锤" },
                { label: "手工具", value: "机械套装 120+ 件、扭力扳手" },
                { label: "测量", value: "激光水平仪、卡尺、测量工具" },
                { label: "电工工具", value: "压接钳、测试仪、电缆牵引器" },
              ],
            },
            {
              title: "供应条款",
              specs: [
                { label: "保修", value: "官方品牌保修，6–24 个月" },
                { label: "耗材", value: "焊条、磨片与钻头常备库存" },
                { label: "批量采购", value: "大宗采购享受项目价" },
                { label: "配送", value: "爪哇全境送货到现场" },
              ],
            },
          ],
          applications: [
            "钢结构制造与焊接车间",
            "机械与电气安装班组",
            "工厂维护工具配置",
            "现场木工与模板作业",
            "装配线建设与改造工程",
          ],
          gallery: [
            {
              src: "/technical-tools.jpg",
              alt: "NBS 供应的工业技术工具与电动设备",
              caption: "重型电动工具与车间设备",
            },
          ],
        },
      },
    ],
  },
  productDetail: {
    backToProducts: "返回产品",
    overviewTitle: "概述",
    itemsTitle: "主要项目",
    specsTitle: "规格参数",
    applicationsTitle: "典型应用",
    galleryTitle: "现场资料",
    relatedTitle: "相关项目",
    ctaTitle: "需要该类别的报价？",
    ctaSubtitle: "发送您的需求范围——数量、工期与地点——我们的团队将在一个工作日内回复。",
    ctaWhatsapp: "通过 WhatsApp 咨询",
    viewProject: "查看项目",
    clientLabel: "客户",
    locationLabel: "地点",
  },
  projects: {
    title: "项目经验",
    subtitle: "成功交付、工程供应与人力调度的可靠记录。",
    list: [
      {
        name: "市政公用管道采购与预制",
        client: "PT. Bahari Dermaga Logistik",
        location: "丹戎不碌，雅加达",
        year: "2024",
        service: "水管安装与管道材料",
        description: "在港口物流堆场供应、测试并校直大口径 HDPE 供水管道段。",
        image: "/real_life_photos.jpeg",
      },
      {
        name: "市政排水基础设施管道敷设",
        client: "PT. Pembangunan Jaya Mandiri",
        location: "芝卡朗，西爪哇",
        year: "2024",
        service: "水管安装与管道材料",
        description: "为大型工厂开挖沟渠、安放并连接工业废水主管与净水供水线路。",
        image: "/real_life_photos2.jpeg",
      },
      {
        name: "工业配水主管道工程",
        client: "PT. Kawasan Industri Kendal",
        location: "肯德尔，中爪哇",
        year: "2024",
        service: "水管安装与管道材料",
        description: "沿园区主干公用沟渠敷设、锚固并校直长距离 HDPE 公用管道。",
        image: "/real_life_photos3.jpeg",
      },
      {
        name: "高层仓库公用设施安装",
        client: "PT. Global Logistik Utama",
        location: "加拉璜，西爪哇",
        year: "2025",
        service: "水管与电气安装",
        description: "使用电动剪叉式升降机在 15,000 平方米仓库内安装高层电气线管、照明网格与辅助管道。",
        image: "/real_life_photos4.jpeg",
      },
      {
        name: "消防喷淋与管道基础设施",
        client: "PT. Mega Industri Perakitan",
        location: "芝勒贡，万丹",
        year: "2025",
        service: "水管与电气安装",
        description: "在石化厂内使用液压平台完成高处机械管道校直、焊接与连接。",
        image: "/real_life_photos5.jpeg",
      },
      {
        name: "基础设施防腐蚀与涂装",
        client: "PT. Energi Abadi Kimia",
        location: "芝勒贡，万丹",
        year: "2024",
        service: "项目人力外包",
        description: "调度涂装技工与帮工完成管道表面处理、底漆与工业防腐蚀涂装。",
        image: "/real_life_photos6.jpeg",
      },
    ],
  },
  testimonials: {
    title: "客户评价",
    subtitle: "合作伙伴与客户对与 PT. Nyi Bahari Steel 合作的评价。",
    cta: "查看全部评价",
    list: [
      {
        name: "Andi Pratama",
        role: "项目经理，PT. Global Kontraktor",
        quote: "设备准时到场，操作员技术扎实。整个项目零安全事故，现场从未停摆。",
        rating: 5,
      },
      {
        name: "Siti Rahmawati",
        role: "采购主管，勿加泗工业园区",
        quote: "认证安全防护用品价格公道，文件资料齐全，重复下单非常省心。",
        rating: 5,
      },
      {
        name: "Budi Santoso",
        role: "现场工程师，基础设施事业部",
        quote: "工期吃紧时他们的人力外包救了我们的急。团队响应快，技工可靠。",
        rating: 5,
      },
      {
        name: "Maria Lestari",
        role: "运营，加拉璜制造工厂",
        quote: "从重型设备到技术工具，一家供应商全部搞定，这种省心对我们价值极大。",
        rating: 4,
      },
    ],
  },
  contact: {
    title: "联系我们",
    subtitle: "联系我们的采购与技术支持团队，获取报价或项目咨询。",
    addressTitle: "我们的办公室",
    address: "Ciherang, Kec. Pasawahan, Kabupaten Purwakarta, Jawa Barat 41172",
    phoneTitle: "电话",
    phone: "08139547223",
    emailTitle: "电子邮箱",
    email: "nyibaharisteel@gmail.com",
    whatsappTitle: "WhatsApp 商务号",
    whatsapp: "+62 813 9547 223",
    whatsappCta: "通过 WhatsApp 咨询",
    whatsappPreFilledMsg:
      "您好，我想咨询贵司的工程设备供应与人力外包服务。",
    wechatTitle: "WeChat",
    wechatId: "NYIBAHARISTEEL",
    wechatUrl: "https://web.wechat.com/",
    wechatCta: "通过 WeChat 联系",
    form: {
      name: "姓名",
      company: "公司名称",
      phone: "电话号码",
      email: "电子邮箱",
      service: "所需服务",
      servicePlaceholder: "选择服务...",
      message: "需求详情",
      submit: "提交询盘",
      submitting: "发送中...",
      successTitle: "询盘已提交！",
      successMsg:
        "感谢您的联系。您的信息已成功提交。是否同时直接发送到我们的销售 WhatsApp 以获取即时回复？",
      successBtnWa: "立即发送到 WhatsApp",
      successBtnClose: "关闭",
    },
  },
  footer: {
    copyright: "© 2026 PT. Nyi Bahari Steel. 保留所有权利。",
    legal: "以安全与钢铁铺就未来之路。",
  },
};
