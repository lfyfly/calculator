class Calculator {
  constructor({ onChange }={}) {
    this.expression = ''
    this.inputValues = '0123456789.+-*/()'
    this.preResult = ''
    this.onChange = onChange || function () { }
  }
  input(value) {
    if (this.validateInput(value)) {
      if(this.isCalculated()){
        if('+-*/'.indexOf(value)!==-1){
          this.expression = this.preResult + value
        }else{
          this.expression=value
        }
      }else{
        this.expression += value
      }
      this.onChange(this.expression)
    } else {
      alert('输入非法字符')
    }
  }
  clear() {
    this.expression = ''
    this.onChange(this.expression)
  }
  delete() {
    this.expression = this.expression.substring(0, this.expression.length - 1)
    this.onChange(this.expression)
  }
  validateInput(value) {
    value += ''
    return value.length === 1 && this.inputValues.indexOf(value) !== -1
  }
  isCalculated(){
    return this.expression.indexOf('=')!==-1
  }
  calculate() {
    if(this.isCalculated()){
      alert('已经计算过了')
      return
    }
    try {
      const result = eval(this.expression)
      this.expression += ('=' + result)
      this.preResult = result
      this.onChange(this.expression)
      return result
    } catch (err) {
      
      alert('计算表达式错误')
    }
  }

  bindKeyEvent(el){
    el.addEventListener('keydown',(e)=>{
      if(this.validateInput(e.key)){
        this.input(e.key)
      }else if(e.key.toLowerCase()==='enter'){
        this.calculate()
      }else if(e.key.toLowerCase()==='backspace'){
        this.delete()
      }
    })
  }
}

