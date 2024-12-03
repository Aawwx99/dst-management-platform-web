export default {
  home: {
    updatePassword: "The current password is weak, please change it promptly",
    updatePasswordTitle: "System Prompt",
    canceled: "Operation has been canceled",
    roomInfo: "Room Info",
    roomName: "Room Name",
    connectionCode: "Connection Code",
    copy: 'Click to copy',
    cycles: "Cycles",
    phase: "Phase",
    season: "Season",
    mods: "Mods",
    modsButton: "Mods Details",
    modsTable: {
      title: 'Mods Details',
      name: 'Name',
      pics: 'Preview',
      size: 'Size',
      tags: 'Tags',
      id: 'ID',
    },
    version: "Game version",
    sysInfo: "Sys Info",
    mem: "Mem",
    control: "Control Panel",
    master: "Ground",
    caves: "Caves",
    running: "Running",
    terminated: "Terminated",
    rollback: "Rollback",
    day: "day",
    days: "days",
    startup: "Startup",
    restart: "Restart",
    update: "Update",
    shutdown: "Shutdown",
    reset: "Reset",
    delete: "Delete",
    deleteTips: "This will delete the game's storage files, specifically the save folder in the save directory",
    interface: "Remote Execute",
    announcement: "Announcement",
    send: "Send",
    execute: "Execute",
  },
  tabs: {
    refresh: "Refresh",
    maximize: "Maximize",
    closeCurrent: "Close Current",
    closeLeft: "Close Left",
    closeRight: "Close Right",
    closeOther: "Close Other",
    closeAll: "Close All"
  },
  header: {
    searchMenu: "Search menu",
    componentSize: "Component size",
    refreshCache: "Refresh cache",
    lightMode: "Light mode",
    darkMode: "Dark mode",
    language: "Language translation",
    fullScreen: "Full Screen",
    exitFullScreen: "Exit Full Screen",
    personalCenter: "Profile",
    settings: "Settings",
    logout: "Log out"
  },
  login: {
    welcome: "Welcome to login",
    platform: "Management platform",
    description: "Maybe we just got lucky",
    account: "Account password login",
    loginName: "Please enter your username",
    password: "Please enter password",
    security: "Please enter the verification code",
    blur: "I can't see it. Change it",
    in: "Log in",
    center: "Be logging in",
    beianhao: "Website record number"
  },
  profile: {
    cardHeaderInfo: 'User Info',
    cardHeaderPassword: 'Update Password',
    plzInputPassword: 'Please enter password',
    plzInputAgainPassword: 'Please enter password again',
    password: 'Password',
    passwordTwice: 'Confirm Password',
    passwordNotMatch: 'The passwords entered twice do not match',
    suggestedPassword: 'It is recommended to use a password that is at least 8 characters long and contains letters and numbers',
    passwordUpdated: "Password update detected. You will be logged out in 3 seconds",
    passwordUpdatedTitle: "System Prompt",
  },
  setting: {
    roomSettingMobile: 'Room',
    groundSettingMobile: 'Ground',
    caveSettingMobile: 'Cave',
    modSettingMobile: 'MOD',
    finishSettingMobile: 'Finish',
    roomSetting: 'Room Setting',
    groundSetting: 'Ground Setting',
    caveSetting: 'Cave Setting',
    modSetting: 'Mod Setting',
    finishSetting: 'Setting Finished',
    baseForm: {
      room: 'Room Name',
      description: 'Room Description',
      masterPort: 'Ground Port',
      cavesPort: 'Cave Port',
      gameMode: {
        name: 'Game Mode',
        endless: 'Endless',
        survival: 'Survival',
        lavaarena: 'Lava Arena',
        quagmire: 'Quagmire'
      },
      pvp: 'PVP',
      playerNum: 'Player Numbers',
      backDays: 'Rollback Days',
      vote: 'Vote',
      password: 'Password',
      token: 'Token',
      tokenHelp: 'Click to obtain game token',
    },
    finish: {
      title: 'Setting Finished',
      description: 'All configurations have been completed. Click the button below to perform different actions'
    },
    button: {
      prev: 'Previous',
      next: 'Next',
      actions: 'Actions',
      save: 'Save',
      saveAndRestart: 'Save And Restart',
      generateNewWorld: 'Generate World',
    },
    roomBaseFormRules: {
      name: 'Please enter room name',
      token: 'Please enter room token',
      masterPort: 'Please enter ground port',
      cavesPort: 'Please enter cave port',
    },
    roomBaseFormPortToolTip: 'If you are unsure of the usage and purpose of this configuration item, please do not modify it arbitrarily',
    roomGroundFormRules: {
      groundSetting: 'Please enter the ground configuration in Lua format'
    },
    roomCaveFormRules: {
      caveSetting: 'Please enter the cave configuration in Lua format'
    },
    roomModFormRules: {
      modSetting: 'Please enter the MOD configuration in Lua format'
    },
    luaError: 'Lua syntax validation failed',
    cavesTip: 'TIPS: If you do not want to create a cave, please leave the input box below empty',
    refresh: 'Refresh',
    autoRefresh: 'Auto Refresh',
    players: 'Players',
    adminList: 'Admin List',
    blockList: 'Block List',
    whiteList: 'White List',
    noPlayersFound: 'No players found',
    noAdminFound: 'No admin players found',
    noBlockFound: 'No blocked players found',
    noWhiteFound: 'No whitelist players found',
    tagCloseTip: "TIPS: Click the '×' after the player's UID to delete",
    nickName: 'Nickname',
    addAdmin: 'Add Admin List',
    addBlock: 'Add to Block List',
    addWhite: 'Add to White List',
    kick: 'Kick Player',
    import: {
      title: 'Import',
      text1: 'Before uploading the file, it is recommended to close the running server to avoid errors. An automatic backup will be performed during the upload process. After the upload is complete, please manually start the server.',
      text2: 'Please upload a compressed file (e.g., my_cluster.zip). The contents of the compressed file should be as follows, with the bold files being required. Automatic detection will be performed, and missing files will result in import failure.',
      button: 'Upload',
      dialog: {
        title: 'Upload',
        text1: 'Drop file here or ',
        text2: 'click to upload',
        tip: 'Please upload a .zip file',
      },
    },
  },
  tools: {
    install: {
      systemInfo: 'System Info',
      architecture: 'Architecture',
      osType: 'OS Type',
      osName: 'OS Name',
      osVersion: 'OS Version',
      cpuCore: 'Cores',
      memory: 'Memory',
      uptime: 'Uptime',
      installCheck: 'Install Check',
      checkPass: 'Check Passed',
      checkPassDesc: 'Please click the button below to proceed with the installation',
      checkNotPass: 'Check Failed',
      checkNotPassDesc: 'Check not passed, possible installation failure',
      install: 'Install',
      installProgress: 'Installation progress',
      noClose: 'Do not refresh or close the page during installation',
      installTip: 'After the installation is complete, if the DST version cannot be retrieved on the homepage, please manually execute the manual_install.sh script. Execution CMD: cd && ./manual_install.sh',
    },
    announce: {
      title: 'Auto Announce',
      name: 'Name',
      isEnable: 'Enable',
      enable: 'Enable',
      disable: 'Disable',
      frequency: 'Interval',
      content: 'Content',
      actions: 'Actions',
      update: 'Update',
      delete: 'Delete',
      new: 'New',
      submit: 'Submit',
      cancel: 'Cancel',
      frequencyTip: 'Interval between each execution, unit: seconds',
      noData: 'No Announcement Data',
      deleteTip: 'This operation will be permanently deleted and cannot be recovered, do you wish to continue?',
      confirm: 'Confirm',
      rules: {
        name: 'Please input the Name',
        content: 'Please input the Content',
        frequency: 'Please input the Interval',
        enable: 'Please select whether to Enable',
        frequencyMin: 'Interval must be greater than 0',
      }
    },
    update: {
      title: 'Auto Update',
      text1: 'It will check for updates every day at ',
      text2: '. If an update is required, it will be performed. If no updates are available, it will restart the server to update the mod.',
      text3: 'This feature is currently ',
      text4: '',
      text5: 'Current version is:',
      text6: ', Latest version is:',
      text7: ', No update required.',
      text8: ', Update required.',
      switchEnable: 'Enabled',
      switchDisable: 'Disabled',
    },
    backup: {
      title1: 'Backup Configuration',
      title2: 'Backup Management',
      text1: 'The server will be backed up at ',
      text2: ', which may cause a stutter of about 1 second.',
      text3: 'Automatic Backup Function is ',
      text4: 'Please pay attention to the disk usage above. If space is insufficient, you can delete multiple backups in batches.',
      text5: 'Clicking “Restore” will restore to the time when the backup was created. After the restoration, please manually start the server.',
      switchEnable: 'Enabled',
      switchDisable: 'Disabled',
      processBar: 'Disk Usage: ',
      tableName: 'File Name',
      size: 'File Size',
      tableCreateTime: 'Create Time',
      download: 'Download',
      restore: 'Restore',
      delete: 'Delete',
      multiDelete: 'Multi-Delete',
      BackupImmediately: 'Backup',
      deleteTip: 'Please select at least one file.',
      timeChangeTip: 'Please select a time',
      alert: 'The Auto-Update and Auto-Backup times cannot be the same, as this will overwrite the execution of one of the tasks',
    },
    mod: {
      title: 'Mod',
      alert: 'The installation process takes a long time, please be patient and do not leave or refresh the page',
      resultInfo: {
        title: 'Install Mods',
        subtitle: 'If the game is missing a mod, please click the install button below',
        button: 'Install',
      },
      resultSuccess: {
        title: 'Installation complete',
        subtitle: 'Please return to the main interface and manually restart the game',
      },
    },
    statistics: {
      player: {
        title: 'Player Count',
        refresh: 'Refresh',
        refreshSuccess: 'Refresh Success',

      },
      max: {
        title: 'Statistics',
        day: 'Day',
        maxPlayer: 'Maximum number of players',
        maxPlayerTimestamp: 'Corresponding time',
        time: 'Time',
      },
      data: {
        title: 'Data volume',
        dataNum: 'Count',
      },
    },
    keepalive: {
      title: 'Keepalive',
      text1: 'To prevent server failure due to issues such as module errors or process crashes, the server will be monitored every 30 minutes. ',
      text2: 'If any FAILURE are detected, the server will automatically restart.',
      text3: 'This feature is currently',
      text4: '.',
    }
  },
  logs: {
    logs: 'Logs',
    autoPull: 'Auto Pull: ',
    manualPull: 'Manual Pull',
    manualPullTips: 'It is recommended to first disable automatic log pulling when using the manual log pulling function',
  },
  help: {
    one: {
      title: 'Welcome to join the group for discussion',
      text1: 'If you encounter any issues, feel free to discuss them in the group. You can also propose improvements or new features.',
      text2: 'If you have any good ideas, feel free to share them in the group.',
      text3: 'Group number: 733948644',
    },
    two: {
      title: 'The server is up but there are no mods',
      text1: 'Currently, the automatic mod download feature in Don\'t Starve Together has a bug, so you need to manually replace the ',
      text1_1: 'dst/bin/lib32/steamclient.so',
      text1_2: 'and',
      text1_3: 'dst/steamclient.so',
      text1_4: 'files.',
      text2: 'As of November 7, 2024, the issue still persists',
      text3: 'Restart it.',
    },
    three: {
      title: 'How to create Lava Arena world',
      text1: 'First, select the Lava Arena in the game mode.',
      text2: 'Enter the Ground Configuration: ',
      text3: 'Keep the Cave Configuration empty',
      text4: 'Enter the Mod Configuration: ',
    },
    four: {
      title: 'Encountered an issue? Start by downloading the logs',
      text1: 'If you encounter simple problems, you may be able to describe them and others can provide solutions based on their experience. However, if you come across odd issues that leave everyone scratching their heads despite lengthy descriptions, then! We need the logs.',
      text2: 'The DMP generates two types of logs: one is the request log, which can be viewed on the "Logs - DMP" page (provided that request logging is enabled), and the other is the runtime log, located at ~/dmpProcess.log. If you\'re a seasoned pro, you can try looking at the logs and resolving the issues yourself. If you\'re a newbie, just click this',
      text3: 'button and toss the logs at me all at once!',
      button: 'Download'
    },
  },
};
