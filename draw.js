class draw {
  constructor(glovar = undefined, fun = undefined) {
    this.glovar = glovar;
    this.clockFlag = 0;
    this.funList = [];
    this.clockList = [];
    this.success = 0;
    this.viewFlag = 0;
    this.runTime = -1;
    this.fun = fun;
    if (fun) {
      this.addfun(fun);
      this.fun = this.funList[0];
    }
    console.log("使用help()获取帮助");
  }
  addfun(fun, name = undefined) {
    let temp = {};
    temp.fun = fun;
    temp.name = name ? name : "fun" + (this.funList.length + 1);
    temp.energy = fun.length === 1 ? true : false;
    this.funList.push(temp);
    this.fun = temp;
    return "操作函数添加完成，当前操作函数已切换";
  }
  switch(funname) {
    if (typeof funname === "string") {
      for (let i of this.funList) {
        if (i.name == funname) {
          this.fun = i;
          return "操作函数切换成功";
        }
      }
      return "输入的函数名称有误";
    }
    if (typeof funname === "number" && funname <= this.funList.length) {
      this.fun = this.funList[funname - 1];
      return "操作函数切换成功";
    }
    return "输入格式错误";
  }
  initGlovar(glovar) {
    this.glovar = glovar;
  }
  init(glovar = undefined) {
    this.stop();
    if (!this.clockFlag) {
      this.clearTask();
    }
    this.clearFun();
    this.success = 0;
    this.glovar = glovar;
    this.runTime = 0;
    console.log("全局变量和运行时间已初始化");
    return "初始化完成";
  }
  start(stoptime = -1) {
    this.startTime = new Date();
    if (!this.clockFlag) {
      this.clock = setInterval(() => {
        this.runTime += 1;
        if (this.runTime === stoptime) this.stop();
      }, 1000);
      this.clockFlag = 1;
    }
    let result = this.clockList
      ? `任务栏中的${this.clockList.length}个任务开始运行`
      : `请向任务栏添加任务`;
    return result;
  }
  add(num = 1, cell = 3, times = 0) {
    if (!this.fun) {
      return "请先添加函数";
    }
    for (let i = num; i > 0; i--) {
      let temp = {};
      temp.state = "未完成";
      temp.runtimes = 0;
      temp.name = "Task" + (this.clockList.length + 1);
      temp.fun = this.fun.name;
      temp.times = times ? times : "无";
      temp.clock = setInterval(() => {
        if (this.runTime % cell === 0) {
          this.fun.energy
            ? (this.glovar = this.fun.fun(this.glovar))
            : this.fun.fun();
          temp.runtimes += 1;
        }
        if (temp.times === temp.runtimes) {
          clearInterval(temp.clock);
          temp.state = "已完成";
          this.success += 1;
        }
      }, 1000);
      this.clockList.push(temp);
    }
    return `${num}个任务添加完成`;
  }
  stop() {
    if (this.viewFlag) {
      this.view();
      console.log("视图展示已停止");
    }
    if (this.clockFlag) {
      this.clockFlag = 0;
      this.getstate();
      this.clearTask();
      clearInterval(this.clock);
      return `---程序已停止`;
    }
    return "程序尚未开始运行";
  }
  getstate(detailed = false) {
    if (detailed) {
      this.showFun();
      this.showTask();
    }
    console.log(
      `当期已完成任务${this.success}个，当前全局变量为${
        this.glovar
      }，当前运行时间为${this.runTime}`
    );
  }
  view(cell = 2) {
    if (!this.viewFlag) {
      this.viewFlag = setInterval(() => {
        this.showTask();
        this.getstate();
      }, 1000 * cell);
    } else {
      clearInterval(this.viewFlag);
      this.viewFlag = 0;
    }
  }
  showTask() {
    console.log("任务列表-----------------------------------------");
    this.clockList.forEach(i => {
      console.log(
        `${i.name}: 操作函数 ${i.fun},运行次数 ${i.runtimes},额定次数 ${
          i.times
        },当前状态 ${i.state}`
      );
    });
    console.log("------------------------------------------------");
  }
  showFun(detailed = false) {
    console.log("操作函数列表-------------------------------------");
    this.funList.forEach(i => {
      let result = detailed
        ? `${i.name}: 函数体 ${i.fun},是否会对全局变量进行操作 ${i.energy}`
        : `${i.name}: 是否会对全局变量进行操作${i.energy}`;
      console.log(result);
    });
    console.log(`--当前采用任务函数为${this.fun.name}--`);
    console.log("------------------------------------------------");
  }
  clear(option = "all") {
    if (!option instanceof String) {
      return "输入格式有误";
    }
    let temp = option.toLowerCase();
    if (temp === "fun" || temp === "function") this.clearFun();
    if (temp === "task") this.clearTask();
    if (temp === "all") this.clearTask();
    this.clearFun();
    return "你输入的命令有误";
  }
  removeFun(funname) {
    if (typeof funname === "string") {
      for (let i in this.funList) {
        if (this.funList[i].name == funname) {
          this.funList.splice(i, 1);
          return "操作函数删除成功";
        }
      }
      return "输入的函数名称有误";
    }
    if (typeof funname === "number" && funname <= this.funList.length) {
      this.funList.splice(funname - 1, 1);
      return "操作函数删除成功";
    }
    return "输入格式错误";
  }
  removeTask(taskname) {
    u.arrayRemove = arr.splice(j, 1);
    if (typeof taskname === "string") {
      for (let i in this.clockList) {
        if (this.clockList[i].name == taskname) {
          clearInterval(i.clock);
          this.clockList.splice(i, 1);
          return "任务删除成功";
        }
      }
      return "输入的任务名称有误";
    }
    if (typeof taskname === "number" && taskname <= this.clockList.length) {
      clearInterval(this.clockList[taskname - 1].clock);
      this.clockList.splice(taskname - 1, 1);
      return "任务删除成功";
    }
    return "输入格式错误";
  }
  clearFun() {
    this.funList = [];
    console.log(`操作函数列表已清空`);
  }
  clearTask() {
    for (let i of this.clockList) {
      clearInterval(i.clock);
    }
    clearInterval(this.clock);
    this.clockList = [];
    console.log(`任务已全部停止\n任务列表已清空`);
  }
  help() {
    console.log(
      " add:  add(添加任务数量(默认一), 每个任务执行间隔(秒)(默认3秒), 每个任务执行次数(默认停止前一直执行)) 向任务栏里添加任务执行操作函数"
    );
    console.log(
      " addfun:  addfun(函数体, 函数名字(默认fun?))向操作函数列表里添加操作函数"
    );
    console.log(
      " clear:  clear(option = 'all') 清空参数指定的列表'fun'操作函数列表'task'任务列表不传参全部清空"
    );
    console.log(" clearFun:  clearFun() 清空操作函数列表");
    console.log(" clearTask:  clearTask() 清空任务列表");
    console.log(" getstate:  getstate(detailed = false) 显示当前执行状态");
    console.log(
      " init:  init(glovar = underfined) 初始化对象(全部回归开始状态) 可传参重新自定义全局变量的值"
    );
    console.log(" initGlovar:  initGlovar(glovar) 传参重新自定义全局变量的值");
    console.log(
      " removeFun:  removeFun(funname or num) 根据函数名或第几个移除一个函数"
    );
    console.log(
      " removeTask:  removeTask(taskname or num) 根据任务名或第几个移除一个函数"
    );
    console.log(" showFun: showFun(detailed = false) 显示操作函数列表");
    console.log(" showTask: showTask() 显示任务列表");
    console.log(" start: start(stoptime = -1) 开始执行任务列表中的任务");
    console.log(" switch:  switch(funname) 切换操作函数");
    console.log(
      " view: view(cell = 2) 动态展示当前执行状态在次调用或stop()停止"
    );
    console.log(" stop: view() 强制停止当前的任务列表并清空");
  }
}
