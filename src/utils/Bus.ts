type BusClass = {
  emit: (name: string) => void
  on: (name: string, callBack: Function) => void
}

type ParamsKey = string | number | symbol

type List = {
  [ley: ParamsKey]: Function[]
}

class Bus implements BusClass {
  list: List
  constructor() {
    this.list = {}
    console.log(this.list);
  }
  emit(name: string,...args: any[]) {
    let eventName: Function[] = this.list[name]
    eventName.forEach(fn => {
      fn.apply(this,args)
    })
  }
  on(name: string, callBack: Function) {
    let fn: Array<Function> = this.list[name] || []
    fn.push(callBack)
    this.list[name] = fn
  }
}

export default new Bus()