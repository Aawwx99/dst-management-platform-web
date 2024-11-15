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
  },
  setting: {
    roomSettingMobile: '房间',
    groundSettingMobile: '地面',
    caveSettingMobile: '洞穴',
    modSettingMobile: '模组',
    finishSettingMobile: '完成',
    roomSetting: '房间设置',
    groundSetting: '地面设置',
    caveSetting: '洞穴设置',
    modSetting: '模组设置',
    finishSetting: '设置完成',
    baseForm: {
      room: '房间名',
      description: '房间描述',
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
      token: '请输入令牌'
    },
    roomGroundFormRules: {
      groundSetting: '请输入地面配置的lua格式内容'
    },
    roomCaveFormRules: {
      caveSetting: '请输入洞穴配置的lua格式内容'
    },
    roomModFormRules: {
      modSetting: '请输入模组配置的lua格式内容'
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
    addAdmin: '添加管理员',
    addBlock: '添加黑名单',
    addWhite: '添加白名单',
    kick: '踢出玩家',
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
    }
  },
  logs: {
    logs: '日志',
    autoPull: '自动拉取：',
    manualPull: '手动拉取',
    manualPullTips: '使用手动拉取日志功能建议先关闭自动拉取',
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
      text1: '目前饥荒的模组自动下载功能存在Bug，您需要手动替换',
      text1_1: 'dst/bin/lib32/steamclient.so',
      text1_2: '和',
      text1_3: 'dst/steamclient.so',
      text1_4: '文件',
      text2: '截止2024年11月7日，该问题仍存在',
      text3: '重新启动即可',
    },
    three: {
      title: '如何开启熔炉',
      text1: '首先在游戏模式中选择熔炉',
      text2: '输入地面配置：',
      text3: '保持洞穴配置为空',
      text4: '输入模组配置',
    },
  },
};
