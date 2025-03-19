# 编程语言基础总结

## 1. 编程语言概述

### 1.1 编程定义
- **编程**：让计算机为解决某个问题而使用某种程序设计语言编写程序代码，并最终得到结果的过程。
- **计算机程序**：计算机所执行的一系列的指令集合，程序全部都是用我们所掌握的语言来编写的，所以人们要控制计算机一定要通过计算机语言向计算机发出命令。

从事编程的人员称为**程序员**。一般程序员都比较幽默，为了形容自己的辛苦工作，也成为“码农”或者“程序猿”/“程序媛”。

**注意**：上面所定义的计算机指的是任何能够执行代码的设备，可能是智能手机、ATM机、黑莓PI、服务器等。

## 2. 计算机语言

### 2.1 计算机语言分类
- **计算机语言**：指用于人与计算机之间通讯的语言，它是人与计算机之间传递信息的媒介。
- 计算机语言种类非常多，总的来说可以分成**机器语言**、**汇编语言**和**高级语言**三大类。
- 实际上计算机最终所执行的都是**机器语言**，它是由“0”和“1”组成的二进制数，二进制是计算机语言的基础。

```plaintext
0 = 00000000    1 = 00000001    2 = 00000010    3 = 00000011    4 = 00000100
5 = 00000101    6 = 00000110    7 = 00000111    8 = 00001000    9 = 00001001
10 = 00001010
```

## 3. 编程语言

### 3.1 编程语言定义
- 可以通过类似于人类语言的“语言”来控制计算机，让计算机为我们做事情，这样的语言就叫做**编程语言（Programming Language）**。
- 编程语言是用来控制计算机的一系列指令，它有固定的格式和词汇（不同编程语言的格式和词汇不一样），必须遵守。

如今通用的编程语言有两种形式：**汇编语言**和**高级语言**。
- **汇编语言**和机器语言实质是相同的，都是直接对硬件操作，只不过指令采用了英文缩写的标识符，容易识别和记忆。
- **高级语言**主要是相对于低级语言而言，它并不是特指某一种具体的语言，而是包括了很多编程语言，常用的有C语言、C++、Java、C#、Python、PHP、JavaScript、Go语言、Objective-C、Swift等。

```c
// C语言
puts("你好");
```

```php
// PHP
echo "你好";
```

```java
// Java
System.out.println("你好");
```

```javascript
// JavaScript
alert("你好");
```

## 4. 编程语言和标记语言区别

### 4.1 编程语言和标记语言区别
- **编程语言**有很强的逻辑性和行为能力。在编程语言里，你会看到很多if else、for、while等具有逻辑性和行为能力的指令，这是主动的。
- **标记语言（HTML）**不用于向计算机发出指令，常用于格式化和链接。标记语言的存在是用来被读取的，他是被动的。

## 5. 总结

1. 计算机可以帮助人类解决某些问题。
2. 程序员利用编程语言编写程序发出指令控制计算机来实现这些任务。
3. 编程语言有机器语言、汇编语言、高级语言。
4. 高级语言需要一个翻译器转换为计算机识别的机器语言。
5. 编程语言是主动的有很强的逻辑性。

# 计算机基础

## 2.1 计算机组成

### 硬件
- **输入设备**：鼠标、键盘、手写板、摄像头等。
- **输出设备**：显示器、打印机、投影仪等。
- **CPU**：负责处理数据与运算。
- **硬盘**：负责存储数据，硬盘永久存储数据。
- **内存**：内存暂时存储数据。

### 软件
- **系统软件**：Windows、Linux、macOS。
- **应用软件**：浏览器、QQ、VSCode、Sublime、Word。

## 2.2 数据存储

1. 计算机内部使用二进制0和1来表示数据。
2. 所有数据，包括文件、图片等最终都是以二进制数据（0和1）的形式存放在硬盘中的。
3. 所有程序，包括操作系统，本质都是各种数据，也以二进制数据的形式存放在硬盘中。平时我们所说的安装软件，其实就是把程序文件复制到硬盘中。
4. 硬盘、内存都是保存的二进制数据。

## 2.3 数据存储单位

```
bit < byte < KB < MB < GB < TB < ...
- 位(bit)：1bit可以保存一个0或者1（最小的存储单位）
- 字节(Byte)：1B = 8b
- 千字节(KB)：1KB = 1024B
- 兆字节(MB)：1MB = 1024KB
- 吉字节(GB)：1GB = 1024MB
- 太字节(TB)：1TB = 1024GB
```

## 2.4 程序运行

1. 打开某个程序时，先从硬盘中把程序的代码加载到内存中。
2. CPU执行内存中的代码。

**注意**：之所以要内存的一个重要原因，是因为CPU运行太快了，如果只从硬盘中读数据，会浪费CPU性能，所以才使用存取速度更快的内存来保存运行时的数据。（内存是电，硬盘是机械）

# 初识 JavaScript

## 1.1 JavaScript 历史
- **布兰登·艾奇（Brendan Eich，1961年~）**：神奇的大哥在1995年利用10天完成JavaScript设计。
- **网景公司**最初命名为LiveScript，后来在与Sun合作之后将其改名为JavaScript。

## 1.2 JavaScript 简介
- **JavaScript**是世界上最流行的语言之一，是一种运行在客户端的脚本语言（Script是脚本的意思）。
- **脚本语言**：不需要编译，运行过程中由JS解释器（JS引擎）逐行来进行解释并执行。
- **现在也可以基于Node.js技术进行服务器端编程**。

## 1.3 JavaScript 的作用
- **表单动态校验（密码强度检测）**：JS产生最初的目的。
- **网页特效**。
- **服务器端开发（Node.js）**。
- **桌面程序（Electron）**。
- **App（Cordova）**。
- **控制硬件-物联网（Ruff）**。
- **游戏开发（cocos2d-js）**。

## 1.4 HTML/CSS/JS 的关系
### HTML/CSS 标记语言 - 描述类语言
- **HTML**决定网页结构和内容（决定看到什么），相当于人的身体。
- **CSS**决定网页呈现给用户的模样（决定好不好看），相当于给人穿衣服、化妆。

### JS 脚本语言 - 编程类语言
- 实现业务逻辑和页面控制（决定功能），相当于人的各种动作。

