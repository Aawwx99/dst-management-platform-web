export default {
  home: {
    updatePassword: "当前密码较弱，请及时修改",
    updatePasswordTitle: "系统提示",
    canceled: "已取消操作",
    roomInfo: "房间信息",
    roomName: "房间名",
    connectionCode: "直连代码",
    copy: '点击复制',
    cycles: "天数",
    phase: "阶段",
    season: "季节",
    mods: "模组数量",
    modsButton: "查看详情",
    modsTable: {
      title: '模组详情',
      name: '名称',
      pics: '预览',
      size: '大小',
      tags: '标签',
      id: 'ID',
    },
    version: "游戏版本",
    sysInfo: "系统信息",
    mem: "内存",
    control: "控制面板",
    master: "地面",
    caves: "洞穴",
    running: "运行中",
    terminated: "已停止",
    rollback: "回档",
    day: "天",
    days: "天",
    startup: "启动游戏",
    restart: "重启游戏",
    update: "更新游戏",
    shutdown: "关闭游戏",
    reset: "重置世界",
    delete: "删除世界",
    deleteTips: "将会删除游戏的存储文件，即存档目录下的save文件夹",
    interface: "命令执行",
    announcement: "公告",
    send: "发送",
    execute: "执行",
    noServer: "未发现存档",
    noGame: "游戏未安装",
  },
  tabs: {
    refresh: "重新刷新",
    maximize: "全屏切换",
    closeCurrent: "关闭当前",
    closeLeft: "关闭左侧",
    closeRight: "关闭右侧",
    closeOther: "关闭其它",
    closeAll: "关闭所有"
  },
  header: {
    searchMenu: "搜索菜单",
    componentSize: "组件大小",
    refreshCache: "刷新缓存",
    lightMode: "明亮模式",
    darkMode: "暗黑模式",
    language: "语言翻译",
    fullScreen: "全屏",
    exitFullScreen: "退出全屏",
    settings: "设置",
    personalCenter: "个人中心",
    changePassword: "修改密码",
    logout: "退出登录"
  },
  login: {
    welcome: "欢迎登录",
    platform: "管理平台",
    description: "或许我们只是差点运气",
    account: "账号密码登录",
    loginName: "请输入用户名",
    password: "请输入密码",
    security: "请输入验证码",
    blur: "看不清，换一张",
    in: "登录",
    center: "登录中",
    beianhao: "网站备案号"
  },
  profile: {
    cardHeaderInfo: '个人信息',
    cardHeaderPassword: '密码修改',
    plzInputPassword: '请输入密码',
    plzInputAgainPassword: '请再次输入密码',
    password: '密码',
    passwordTwice: '确认密码',
    passwordNotMatch: '两次输入密码不一致',
    suggestedPassword: '建议包含英文、数字的8位以上密码',
    passwordUpdated: "检测到用户密码更新，3秒后将退出本系统",
    passwordUpdatedTitle: "系统提示",
    update: '修改',
  },
  setting: {
    roomSettingMobile: '房间',
    groundSettingMobile: '地面',
    caveSettingMobile: '洞穴',
    worldSettingMobile: '世界',
    modSettingMobile: '模组',
    finishSettingMobile: '完成',
    roomSetting: '房间设置',
    groundSetting: '地面设置',
    caveSetting: '洞穴设置',
    worldSetting: '世界设置',
    modSetting: '模组设置',
    finishSetting: '设置完成',
    baseForm: {
      changeSingleHostMode: '切换为单机器模式',
      changeMultiHostMode: '切换为多机器模式',
      room: '房间名',
      description: '房间描述',
      masterPort: '地面端口',
      cavesPort: '洞穴端口',
      gameMode: {
        name: '游戏模式',
        endless: '无尽',
        survival: '生存',
        lavaarena: '熔炉',
        quagmire: '暴食'
      },
      pvp: '玩家对战',
      playerNum: '玩家数量',
      backDays: '回档天数',
      vote: '玩家投票',
      password: '房间密码',
      token: '令牌',
      tokenHelp: '点击获取游戏令牌',
    },
    roomWorldForm: {
      masterPort: '连接端口',
      cavesPort: '连接端口',
      shardMasterPort: '侦听端口',
      steamMasterPort: 'Steam连接端口',
      steamAuthenticationPort: 'Steam认证端口',
      clusterKey: '认证密码',
      groundSetting: '地面配置',
      caveSetting: '洞穴配置',
    },
    roomWorldFormRules: {
      masterPort: '请输入连接端口',
      cavesPort: '请输入连接端口',
      shardMasterPort: '请输入侦听端口',
      steamMasterPort: '请输入Steam连接端口',
      steamAuthenticationPort: '请输入Steam认证端口',
      clusterKey: '请输入认证密码',
      shardMasterIp: '请输入Master IP',
    },
    finish: {
      title: '配置成功',
      description: '已完成所有配置，点击下方按钮执行不同操作'
    },
    button: {
      prev: '上一步',
      next: '下一步',
      actions: '操作',
      save: '保存',
      saveAndRestart: '保存并重启',
      generateNewWorld: '生成新世界',
    },
    roomBaseFormRules: {
      name: '请输入房间名',
      token: '请输入令牌',
      masterPort: '请输入地面端口',
      cavesPort: '请输入洞穴端口',
      gameMode: '请选择游戏模式',
      samePort: '地面和洞穴的端口不能相同',
    },
    roomBaseFormPortToolTip: '如您不清楚该配置项的用法和作用，请不要随意修改',
    roomGroundFormRules: {
      groundSetting: '请输入地面配置的lua格式内容'
    },
    roomCaveFormRules: {
      caveSetting: '请输入洞穴配置的lua格式内容'
    },
    roomModFormRules: {
      modSetting: '请输入模组配置的lua格式内容'
    },
    tabCode: '配置文件',
    tabVisualization: '可视化配置',
    luaImportButton: {
      endless: '标准无尽',
      survival: '标准生存'
    },
    groundVisualizationRule: '世界规则',
    groundVisualizationRuleItem: {
      global: '全局',
      events: '活动',
      survivors: '冒险家',
      world: '世界',
      resourceRegrowth: '资源再生',
      unnaturalPortalResource: '非自然传送门资源',
      creatures: '生物',
      hostileCreatures: '敌对生物',
      giants: '巨兽',
    },
    groundVisualizationGeneration: '世界生成',
    groundVisualizationGenerationItem: {
      global: '全局',
      world: '世界',
      resources: '资源',
      creaturesAndSpawners: '生物以及刷新点',
      hostileCreaturesAndSpawners: '敌对生物以及刷新点',
    },
    cavesVisualizationRule: '世界规则',
    cavesVisualizationRuleItem: {
      global: '全局',
      events: '活动',
      survivors: '冒险家',
      world: '世界',
      resourceRegrowth: '资源再生',
      unnaturalPortalResource: '非自然传送门资源',
      creatures: '生物',
      hostileCreatures: '敌对生物',
      giants: '巨兽',
    },
    cavesVisualizationGeneration: '世界生成',
    cavesVisualizationGenerationItem: {
      global: '全局',
      world: '世界',
      resources: '资源',
      creaturesAndSpawners: '生物以及刷新点',
      hostileCreaturesAndSpawners: '敌对生物以及刷新点',
    },
    luaError: 'lua语法校验失败',
    cavesTip: '提示：如果你不想创建洞穴，请保持下方输入框为空',
    refresh: '刷新',
    autoRefresh: '自动刷新',
    players: '玩家列表',
    adminList: '管理员',
    blockList: '黑名单',
    whiteList: '白名单',
    noPlayersFound: '没有发现玩家',
    noAdminFound: '没有发现管理员',
    noBlockFound: '没有发现黑名单',
    noWhiteFound: '没有发现白名单',
    tagCloseTip: '提示：点击玩家UID后的 "x" 即可删除',
    nickName: '名字',
    role: '角色',
    roleFail: '获取失败',
    addAdmin: '添加管理员',
    addBlock: '添加黑名单',
    addWhite: '添加白名单',
    kick: '踢出玩家',
    import: {
      title: '存档导入',
      text1: '上传过程中会自动备份存档。上传完成后请手动启动服务器。',
      text2: '请上传压缩文件(例如：my_cluster.zip)，压缩文件的内容如下，加粗文件为必须，会自动进行检测，如缺失会导致导入失败',
      button: '上传存档',
      buttonHelp: '查看教程',
      dialog: {
        title: '上传存档',
        text1: '将文件拖放到此处',
        text2: '或点击上传',
        tip: '请上传.zip文件',
      },
      dialog2: {
        title: '压缩方式',
        text1: '先进入存档文件夹，如图中为Cluser_6，再进行压缩操作',
      }
    },
    mod: {
      tab: {
        download: '下载模组',
        add: '添加模组',
        setting: '配置模组',
      },
      download: {
        searchTypeText: "名称",
        searchTypeId: "ID",
        search: '搜索',
        detail: '详情',
        download: '下载',
        size: '模组大小',
      },
      add: {
        header: {
          title: '已下载的模组',
          refresh: '刷新',
          sync: '同步',
          syncTooltip: '该页面只展示手动下载的模组，点击此按钮将同步自动下载的模组到此页面',
        },
        alert: '提示：模组下载速度取决于网络和文件大小，请耐心等待，切勿重复下载',
        table: {
          name: '名称',
          size: '模组大小',
          action: '操作',
          enable: '启用',
          delete: '删除',
          ugc: {
            yes: '是',
            no: '否'
          },
        },
      },
      setting: {
        left: {
          enable: '已启用',
          disable: '已禁用',
          result: '服务器未添加模组',
        },
        right: {
          header: {
            title: '配置模组',
            disable: '禁用模组',
          },
          result: '该模组无配置项',
          result2: '请选择一个模组进行配置',
          name: '名称',
        },
      },
    },
    system: {
      title: '系统设置',
      titleButton: '提交',
      keepalive: {
        divider: '自动保活',
        title: '自动保活检测频率',
        msg: '单位分钟，默认为30分钟，如果不清楚保活原理，请勿随意修改'
      },
      playerList: {
        divider: '玩家列表',
        title: '玩家列表获取频率',
        msg: '单位秒，默认为30秒，日志杂乱度与功能实现的矛与盾^_^（此功能影响自动保活和昵称字典维护）',
      },
      uidMap: {
        divider: '昵称字典维护',
        title: '玩家昵称字典维护开关',
        title2: '玩家昵称字典写入频率',
        enable: '开启',
        disable: '关闭',
        msg: '默认开启，关闭后，在设置-玩家的管理员黑名单白名单页面中将不再显示玩家昵称',
        msg2: '单位分钟，默认为5分钟，磁盘IO与功能实现的矛与盾^_^',
      },
      metrics: {
        divider: '系统监控',
        title: '系统监控开关',
        msg: '默认开启，关闭后，在工具-系统监控页面中将不再显示任何内容',
      },
      bit64: {
        divider: '64位启动',
        title: '64位启动',
        msg: '默认关闭，开启后会提升游戏性能，但会增加内存占用，请酌情开启',
      },
    },
  },
  tools: {
    install: {
      systemInfo: '系统信息',
      architecture: '架构',
      osType: '系统类型',
      osName: '系统名',
      osVersion: '系统版本',
      cpuCore: '核心数',
      memory: '内存',
      uptime: '运行时间',
      installCheck: '安装检查',
      checkPass: '检查通过',
      checkPassDesc: '请点击下方按钮进行安装',
      checkNotPass: '检查不通过',
      checkNotPassDesc: '检查未通过，可能出现安装失败',
      install: '安装',
      installProgress: '安装进度',
      noClose: '安装过程中请勿刷新或关闭页面',
      installTip: '如果安装完成后，首页无法获取饥荒版本，请手动执行manual_install.sh脚本，执行方法：cd && ./manual_install.sh',
    },
    announce: {
      title: '定时通知',
      name: '名称',
      isEnable: '是否激活',
      enable: '已激活',
      disable: '未激活',
      frequency: '通知频率',
      content: '通知内容',
      actions: '操作',
      update: '更新',
      delete: '删除',
      new: '新增',
      submit: '提交',
      cancel: '取消',
      frequencyTip: '每次执行的间隔，单位：秒',
      noData: '没有查询到定时通知任务，请新建',
      deleteTip: '该操作将会永久删除且无法恢复，是否继续？',
      confirm: '确认',
      rules: {
        name: '请输入名称',
        content: '请输入通知内容',
        frequency: '请输入通知频率',
        enable: '请选择是否激活',
        frequencyMin: '通知频率必须大于0',
      }
    },
    update: {
      title: '定时更新',
      text1: '将在每天',
      text2: '检查是否有更新，如果有，则进行更新，如果没有，则会重启服务器更新模组。',
      text3: '此功能当前为',
      text4: '状态。',
      text5: '当前版本为:',
      text6: ', 最新版本为:',
      text7: ', 无需更新。',
      text8: ', 需要更新。',
      switchEnable: '开启',
      switchDisable: '关闭',
    },
    backup: {
      title1: '备份配置',
      title2: '备份管理',
      text1: '将在',
      text2: '对服务器进行备份，可能会导致1秒左右的卡顿。',
      text3: '自动备份功能已',
      text4: '请留意上方磁盘使用率，如空间不足，可批量删除多个备份。',
      text5: '点击恢复可恢复至备份创建时间点，恢复后请手动启动服务器。',
      switchEnable: '开启',
      switchDisable: '关闭',
      processBar: '磁盘使用率: ',
      tableName: '文件名',
      size: '文件大小',
      tableCreateTime: '创建时间',
      download: '下载',
      restore: '恢复',
      delete: '删除',
      multiDelete: '批量删除',
      BackupImmediately: '立即备份',
      deleteTip: '请至少选择一个文件',
      timeChangeTip: '请选择时间',
      alert: '定时更新和定时备份的时间不能相同，否则会覆盖其中一个任务的执行',

    },
    mod: {
      title: '模组',
      alert: '安装过程耗时较长，请耐心等待，不要离开或者刷新页面',
      resultInfo: {
        title: '安装模组',
        subtitle: '如果出现游戏中模组缺失的情况，请点击下方安装按钮',
        button: '安装',
      },
      resultSuccess: {
        title: '安装完成',
        subtitle: '请回到主界面手动重启游戏',
      },
    },
    statistics: {
      player: {
        title: '玩家人数',
        refresh: '刷新',
        refreshSuccess: '刷新成功',

      },
      max: {
        title: '玩家统计',
        day: '天',
        maxPlayer: '最大玩家数',
        maxPlayerTimestamp: '对应时间',
        time: '时间',
      },
      data: {
        title: '数据量',
        dataNum: '统计量',
      },
    },
    keepalive: {
      title: '自动保活',
      text1: '为避免模组错误、进程卡死等导致服务器失效的情况，将每隔30分钟对服务器进行一次检测。',
      text2: '如发现任何异常，将自动重启服务器。',
      text3: '此功能当前为',
      text4: '状态。',
    },
    token: {
      title: '创建令牌',
      createButton: '创建',
      expiredTime: '过期时间：',
      tip: {
        tip1: '该令牌将于',
        tip2: '过期',
        tip3: '系统不会存储该令牌，请妥善保存'
      },
      usage: '使用方法，其中Authorization为必填，X-I18n-Lang为选填，默认值为zh',
    }
  },
  logs: {
    logs: '日志',
    autoPull: '自动拉取：',
    manualPull: '手动拉取',
    manualPullTips: '使用手动拉取日志功能建议先关闭自动拉取',
    current: '当前日志',
    historical: '历史日志',
  },
  help: {
    one: {
      title: '欢迎加群讨论',
      text1: '如果您遇到了任何问题，都可以在群中进行讨论，也可以提出一些改进项或功能',
      text2: '如果您有什么好点子，也可以在在群中交流',
      text3: '群号：733948644',
    },
    two: {
      title: '服务器开启后没有模组',
      title_additional: '（已修复）',
      text1: '目前饥荒的模组自动下载功能存在Bug，您需要手动替换',
      text1_1: 'dst/bin/lib32/steamclient.so',
      text1_2: '和',
      text1_3: 'dst/steamclient.so',
      text1_4: '文件',
      text2: '该问题仍存在',
      text2_2: '点击替换按钮进行替换，替换前请确认饥荒已经完成安装，替换完成后需执行重启操作',
      text2_3: 'DMP-1.0.6修复此问题',
      text2_4: '问题出现',
      text3: '重新启动即可',
      timeline: '时间线',
      button_1: '替换',
    },
    three: {
      title: '如何开启熔炉',
      text1: '首先在游戏模式中选择熔炉',
      text2: '输入地面配置：',
      text3: '保持洞穴配置为空',
      text4: '输入模组配置',
    },
    four: {
      title: '遇到了问题？先下载日志吧',
      text1: '如果遇到了一些简单的问题，可能通过语言描述，大家凭借经验就能给出相应的解决方案，但是如果遇到了奇奇怪怪的问题，描述了半天大家还是毫无头绪，那么！我们就需要日志啦。',
      text2: '饥荒管理平台一共产生两种日志，一种是请求日志，在 日志-平台 页面就可以看到(前提是打开了请求日志)，还有一种是运行日志，路径是~/dmpProcess.log，如果你是大佬，可以尝试查看日志并解决问题，如果你是小白，那么就点击这个',
      text3: '按钮，把日志一股脑的甩给我吧！',
      button: '下载'
    },
    five: {
      title: '如何使用多机器模式',
      text1: '多机器模式就是在多台云主机上启动一个饥荒服务器。',
      text2: '首先在设置-房间点击 切换为多机器模式，正确输入房间名、令牌（多个节点需相同配置）等信息后点击下一步。',
      text3: '在世界设置中，需要输入多条配置，下面是各个配置的对应关系。',
      tip1: '连接端口：',
      tip1_1: '默认：地面11000，洞穴11001',
      tip2: '侦听端口：',
      tip2_1: '默认：10888',
      tip3: 'Steam连接端口：',
      tip3_1: '默认：地面27018，洞穴27019',
      tip4: 'Steam认证端口：',
      tip4_1: '默认：地面8768，洞穴8769',
      tip5: 'Master IP：',
      tip5_1: '地面为127.0.0.1无需修改，洞穴为地面服务器的公网ip',
      tip6: '认证密码：',
      tip6_1: '地面和洞穴之间认证的密码，两个服务器该配置需一致',
      alert: '配置完成后需要到云服务器页面放开对应的端口，否则会出现连接失败的问题',
    },
  },
};
