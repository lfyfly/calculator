# 计算器
## 1. 面向对象抽象
先无视视图（html），因为视图只是绑定方法和显示数据
### 1.1 计算器属性
- expression 表达式 如：1+2*4-4/2

### 1.2 计算器方法
- input 输入
- calcute 计算

### 1.3 代码雏形

```
class Calculator {
  constructor(){
    this.expression=''
  }
  input(value){
    this.expression+=value
  }
  calculate(){
    try{
      const result = eval(this.expression)
      this.expression += ('='+result) 
      return result
    }catch(err){
      alert('计算表达式错误')
    }

  }
}

const calcu = new Calculator()
calcu.input(1)
calcu.input('+')
calcu.input(2)
calcu.calculate()
console.log(calcu.expression) // 输出：1+2=3

```

### 1.4 健壮性：增加输入校验
- 增加可输入字符属性  inputValues
- 增加校验输入字符的方法  validateInput


#### 加完验证后的代码
```
class Calculator {
  constructor() {
    this.expression = ''
    this.inputValues = '0123456789.+-*/()'
  }
  input(value) {
    if(this.validateInput(value)){
      this.expression += value
    }else{
      alert('输入非法字符')
    }
  }
  validateInput(value) {
    value+=''
    return value.length === 1 && this.inputValues.indexOf(value)!==-1
  }
  calculate() {
    try {
      const result = eval(this.expression)
      this.expression += ('=' + result)
      return result
    } catch (err) {
      alert('计算表达式错误')
    }
  }
}

const calcu = new Calculator()
calcu.input(1)
calcu.input('+')
calcu.input(2)
calcu.calculate()
console.log(calcu.expression) // 输出：1+2=3

```

## 2 视图渲染与操作绑定
### 2.1 增加 clear delete 方法
### 2.2 添加onChange参数
### 2.3 按键事件绑定 bindKeyEvent
### 2.4 增加 下次计算是否使用上次计算结果

## 3 caculate方法如何解析%（未写）？