![HTML/CSS/JS 关系](https://i.imgur.com/3Q5z5QG.png)

## 1.5 浏览器执行 JS 简介
- **浏览器分成两部分**：渲染引擎和JS引擎。
  - **渲染引擎**：用来解析HTML与CSS，俗称为内核，比如Chrome浏览器的Blink，老版本的WebKit。
  - **JS引擎**：也称为JS解释器，用来读取网页中的JavaScript代码，对其处理后运行，比如Chrome浏览器的V8。
- **浏览器本身并不会执行JS代码**，而是通过内置JavaScript引擎（解释器）来执行JS代码。JS引擎执行代码时逐行解释每一句源码（转换为机器语言），然后由计算机去执行，所以JavaScript语言归为脚本语言，会逐行解释执行。

```html
<html>
<head>
    <title>JS代码初体验</title>
    <script>
        alert("我是一只快乐且单身的程序员");
    </script>
</head>
<body>
</body>
</html>
```

## 1.6 JS 的组成

### 1. ECMAScript
ECMAScript是由ECMA国际（原欧洲计算机制造商协会）进行标准化的一门编程语言，这种语言在万维网上应用广泛。它往往被称为JavaScript或JScript，但实际上后两者是ECMAScript语言的实现和扩展。

**ECMAScript规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套JS语法工业标准。**

```plaintext
ECMAScript
    |
    |--- JavaScript (网景公司)
    |--- Jscript (微软公司)
```

### 2. DOM —— 文档对象模型
- **文档对象模型（Document Object Model，简称DOM）**：是W3C组织推荐的处理可扩展标记语言的标准编程接口。
- 通过DOM提供的接口可以对页面上的各种元素进行操作（大小、位置、颜色等）。

### 3. BOM —— 浏览器对象模型
- **BOM（Browser Object Model，简称BOM）**：是指浏览器对象模型，它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。
- 通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等。

```plaintext
JavaScript
    |
    |--- ECMAScript (JavaScript语法)
    |--- DOM (页面文档对象模型)
    |--- BOM (浏览器对象模型)
```

## 1.7 JS 初体验

### 1. 行内式 JS
JS有3种书写位置，分别为行内、内嵌和外部。

```html
<input type="button" value="点我试试" onclick="alert('Hello World')" />
```

- 可以将单行或少量JS代码写在HTML标签的事件属性中（以on开头的属性），如：`onclick`
- 注意单双引号的使用：在HTML中我们推荐使用双引号，JS中我们推荐使用单引号
- 可读性差，在html中编写JS大量代码时，不方便阅读；
- 引号易错，引号多层嵌套匹配时，非常容易弄混；
- 特殊情况下使用

### 2. 内嵌 JS
JS有3种书写位置，分别为行内、内嵌和外部。

```html
<script>
    alert('Hello World~!');
</script>
```

- 可以将多行JS代码写到`<script>`标签中。
- 内嵌JS是学习时常用的方式。

### 3. 外部 JS 文件
```html
<script src="my.js"></script>
```

- 利于HTML页面代码结构化，把大段JS代码独立到HTML页面之外，既美观，也方便文件级别的复用。
- 引用外部JS文件的`<script>`标签中间不可以写代码。
- 适合于JS代码量比较大的情况。

### 3. JavaScript 输入输出语句

为了方便信息的输入输出，JS中提供了一些输入输出语句，其常用的语句如下：

| 方法               | 说明                           | 归属   |
| ------------------ | ------------------------------ | ------ |
| `alert(msg)`       | 浏览器弹出警示框               | 浏览器 |
| `console.log(msg)` | 浏览器控制台打印输出信息       | 浏览器 |
| `prompt(info)`     | 浏览器弹出输入框，用户可以输入 | 浏览器 |

#  变量概述

## 1.1 什么是变量
- **白话**：变量就是一个装东西的盒子。
- **通俗**：变量是用于存放数据的容器。我们通过变量名获取数据，甚至数据可以修改。

## 1.2 变量的使用
变量在使用时分为两步：1. 声明变量 2. 赋值

#### 1. 声明变量
```javascript
// 声明变量
var age; // 声明一个名称为age的变量
```

- `var`是一个JS关键字，用来声明变量（variable变量的意思）。使用该关键字声明变量后，计算机会自动为变量分配内存空间，不需要程序员管。
- `age`是程序员定义的变量名，我们要通过变量名来访问内存中分配的空间。

## 1.3. 变量的初始化
声明一个变量并赋值，我们称之为**变量的初始化**。

```javascript
var age = 18; // 声明变量同时赋值为18
```

## 1.4 变量语法扩展

### 1. 更新变量
一个变量被重新赋值后，它原有的值就会被覆盖，变量值将以最后一次赋的值为准。

```javascript
var age = 18;
age = 81; // 最后的结果就是81因为18被覆盖掉了
```

### 2. 同时声明多个变量
同时声明多个变量时，只需要写一个`var`，多个变量名之间使用英文逗号隔开。

```javascript
var age = 10, name = 'zs', sex = 2;
```

### 3. 声明变量特殊情况

| 情况                          | 说明                 | 结果        |
| ----------------------------- | -------------------- | ----------- |
| `var age; console.log(age);`  | 只声明不赋值         | `undefined` |
| `console.log(age)`            | 不声明不赋值直接使用 | 报错        |
| `age = 10; console.log(age);` | 不声明只赋值         | `10`        |

## 1.5 变量命名规范
- **由字母(A-Za-z)、数字(0-9)、下划线(_)、美元符号($)组成**，如：usrAge, num01, name。
- **严格区分大小写**。`var app;`和`var App;`是两个变量。
- **不能以数字开头**。`18age`是错误的。
- **不能是关键字、保留字**。例如：`var`, `for`, `while`。
- **变量名必须有意义**。MMD BBD nl → age。
- **遵守驼峰命名法**。首字母小写，后面单词的首字母需要大写。`myFirstName`。
- **推荐翻译网站**：有道 爱词霸。

### 关于变量的常见问题和解答：
- **为什么需要变量？**
  - 因为我们一些数据需要保存，所以需要变量。
- **变量是什么？**
  - 变量就是一个容器，用来存放数据的。方便我们以后使用里面的数据。
- **变量的本质是什么？**
  - 变量是内存里的一块空间，用来存储数据。
- **变量怎么使用的？**
  - 我们使用变量的时候，一定要声明变量，然后赋值。
  - 声明变量本质是去内存申请空间。
- **什么是变量的初始化？**
  - 声明变量并赋值我们称之为变量的初始化。
- **变量命名规范有哪些？**
  - 变量名尽量要规范，见名知意——驼峰命名法。
  - 区分哪些变量名不合法。
- **交换2个变量值的思路？**
  - 学会交换2个变量。

# 变量的数据类型
变量是用来存储值的所在处，它们有名字和数据类型。变量的数据类型决定了如何将代表这些值的位存储到计算机的内存中。JavaScript是一种弱类型或者说动态语言。这意味着不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。

```javascript
var age = 10; // 这是一个数字型
var areYouOk = '是的'; // 这是一个字符串
```

在代码运行时，变量的数据类型是由JS引擎根据=右边变量值的数据类型来判断的，运行完毕之后，变量就确定了数据类型。

JavaScript拥有动态类型，同时也意味着相同的变量可用作不同的类型：

```javascript
var x = 6; // x为数字
var x = "Bill"; // x为字符串
```

## 2.1 简单数据类型（基本数据类型）
JavaScript中的简单数据类型及其说明如下：

| 简单数据类型 | 说明                                                | 默认值    |
| ------------ | --------------------------------------------------- | --------- |
| Number       | 数字型，包含整型值和浮点型值，如21、0.21            | 0         |
| Boolean      | 布尔值类型，如true、false，等价于1和0               | false     |
| String       | 字符串类型，如"张三" 注意咱们js里面，字符串都带引号 | ""        |
| Undefined    | var a; 声明了变量a但是没有给值，此时a=undefined     | undefined |
| Null         | var a=null; 声明了变量a为空值                       | null      |

###  数字型 Number
#### 1. 数字型进制
最常见的进制有二进制、八进制、十进制、十六进制。

```javascript
// 1. 八进制数字序列范围：0~7
var num1 = 07; // 对应十进制的7
var num2 = 019; // 对应十进制的19
var num3 = 08; // 对应十进制的8

// 2. 十六进制数字序列范围：0~9以及A~F
var num = 0xA;
```

现阶段我们只需要记住，在JS中八进制前面加0，十六进制前面加0x。

#### 2. 数字型范围
JavaScript中数值的最大和最小值：

```javascript
alert(Number.MAX_VALUE); // 1.7976931348623157e+308
alert(Number.MIN_VALUE); // 5e-324
```

- 最大值：`Number.MAX_VALUE`，这个值为：1.7976931348623157e+308
- 最小值：`Number.MIN_VALUE`，这个值为：5e-324



## 2.2 数字型 Number

###  数字型三个特殊值
```javascript
alert(Infinity); // Infinity
alert(-Infinity); // -Infinity
alert(NaN); // NaN
```

- **Infinity**：代表无穷大，大于任何数值。
- **-Infinity**：代表无穷小，小于任何数值。
- **NaN**：Not a number，代表一个非数值。

###  isNaN()
用来判断一个变量是否为非数字的类型，返回true或者false。

```javascript
var usrAge = 21;
var isOk = isNaN(usrAge);
console.log(isNum); // false, 21不是一个非数字

var userName = "andy";
console.log(isNaN(userName)); // true, "andy"是一个非数字类型
```

## 2.3 字符串型 String

###  字符串引号嵌套
JS可以用单引号嵌套双引号，或者用双引号嵌套单引号（外双内单，外单内双）。

```javascript
var strMsg = '我是"高帅富"程序员'; // 可以用'包含"
var strMsg2 = "我是'高帅富'程序员"; // 也可以用"包含"

// 常见错误
var badQuotes = 'What on earth?'; // 报错，不能单双引号搭配
```

###  字符串转义符
类似HTML里面的特殊字符，字符串中也有特殊字符，我们称之为转义符。转义符都是`\`开头的，常用的转义符及其说明如下：

| 转义符 | 解释说明                 |
| ------ | ------------------------ |
| `\n`   | 换行符，n是newline的意思 |
| `\\`   | 斜杠\                    |
| `\'`   | 单引号                   |
| `\"`   | 双引号                   |
| `\t`   | tab缩进                  |
| `\b`   | 空格，b是blank的意思     |

---

以上内容总结了JavaScript中简单数据类型的Number和String的相关知识点，包括特殊值、isNaN()函数以及字符串的引号嵌套和转义符等。

### 字符串长度
字符串是由若干字符组成的，这些字符的数量就是字符串的长度。通过字符串的`length`属性可以获取整个字符串的长度。

```javascript
var strMsg = "我是帅气多金的程序员！";
alert(strMsg.length); // 显示11
```

###  字符串拼接
多个字符串之间可以使用`+`进行拼接，其拼接方式为**字符串 + 任何类型 = 拼接之后的新字符串**。
- 拼接前会把与字符串相加的任何类型转成字符串，再拼接成一个新的字符串。

```javascript
// 1.1 字符串"相加"
alert('hello' + ' ' + 'world'); // hello world

// 1.2 数值字符串"相加"
alert('100' + '100'); // 100100

// 1.3 数值字符串 + 数值
alert('11' + 12); // 1112
```

## 2.5 布尔型 Boolean
布尔类型有两个值：`true`和`false`，其中`true`表示真（对），而`false`表示假（错）。
布尔型和数字型相加的时候，`true`的值为`1`，`false`的值为`0`。

```javascript
console.log(true + 1); // 2
console.log(false + 1); // 1
```

## 2.6 Undefined 和 Null
一个声明后没有被赋值的变量会有一个默认值`undefined`（如果进行相连或者相加时，注意结果）。

```javascript
var variable;
console.log(variable); // undefined
console.log('你好' + variable); // 你好undefined
console.log(11 + variable); // NaN
console.log(true + variable); // NaN
```

一个声明变量给`null`值，里面存的值为空（学习对象时，我们继续研究`null`）。

```javascript
var vari = null;
console.log('你好' + vari); // 你好null
console.log(11 + vari); // 11
console.log(true + vari); // 1
```

##  字面量
字面量是在源代码中一个固定值的表示法，通俗来说，就是字面量表示如何表达这个值。

- **数字字面量**：8, 9, 10
- **字符串字面量**：'黑马程序员', '大前端'
- **布尔字面量**：true, false

## 数据类型转换

###  转换为字符串
| 方式                | 说明                         | 案例                                      |
| ------------------- | ---------------------------- | ----------------------------------------- |
| `toString()`        | 转成字符串                   | `var num = 1; alert(num.toString());`     |
| `String()` 强制转换 | 转成字符串                   | `var num = 1; alert(String(num));`        |
| 加号拼接字符串      | 和字符串拼接的结果都是字符串 | `var num = 1; alert(num + "我是字符串");` |

- `toString()`和`String()`使用方式不一样。
- 三种转换方式，我们更喜欢用第三种加号拼接字符串转换方式，这种方式也称之为隐式转换。

###  转换为数字型（重点）
| 方式                        | 说明                         | 案例                  |
| --------------------------- | ---------------------------- | --------------------- |
| `parseInt(string)` 函数     | 将string类型转成整数数值型   | `parseInt('78')`      |
| `parseFloat(string)` 函数   | 将string类型转成浮点数值型   | `parseFloat('78.21')` |
| `Number()` 强制转换函数     | 将string类型转换为数值型     | `Number('12')`        |
| JS 隐式转换 (`-`, `*`, `/`) | 利用算术运算隐式转换为数值型 | `'12' - 0`            |

- 注意`parseInt`和`parseFloat`单词的大小写，这2个是重点。
- 隐式转换是我们在进行算数运算的时候，JS自动转换了数据类型。

###  转换为布尔型
| 方式             | 说明               | 案例               |
| ---------------- | ------------------ | ------------------ |
| `Boolean()` 函数 | 其他类型转成布尔值 | `Boolean('true');` |

- 代表空、否定的值会被转换为`false`，如：`''`、`0`、`NaN`、`null`、`undefined`。
- 其余值都会被转换为`true`。

```javascript
console.log(Boolean('')); // false
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('小白')); // true
console.log(Boolean(12)); // true
```

# 解释型语言和编译型语言

## 1. 概述
计算机不能直接理解任何除机器语言以外的语言，所以必须要把程序员所写的程序语言翻译成机器语言才能执行程序。程序语言翻译成机器语言的工具，被称为翻译器。

- 翻译器翻译的方式有两种：一个是**编译**，另外一个是**解释**。两种方式之间的区别在于翻译的时间点不同。

## 2. 执行过程
### 编译型语言
- **Java**
  - 编程语言：`login.java`
  - Java编译器(`javac.exe`)
  - 中间代码文件：`login.class`
  - 运行时编译（即时编译器程序）
  - 机器语言
  - 执行

### 解释型语言
- **JavaScript**
  - 编程语言：`login.html`
  - JavaScript引擎（解释器）
  - 机器语言
  - 执行

类似于请客吃饭：
- **编译语言**：首先把所有菜做好，才能上桌吃饭。
- **解释语言**：好比吃火锅，边吃边涮，同时进行。

# 标识符、关键字、保留字

## 1. 标识符
- **标识（zhi）符**：就是指开发人员为变量、属性、函数、参数取的名字。
- **标识符不能是关键字或保留字**。

## 2. 关键字
- **关键字**：是指JS本身已经使用了的字，不能再用它们充当变量名、方法名。
- 包括：`break`, `case`, `catch`, `continue`, `default`, `delete`, `do`, `else`, `finally`, `for`, `function`, `if`, `in`, `instanceof`, `new`, `return`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with`等。

## 3. 保留字
- **保留字**：实际上就是预留的“关键字”，意思是现在虽然还不是关键字，但是未来可能会成为关键字，同样不能使用它们当变量名或方法名。
- 包括：`boolean`, `byte`, `char`, `class`, `const`, `debugger`, `double`, `enum`, `export`, `extends`, `final`, `float`, `goto`, `implements`, `import`, `int`, `interface`, `long`, `native`, `package`, `private`, `protected`, `public`, `short`, `static`, `super`, `synchronized`, `throws`, `transient`, `volatile`等。

# 算术运算符

##  算术运算符概述
| 运算符 | 描述         | 实例                       |
| ------ | ------------ | -------------------------- |
| `+`    | 加           | `10 + 20 = 30`             |
| `-`    | 减           | `10 - 20 = -10`            |
| `*`    | 乘           | `10 * 20 = 200`            |
| `/`    | 除           | `10 / 20 = 0.5`            |
| `%`    | 取余数(取模) | 返回除法的余数 `9 % 2 = 1` |

## 前置递增和后置递增小结

- **前置递增和后置递增运算符可以简化代码的编写，让变量的值+1比以前写法更简单**。
- 单独使用时，运行结果相同。
- 与其他代码联用时，执行结果会不同。
- **后置**：先原值运算，后自加（先人后己）。
- **前置**：先自加，后运算（先己后人）。
- 开发时，大多使用后置递增/减，并且代码独占一行，例如：`num++`；或者`num--`。

## 比较运算符

###  比较运算符概述
比较运算符（关系运算符）是两个数据进行比较时所使用的运算符，比较运算后，会返回一个布尔值（true / false）作为比较运算的结果。

| 运算符名称 | 说明                        | 案例          | 结果  |
| ---------- | --------------------------- | ------------- | ----- |
| `<`        | 小于号                      | `1 < 2`       | true  |
| `>`        | 大于号                      | `1 > 2`       | false |
| `>=`       | 大于等于号（大于或者等于）  | `2 >= 2`      | true  |
| `<=`       | 小于等于号（小于或者等于）  | `3 <= 2`      | false |
| `==`       | 判等号（会转型）            | `37 == 37`    | true  |
| `!=`       | 不等号                      | `37 != 37`    | false |
| `===`      | 全等 要求值和数据类型都一致 | `37 === '37'` | false |

### 小结
| 符号  | 作用 | 用法                                     |
| ----- | ---- | ---------------------------------------- |
| `=`   | 赋值 | 把右边给左边                             |
| `==`  | 判断 | 判断两边值是否相等（注意此时有隐式转换） |
| `===` | 全等 | 判断两边的值和数据类型是否完全相同       |

## 逻辑运算符

### 逻辑运算符概述
逻辑运算符是用来进行布尔值运算的运算符，其返回值也是布尔值。后面开发中经常用于多个条件的判断。

| 逻辑运算符 | 说明                   | 案例            |
| ---------- | ---------------------- | --------------- |
| `&&`       | "逻辑与"，简称"与" and | `true && false` |
| `||`       | "逻辑或"，简称"或" or  | `true || false` |
| `!`        | "逻辑非"，简称"非" not | `!true`         |

### 短路运算（逻辑中断）

**1. 逻辑与**

- **语法**：表达式1 && 表达式2
  - 如果第一个表达式的值为真，则返回表达式2。
  - 如果第一个表达式的值为假，则返回表达式1。

**2. 逻辑或**

- **语法**：表达式1 || 表达式2
  - 如果第一个表达式的值为真，则返回表达式1。
  - 如果第一个表达式的值为假，则返回表达式2。

```javascript
console.log(123 || 456); // 123
console.log(0 || 456); // 456
console.log(123 || 456 || 789); // 123
```

短路运算的原理：当有多个表达式（值）时，左边的表达式值可以确定结果时，就不再继续运算右边的表达式的值。

##  赋值运算符
- **概念**：用来把数据赋值给变量的运算符。

| 赋值运算符       | 说明                 | 案例                            |
| ---------------- | -------------------- | ------------------------------- |
| `=`              | 直接赋值             | `var usrName = '我是值';`       |
| `+=`, `-=`       | 加、减一个数后在赋值 | `var age = 10; age += 5; // 15` |
| `*=`, `/=`, `%=` | 乘、除、取模后在赋值 | `var age = 2; age *= 5; // 10`  |

## 运算符优先级

| 优先级 | 运算符     | 顺序            |
| ------ | ---------- | --------------- |
| 1      | 小括号     | ()              |
| 2      | 一元运算符 | ++ -- !         |
| 3      | 算术运算符 | 先 * / % 后 + - |
| 4      | 关系运算符 | > >= < <=       |
| 5      | 相等运算符 | == != === !==   |
| 6      | 逻辑运算符 | 先 && 后        |
| 7      | 赋值运算符 | =               |
| 8      | 逗号运算符 | ,               |

- 一元运算符里面的逻辑非优先级很高。
- 逻辑与比逻辑或优先级高。

# 流程控制

##  流程控制概述
在一个程序执行的过程中，各条代码的执行顺序对程序的结果是有直接影响的。很多时候我们要通过控制代码的执行顺序来实现我们要完成的功能。

简单理解：流程控制就是来控制我们的代码按照什么结构顺序来执行。

流程控制主要有三种结构，分别是顺序结构、分支结构和循环结构，这三种结构代表三种代码执行的顺序。

### 顺序结构
```plaintext
顺序执行
A -> B
```

### 分支结构
```plaintext
条件执行
判断
├── A
└── B
```

### 循环结构
```plaintext
循环执行
A -> 判断 (YES -> A, NO -> 下一步)
```

##  分支流程控制 - if 语句

###  分支结构
由上到下执行代码的过程中，根据不同的条件，执行不同的路径代码（执行代码多选一的过程），从而得到不同的结果。

JS语言提供了两种分支结构语句：
- `if` 语句
- `switch` 语句

##  分支流程控制 - switch 语句

### switch 语句和 if else if 语句的区别
1. 一般情况下，它们两个语句可以相互替换。
2. `switch...case` 语句通常处理 case 为比较确定值的情况，而 `if...else...` 语句更加灵活，常用于范围判断（大于、等于某个范围）。
3. `switch` 语句进行条件判断后直接执行到程序的条件语句，效率更高。而 `if...else` 语句有几种条件，就得判断多少次。
4. 当分支比较少时，`if...else` 语句的执行效率比 `switch` 语句高。
5. 当分支比较多时，`switch` 语句的执行效率比较高，而且结构更清晰。

## 循环

###  for 循环

####  语法结构
**断点调试：**

- **断点调试**是指自己在程序的某一行设置一个断点，调试时，程序运行到这一行就会停住，然后你可以一步一步往下调试，调试过程中可以看各个变量当前的值，出错的话，调试到出错的代码行即显示错误，停下。
- **断点调试可以帮助我们观察程序的运行过程**。

浏览器中按F12 -> sources -> 找到需要调试的文件 -> 在程序的某一行设置断点。

- **Watch**: 监视，通过watch可以监视变量的值的变化，非常的常用。
- **F11**: 程序单步执行，让程序一行一行的执行，这个时候，观察watch中变量的值的变化。

代码调试的能力非常重要，只有学会了代码调试，才能学会自己解决bug的能力。初学者不要觉得调试代码麻烦就不去调试，知识点花点功夫肯定学的会，但是代码调试这个东西，自己不去练，永远都学不会。

今天学的代码调试非常的简单，只要求同学们记住代码调试的这几个按钮的作用即可，后面还会学到很多的代码调试技巧。

###  for 循环小结
- `for`循环可以重复执行某些相同代码。
- `for`循环可以重复执行些许不同的代码，因为我们有计数器。
- `for`循环可以重复执行某些操作，比如算术运算符加法操作。
- 随着需求增加，双重`for`循环可以做更多、更好看的效果。
- 双重`for`循环，外层循环一次，内层`for`循环全部执行。
- `for`循环是循环条件和数字直接相关的循环。
- 分析要比写代码更重要。

###  do while 循环

#### 循环小结
- JS中循环有`for`、`while`、`do while`。
- 三个循环很多情况下都可以相互替代使用。
- 如果是用来计次数，跟数字相关的，三者使用基本相同，但是我们更喜欢用`for`。
- `while`和`do...while`可以做更复杂的判断条件，比`for`循环灵活一些。
- `while`和`do...while`执行顺序不一样，`while`先判断后执行，`do...while`先执行一次，再判断执行。
- `while`和`do...while`执行次数不一样，`do...while`至少会执行一次循环体，而`while`可能一次也不执行。
- 实际工作中，我们更常用`for`循环语句，它写法更简洁直观，所以这个要重点学习。

#  函数

##  调用函数
```javascript
// 调用函数
函数名(); // 通过调用函数名来执行函数体代码
```
- 调用的时候千万不要忘记添加小括号。
- 口诀：函数不调用，自己不执行。

注意：声明函数本身并不会执行代码，只有调用函数时才会执行函数体代码。

##  函数的封装
- 函数的封装是把一个或者多个功能通过函数的方式封装起来，对外只提供一个简单的函数接口。
- 简单理解：封装类似于将电脑配件整合组装到机箱中（类似快递打包）

## 函数参数与返回值

###  函数参数

 **函数形参和实参个数不匹配问题**

| 参数个数             | 说明                               |
| -------------------- | ---------------------------------- |
| 实参个数等于形参个数 | 输出正确结果                       |
| 实参个数多于形参个数 | 只取到形参的个数                   |
| 实参个数小于形参个数 | 多的形参定义为undefined，结果为NaN |

```javascript
function sum(num1, num2) {
    console.log(num1 + num2);
}

sum(100, 200); // 形参和实参个数相等，输出正确结果
sum(100, 400, 500, 700); // 实参个数多于形参，只取到形参的个数
sum(200); // 实参个数少于形参，多的形参定义为undefined，结果为NaN
```

注意：在JavaScript中，形参的默认值是`undefined`。

### 函数的返回值

#### break, continue, return 的区别
- **break**：结束当前的循环体（如for、while）。
- **continue**：跳出本次循环，继续执行下次循环（如for、while）。
- **return**：不仅可以退出循环，还能够返回return语句中的值，同时还可以结束当前的函数体内的代码。

#### arguments 的使用
当我们不确定有多少个参数传递的时候，可以用`arguments`来获取。在JavaScript中，`arguments`实际上是当前函数的一个内置对象。所有函数都内置了一个`arguments`对象，`arguments`对象中存储了传递的所有实参。

## 函数声明方式

### 1. 利用函数关键字自定义函数（命名函数）
```javascript
function fn() {
    // 函数体
}
fn();
```

### 2. 函数表达式（匿名函数）
```javascript
var fun = function(aru) {
    console.log('我是函数表达式');
    console.log(aru);
};
fun('pink老师');
```
- `fun`是变量名，不是函数名。
- 函数表达式声明方式跟声明变量差不多，只不过变量里面存的是值，而函数表达式里面存的是函数。
- 函数表达式也可以进行传递参数。

## 变量的作用域

### 1. JavaScript作用域
- **JavaScript作用域**：就是代码名字（变量）在某个范围内起作用和效果，目的是为了提高程序的可靠性，更重要的是减少命名冲突。
- **js的作用域（es6）之前**：全局作用域、局部作用域。
- **全局作用域**：整个script标签或者是一个单独的js文件。
- **局部作用域（函数作用域）**：在函数内部就是局部作用域，这个代码的名字只在函数内部起效果和作用。

```javascript
var num = 10; // 全局变量

function fn() {
    // 局部作用域 I
}
```

### 2. 变量的作用域

#### 2.1 全局变量
- 在全局作用域下声明的变量叫做**全局变量**（在函数外部定义的变量）。
  - 全局变量在代码的任何位置都可以使用。
  - 在全局作用域下`var`声明的变量是全局变量。
  - 特殊情况下，在函数内不使用`var`声明的变量也是全局变量（不建议使用）。

#### 2.2 局部变量
- 在局部作用域下声明的变量叫做**局部变量**（在函数内部定义的变量）。
  - 局部变量只能在该函数内部使用。
  - 在函数内部`var`声明的变量是局部变量。
  - 函数的形参实际上就是局部变量。

#### 2.3 全局变量和局部变量的区别
- **全局变量**：在任何一个地方都可以使用，只有在浏览器关闭时才会被销毁，因此比较占内存。
- **局部变量**：只在函数内部使用，当其所在的代码块被执行时，会被初始化；当代码块运行结束后，就会被销毁，因此更节省内存空间。

### 3. 作用域链
- 只要是代码，就至少有一个作用域。
- 写在函数内部的局部作用域。
- 如果函数中还有函数，那么在这个作用域中就又可以诞生一个作用域。
- 根据在内部函数可以访问外部函数变量的这种机制，用链式查找决定哪些数据能被内部函数访问，就称作**作用域链**。

# 对象

## 2.1 利用字面量创建对象

### 对象的调用
- **对象里面的属性调用**：`对象.属性名`，这个小点就理解为“的”。
- **对象里面属性的另一种调用方式**：`对象['属性名']`，注意方括号里面的属性必须加引号，我们后面会用。
- **对象里面的方法调用**：`对象.方法名()`，注意这个方法名字后面一定加括号。

## 变量、属性、函数、方法总结
- **变量**：单独声明赋值，单独存在。
- **属性**：对象里面的变量称为属性，不需要声明，用来描述该对象的特征。
- **函数**：单独存在的，通过“函数名()”的方式就可以调用。
- **方法**：对象里面的函数称为方法，方法不需要声明，使用“对象.方法名()”的方式就可以调用，方法用来描述该对象的行为和功能。

## 2.3 利用构造函数创建对象
- **构造函数**：是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与`new`运算符一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。

## 2.4 构造函数和对象
- **构造函数**，如`Stars()`，抽象了对象的公共部分，封装到了函数里面，它泛指某一大类（class）。
- **创建对象**，如`new Stars()`，特指某一个，通过`new`关键字创建对象的过程我们也称为对象实例化。

![构造函数示意图](https://i.imgur.com/3Q5z5QG.png)

## new 关键字
`new`在执行时会做四件事情：
1. 在内存中创建一个新的空对象。
2. 让`this`指向这个新的对象。
3. 执行构造函数里面的代码，给这个新对象添加属性和方法。
4. 返回这个新对象（所以构造函数里面不需要return）。

## 对象与内置对象

### 1. 内置对象
- **JavaScript中的对象分为3种**：自定义对象、内置对象、浏览器对象。
- 前面两种对象是JS基础内容，属于ECMAScript；第三个浏览器对象属于我们JS独有的，我们JS API讲解。
- **内置对象**就是指JS语言自带的一些对象，这些对象供开发者使用，并提供了一些常用的或是最基本而必要的功能（属性和方法）。
- 内置对象最大的优点就是帮助我们快速开发。
- JavaScript提供了多个内置对象：`Math`、`Date`、`Array`、`String`等。

### 2. 查文档

**2.2 如何学习对象中的方法**

1. 查阅该方法的功能。
2. 查看里面参数的意义和类型。
3. 查看返回值的意义和类型。
4. 通过demo进行测试。

### 3. Math 对象

#### 3.1 Math 概述
`Math`对象不是构造函数，它具有数学常数和函数的属性和方法。跟数学相关的运算（求绝对值，取整、最大值等）可以使用`Math`中的成员。

| 方法                      | 说明                                   |
| ------------------------- | -------------------------------------- |
| `Math.PI`                 | 圆周率                                 |
| `Math.floor()`            | 向下取整                               |
| `Math.ceil()`             | 向上取整                               |
| `Math.round()`            | 四舍五入版就近取整 注意 -3.5 结果是 -3 |
| `Math.abs()`              | 绝对值                                 |
| `Math.max() / Math.min()` | 求最大和最小值                         |

### 4. 日期对象

#### 4.1 Date()方法的使用
1. 获取当前时间必须实例化

```javascript
var now = new Date();
console.log(now);
```

2. `Date()`构造函数的参数
   - 如果括号里面有时间，就返回参数里面的时间。例如日期格式字符串为`'2019-5-1'`，可以写成`new Date('2019-5-1')`或者`new Date('2019/5/1')`

### 5.日期格式化与数组操作

#### 日期格式化
我们想要`2019-8-8 8:8:8`格式的日期，要怎么办？

需要获取日期指定的部分，所以我们要手动地得到这种格式。

| 方法名          | 说明                       | 代码                 |
| --------------- | -------------------------- | -------------------- |
| `getFullYear()` | 获取当年                   | `dObj.getFullYear()` |
| `getMonth()`    | 获取当月（0-11）           | `dObj.getMonth()`    |
| `getDate()`     | 获取当天日期               | `dObj.getDate()`     |
| `getDay()`      | 获取星期几（周日0到周六6） | `dObj.getDay()`      |
| `getHours()`    | 获取当前小时               | `dObj.getHours()`    |
| `getMinutes()`  | 获取当前分钟               | `dObj.getMinutes()`  |
| `getSeconds()`  | 获取当前秒钟               | `dObj.getSeconds()`  |

#### 获得Date总的毫秒数（时间戳）
```javascript
var date = new Date();
console.log(date.valueOf()); // 就是我们现在时间距离1970.1.1总的毫秒数
console.log(date.getTime());

// 简单的写法（最常用的写法）
var date1 = +new Date(); // 返回的就是总的毫秒数
console.log(date1);

// H5新增的获得总的毫秒数
console.log(Date.now());
```

# 数组

## 1.创建方法

### 1.1 利用数组字面量
```javascript
var arr = [1, 2, 3];
console.log(arr[0]);
```

### 1.2 利用new Array()
```javascript
// var arr1 = new Array(); // 创建了一个空的数组
// var arr1 = new Array(2); // 这个2表示数组的长度为2，里面有2个空的数组元素
var arr1 = new Array(2, 3); // 等价于[2, 3] 这样写表示里面有2个数组元素是2和3
console.log(arr1);
```

## 2.检测是否为数组
```javascript
// (1) instanceof运算符它可以用来检测是否为数组
var arr = [];
var obj = {};
console.log(arr instanceof Array);
console.log(obj instanceof Array);

// (2) Array.isArray(参数); H5新增的方法 ie9以上版本支持
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));
```

## 3.添加删除数组元素方法
### 3.1. push() 在我们数组的末尾添加一个或者多个数组元素
```javascript
var arr = [1, 2, 3];
arr.push(4, 'pink');
console.log(arr.push(4, 'pink'));
console.log(arr);
```
- `push`是可以给数组追加新的元素。
- `push()`参数直接写数组元素就可以了。
- `push`完毕之后，返回的结果是新数组的长度。
- 原数组也会发生变化。

### 3.2. unshift 在我们数组的开头添加一个或者多个数组元素
```javascript
console.log(arr.unshift('red', 'purple'));
console.log(arr);
```
- `unshift`是可以给数组前面追加新的元素。
- `unshift()`参数直接写数组元素就可以了。
- `unshift`完毕之后，返回的结果是新数组的长度。
- 原数组也会发生变化。

## 4. pop() 和 shift()
### 4.1 pop()
- **`pop()`**它可以删除数组的最后一个元素。
```javascript
console.log(arr.pop());
console.log(arr);
```
- `pop`是可以删除数组的最后一个元素，记住一次只能删除一个元素。
- `pop()`没有参数。
- `pop`完毕之后，返回的结果是删除的那个元素。
- 原数组也会发生变化。

### 4.2 shift()
- **`shift()`**它可以删除数组的第一个元素。
```javascript
console.log(arr.shift());
console.log(arr);
```
- `shift`是可以删除数组的第一个元素，记住一次只能删除一个元素。
- `shift()`没有参数。
- `shift`完毕之后，返回的结果是删除的那个元素。
- 原数组也会发生变化。

## 5 添加删除数组元素的方法

| 方法名               | 说明                                                  | 返回值               |
| -------------------- | ----------------------------------------------------- | -------------------- |
| `push(参数1,...)`    | 末尾添加一个或多个元素，注意修改原数组                | 并返回新的长度       |
| `pop()`              | 删除数组最后一个元素，把数组长度减1无参数、修改原数组 | 返回它删除的元素的值 |
| `unshift(参数1,...)` | 向数组的开头添加一个或更多元素，注意修改原数组        | 并返回新的长度       |
| `shift()`            | 删除数组的第一个元素，数组长度减1无参数、修改原数组   | 并返回第一个元素的值 |

## 6.数组排序

### 6.1. 翻转数组
```javascript
var arr = ['pink', 'red', 'blue'];
arr.reverse();
console.log(arr);
```

### 6.2. 数组排序（冒泡排序）
```javascript
var arr1 = [13, 4, 77, 1, 7];
arr1.sort(function(a, b) {
    return a - b; // 升序的顺序排列
    // return b - a; // 降序的顺序排列
});
console.log(arr1);
```

## 7.返回数组元素索引号方法

### indexOf(数组元素)
作用就是返回该数组元素的索引号，从前面开始查找。
```javascript
var arr = ['red', 'green', 'blue', 'pink', 'blue'];
console.log(arr.indexOf('blue')); // 2
```

### lastIndexOf(数组元素)
作用就是返回该数组元素的索引号，从后面开始查找。
```javascript
var arr = ['red', 'green', 'blue', 'pink', 'blue'];
console.log(arr.lastIndexOf('blue')); // 4
```

## 8.数组转换为字符串

### 8.1. toString()
将我们的数组转换为字符串。
```javascript
var arr = [1, 2, 3];
console.log(arr.toString()); // 1,2,3
```

### 8.2. join(分隔符)
```javascript
var arr1 = ['green', 'blue', 'pink'];
console.log(arr1.join()); // green,blue,pink
console.log(arr1.join('-')); // green-blue-pink
console.log(arr1.join('&')); // green&blue&pink
```

## 数组对象与字符串操作

| 方法名     | 说明                                     | 返回值                                        |
| ---------- | ---------------------------------------- | --------------------------------------------- |
| `concat()` | 连接两个或多个数组，不影响原数组         | 返回一个新的数组                              |
| `slice()`  | 数组截取`slice(begin, end)`              | 返回被截取项目的新数组                        |
| `splice()` | 数组删除`splice(第几个开始, 要删除个数)` | 返回被删除项目的新数组 注意，这个会影响原数组 |

`slice()`和`splice()`目的基本相同，建议同学们重点看下`splice()`。

# 字符串操作与方法

为了方便操作基本数据类型，JavaScript还提供了三个特殊的引用类型：`String`、`Number`和`Boolean`。

**基本包装类型**就是把简单数据类型包装成为复杂数据类型，这样基本数据类型就有了属性和方法。

```javascript
var str = 'andy';
console.log(str.length);
```

按道理基本数据类型是没有属性和方法的，而对象才有属性和方法，但上面代码却可以执行，这是因为js会把基本数据类型包装为复杂数据类型，其执行过程如下：

1. 生成临时变量，把简单类型包装为复杂数据类型

   ```javascript
   var temp = new String('andy');
   ```

2. 赋值给我们声明的字符变量

   ```javascript
   str = temp;
   ```

3. 销毁临时变量

   ```javascript
   temp = null;
   ```

##  根据字符返回位置

字符串所有的方法，都不会修改字符串本身（字符串是不可变的），操作完成会返回一个新的字符串。

| 方法名                                | 说明                                                         |
| ------------------------------------- | ------------------------------------------------------------ |
| `indexOf('要查找的字符', 开始的位置)` | 返回指定内容在元字符串中的位置，如果找不到就返回-1，开始的位置是index索引号 |
| `lastIndexOf()`                       | 从后往前找，只找第一个匹配的                                 |

```javascript
var str = '改革春风吹满地，春天来了';
console.log(str.indexOf('春'));
console.log(str.indexOf('春', 3)); // 从索引号是3的位置开始往后查找
```

## 根据位置返回字符（重点）

| 方法名              | 说明                                       | 使用                            |
| ------------------- | ------------------------------------------ | ------------------------------- |
| `charAt(index)`     | 返回指定位置的字符（index字符串的索引号）  | `str.charAt(0)`                 |
| `charCodeAt(index)` | 获取指定位置处字符的ASCII码（index索引号） | `str.charCodeAt(0)`             |
| `str[index]`        | 获取指定位置处字符                         | HTML5, IE8+支持和`charAt()`等效 |

## 根据位置返回字符
### 1. `charAt(index)` 根据位置返回字符
```javascript
var str = 'andy';
console.log(str.charAt(3)); // d
```

遍历所有的字符：
```javascript
for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}
```

### 2. `charCodeAt(index)` 返回相应索引号的字符ASCII值
```javascript
console.log(str.charCodeAt(0)); // 97
```

### 3. `str[index]` H5新增的
```javascript
console.log(str[0]); // a
```

## 字符串操作方法（重点）

| 方法名                        | 说明                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| `concat(str1, str2, str3...)` | `concat()`方法用于连接两个或多个字符串。拼接字符串，等效于`+`，`+`更常用 |
| `substr(start, length)`       | 从`start`位置开始（索引号），`length`取的个数 重点记住这个   |
| `slice(start, end)`           | 从`start`位置开始，截取到`end`位置，`end`取不到（他们俩都是索引号） |
| `substring(start, end)`       | 从`start`位置开始，截取到`end`位置，`end`取不到 基本和`slice`相同但是不接受负值 |

## 其他方法

### 1. 替换字符 `replace('被替换的字符', '替换为的字符')`
```javascript
var str = 'andyandy';
console.log(str.replace('a', 'b')); // bndyandy
```

有一个字符串`'abcoefoxyozzopp'`要求把里面所有的`o`替换为`*`：
```javascript
var str1 = 'abcoefoxyozzopp';
while (str1.indexOf('o') !== -1) {
    str1 = str1.replace('o', '*');
}
console.log(str1); // abc*ef*x*y*z*z*pp
```

### 2. 字符转换为数组 `split('分隔符')`
```javascript
var str2 = 'red, pink, blue';
console.log(str2.split(',')); // ["red", "pink", "blue"]
var str3 = 'red&pink&blue';
console.log(str3.split('&')); // ["red", "pink", "blue"]
```

## 课下查阅

- `toUpperCase()` // 转换大写
- `toLowerCase()` // 转换小写

## 练习题
给定一个字符串，如："abaasdfggghhjkkkgfddsssss3444343"，问题如下：

1. **字符串的长度**
   ```javascript
   var str = "abaasdfggghhjkkkgfddsssss3444343";
   console.log(str.length); // 36
   ```

2. **取出指定位置的字符**，如：0,3,5,9等
   ```javascript
   console.log(str.charAt(0)); // a
   console.log(str.charAt(3)); // s
   console.log(str.charAt(5)); // f
   console.log(str.charAt(9)); // h
   ```

3. **查找指定字符是否在以上字符串中存在**，如：i, c, b等
   ```javascript
   console.log(str.indexOf('i') !== -1); // false
   console.log(str.indexOf('c') !== -1); // false
   console.log(str.indexOf('b') !== -1); // true
   ```

4. **替换指定的字符**，如：g替换为22, ss替换为b等操作方法
   ```javascript
   var newStr = str.replace(/g/g, '22').replace(/ss/g, 'b');
   console.log(newStr); // abaasdff2222hhjkkk22fddb3444343
   ```

5. **截取指定开始位置到结束位置的字符串**，如：取得1-5的字符串
   ```javascript
   console.log(str.slice(1, 5)); // basd
   ```

6. **找出以上字符串中出现次数最多的字符和出现的次数**
   ```javascript
   function findMostFrequentChar(str) {
       var charCount = {};
       for (var i = 0; i < str.length; i++) {
           var char = str[i];
           if (charCount[char]) {
               charCount[char]++;
           } else {
               charCount[char] = 1;
           }
       }
   
       var maxCount = 0;
       var mostFrequentChar = '';
       for (var char in charCount) {
           if (charCount[char] > maxCount) {
               maxCount = charCount[char];
               mostFrequentChar = char;
           }
       }
   
       return { char: mostFrequentChar, count: maxCount };
   }
   
   var result = findMostFrequentChar(str);
   console.log(result); // { char: 's', count: 8 }
   ```

# 获取页面元素

##  如何获取页面元素
DOM在我们实际开发中主要用来操作元素。

### 获取页面中的元素可以使用以下几种方式：
- **根据ID获取**
- **根据标签名获取**
- **通过HTML5新增的方法获取**
- **特殊元素获取**

## 根据ID获取
```html
<div id="time">2019-9-9</div>
<script>
    // 1. 因为我们文档页面从上往下加载，所以先得有标签所以我们script写到标签的下面
    // 2. get获得element元素by通过驼峰命名法
    // 3. 参数id是大小写敏感的字符串
    // 4. 返回的是一个元素对象
    var timer = document.getElementById('time');
    console.log(timer);
    console.log(typeof timer);
    // 5. console.dir打印我们返回的元素对象更好的查看里面的属性和方法
    console.dir(timer);
</script>
```

## 根据标签名获取
```javascript
element.getElementsByTagName('标签名');
```
注意：父元素必须是单个对象（必须指明是哪一个元素对象），获取的时候不包括父元素自己。

## 遍历获取的元素集合
```javascript
var lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);

// 我们想要依次打印里面的元素对象我们可以采取遍历的方式
for (var i = 0; i < lis.length; i++) {
    console.log(lis[i]);
}

// 如果页面中只有一个li返回的还是伪数组的形式
// 如果页面中没有这个元素返回的是空的伪数组的形式
// element.getElementsByTagName('标签名');
var ol = document.getElementsByTagName('ol'); // [ol]
console.log(ol[0].getElementsByTagName('li'));
var ol = document.getElementById('ol');
console.log(ol.getElementsByTagName('li'));
```

## 使用类名和选择器获取元素
```javascript
// 1. getElementsByClassName根据类名获得某些元素集合
var boxes = document.getElementsByClassName('box');
console.log(boxes);

// 2. querySelector返回指定选择器的第一个元素对象切记里面的选择器需要加符号.box #nav
var firstBox = document.querySelector('.box');
console.log(firstBox);
var nav = document.querySelector('#nav');
console.log(nav);
var li = document.querySelector('li');
console.log(li);

// 3. querySelectorAll()返回指定选择器的所有元素对象集合
var allBox = document.querySelectorAll('.box');
console.log(allBox);
var lis = document.querySelectorAll('li');
console.log(lis);
```

##  获取特殊元素（body, html）

### 获取body元素
```javascript
document.body; // 返回body元素对象
```

### 获取html元素
```javascript
document.documentElement; // 返回html元素对象
```

#  事件基础

##  事件概述
JavaScript使我们有能力创建动态页面，而事件是可以被JavaScript侦测到的行为。

简单理解：触发---响应机制。

网页中的每个元素都可以产生某些可以触发JavaScript的事件，例如，我们可以在用户点击某按钮时产生一个事件，然后去执行某些操作。

### 示例代码
```html
<body>
    <button id="btn">唐伯虎</button>
    <script>
        // 点击一个按钮，弹出对话框
        // 1. 事件是有三部分组成 事件源 事件类型 事件处理程序 我们也称为事件三要素
        // (1) 事件源 事件被触发的对象 谁 按钮
        var btn = document.getElementById('btn');
        // (2) 事件类型 如何触发 什么事件 比如鼠标点击(onclick) 还是鼠标经过 还是键盘按下
        // (3) 事件处理程序 通过一个函数赋值的方式 完成
        btn.onclick = function() {
            alert('点秋香');
        }
    </script>
</body>
```

##  常见的鼠标事件

| 鼠标事件      | 触发条件         |
| ------------- | ---------------- |
| `onclick`     | 鼠标点击左键触发 |
| `onmouseover` | 鼠标经过触发     |
| `onmouseout`  | 鼠标离开触发     |
| `onfocus`     | 获得鼠标焦点触发 |
| `onblur`      | 失去鼠标焦点触发 |
| `onmousemove` | 鼠标移动触发     |
| `onmouseup`   | 鼠标弹起触发     |
| `onmousedown` | 鼠标按下触发     |

##  操作元素

###  表单元素的属性操作
利用DOM可以操作如下表单元素的属性：
- `type`
- `value`
- `checked`
- `selected`
- `disabled`

###  样式属性操作
我们可以通过JS修改元素的大小、颜色、位置等样式。

#### 1. element.style 行内样式操作
#### 2. element.className 类名样式操作

**注意：**
1. JS里面的样式采取驼峰命名法，比如`fontSize`、`backgroundColor`。
2. JS修改style样式操作，产生的是行内样式，css权重比较高。

### innerText 和 innerHTML 的区别
```javascript
// 1. innerText 不识别html标签 非标准 去除空格和换行
var div = document.querySelector('div');
div.innerText = '<strong>今天是：</strong> 2019';

// 2. innerHTML 识别html标签 W3C标准 保留空格和换行的
div.innerHTML = '<strong>今天是：</strong> 2019';

// 这两个属性是可读写的 可以获取元素里面的内容
var p = document.querySelector('p');
console.log(p.innerText);
console.log(p.innerHTML);
```

### 修改元素属性 src
```javascript
// 1. 获取元素
var ldh = document.getElementById('ldh');
var zxy = document.getElementById('zxy');
var img = document.querySelector('img');

// 2. 注册事件 处理程序
zxy.onclick = function() {
    img.src = 'images/zxy.jpg';
    img.title = '张学友思密达';
}
ldh.onclick = function() {
    img.src = 'images/ldh.jpg';
    img.title = '刘德华';
}
```

### 注册事件处理程序
```javascript
// 1. 获取元素
var btn = document.querySelector('button');
var input = document.querySelector('input');

// 2. 注册事件 处理程序
btn.onclick = function() {
    // input.innerHTML = '点击了'; 这个是普通盒子 比如div标签里面的内容
    // 表单里面的值 文字内容是通过 value 来修改的
    input.value = '被点击了';
    // 如果想要某个表单被禁用 不能再点击 disabled 我们想要这个按钮 button禁用
    // btn.disabled = true;
    this.disabled = true; // this指向的是事件函数的调用者 btn
}
```

### 改变元素内容
```javascript
element.innerText;
// 从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去掉

element.innerHTML;
// 起始位置到终止位置的全部内容，包括html标签，同时保留空格和换行
```

### 操作元素总结

操作元素是DOM核心内容。

- **操作元素内容**
  - `innerText`
  - `innerHTML`

- **操作常见元素属性**
  - `src`, `href`, `title`, `alt`等

- **操作表单元素属性**
  - `type`, `value`, `disabled`等

- **操作元素样式属性**
  - `element.style`
  - `className`

### 排他思想

如果有同一组元素，我们想要某一个元素实现某种样式，需要用到循环的排他思想算法：

1. 所有元素全部清除样式（干掉其他人）
2. 给当前元素设置样式（留下我自己）
3. 注意顺序不能颠倒，首先干掉其他人，再设置自己

##  获取特殊元素（body, html）

### 获取body元素
```javascript
document.body; // 返回body元素对象
```

### 获取html元素
```javascript
document.documentElement; // 返回html元素对象
```

# 自定义属性与节点操作

##  自定义属性的操作

### 1. 获取属性值
- `element.属性` 获取属性值。
- `element.getAttribute('属性');`

**区别：**
- `element.属性` 获取内置属性值（元素本身自带的属性）
- `element.getAttribute('属性');` 主要获得自定义的属性（标准）我们程序员自定义的属性

### 示例代码
```javascript
// (1) element.属性
console.log(div.id);
console.log(div.getAttribute('id'));
console.log(div.getAttribute('index'));

// 2. 设置元素属性值
// (1) element.属性 = '值'
div.id = 'test';
div.className = 'navs';

// (2) element.setAttribute('属性', '值'); 主要针对于自定义属性
div.setAttribute('index', 2);
div.setAttribute('class', 'footer'); // class 特殊 这里面写的就是class 不是className

// 3. 移除属性 removeAttribute(属性)
div.removeAttribute('index');
```

##  H5自定义属性

### 自定义属性目的：
是为了保存并使用数据。有些数据可以保存到页面中而不用保存到数据库中。

### 自定义属性获取是通过`getAttribute('属性')`获取。
但是有些自定义属性很容易引起歧义，不容易判断是元素的内置属性还是自定义属性。

H5给我们新增了自定义属性：
1. **设置H5自定义属性**
   - H5规定自定义属性`data-`开头做为属性名并且赋值。
     ```html
     <div data-index="1"></div>
     ```
   - 或者使用JS设置
     ```javascript
     element.setAttribute('data-index', 2);
     ```

### 示例代码
```javascript
var div = document.querySelector('div');
console.log(div.getAttribute('getTime'));
div.setAttribute('data-time', 20);
console.log(div.getAttribute('data-index'));
console.log(div.getAttribute('data-list-name'));

// h5新增的获取自定义属性的方法
console.log(div.dataset);
console.log(div.dataset.index);
console.log(div.dataset['index']);
console.log(div.dataset.listName);
console.log(div.dataset['listName']);
```

#  节点操作

##  为什么学节点操作
获取元素通常使用两种方式：

### 1. 利用DOM提供的方法获取元素
- `document.getElementById()`
- `document.getElementsByTagName()`
- `document.querySelector()`等
- 逻辑性不强、繁琐

### 2. 利用节点层级关系获取元素
- 利用父子兄节点关系获取元素
- 逻辑性强，但是兼容性稍差

这两种方式都可以获取元素节点，我们后面都会使用，但是节点操作更简单。

##  节点概述
网页中的所有内容都是节点（标签、属性、文本、注释等），在DOM中，节点使用`node`来表示。

HTML DOM树中的所有节点均可通过JavaScript进行访问，所有HTML元素（节点）均可被修改，也可以创建或删除。

### 节点的基本属性
一般地，节点至少拥有`nodeType`（节点类型）、`nodeName`（节点名称）和`nodeValue`（节点值）这三个基本属性。
- **元素节点** `nodeType`为1
- **属性节点** `nodeType`为2
- **文本节点** `nodeType`为3（文本节点包含文字、空格、换行等）

我们在实际开发中，节点操作主要操作的是元素节点。

##  节点层级
利用DOM可以把节点划分为不同的层级关系，常见的是父子兄层级关系。

### 1. 父级节点
```javascript
node.parentNode
```
- `parentNode`属性可返回某节点的父节点，注意是最近的一个父节点。
- 如果指定的节点没有父节点则返回`null`。

**示例代码**

```javascript
var ul = document.querySelector('ul');
for (var i = 0; i < ul.childNodes.length; i++) {
    if (ul.childNodes[i].nodeType === 1) {
        // ul.childNodes[i] 是元素节点
        console.log(ul.childNodes[i]);
    }
}
```

### 2.子节点
```javascript
// DOM提供的方法（API）获取
var ul = document.querySelector('ul');
var lis = ul.querySelectorAll('li');

// 1. childNodes 所有的子节点 包含 元素节点 文本节点等等
console.log(ul.childNodes);
console.log(ul.childNodes[0].nodeType);
console.log(ul.childNodes[1].nodeType);

// 2. children 获取所有的子元素节点 也是我们实际开发常用的
console.log(ul.children);
```

### 3. 兄弟节点

#### 1. `node.nextSibling`
- 返回当前元素的下一个兄弟节点，找不到则返回`null`。
- 包含所有的节点（包括文本节点和元素节点）。

#### 2. `node.previousSibling`
- 返回当前元素上一个兄弟节点，找不到则返回`null`。
- 包含所有的节点（包括文本节点和元素节点）。

#### 3. `node.nextElementSibling`
- 返回当前元素下一个兄弟元素节点，找不到则返回`null`。
- 注意：这两个方法有兼容性问题，IE9以上才支持。

#### 4. `node.previousElementSibling`
- 返回当前元素上一个兄弟元素节点，找不到则返回`null`。
- 注意：这两个方法有兼容性问题，IE9以上才支持。

### 解决兼容性问题
为了兼容旧版本浏览器，可以自己封装一个函数：

```javascript
function getNextElementSibling(element) {
    var el = element;
    while (el = el.nextSibling) {
        if (el.nodeType === 1) {
            return el;
        }
    }
    return null;
}
```

##  创建节点

#### `document.createElement('tagName')`
- 该方法创建由`tagName`指定的HTML元素。
- 这些元素是根据需求动态生成的，因此也称为动态创建元素节点。

## 删除节点
#### `node.removeChild(child)`
- 该方法从DOM中删除一个子节点，返回删除的节点。

## 复制节点(克隆节点)
**`node.cloneNode()`**

- 该方法返回调用该方法的节点的一个副本，也称为克隆节点/拷贝节点。
- 注意：
  - 如果括号参数为空或者为`false`，则是浅拷贝，即只克隆复制节点本身，不克隆里面的子节点。
  - 如果括号参数为`true`，则是深度拷贝，会复制节点本身以及里面所有的子节点。

##  三种动态创建元素区别
- `document.write()`
- `element.innerHTML`
- `document.createElement()`

### 区别
1. `document.write()`是直接将内容写入页面的内容流，但是文档流执行完毕，则它会导致页面全部重绘。
2. `innerHTML`是将内容写入某个DOM节点，不会导致页面全部重绘。
3. `innerHTML`创建多个元素效率更高（不要拼接字符串，采取数组形式拼接），结构稍微复杂。
4. `createElement()`创建多个元素效率稍低一点，但是结构更清晰。

# DOM 重点核心

## 文档对象模型 (DOM)
- **定义**: 文档对象模型（Document Object Model，简称DOM），是W3C组织推荐的处理可扩展标记语言（HTML或者XML）的标准编程接口。
- **作用**: W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容、结构和样式。

## DOM 元素操作

### 元素偏移量 offset 系列

- **作用**：动态获取元素的位置和尺寸信息（只读属性）。

#### 核心属性

| 属性                   | 说明                                                   |
| ---------------------- | ------------------------------------------------------ |
| `element.offsetParent` | 返回最近的有定位的父元素，若无则返回 `body`            |
| `element.offsetTop`    | 返回元素相对于定位父元素上方的偏移（像素）             |
| `element.offsetLeft`   | 返回元素相对于定位父元素左侧的偏移（像素）             |
| `element.offsetWidth`  | 返回元素的宽度（包含 `padding` + `border` + 内容宽度） |
| `element.offsetHeight` | 返回元素的高度（包含 `padding` + `border` + 内容高度） |

#### 示例

```javascript
const box = document.getElementById('box');
console.log(box.offsetWidth);  // 输出元素总宽度（如 200）
console.log(box.offsetTop);    // 输出距离定位父元素的顶部偏移（如 50）
```

---

### offset 与 style 的区别

| 特性           | offset 系列                          | style 属性                            |
| -------------- | ------------------------------------ | ------------------------------------- |
| **数据来源**   | 可获取任意样式表中的值               | 仅获取行内样式值                      |
| **返回值单位** | 数值（无单位）                       | 字符串（带单位，如 `"200px"`）        |
| **包含内容**   | 包含 `padding` + `border` + 内容尺寸 | 仅内容尺寸（不含 `padding`/`border`） |
| **读写性**     | 只读                                 | 可读写                                |
| **适用场景**   | 获取元素尺寸或位置                   | 动态修改元素样式                      |

#### 使用建议

```javascript
// 获取元素尺寸 → 用 offset
const width = element.offsetWidth;

// 修改元素尺寸 → 用 style
element.style.width = '300px';
```

---

> **总结**：  
>
> - **BOM 对象**：`navigator` 用于浏览器信息检测，`history` 用于操作浏览历史。  
> - **DOM 操作**：`offset` 系列用于获取元素布局信息，`style` 用于动态修改样式。  
> - **关键区别**：`offset` 提供完整尺寸（包含边框和内边距），`style` 仅反映行内样式值。  

##  操作
关于DOM操作，我们主要针对元素的操作。主要有创建、增、删、改、查、属性操作、事件操作。
1. `document.write`
2. `innerHTML`
3. `createElement`

###  增
1. `appendChild`
2. `insertBefore`

### 改
主要修改DOM的元素属性、DOM元素的内容、属性、表单的值等。
1. 修改元素属性：`src`、`href`、`title`等
2. 修改普通元素内容：`innerHTML`、`innerText`
3. 修改表单元素：`value`、`type`、`disabled`等
4. 修改元素样式：`style`、`className`

### 删
1. `removeChild`

### 查
主要获取查询DOM的元素。
1. DOM提供的API方法：`getElementById`、`getElementsByTagName`（古老用法不太推荐）
2. H5提供的新方法：`querySelector`、`querySelectorAll`（提倡）
3. 利用节点操作获取元素：父(`parentNode`)、子(`children`)、兄(`previousElementSibling`、`nextElementSibling`)（提倡）

###  属性操作
主要针对自定义属性。
1. `setAttribute`：设置DOM的属性值
2. `getAttribute`：得到DOM的属性值
3. `removeAttribute`：移除属性

##  事件操作
给元素注册事件，采取事件源.事件类型 = 事件处理程序。
| 鼠标事件    | 触发条件         |
| ----------- | ---------------- |
| onclick     | 鼠标点击左键触发 |
| onmouseover | 鼠标经过触发     |
| onmouseout  | 鼠标离开触发     |
| onfocus     | 获得鼠标焦点触发 |
| onblur      | 失去鼠标焦点触发 |
| onmousemove | 鼠标移动触发     |
| onmouseup   | 鼠标弹起触发     |
| onmousedown | 鼠标按下触发     |

## 目录 Contents
- 注册事件（绑定事件）
- 删除事件（解绑事件）
- DOM事件流
- 事件对象
- 阻止事件冒泡
- 事件委托（代理、委派）
- 常用的鼠标事件
- 常用的键盘事件

## 注册事件（绑定事件）

### 1.1 注册事件概述
给元素添加事件，称为注册事件或者绑定事件。注册事件有两种方式：传统方式和方法监听注册方式。

#### 传统注册方式
- 利用`on`开头的事件`onclick`
  - `<button onclick="alert('hi~')"> </button>`
  - `btn.onclick = function() {}`
- 特点：注册事件的唯一性
  - 同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数将会覆盖前面注册的处理函数

#### 方法监听注册方式
- W3C标准推荐方式
- `addEventListener()`它是一个方法
- IE9之前的IE不支持此方法，可使用`attachEvent()`代替
- 特点：同一个元素同一个事件可以注册多个监听器
- 按注册顺序依次执行

### 1.2 addEventListener 事件监听方式
```javascript
eventTarget.addEventListener(type, listener[, useCapture])
```
- `eventTarget.addEventListener()`方法将指定的监听器注册到`eventTarget`（目标对象）上，当该对象触发指定的事件时，就会执行事件处理函数。
- 该方法接收三个参数：
  - `type`: 事件类型字符串，比如`click`、`mouseover`，注意这里不要带`on`
  - `listener`: 事件处理函数，事件发生时，会调用该监听函数
  - `useCapture`: 可选参数，是一个布尔值，默认是`false`。学完DOM事件流后，我们再进一步学习

### 删除事件的方式

#### 1. 传统注册方式
```javascript
eventTarget.onclick = null;
```

#### 2. 方法监听注册方式
1. `eventTarget.removeEventListener(type, listener[, useCapture]);`
2. `eventTarget.detachEvent(eventNameWithOn, callback);`

##  DOM 事件流
事件流描述的是从页面中接收事件的顺序。事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流。

### DOM 事件流分为3个阶段：
1. **捕获阶段**
2. **当前目标阶段**
3. **冒泡阶段**

#### 事件冒泡
- IE最早提出，事件开始时由最具体的元素接收，然后逐级向上传播到DOM最顶层节点的过程。

#### 事件捕获
- 网景最早提出，由DOM最顶层节点开始，然后逐级向下传播到最具体的元素接收的过程。

```markdown
# DOM 事件流与事件对象总结

## 1. DOM 事件流

### 1.1 基本概念
- **事件流三个阶段**：
  1. **捕获阶段**：从最外层元素（如 `window`）向内传播到目标元素（类似石头下沉）。
  2. **目标阶段**：事件到达触发事件的具体元素。
  3. **冒泡阶段**：从目标元素向外传播到最外层元素（类似泡泡上浮）。

### 1.2 注意事项
- **JavaScript 限制**：
  - 只能选择捕获或冒泡中的一个阶段执行事件处理程序。
  - `onclick` 和 `attachEvent`（IE8及以下）默认仅在**冒泡阶段**触发。
- **`addEventListener` 参数**：
  ```javascript
  element.addEventListener(type, listener[, useCapture]);
```
  - `useCapture` 为 `true`：在**捕获阶段**触发。
  - `useCapture` 为 `false`（默认值）：在**冒泡阶段**触发。
- **实际开发**：
  - 通常更关注**事件冒泡**。
  - 某些事件无冒泡（如 `onblur`, `onfocus`, `onmouseenter`, `onmouseleave`）。
- **冒泡的利弊**：
  - 可能引发意外行为（需手动阻止）。
  - 可利用冒泡实现事件委托，提升性能。

---

###  事件对象

#### 2.1 定义
- 事件对象（`event`）包含与事件相关的数据（如鼠标位置、键盘状态等）。
- 通过回调函数参数获取：
  ```javascript
  eventTarget.onclick = function(event) { /* event 对象 */ };
  eventTarget.addEventListener('click', function(event) { /* event 对象 */ });
  ```

#### 2.2 常见属性和方法
| 属性/方法             | 说明                                                   | 兼容性          |
| --------------------- | ------------------------------------------------------ | --------------- |
| `e.target`            | 返回**触发事件**的元素（冒泡场景下可能不同于 `this`）  | 标准            |
| `e.srcElement`        | 同 `e.target`，用于 IE6-8                              | 非标准（IE6-8） |
| `e.type`              | 返回事件类型（如 `click`，不带 `on` 前缀）             | 标准            |
| `e.stopPropagation()` | 阻止事件继续传播（捕获或冒泡）                         | 标准            |
| `e.cancelBubble`      | 同 `e.stopPropagation()`，设置为 `true` 可阻止冒泡     | 非标准（IE6-8） |
| `e.preventDefault()`  | 阻止默认行为（如链接跳转）                             | 标准            |
| `e.returnValue`       | 同 `e.preventDefault()`，设置为 `false` 可阻止默认行为 | 非标准（IE6-8） |

#### 2.3 使用示例
```javascript
// 阻止默认行为和冒泡
document.querySelector("a").addEventListener("click", function(e) {
  e.preventDefault();   // 阻止链接跳转
  e.stopPropagation();  // 阻止事件冒泡
  console.log(e.type);  // 输出 "click"
});
```

---

###  总结
- **DOM 事件流**：理解捕获、目标、冒泡三阶段，合理选择事件处理时机。
- **事件对象**：通过 `event` 对象获取事件细节，灵活使用属性和方法控制事件行为。
- **兼容性**：注意标准与非标准（IE）属性的区别，必要时做兼容处理。

```markdown
# JavaScript 事件机制与高级应用总结

---

## 目录
1. [事件对象核心概念](#1-事件对象核心概念)  
2. [阻止默认行为](#2-阻止默认行为)  
3. [事件委托（代理）](#3-事件委托代理)  
4. [常用鼠标事件控制](#4-常用鼠标事件控制)  

---

## 1. 事件对象核心概念

### 1.1 `e.target` 与 `this` 的区别
```javascript
// 示例：点击事件中两者的差异
const div = document.querySelector('div');
div.addEventListener('click', function(e) {
    console.log(e.target);  // 触发事件的元素（可能为子元素）
    console.log(this);      // 绑定事件的元素（始终为 div）
});

const ul = document.querySelector('ul');
ul.addEventListener('click', function(e) {
    console.log(this);      // 绑定事件的 ul
    console.log(e.target);  // 实际点击的 li（冒泡场景）
});
```
- **`e.target`**：返回触发事件的具体元素（可能为子元素）。
- **`this`**：返回绑定事件的元素（固定为事件监听器所在的元素）。

---

### 阻止默认行为

####  标准方法：`preventDefault()`
```javascript
// 阻止链接跳转
const a = document.querySelector('a');
a.addEventListener('click', function(e) {
    e.preventDefault();  // 标准方法
});
```

####  兼容性处理（传统注册方式）
```javascript
a.onclick = function(e) {
    // 兼容低版本 IE
    e.preventDefault?.();      // 标准浏览器
    e.returnValue = false;     // IE6-8
    return false;              // 通用方法（但会终止后续代码执行）
    // alert(11);              // 此代码不会执行
};
```
- **`return false`**：仅适用于传统注册方式（`onclick`），会阻止默认行为并终止函数执行。

---

###  事件委托（代理）

####  原理与实现
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
<script>
    const ul = document.querySelector('ul');
    ul.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            console.log('点击的 li:', e.target);
        }
    });
</script>
```
- **核心思想**：将事件监听器绑定到父元素（如 `ul`），通过事件冒泡机制处理子元素（如 `li`）的事件。
- **优点**：
  - 减少 DOM 操作次数，提升性能。
  - 动态添加的子元素无需重新绑定事件。

---

###  常用鼠标事件控制

####  禁用右键菜单
```javascript
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();  // 阻止默认右键菜单
});
```

####  禁止文字选中
```javascript
document.addEventListener('selectstart', function(e) {
    e.preventDefault();  // 阻止文字选中
});
```

####  其他鼠标事件
- `click`：左键单击
- `dblclick`：左键双击
- `mouseenter`/`mouseleave`：鼠标进入/离开元素（无冒泡）
- `mouseover`/`mouseout`：鼠标进入/离开元素（有冒泡）

- **事件对象**：通过 `e.target` 精准定位触发元素，`this` 始终指向绑定元素。
- **默认行为控制**：优先使用 `preventDefault()`，兼容旧代码时可用 `return false`。
- **事件委托**：利用冒泡机制优化性能，适合动态内容场景。
- **鼠标事件**：灵活控制右键菜单、文字选中等交互行为。

```markdown
# JavaScript 事件机制与 BOM 总结

---

## 目录
1. [鼠标事件对象](#1-鼠标事件对象)  
2. [键盘事件](#2-键盘事件)  
3. [BOM 概述](#3-bom-概述)  
4. [动态表格操作示例](#4-动态表格操作示例)  

---

## 1. 鼠标事件对象

### 1.1 鼠标事件属性
| 属性         | 说明                                |
|--------------|-------------------------------------|
| `e.clientX`  | 鼠标相对于浏览器可视区域的 X 坐标    |
| `e.clientY`  | 鼠标相对于浏览器可视区域的 Y 坐标    |
| `e.pageX`    | 鼠标相对于文档页面的 X 坐标（IE9+）  |
| `e.pageY`    | 鼠标相对于文档页面的 Y 坐标（IE9+）  |
| `e.screenX`  | 鼠标相对于电脑屏幕的 X 坐标          |
| `e.screenY`  | 鼠标相对于电脑屏幕的 Y 坐标          |

---

## 2. 键盘事件

### 2.1 键盘事件类型
| 事件          | 触发条件                     | 功能键支持         |
|---------------|------------------------------|-------------------|
| `keyup`       | 按键松开时触发               | 支持所有键        |
| `keydown`     | 按键按下时触发               | 支持所有键        |
| `keypress`    | 按键按下时触发               | 不识别功能键（如 Ctrl、箭头） |

**注意**：
- 使用 `addEventListener` 时需省略 `on` 前缀（如 `keyup` 而非 `onkeyup`）。
- 执行顺序：`keydown → keypress → keyup`。

### 2.2 键盘事件对象属性
| 属性         | 说明                                 | 区分大小写 |
|--------------|--------------------------------------|------------|
| `keyCode`    | 返回按键的 ASCII 值                 | `keydown/keyup` 不区分，`keypress` 区分 |

**实际开发建议**：
- 优先使用 `keydown` 和 `keyup`（支持所有键）。
- `keypress` 适合需要区分大小写的场景（如输入验证）。

---

## 3. BOM 概述

### 3.1 BOM 与 DOM 对比
| 特性          | DOM                          | BOM                          |
|---------------|------------------------------|------------------------------|
| 核心对象      | `document`                   | `window`                     |
| 作用范围      | 文档内容操作                 | 浏览器窗口交互               |
| 标准化        | W3C 标准                     | 无统一标准（浏览器厂商定义） |
| 学习重点      | 页面元素操作                 | 窗口管理、导航、定时器等     |

### 3.2 BOM 核心特性
- **顶级对象**：`window`（代表浏览器窗口）。
- **功能**：控制浏览器行为（如弹窗、页面跳转、屏幕尺寸获取）。
- **兼容性问题**：不同浏览器可能对 BOM 的实现存在差异。

---

## 4. 动态表格操作示例

### 4.1 代码功能
- **数据渲染**：根据 `datas` 数组动态生成表格行。
- **删除操作**：点击“删除”按钮移除对应行。

### 4.2 代码片段（修正版）
```javascript
const datas = [
  { id: 1, name: '张三', grade: 90, subject: 'JavaScript' },
  { id: 2, name: '李四', grade: 85, subject: 'HTML' }
];

const tbody = document.querySelector('tbody');
for (let i = 0; i < datas.length; i++) {
  const tr = document.createElement('tr');
  // 渲染数据列
  for (const key in datas[i]) {
    const td = document.createElement('td');
    td.textContent = datas[i][key];
    tr.appendChild(td);
  }
  // 添加删除按钮
  const delTd = document.createElement('td');
  delTd.innerHTML = '<button>删除</button>';
  tr.appendChild(delTd);
  tbody.appendChild(tr);
}

// 绑定删除事件
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', function() {
    tbody.removeChild(this.parentNode.parentNode);
  });
});
```

- **鼠标事件**：通过 `clientX`、`pageX` 等属性获取精准坐标。
- **键盘事件**：根据需求选择 `keydown` 或 `keypress`，注意功能键支持差异。
- **BOM**：掌握 `window` 对象的核心功能，注意浏览器兼容性问题。
- **动态操作**：利用 DOM 方法实现数据渲染与交互，注意代码规范与语法正确性。

```markdown
# BOM 核心概念与 Window 对象详解

---

## 目录
1. [BOM 构成与 Window 对象](#1-bom-构成与-window-对象)  
2. [窗口加载事件](#2-窗口加载事件)  
3. [调整窗口大小事件](#3-调整窗口大小事件)  
4. [定时器方法](#4-定时器方法)  

---

## 1. BOM 构成与 Window 对象

### 1.1 Window 的双重角色
- **浏览器接口**：JS 通过 `window` 对象访问浏览器窗口功能。
- **全局对象**：  
  - 全局作用域中定义的变量、函数自动成为 `window` 的属性和方法。
  - 调用时通常省略 `window`（如 `alert()` 等价于 `window.alert()`）。

### 1.2 特殊属性
- **`window.name`**：  
  - 默认值为空字符串，但可用于跨页面通信（需谨慎使用）。
  - 不同页面共享同一 `window.name` 时会保留值（受同源策略限制）。

---

## 2. 窗口加载事件

### 2.1 `window.onload`
```javascript
// 传统方式（仅最后一个生效）
window.onload = function() {
  // 页面所有内容（包括图片、CSS、脚本）加载完成后执行
};

// 现代方式（可绑定多个）
window.addEventListener("load", function() {});
```
- **特点**：
  - 等待所有资源（图片、样式、脚本等）加载完成。
  - 允许将 JS 代码写在页面元素上方（因延迟执行）。
- **限制**：传统方式只能注册一个处理函数。

###  `DOMContentLoaded`
```javascript
document.addEventListener('DOMContentLoaded', function() {});
```
- **特点**：
  - 仅需 DOM 结构加载完成即可触发（不等待图片、样式等）。
  - 适合需要快速交互的场景（提升用户体验）。
- **兼容性**：IE9+ 支持。

### 使用场景对比
| 事件               | 触发时机         | 适用场景                         |
| ------------------ | ---------------- | -------------------------------- |
| `load`             | 所有资源加载完成 | 依赖完整资源的操作（如图像处理） |
| `DOMContentLoaded` | DOM 结构加载完成 | 快速初始化交互功能               |

---

##  调整窗口大小事件

###  事件绑定
```javascript
// 传统方式
window.onresize = function() {};

// 现代方式
window.addEventListener("resize", function() {});
```

###  核心用途
- **响应式布局**：实时获取窗口尺寸并调整页面布局。
  ```javascript
  window.addEventListener("resize", function() {
    console.log("当前窗口宽度:", window.innerWidth);
  });
  ```
- **触发条件**：窗口大小发生任意像素变化时触发。

---

##  定时器方法

### 两种定时器对比
| 方法                  | 功能                         | 停止方法                 |
| --------------------- | ---------------------------- | ------------------------ |
| `setTimeout(fn, ms)`  | 延迟 `ms` 毫秒后执行一次函数 | `clearTimeout(timerId)`  |
| `setInterval(fn, ms)` | 每隔 `ms` 毫秒重复执行函数   | `clearInterval(timerId)` |

###  使用示例
```javascript
// 单次执行
const timeoutId = setTimeout(() => {
  console.log("3秒后执行");
}, 3000);

// 循环执行
const intervalId = setInterval(() => {
  console.log("每隔1秒执行");
}, 1000);

// 停止定时器
clearTimeout(timeoutId);
clearInterval(intervalId);
```

###  注意事项
- **内存泄漏**：未清理的定时器可能导致性能问题。
- **异步执行**：定时器回调函数会进入任务队列，可能受主线程阻塞影响。

---

### 总结
- **BOM 核心**：`window` 对象是浏览器交互的入口，兼具全局作用域。
- **加载事件**：根据需求选择 `load`（全资源）或 `DOMContentLoaded`（快速交互）。
- **响应式设计**：利用 `resize` 事件动态适配窗口变化。
- **定时器**：合理使用 `setTimeout` 和 `setInterval`，注意及时清理。

###  setTimeout() 定时器

#### 语法
```javascript
window.setTimeout(调用函数, [延迟的毫秒数]);
```

#### 说明
`setTimeout()` 方法用于设置一个定时器，该定时器在指定的时间后执行调用函数。

#### 注意事项
1. `window` 可以省略。
2. 调用函数可以是直接写函数、写函数名或字符串 `'函数名()'` 三种形式。第三种不推荐。
3. 延迟的毫秒数默认为0，如果写，必须是毫秒。
4. 因为定时器可能有很多，所以我们经常给定时器赋值一个标识符。

#### 回调函数
`setTimeout()` 的调用函数也称为回调函数（callback）。普通函数是按照代码顺序直接调用，而这个函数需要等待时间，时间到了才去调用这个函数，因此称为回调函数。

#### 示例
```javascript
// 全局作用域或者普通函数中 this 指向全局对象 window
console.log(this);

function fn() {
    console.log(this);
}
window.fn();
window.setTimeout(function() {
    console.log(this);
}, 1000);
```

###  停止 setTimeout() 定时器

#### 语法
```javascript
window.clearTimeout(timeoutID);
```

#### 说明
`clearTimeout()` 方法取消了先前通过调用 `setTimeout()` 建立的定时器。

#### 注意事项
1. `window` 可以省略。
2. 参数是定时器的标识符。

###  setInterval() 定时器

#### 语法
```javascript
window.setInterval(回调函数, [间隔的毫秒数]);
```

#### 说明
`setInterval()` 方法重复调用一个函数，每隔指定的时间就去调用一次回调函数。

#### 注意事项
1. `window` 可以省略。
2. 调用函数可以直接写函数、写函数名或字符串 `'函数名()'` 三种形式。
3. 间隔的毫秒数默认为0，如果写，必须是毫秒，表示每隔多少毫秒就自动调用这个函数。
4. 因为定时器可能有很多，所以我们经常给定时器赋值一个标识符。

#### 示例
```javascript
var intervalID = window.setInterval(function() {
    console.log("Hello");
}, 1000);
```

### 清除 setInterval() 定时器

#### 语法
```javascript
window.clearInterval(intervalID);
```

#### 说明
`clearInterval()` 方法取消了先前通过调用 `setInterval()` 建立的定时器。

#### 注意事项
1. `window` 可以省略。
2. 参数是定时器的标识符。

#### 示例
```
var intervalID = window.setInterval(function() {
    console.log("Hello");
}, 1000);

// 清除定时器
window.clearInterval(intervalID);
```

# 执行机制与 this 指向总结

```markdown

# JavaScript 执行机制与 this 指向总结

## 目录
1. [JavaScript 单线程特性](#1-javascript-单线程特性)
2. [同步与异步任务](#2-同步与异步任务)
3. [任务队列与执行栈](#3-任务队列与执行栈)
4. [this 指向问题](#4-this-指向问题)
5. [定时器与异步任务](#5-定时器与异步任务)

---

## 1. JavaScript 单线程特性
- **特点**：JavaScript 是单线程语言，同一时间只能执行一个任务。
- **原因**：设计初衷是为了处理用户交互和 DOM 操作，避免多线程冲突（如同时修改同一 DOM）。
- **问题**：长时间任务会导致页面渲染阻塞（如界面卡顿）。

---

## 2. 同步与异步任务
### 同步任务
- **定义**：任务按顺序执行，前一个任务完成后才能执行下一个。
- **示例**：
  ```javascript
  console.log(1);
  console.log(2); // 依次输出 1 → 2
```

## 异步任务
- **定义**：任务在后台执行，不阻塞后续代码，通过回调函数处理结果。
- **实现方式**：Web Worker、事件回调、定时器等。
- **示例**：
  ```javascript
  console.log(1);
  setTimeout(() => console.log(2), 0);
  console.log(3); // 输出 1 → 3 → 2
  ```

## 异步任务类型
| 类型     | 示例                        |
| -------- | --------------------------- |
| 普通事件 | `click`, `resize`           |
| 资源加载 | `load`, `error`             |
| 定时器   | `setTimeout`, `setInterval` |

---

##  任务队列与执行栈
### 执行栈（Execution Stack）
- **作用**：存放同步任务，按顺序执行。
- **示例**：
  ```javascript
  console.log(1);
  setTimeout(fn, 0);
  console.log(2); // 执行栈顺序：1 → 2 → (异步回调 fn)
  ```

### 任务队列（Task Queue）
- **作用**：存放异步任务的回调函数，等待执行栈清空后执行。
- **流程**：
  1. 同步任务进入执行栈。
  2. 异步任务完成后，回调函数被推入任务队列。
  3. 执行栈为空时，按顺序处理任务队列中的回调。

---

##  this 指向问题
### 规则
- **默认**：`this` 在函数执行时确定，指向调用它的对象。
- **场景**：
  | 场景         | `this` 指向         | 代码示例                                               |
  | ------------ | ------------------- | ------------------------------------------------------ |
  | 对象方法调用 | 调用该方法的对象    | `o.sayHi()` → `this` 指向 `o`                          |
  | 事件监听回调 | 触发事件的 DOM 元素 | `btn.onclick = function() { ... }` → `this` 指向 `btn` |
  | 构造函数     | 新创建的实例对象    | `new Fun()` → `this` 指向实例                          |

### 示例代码
```javascript
// 对象方法中的 this
var o = {
  sayHi: function() {
    console.log(this); // 输出 o 对象
  }
};
o.sayHi();

// 事件监听中的 this
btn.addEventListener('click', function() {
  console.log(this); // 输出 btn 元素
});

// 构造函数中的 this
function Fun() {
  console.log(this); // 输出新创建的实例
}
new Fun();
```

---

##  定时器与异步任务
### 定时器中的 this
- **默认行为**：定时器回调中的 `this` 指向 `window`（非严格模式）。
- **示例**：
  ```javascript
  setTimeout(function() {
    console.log(this); // 输出 window 对象
  }, 0);
  ```

### 解决 this 指向问题
- **方法**：使用 `bind`、箭头函数或闭包。
  ```javascript
  // 使用 bind
  setTimeout(function() {
    console.log(this); // 指向 o 对象
  }.bind(o), 0);
  ```

---

> **总结**：理解 JavaScript 的单线程模型、同步/异步任务执行机制及 `this` 指向规则，是优化代码性能和避免常见错误的关键。

```markdown
# JavaScript 核心概念总结

## 目录
1. [JavaScript 执行机制](#1-javascript-执行机制)  
   - 1.1 [单线程模型](#11-单线程模型)  
   - 1.2 [同步与异步任务](#12-同步与异步任务)  
   - 1.3 [事件循环（Event Loop）](#13-事件循环event-loop)  
2. [this 指向规则](#2-this-指向规则)  
3. [定时器与异步任务](#3-定时器与异步任务)  
4. [Location 对象详解](#4-location-对象详解)  
   - 4.1 [URL 结构](#41-url-结构)  
   - 4.2 [Location 对象属性](#42-location-对象属性)  
   - 4.3 [Location 对象方法](#43-location-对象方法)  

---

## 1. JavaScript 执行机制

### 1.1 单线程模型
- **特点**：JavaScript 是单线程语言，同一时间只能执行一个任务。
- **原因**：避免多线程操作 DOM 导致冲突（如同时修改同一元素）。
- **问题**：长时间同步任务会阻塞页面渲染。

### 1.2 同步与异步任务
| 类型       | 执行方式                                                                 | 示例                          |
|------------|------------------------------------------------------------------------|-------------------------------|
| **同步任务** | 按顺序执行，前一个任务完成后才执行下一个                                 | `console.log(1); console.log(2);` |
| **异步任务** | 通过回调函数处理，不阻塞后续代码                                         | `setTimeout(() => console.log(2), 0);` |

#### 异步任务分类
1. **普通事件**：`click`, `resize`  
2. **资源加载**：`load`, `error`  
3. **定时器**：`setTimeout`, `setInterval`  

### 1.3 事件循环（Event Loop）
1. **执行流程**：  
   - 同步任务进入 **执行栈**，按顺序执行。  
   - 异步任务由 **Web API** 处理（如定时器、网络请求），完成后回调推入 **任务队列**。  
   - 执行栈清空后，按顺序从任务队列中读取回调并执行。  

```javascript
console.log(1);          // 同步任务 → 直接执行
setTimeout(() => {       // 异步任务 → 交给 Web API
  console.log(2);        // 回调推入任务队列
}, 0);
console.log(3);          // 同步任务 → 直接执行
// 输出顺序：1 → 3 → 2
```

---

## 2. this 指向规则
- **基本原则**：函数执行时确定 `this` 指向，默认指向调用者。  
- **常见场景**：  

| 场景             | `this` 指向         | 示例                              |
| ---------------- | ------------------- | --------------------------------- |
| **对象方法调用** | 调用方法的对象      | `o.sayHi()` → `this` 指向 `o`     |
| **事件监听回调** | 触发事件的 DOM 元素 | `btn.onclick` → `this` 指向 `btn` |
| **构造函数**     | 新创建的实例对象    | `new Fun()` → `this` 指向实例     |

```javascript
// 示例：事件监听中的 this
btn.addEventListener('click', function() {
  console.log(this); // 输出触发事件的按钮元素
});
```

---

## 3. 定时器与异步任务
### 定时器中的 `this` 指向
- **默认行为**：定时器回调中的 `this` 指向 `window`（非严格模式）。  
- **解决方案**：使用 `bind` 或箭头函数。  

```javascript
// 使用 bind 绑定 this
setTimeout(function() {
  console.log(this); // 输出绑定的对象
}.bind(obj), 0);
```

---

#  Location 对象详解

##  URL 结构
URL 格式：  
`protocol://host[:port]/path/[?query]#fragment`  
示例：  
`http://www.example.com:8080/index.html?name=andy#section1`  

| 组成部分   | 说明                         |
| ---------- | ---------------------------- |
| `protocol` | 协议（如 `http`, `https`）   |
| `host`     | 域名（如 `www.example.com`） |
| `port`     | 端口号（默认省略）           |
| `path`     | 资源路径（如 `/index.html`） |
| `query`    | 参数（如 `?name=andy`）      |
| `fragment` | 片段标识（如 `#section1`）   |

##  Location 对象属性
| 属性                | 返回值                                   |
| ------------------- | ---------------------------------------- |
| `location.href`     | 完整 URL                                 |
| `location.host`     | 域名 + 端口（如 `www.example.com:8080`） |
| `location.pathname` | 路径部分（如 `/index.html`）             |
| `location.search`   | 参数部分（如 `?name=andy`）              |
| `location.hash`     | 片段标识（如 `#section1`）               |

##  Location 对象方法
| 方法                     | 作用                                      |
| ------------------------ | ----------------------------------------- |
| `location.assign(url)`   | 跳转到新页面（记录历史，可后退）          |
| `location.replace(url)`  | 替换当前页面（不记录历史，不可后退）      |
| `location.reload(force)` | 刷新页面（`force=true` 强制从服务器加载） |

```javascript
// 示例：跳转页面并记录历史
location.assign('https://www.example.com');

// 示例：强制刷新页面
location.reload(true);
```

---

> **总结**：理解 JavaScript 的单线程模型、事件循环机制及 `this` 指向规则，能有效避免代码阻塞和逻辑错误。掌握 `location` 对象的用法，可灵活操作浏览器地址与页面跳转。

```markdown
# JavaScript BOM 与 DOM 核心知识总结

## 目录
1. [BOM 对象](#1-bom-对象)  
   - 1.1 [navigator 对象](#11-navigator-对象)  
   - 1.2 [history 对象](#12-history-对象)  
2. [DOM 元素操作](#2-dom-元素操作)  
   - 2.1 [元素偏移量 offset 系列](#21-元素偏移量-offset-系列)  
   - 2.2 [offset 与 style 的区别](#22-offset-与-style-的区别)  

---

## 1. BOM 对象

### 1.1 navigator 对象
- **作用**：提供浏览器和用户代理的信息。
- **核心属性**：
  - `navigator.userAgent`：返回浏览器的用户代理字符串，用于判断用户设备类型。

#### 示例：终端类型判断与页面跳转
```javascript
// 判断是否为移动端
const isMobile = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|FemmeC|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent);

if (isMobile) {
  window.location.href = "移动端页面URL"; // 跳转到移动端页面
} else {
  window.location.href = "PC端页面URL";   // 跳转到PC端页面
}
```

---

### 1.2 history 对象
- **作用**：操作浏览器会话历史（前进/后退）。
- **常用方法**：

| 方法                | 功能描述                                 | 示例                          |
| ------------------- | ---------------------------------------- | ----------------------------- |
| `history.back()`    | 后退到上一个页面                         | `history.back();`             |
| `history.forward()` | 前进到下一个页面                         | `history.forward();`          |
| `history.go(n)`     | 跳转到指定历史记录（正数前进，负数后退） | `history.go(-1); // 后退一页` |

# 三大系列

## 元素偏移量 offset 系列

- **案例分析**：
  1. 在盒子内点击，计算鼠标距离盒子左右的距离。
  2. 获取鼠标在页面中的坐标（e.pageX, e.pageY）。
  3. 获取盒子在页面中的距离（box.offsetLeft, box.offsetTop）。
  4. 计算鼠标在盒子内的坐标。
  5. 使用 mousemove 事件获取最新的鼠标坐标。

##  CSS Cursor 属性
- 可以通过 `cursor` 属性改变鼠标指针样式，应用于任何 HTML 元素上。
- 常见值包括：`default`, `pointer`, `text`, `wait`, `help`, `crosshair`, `move`, `resize` 方向光标，`not-allowed`, `auto`。
- 可使用自定义光标图像，通过 `url()` 函数指定路径。

##  元素可视区 client 系列
- `client` 系列属性用于获取元素可视区的相关信息。
- 主要属性包括：
  - `element.clientTop`: 返回元素上边框的大小。
  - `element.clientLeft`: 返回元素左边框的大小。
  - `element.clientWidth`: 返回自身包括 padding 和内容区的宽度，不含边框。
  - `element.clientHeight`: 返回自身包括 padding 和内容区的高度，不含边框。

##  JavaScript 立即执行函数
- 定义立即执行函数，无需调用即可执行。
- 可传递参数，独立创建作用域，避免命名冲突。
- 示例代码：
  ```javascript
  (function(a, b) {
      console.log(a + b);
      var num = 10;
  })(1, 2);
  ```

通过以上技术要点的应用，智慧社区后台管理系统项目在功能实现和技术层面均取得了显著成效。

### 代码结构与功能
```javascript
(function (window, document) {
    var docEl = document.documentElement;
    var dpr = window.devicePixelRatio || 1;

    // 调整 body 字体大小
    function setBodyFontSize() {
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px';
        } else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize);
        }
    }
    setBodyFontSize();

    // 设置 1rem = viewWidth / 10
    function setRemUnit() {
        var rem = docEl.clientWidth / 10;
        docEl.style.fontSize = rem + 'px';
    }
    setRemUnit();

    // 页面尺寸变化时重置 rem 单位
    window.addEventListener('resize', setRemUnit);

    // pageshow 事件处理
    window.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            setRemUnit();
        }
    });

    // 检测 0.5px 支持
    if (dpr >= 2) {
        var fakeBody = document.createElement('body');
        var testElement = document.createElement('div');
        testElement.style.border = '.5px solid transparent';
        fakeBody.appendChild(testElement);
        docEl.appendChild(fakeBody);
        if (testElement.offsetHeight === 1) {
            // 处理 0.5px 支持逻辑
        }
    }
})(window, document);
```

### 功能解析
- **setBodyFontSize**: 根据设备像素比（dpr）设置 `body` 的字体大小。
- **setRemUnit**: 计算并设置 `html` 元素的字体大小，使 `1rem` 等于视口宽度的十分之一。
- **页面尺寸变化监听**: 监听 `resize` 事件，当页面尺寸变化时重新计算 `rem` 单位。
- **pageshow 事件处理**: 处理页面从缓存中加载的情况，确保 `rem` 单位正确设置。
- **0.5px 支持检测**: 检测设备是否支持 0.5px 边框，并进行相应处理。

## 元素可视区 client 系列

### 案例：淘宝 flexible.js 源码分析
#### 页面刷新触发 load 事件的情况
1. a 标签的超链接
2. F5 或者刷新按钮（强制刷新）
3. 前进后退按钮

#### 火狐浏览器特性
- 火狐浏览器有“往返缓存”特性，保存页面数据、DOM 和 JavaScript 状态，导致前进后退按钮不会触发页面刷新。
- 使用 `pageshow` 事件来处理这种情况，无论页面是否来自缓存，在页面显示时触发。

### 总结
通过上述代码和案例分析，我们了解了如何使用 `flexible.js` 来实现响应式布局，以及在不同浏览器环境下处理页面刷新和缓存问题的方法。这些技术点对于前端开发人员来说非常重要，能够帮助我们更好地适应多设备环境，提升用户体验。

## 三大系列总结

#### 三大系列大小对比
| 三大系列大小对比      | 作用                                                         |
| --------------------- | ------------------------------------------------------------ |
| `element.offsetWidth` | 返回自身包括 padding、边框、内容区的宽度，返回数值不带单位   |
| `element.clientWidth` | 返回自身包括 padding、内容区的宽度，不含边框，返回数值不带单位 |
| `element.scrollWidth` | 返回自身实际的宽度，不含边框，返回数值不带单位               |

#### 主要用法
1. **offset 系列**：经常用于获得元素位置，如 `offsetLeft` 和 `offsetTop`。
2. **client 系列**：经常用于获取元素大小，如 `clientWidth` 和 `clientHeight`。
3. **scroll 系列**：经常用于获取滚动距离，如 `scrollTop` 和 `scrollLeft`。
4. 注意页面滚动的距离通过 `window.pageXOffset` 和 `window.pageYOffset` 获得。

##  元素滚动 scroll 系列

###  元素 scroll 系列属性
| scroll 系列属性        | 作用                                           |
| ---------------------- | ---------------------------------------------- |
| `element.scrollTop`    | 返回被卷去的上侧距离，返回数值不带单位         |
| `element.scrollLeft`   | 返回被卷去的左侧距离，返回数值不带单位         |
| `element.scrollWidth`  | 返回自身实际的宽度，不含边框，返回数值不带单位 |
| `element.scrollHeight` | 返回自身实际的高度，不含边框，返回数值不带单位 |

### 案例分析
1. 需要用到页面滚动事件 `scroll`，因为是页面滚动，所以事件源是 `document`。
2. 滚动到某个位置，就是判断页面被卷去的上部值。
3. 页面被卷去的头部可以通过 `window.pageYOffset` 获得；如果是被卷去的左侧，则使用 `window.pageXOffset`。
4. 注意，元素被卷去的头部是 `element.scrollTop`，如果是页面被卷去的头部则是 `window.pageYOffset`。

##  0.5px 支持检测

```javascript
// detect 0.5px supports 有些移动端的浏览器不支持0.5像素的写法
if (dpr >= 2) {
    var fakeBody = document.createElement('body');
    var testElement = document.createElement('div');
    testElement.style.border = '.5px solid transparent';
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines');
    }
    docEl.removeChild(fakeBody);
}
```

### 功能解析
- **detect 0.5px supports**: 检测设备是否支持 0.5 像素的写法。如果设备像素比（dpr）大于等于 2，则创建一个临时的 `body` 和 `div` 元素，设置 `div` 的边框为 0.5px，并检查其高度是否为 1。如果是，则在 `html` 元素上添加 `hairlines` 类，表示支持 0.5 像素。

通过上述内容和案例分析，我们了解了如何使用 `offset`、`client` 和 `scroll` 系列属性来获取元素的位置、大小和滚动距离，以及如何检测设备对 0.5 像素的支持情况。这些技术点对于前端开发人员来说非常重要，能够帮助我们更好地处理页面布局和滚动问题，提升用户体验。

```markdown
# JavaScript 动画与网页特效案例总结

---

## 一、动画函数封装

### 1. 动画实现原理
- **核心原理**：通过 `setInterval()` 定时器逐步改变元素位置。
- **实现步骤**：
  1. 获取元素当前位置（如 `offsetLeft`）。
  2. 每次移动固定距离（如 `current + 1px`）。
  3. 使用定时器重复更新位置。
  4. 添加结束条件（如到达目标位置时清除定时器）。
  5. **注意**：元素需设置 `position` 定位（如 `absolute` 或 `relative`）。

### 2. 代码示例（修正版）
```javascript
function animate(obj, target) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function() {
    if (obj.offsetLeft >= target) {
      clearInterval(obj.timer);
      return;
    }
    obj.style.left = obj.offsetLeft + 1 + "px";
  }, 30);
}

// 调用示例
const div = document.querySelector("div");
animate(div, 300);
```

#  缓动动画原理
- **核心算法**：  
  每次移动步长 = (目标值 - 当前值) / 10，速度逐渐降低。
- **停止条件**：当前值等于目标值时停止定时器。
- **优势**：更自然的运动效果，避免机械式匀速运动。

---

# 常见网页特效案例

##  网页轮播图
**功能需求**：
1. 鼠标悬停显示左右按钮，离开隐藏。
2. 点击按钮切换图片（左/右滑动）。
3. 底部小圆圈同步指示当前图片。
4. 点击小圆圈跳转对应图片。
5. 支持自动播放，悬停时暂停。

**实现要点**：
- 使用 `transition` 或 `transform` 实现滑动效果。
- 通过 `classList` 控制小圆圈的激活状态。
- 结合 `setInterval` 和 `clearInterval` 控制自动播放。

---

##  返回顶部
**实现方法**：
```javascript
// 瞬间滚动到顶部
window.scroll(0, 0);

// 平滑滚动（推荐）
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
```

**优化建议**：
- 添加滚动监听，当页面滚动超过一定高度时显示“返回顶部”按钮。
- 使用 CSS `scroll-behavior: smooth;` 实现全局平滑滚动。

---

## 注意事项
1. **动画性能**：优先使用 `requestAnimationFrame` 替代 `setInterval`。
2. **边界条件**：在动画函数中需处理目标值与当前值相等的情况，避免无限循环。
3. **代码封装**：可扩展动画函数支持更多参数（如速度、回调函数）。

``` 

> **提示**：完整实现轮播图时，需注意图片容器的宽度计算与动态克隆首尾图片以实现无缝滚动效果。
```

```markdown
# 移动端开发与特效总结

---

## 一、带有动画的返回顶部实现
### 实现原理
1. 使用封装的动画函数，将水平位移（`left`）改为垂直滚动距离。
2. 通过 `window.pageYOffset` 获取页面当前垂直滚动距离。
3. 动态修改元素的 `top` 或 `scrollTop` 属性实现动画效果。

### 示例代码
```javascript
// 封装支持垂直滚动的动画函数
function animateScroll(obj, target) {
  clearInterval(obj.timer);
  obj.timer = setInterval(() => {
    const current = window.pageYOffset;
    const step = (target - current) / 10;
    if (Math.abs(step) < 1) {
      clearInterval(obj.timer);
      window.scrollTo(0, target);
      return;
    }
    window.scrollTo(0, current + step);
  }, 30);
}

// 调用示例
const backTopBtn = document.querySelector(".back-top");
backTopBtn.addEventListener("click", () => {
  animateScroll(window, 0);
});
```

---

---

# 移动端

## classList 属性

###  基本方法
| 方法             | 作用                             | 示例                                  |
| ---------------- | -------------------------------- | ------------------------------------- |
| `add('类名')`    | 添加一个类名                     | `element.classList.add('active')`     |
| `remove('类名')` | 移除一个类名                     | `element.classList.remove('hidden')`  |
| `toggle('类名')` | 切换类名（存在则移除，否则添加） | `element.classList.toggle('current')` |

###  兼容性
- 支持 IE10+ 及现代浏览器。
- 移动端开发可放心使用。

###  应用场景
- **导航菜单**：点击按钮切换菜单显示/隐藏。
- **轮播图指示器**：动态激活当前图片对应的小圆点。
- **表单验证**：根据输入状态切换错误提示样式。

```javascript
// 示例：切换按钮激活状态
button.addEventListener("click", () => {
  button.classList.toggle("active");
});
```

---

## 触屏事件与触摸事件对象

### 1. 触屏事件类型

| 事件类型     | 触发条件               |
| ------------ | ---------------------- |
| `touchstart` | 手指触摸屏幕时触发     |
| `touchmove`  | 手指在屏幕上滑动时触发 |
| `touchend`   | 手指离开屏幕时触发     |

### 2. 触摸事件对象（TouchEvent）

| 属性             | 说明                                                    |
| ---------------- | ------------------------------------------------------- |
| `touches`        | 当前屏幕上所有触点的列表（包含所有手指的坐标信息）      |
| `targetTouches`  | 当前元素上触点的列表（仅包含绑定事件的DOM元素上的触点） |
| `changedTouches` | 触点状态变化的列表（如从按下到松开，或新增/移除触点）   |

### 3. 使用示例

```javascript
element.addEventListener("touchmove", (e) => {
  // 获取第一个触点的X/Y坐标
  const touch = e.targetTouches[0];
  console.log(`触点坐标：X=${touch.clientX}, Y=${touch.clientY}`);
});
```

---

## 移动端开发目录概览

1. **触屏事件**：处理触摸交互（如滑动、长按）。
2. **移动端常见特效**：使用 `classList`、CSS3 动画等实现动态效果。
3. **移动端插件**：如 Swiper（轮播图）、FastClick（解决点击延迟）。
4. **开发框架**：如 Framework7、Vant（基于 Vue 的移动端组件库）。

---

## 注意事项
1. **性能优化**：避免在 `touchmove` 中执行复杂计算，防止卡顿。

2. **防抖处理**：频繁触发的滚动或滑动事件需使用防抖函数。

3. **兼容性测试**：不同设备对触屏事件的响应可能存在差异，需多设备验证。

   ## 移动端常用开发插件与框架

   ### 1. 常见插件

   | 插件名称       | 用途             | 官网链接                                           |
   | -------------- | ---------------- | -------------------------------------------------- |
   | **Swiper**     | 轮播图、滑动组件 | [swiperjs.com](https://swiperjs.com)               |
   | **Superslide** | 多场景滑动特效   | [superslide2.com](http://www.superslide2.com)      |
   | **iScroll**    | 滚动优化         | [github/iscroll](https://github.com/cubiq/iscroll) |

   ### 2. 框架与插件区别

   | 类型 | 特点                     | 示例                  |
   | ---- | ------------------------ | --------------------- |
   | 框架 | 大而全，提供完整解决方案 | Vue、React、Bootstrap |
   | 插件 | 小而专，解决单一问题     | Swiper、FastClick     |


```markdown
# 移动端开发与本地存储总结
---
## 一、移动端点击延迟解决方案
### 1. 问题背景
移动端浏览器默认存在 `click` 事件 **300ms 延迟**（用于检测双击操作），影响用户体验。
### 2. 封装 `tap` 函数
通过 `touchstart`、`touchmove` 和 `touchend` 事件模拟点击，解决延迟问题：
```javascript
function tap(obj, callback) {
  let isMove = false;
  let startTime = 0;
  
  obj.addEventListener('touchstart', () => {
    startTime = Date.now(); // 记录触摸开始时间
  });
  
  obj.addEventListener('touchmove', () => {
    isMove = true; // 检测滑动，滑动则不算点击
  });
  
  obj.addEventListener('touchend', () => {
    // 满足条件：无滑动且时间间隔 < 150ms
    if (!isMove && Date.now() - startTime < 150) {
      callback?.(); // 执行回调
    }
    isMove = false; // 重置状态
    startTime = 0;
  });
}

// 调用示例
const div = document.querySelector('div');
tap(div, () => {
  console.log('点击事件触发');
});
```

# 本地存储（Web Storage）

##  核心特性
- **数据存储位置**：用户浏览器中。
- **容量限制**：
  - `sessionStorage`：约 5MB。
  - `localStorage`：约 20MB。
- **数据类型**：仅支持字符串，存储对象需用 `JSON.stringify()` 转换。

## 操作 API
#### sessionStorage（会话级存储，页面关闭后清除）
```javascript
// 存数据
sessionStorage.setItem('key', 'value');

// 取数据
const data = sessionStorage.getItem('key');

// 删数据
sessionStorage.removeItem('key');
```

#### localStorage（持久化存储，需手动清除）
```javascript
// 存数据（支持对象）
const user = { name: 'Alice', age: 25 };
localStorage.setItem('user', JSON.stringify(user));

// 取数据
const userData = JSON.parse(localStorage.getItem('user'));

// 清空所有数据
localStorage.clear();
```

###  两者区别
| 特性         | sessionStorage         | localStorage           |
| ------------ | ---------------------- | ---------------------- |
| **生命周期** | 页面关闭后失效         | 永久存储，需手动删除   |
| **作用域**   | 仅在当前标签页有效     | 同源所有标签页共享     |
| **适用场景** | 临时数据（如表单填写） | 长期数据（如用户偏好） |

---

### 注意事项
1. **移动端性能**：避免在 `touchmove` 中频繁操作 DOM。
2. **数据安全**：敏感信息不应存储在 `localStorage` 中。
3. **兼容性**：部分老旧浏览器可能不支持 `classList` 或 `Web Storage`，需降级处理。

```markdown
# Web 本地存储：sessionStorage 与 localStorage 详解

---

## 一、sessionStorage（会话存储）

### 1. 核心特性
- **生命周期**：关闭浏览器窗口后数据自动清除。
- **数据共享范围**：仅在**同一窗口/标签页**内共享。
- **存储容量**：约 **5MB**。
- **存储格式**：键值对（仅支持字符串）。

### 2. 操作方法
| 方法                          | 作用                     | 示例                          |
|-------------------------------|--------------------------|-------------------------------|
| `sessionStorage.setItem(key, value)` | 存储数据               | `sessionStorage.setItem('token', 'abc123')` |
| `sessionStorage.getItem(key)`        | 获取数据               | `const token = sessionStorage.getItem('token')` |
| `sessionStorage.removeItem(key)`     | 删除指定键的数据       | `sessionStorage.removeItem('token')` |
| `sessionStorage.clear()`             | 清空所有会话存储数据   | `sessionStorage.clear()` |

### 3. 使用场景
- 临时保存表单填写数据（页面刷新后仍存在，但关闭窗口后消失）。
- 单页应用（SPA）中的临时状态管理。

---

## 二、localStorage（本地存储）

### 1. 核心特性
- **生命周期**：数据永久存储，除非手动删除。
- **数据共享范围**：同一浏览器的**所有窗口/标签页**共享。
- **存储容量**：约 **20MB**。
- **存储格式**：键值对（仅支持字符串）。

### 2. 操作方法
| 方法                          | 作用                     | 示例                          |
|-------------------------------|--------------------------|-------------------------------|
| `localStorage.setItem(key, value)` | 存储数据               | `localStorage.setItem('theme', 'dark')` |
| `localStorage.getItem(key)`        | 获取数据               | `const theme = localStorage.getItem('theme')` |
| `localStorage.removeItem(key)`     | 删除指定键的数据       | `localStorage.removeItem('theme')` |
| `localStorage.clear()`             | 清空所有本地存储数据   | `localStorage.clear()` |

### 3. 存储对象
需使用 `JSON.stringify()` 和 `JSON.parse()` 转换：
```javascript
// 存对象
const user = { name: 'Alice', age: 25 };
localStorage.setItem('user', JSON.stringify(user));

// 取对象
const userData = JSON.parse(localStorage.getItem('user'));
```

### 4. 使用场景
- 用户偏好设置（如主题、语言）。
- 长期登录状态（需结合加密）。

---

## sessionStorage vs localStorage

| 特性         | sessionStorage         | localStorage                |
| ------------ | ---------------------- | --------------------------- |
| **生命周期** | 窗口关闭后清除         | 永久存储，需手动删除        |
| **共享范围** | 仅限同一窗口/标签页    | 同一浏览器的所有窗口/标签页 |
| **容量限制** | 约 5MB                 | 约 20MB                     |
| **适用场景** | 临时数据（如表单草稿） | 长期数据（如用户配置）      |

---

## 注意事项
1. **数据类型限制**：只能存储字符串，对象需序列化。
2. **同步操作**：`setItem` 和 `getItem` 是同步方法，大量数据操作可能阻塞主线程。
3. **安全性**：避免存储敏感信息（如密码、令牌），防止 XSS 攻击。
4. **兼容性**：支持所有现代浏览器，IE8+ 部分支持。

``` 

> **提示**：实际开发中，可结合第三方库（如 `localForage`）提升存储体验，支持异步操作和多种存储后端（IndexedDB、WebSQL）。