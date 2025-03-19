# 计算机基本组成

## 内存与硬盘

### 1. 内存
- **特点**:
  - 读写速度较快。
  - 断电后数据会丢失。

### 2. 硬盘
- **特点**:
  - 读写速度较慢。
  - 断电后数据不会丢失。

---

## 程序的运行过程

程序一般保存在硬盘中，软件安装的过程就是将程序写入硬盘的过程。程序在运行时会加载进入内存，然后由 CPU 读取并执行程序。

---

# Buffer（缓冲器）

## 1. 概念
Buffer 是一个类似于数组的对象，用于表示固定长度的字节序列。Buffer 本质是一段内存空间，专门用来处理二进制数据。

![Buffer示意图](attachment://buffer_diagram.png)

## 2. 特点
1. Buffer 大小固定且无法调整。
2. Buffer 性能较好，可以直接对计算机内存进行操作。
3. 每个元素的大小为 1 字节 (byte)。

## 3. 使用

#### 3-1 创建 Buffer

#### 3-2 Buffer 与字符串的转化
我们可以借助 `toString` 方法将 Buffer 转为字符串。

```javascript
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf_4.toString());
```

`toString` 默认是按照 utf-8 编码方式进行转换的。

#### 3-3 Buffer 的读写
Buffer 可以直接通过 [] 的方式对数据进行处理。

```javascript
// 读取
console.log(buf_3[1]);

// 修改
buf_3[1] = 97;

// 查看字符串结果
console.log(buf_3.toString());
```

**注意:**
1. 如果修改的数值超过 255，则超过 8 位数据会被舍弃。
2. 一个 utf-8 的字符一般占 3 个字节。

# fs 模块

fs 模块可以实现与硬盘的交互，例如文件的创建、删除、重命名、移动，还有文件内容的写入、读取，以及文件夹的相关操作。

## 一、文件写入

### 1-1 writeFile 异步写入
### 1-2 writeFileSync 同步写入
### 1-3 appendFile / appendFileSync 追加写入
### 1-4 createWriteStream 流式写入
### 1-5 写入文件的场景

在计算机中是一个非常常见的操作，下面的场景都用到了文件写入：
- 下载文件
- 安装软件
- 保存程序日志，如 Git
- 编辑器保存文件
- 视频录制

当需要持久化保存数据的时候，应该想到文件写入。

---

## 二、文件读取

文件读取顾名思义，就是通过程序从文件中取出其中的数据，我们可以使用如下几种方式：

| 方法             | 说明     |
| ---------------- | -------- |
| readFile         | 异步读取 |
| readFileSync     | 同步读取 |
| createReadStream | 流式读取 |

### 2-1 readFile 异步读取
语法：`fs.readFile(path[, options], callback)`

参数说明：
- path 文件路径
- options 选项配置
- callback 回调函数

返回值：`undefined`

代码示例：
```javascript
const fs = require('fs');

fs.readFile('./座右铭.txt', (err, data) => {
    if(err) throw err;
    console.log(data);
});

fs.readFile('./座右铭.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
});
```

### 2-4 读取文件应用场景
- 电脑开机
- 程序运行
- 编辑器打开文件
- 查看图片
- 播放视频
- 播放音乐
- Git 查看日志
- 上传文件
- 查看聊天记录

---

## 三、文件移动与重命名

在 Node.js 中，我们可以使用 `rename` 或 `renameSync` 来移动或重命名文件或文件夹。

语法：
```javascript
fs.rename(oldPath, newPath, callback)
fs.renameSync(oldPath, newPath)
```

参数说明：
- oldPath 文件当前的路径
- newPath 文件新的路径
- callback 操作后的回调

代码示例：
```javascript
fs.rename('./观书有感.txt', './论语/观书有感.txt', (err) => {
    if(err) throw err;
    console.log("移动完成");
});

fs.renameSync('./座右铭.txt', './论语/我的座右铭.txt');
```

---

## 四、文件删除

在 Node.js 中，我们可以使用 `unlink` 或 `unlinkSync` 来删除文件。

语法：
```javascript
fs.unlink(path, callback)
fs.unlinkSync(path)
```
```markdown
# fs 模块

## 五、文件夹操作

借助 Node.js 的能力，我们可以对文件夹进行创建、读取、删除等操作。

| 方法 | 说明 |
|------|------|
| mkdir / mkdirSync | 创建文件夹 |
| readdir / readdirSync | 读取文件夹 |
| rmdir / rmdirSync | 删除文件夹 |

### 5-1 mkdir 创建文件夹

在 Node.js 中，我们可以使用 `mkdir` 或 `mkdirSync` 来创建文件夹。

语法：
```javascript
fs.mkdir(path[, options], callback)
fs.mkdirSync(path[, options])
```

参数说明：
- path 文件夹路径
- options 选项配置（可选）
- callback 操作后的回调

示例代码：
```javascript
// 异步创建文件夹
fs.mkdir('./page', err => {
    if(err) throw err;
    console.log('创建成功');
});
```

---

## 六、查看资源状态

在 Node.js 中，我们可以使用 `stat` 或 `statSync` 来查看资源的详细信息。

语法：
```javascript
fs.stat(path[, options], callback)
fs.statSync(path[, options])
```

参数说明：
- path 文件或文件夹路径
- options 选项配置（可选）
- callback 操作后的回调

示例代码：
```javascript
// 异步获取状态
fs.stat('./data.txt', (err, data) => {
    if(err) throw err;
    console.log(data);
});

// 同步获取状态
let data = fs.statSync('./data.txt');
console.log(data);
```

结果值对象结构：
- size 文件体积
- birthtime 创建时间
- mtime 最后修改时间
- isFile 检测是否为文件
- isDirectory 检测是否为文件夹

---

## 七、相对路径问题

fs 模块对资源进行操作时，路径的写法有两种：

- **相对路径**
  - ./座右铭.txt 当前目录下的座右铭.txt
  - 座右铭.txt 等效于上面的写法
  - ../座右铭.txt 当前目录的上一级目录中的座右铭.txt

- **绝对路径**
  - D:\Program Files windows 系统下的绝对路径
  - /usr/bin Linux 系统下的绝对路径

相对路径中所谓的“当前目录”，指的是命令行的工作目录，而并非是文件的所在目录。所以当命令行的工作目录与文件所在目录不一致时，会出现一些 BUG。

---

## 八、__dirname

`__dirname` 与 `require` 类似，都是 Node.js 环境中的“全局”变量。

`__dirname` 保存着当前文件所在目录的绝对路径，可以使用 `__dirname` 与文件名拼接成绝对路径。

代码示例：
```javascript
let data = fs.readFileSync(__dirname + '/data.txt');
console.log(data);
```

使用 fs 模块的时候，尽量使用 `__dirname` 将路径转化为绝对路径，这样可以避免相对路径产生的 Bug。

---

## 重命名练习

```javascript
const fs = require('fs')
const code = fs.readdirSync('./code')
code.forEach((item, index) => {
    // 字符串分割
    data = item.split('-')
    // 解构赋值
    let [namer, count] = data
    if (Number(namer) < 10) {
        namer = '0' + namer
    }
    // 拼接新的名字
    let Newname = namer + '-' + count
    fs.renameSync(`./code/${item}`, `./code/${Newname}`)
})
```

---

# path 模块

path 模块提供了操作路径的功能，我们将介绍如下几个较为常用的几个 API：

| API           | 说明                     |
| ------------- | ------------------------ |
| path.resolve  | 拼接规范的绝对路径       |
| path.sep      | 获取操作系统的路径分隔符 |
| path.parse    | 解析路径并返回对象       |
| path.basename | 获取路径的基础名称       |
| path.dirname  | 获取路径的目录名         |
| path.extname  | 获得路径的扩展名         |

代码示例：
```javascript
const path = require('path');

// 获取路径分隔符
console.log(path.sep);

// 拼接绝对路径
console.log(path.resolve(__dirname, 'test'));

// 解析路径
let pathname = 'D:/program file/nodejs/node.exe';
console.log(path.parse(pathname));

// 获取路径基础名称
console.log(path.basename(pathname));
```
# HTTP 协议

##  超文本传输协议 (HTTP)

**重要性**: HTTP 是互联网应用最广泛的协议之一。

##  HTTP 协议工作原理

HTTP 协议是浏览器和服务器之间通信的标准。它通过请求报文和响应报文进行数据交换。

### 请求过程

1. **浏览器发送请求报文** 到服务器。
2. **服务器处理请求并返回响应报文** 给浏览器。

##  HTTP 请求示例

一个典型的 HTTP 请求示例如下：

```plaintext
GET https://www.baidu.com/ HTTP/1.1
Host: www.baidu.com
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/108.0.0.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
sec-ch-ua: "Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,la;q=0.7
Cookie: BIDUPSID=106A974BAB5BA0458E81F18CBEA96E52; PSTM=1669267573; BD_UPN=12314753
```

### 请求组成部分

- **请求行**: 包含请求方法、URL 和 HTTP 版本。
- **请求头**: 包含各种请求头部信息，如 `Host`, `User-Agent` 等。
- **空行**: 分隔请求头和请求体。
- **请求体**: 目前是空的。

## HTTP 请求方法

| 方法                             | 作用             |
| -------------------------------- | ---------------- |
| GET                              | 主要用于获取数据 |
| POST                             | 主要用于新增数据 |
| PUT / PATCH                      | 主要用于更新数据 |
| DELETE                           | 主要用于删除数据 |
| HEAD / OPTIONS / CONNECT / TRACE | 使用相对较少     |

##  统一资源定位符 (URL)

URL（Uniform Resource Locator）是统一资源定位符，其本身也是一个字符串，用于标识网络上的资源位置。

## URL 结构

一个典型的 URL 由以下几个部分组成：

- **协议名**: 指定使用的网络协议，如 `https`。
- **主机名**: 指定服务器的域名，如 `search.jd.com`。
- **端口号**: 指定服务器的端口，如 `443`（默认为80或443）。
- **路径**: 指定资源在服务器上的路径，如 `/search`。
- **查询字符串**: 包含键值对形式的参数，如 `?keyword=oneplus&psort=3`。

示例 URL: `https://search.jd.com:443/search?keyword=oneplus&psort=3`

---

## HTTP 响应结构

HTTP 响应由以下几部分组成：

### 1. 响应行
包含 HTTP 版本、状态码和状态描述。例如：

HTTP/1.1 200 OK
```

### 2. 响应头
包含各种响应头部信息，如 `Content-Type`, `Date`, `Server` 等。例如：
```
```
Bdpagetype: 2
Cache-Control: private
Connection: keep-alive
Content-Type: text/html; charset=utf-8
Date: Tue, 20 Dec 2022 13:58:08 GMT
Server: BWS/1.1
Set-Cookie: BDSVRTM=411; path=/
X-Ua-Compatible: IE=Edge,chrome=1
Content-Length: 462962
```


```

### 3. 空行
分隔响应头和响应体。

### 4. 响应体
包含实际的响应内容，如 HTML 文档、JSON 数据等。例如：
```html
<!DOCTYPE html><!--STATUS OK-->
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <meta name="description" content="全球领先的中文搜索引擎、致力于让网民更便捷地获取信息">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <title>百度一下，你就知道</title>
    <style type="text/css">
        h1,h2,h3,h4,h5,h6{font-size:100%}
    </style>
</head>
<body>
    <form action="/s">
        <input type="text" class="s_ipt" name="wd"><input type="submit" value="百度一下" />
    </form>
</body>
</html>
```

---

## HTTP 请求报文获取

###  获取 HTTP 请求报文

要获取请求的数据，需要通过 `request` 对象。以下是常用的方法和属性：

| 含义           | 语法                                                         | 重点掌握 |
| -------------- | ------------------------------------------------------------ | -------- |
| 请求方法       | `request.method`                                             | *        |
| 请求版本       | `request.httpVersion`                                        |          |
| 请求路径       | `request.url`                                                | *        |
| URL 路径       | `require('url').parse(request.url).pathname`                 | *        |
| URL 查询字符串 | `require('url').parse(request.url, true).query`              | *        |
| 请求头         | `request.headers`                                            | *        |
| 请求体         | `request.on('data', function(chunk){}) <br /> request.on('end', function(){})` |          |

### 注意事项

1. `request.url` 只能获取路径以及查询字符串，无法获取 URL 中的域名及协议内容。
2. `request.headers` 将请求信息转化成一个对象，并将属性名都转化成了小写。
3. 关于路径：如果访问网站时只填写了 IP 地址或域名信息，此时请求的路径为 `/`。
4. 关于 `favicon.ico`：这个请求属于浏览器自动发送的请求。

---

## HTTP 服务搭建练习

###  练习

按照以下要求搭建 HTTP 服务：

| 请求类型 | 请求地址 | 响应体结果 |
| -------- | -------- | ---------- |
| GET      | /login   | 登录页面   |
| GET      | /reg     | 注册页面   |

示例代码：

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/login') {
        res.end('登录页面');
    } else if (req.url === '/reg') {
        res.end('注册页面');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

---

## 注意事项

1. **命令行停止服务**：使用 `Ctrl + C` 停止服务。

2. **更新代码后重启服务**：当服务启动后，更新代码必须重启服务才能生效。

3. **解决中文乱码问题**：设置响应头的字符编码为 UTF-8。

   ```javascript
   response.setHeader('content-type', 'text/html;charset=utf-8');
   ```

4. **端口号被占用**：如果遇到 `Error: listen EADDRINUSE: address already in use :::9000` 错误，可以采取以下措施：

   - 关闭当前正在运行监听该端口的服务（使用较多）。
   - 修改其他端口号。

5. **HTTP 协议默认端口**：HTTP 协议默认端口是 80，HTTP 服务开发常用端口有 3000、8080、8090、9000 等。

6. **资源监视器查找占用端口的程序**：如果端口被其他程序占用，可以使用资源监视器找到占用端口的程序，然后使用任务管理器关闭对应的程序。

## HTTP 状态码

HTTP 状态码用于表示服务器对请求的响应结果。常见的状态码及其含义如下：

### 具体状态码

| 状态码 | 含义           |
| ------ | -------------- |
| 200    | 请求成功       |
| 403    | 禁止请求       |
| 404    | 找不到资源     |
| 500    | 服务器内部错误 |

### 状态码分类

| 状态码范围 | 含义           |
| ---------- | -------------- |
| 1xx        | 信息响应       |
| 2xx        | 成功响应       |
| 3xx        | 重定向消息     |
| 4xx        | 客户端错误响应 |
| 5xx        | 服务端错误响应 |

---

## 示例状态码及描述

| 状态码 | 状态描述              |
| ------ | --------------------- |
| 200    | OK                    |
| 403    | Forbidden             |
| 404    | Not Found             |
| 500    | Internal Server Error |
## 设置 HTTP 响应报文

### 作用与语法

| 作用             | 语法                                    |
| ---------------- | --------------------------------------- |
| 设置响应状态码   | `response.statusCode`                   |
| 设置响应状态描述 | `response.statusMessage` （用的非常少） |
| 设置响应头信息   | `response.setHeader('头名', '头值')`    |
| 设置响应体       |                                         |
    - `response.write('xx') <br /> response.end('xxx')` |
    - `response.end('xxx')` |

### `write` 和 `end` 的使用情况

1. **`write` 和 `end` 的结合使用**：响应体相对分散。
    ```javascript
    response.write('xx');
    response.write('xx');
    response.write('xx');
    response.end(); // 每一个请求，在处理的时候必须要执行 end 方法的

2. **单独使用 `end` 方法**：响应体相对集中。
    ```javascript
    response.end('xxx');
    ```

---

## 静态资源服务

### 静态资源与动态资源

- **静态资源**：内容长时间不发生改变的资源，例如图片、视频、CSS 文件、JS 文件、HTML 文件、字体文件等。
- **动态资源**：内容经常更新的资源，例如百度首页、网易首页、京东搜索列表页面等。

### 网站根目录或静态资源目录

HTTP 服务在哪个文件夹中寻找静态资源，那个文件夹就是静态资源目录，也称之为网站根目录。

思考：VSCode 中使用 live-server 访问 HTML 时，它启动的服务网站根目录是谁？

###  网页中的 URL

#### 绝对路径

绝对路径可靠性强，而且相对容易理解，在项目中运用较多。

| 形式                     | 特点                                                         |
| ------------------------ | ------------------------------------------------------------ |
| `http://atguigu.com/web` | 直接向目标资源发送请求，容易理解。网站的外链会用到此形式     |
| `//atguigu.com/web`      | 与页面 URL 的协议拼接形成完整 URL 再发送请求。大型网站用的比较多 |
| `/web`                   | 与页面 URL 的协议、主机名、端口拼接形成完整 URL 再发送请求。中小型网站 |

#### 相对路径

相对路径在发送请求时，需要与当前页面 URL 路径进行计算，得到完整 URL 后，再发送请求。学习阶段用的较多。

例如当前网页 URL 为 `http://www.atguigu.com/course/h5.html`

| 形式           | 最终的 URL                           |
| -------------- | ------------------------------------ |
| `/css/app.css` | `http://www.atguigu.com/css/app.css` |
##  网页中的 URL

### 相对路径

相对路径在发送请求时，需要与当前页面 URL 路径进行计算，得到完整 URL 后，再发送请求。学习阶段用的较多。

例如当前网页 URL 为 `http://www.atguigu.com/course/h5.html`

| 形式                 | 最终的 URL                                  |
| -------------------- | ------------------------------------------- |
| `./css/app.css`      | `http://www.atguigu.com/course/css/app.css` |
| `js/app.js`          | `http://www.atguigu.com/course/js/app.js`   |
| `../img/logo.png`    | `http://www.atguigu.com/img/logo.png`       |
| `../../mp4/show.mp4` | `http://www.atguigu.com/mp4/show.mp4`       |

###  网页中使用 URL 的场景小结

包括但不限于如下场景：
- a 标签 href
- link 标签 href
- script 标签 src
- img 标签 src
- video audio 标签 src
- form 中的 action
- AJAX 请求中的 URL

---

##  设置资源类型（MIME 类型）

媒体类型（通常称为 Multipurpose Internet Mail Extensions 或 MIME 类型）是一种标准，用来表示文档、文件或字节流的性质和格式。

MIME 类型结构：[type]/[subType]

例如：`text/html`, `text/css`, `image/jpeg`, `image/png`, `application/json`

HTTP 服务可以设置响应头 Content-Type 来表明响应体的 MIME 类型，浏览器会根据该类型决定如何处理资源。

下面是常见文件对应的 MIME 类型：

```javascript
html: 'text/html',
css: 'text/css',
js: 'text/javascript',
png: 'image/png',
jpg: 'image/jpeg',
gif: 'image/gif',
mp4: 'video/mp4',
mp3: 'audio/mpeg',
json: 'application/json'
```

对于未知的资源类型，可以选择 `application/octet-stream` 类型，浏览器在遇到该类型的响应时，会对响应体内容进行独立存储，也就是我们常见的下载效果。

---

## GET 和 POST 请求

#### GET 请求的情况：
- 在地址栏直接输入 url 访问
- 点击 a 链接
- link 标签引入 css
- script 标签引入 js
- video 与 audio 引入多媒体
- img 标签引入图片
- form 标签中的 method 为 get （不区分大小写）
- ajax 中的 get 请求

#### POST 请求的情况：
- form 标签中的 method 为 post （不区分大小写）
- AJAX 的 post 请求

###  GET 和 POST 请求的区别

GET 和 POST 是 HTTP 协议请求的两种方式，主要有如下几个区别：

1. **作用**：GET 主要用来获取数据，POST 主要用来提交数据。
2. **参数位置**。GET 带参数请求是将参数缀到 URL 之后，POST带参数请求是将参数放到请求体中。
3. **安全性**。POST请求 相对 GET安全一些，因为在浏览器中参数会暴露在地址栏。
4. GET 请求大小有限制，一般为2K，而 POST 请求则没有大小限制。

---

## 实践代码示例

```javascript
const http = require('http')
const fs = require('fs')
const server = http.createServer((request, response) => {
    let { pathname } = new URL(request.url, 'http://localhost:9000')
    let root = __dirname + '/../'
    // 拼接字符串绝对路径
    let path = root + pathname
    fs.readFile(path, (err, data) => {
        if (err) {
            // 响应头设置，解决乱码
            response.setHeader('content-type', 'text/html; charset=utf-8')
            response.statusCode = 500
            response.end('响应失败')
            return
        }
        response.end(data)
    })
})
server.listen(9000, () => {
    console.log('服务已经启动了。。。。。');
})
```
# IP 地址与端口

## 1. IP 地址

### 1.1 定义
IP（Internet Protocol）也称为 IP 地址，本身是一个数字标识。例如：`192.168.1.3`

### 1.2 功能
IP 用来标志网络设备，实现设备间通信。

### 1.3 类型

| 类型                    | 说明                                                        |
| ----------------------- | ----------------------------------------------------------- |
| **本机回环 IP 地址**    | `127.0.0.1 ~ 127.255.255.254`<br>指向当前主机，多数用于测试 |
| **局域网 IP (私网 IP)** |                                                             |
    - `192.168.0.0 ~ 192.168.255.255`
    - `172.16.0.0 ~ 172.31.255.255`
    - `10.0.0.0 ~ 10.255.255.255` |
| **广域网 IP (公网 IP)** | 除上述之外 |

---

## 2. 端口

### 2.1 定义
端口是应用程序的数字标识。

### 2.2 数量
一台现代计算机有 65536 个端口（0 ~ 65535）。

### 2.3 使用
一个应用程序可以使用一个或多个端口。

### 2.4 端口的作用
- **决定应用层进程处理 IP 报文**：端口号决定了应用层的哪个进程来处理该 IP 报文。
- **服务器监听端口**：服务器通过监听特定端口来接收客户端的请求。

---

# Node.js 模块化

## 一、介绍

### 1.1 什么是模块化与模块？

将一个复杂的程序文件依据一定规则（规范）拆分成多个文件的过程称之为模块化。其中拆分出的每个文件就是一个模块。模块的内部数据是私有的，不过模块可以暴露内部数据以便其他模块使用。

### 1.2 什么是模块化项目？

编码时是按照模块一个一个编码的，整个项目就是一个模块化的项目。

### 1.3 模块化好处

下面是模块化的一些好处：
1. 防止命名冲突
2. 高复用性
3. 高维护性

## 二、模块暴露数据

### 2.2 暴露数据

模块暴露数据的方式有两种：
1. `module.exports = value`
2. `exports.name = value`

使用时有几点注意：
- `module.exports` 可以暴露任意数据。
- 不能使用 `exports = value` 的形式暴露数据，模块内部 `module` 与 `exports` 的隐式关系 `exports = module.exports = {}`

![模块暴露数据](attachment://image.png)

## 三、导入（引入）模块

在模块中使用 `require` 传入文件路径即可引入文件

```javascript
const test = require('./me.js');
```

`require` 使用的一些注意事项：
1. 对于自己创建的模块，导入时路径建议写相对路径，且不能省略 `./` 和 `../`
2. `.js` 和 `.json` 文件导入时可以不用写后缀，C/C++ 编写的 `.node` 扩展文件也可以不写后缀，但是一般用不到
3. 如果导入其他类型的文件，会以 `.js` 文件进行处理
4. 如果导入的路径是个文件夹，则会首先检测该文件夹下 `package.json` 文件中 `main` 属性对应的文件。如果 `main` 属性不存在，或者 `package.json` 不存在，则会检测文件夹下的 `index.js` 和 `index.json`，如果还是没找到，就会报错
5. 导入 node.js 内置模块时，直接 `require` 模块的名字即可，无需加 `./` 和 `../`

1. `require` 还有一种使用场景，会在包管理工具章节介绍
2. `module.exports`、`exports` 以及 `require` 这些都是 CommonJS 模块化规范中的内容，而 Node.js 实现了 CommonJS 模块化规范

## 四、导入模块的基本流程

这里我们介绍一下 `require` 导入自定义模块的基本流程

1. 将相对路径转为绝对路径，定位目标文件
2. 缓存检测
3. 读取目标文件代码
4. 包裹为一个函数并执行（自执行函数）。通过 `arguments.callee.toString()` 查看自执行函数
5. 缓存模块的值
6. 返回 `module.exports` 的值

## 五、CommonJS 规范

`module.exports`、`exports` 以及 `require` 这些都是 CommonJS 模块化规范中的内容。而 Node.js 是实现了 CommonJS 模块化规范，二者关系有点像 JavaScript 与 ECMAScript。

---

# 包管理工具

## 一、概念介绍

### 1.1 包是什么

「包」英文单词是 package，代表了一组特定功能的源码集合。

### 1.2 包管理工具

管理「包」的应用软件，可以对「包」进行下载安装、更新、删除、上传等操作。借助包管理工具，可以快速开发项目，提升开发效率。包管理工具是一个通用的概念，很多编程语言都有包管理工具，所以掌握好包管理工具非常重要。

### 1.3 常用的包管理工具

下面列举了前端常用的包管理工具：
- npm
- yarn
- cnpm

## 二、npm

### 2.1 npm 的安装

npm 全称 Node Package Manager，翻译为中文意思是「Node 的包管理工具」。npm 是 node.js 官方内置的包管理工具，是必须要掌握的工具。

node.js 在安装时会自动安装 npm，所以如果你已经安装了 node.js，可以直接使用 npm。可以通过 `npm -v` 查看版本号测试，如果显示版本号说明安装成功，反之安装失败。

```bash
C:\Users\xiaohigh>npm -v
6.14.4
```

### 2.2 npm 基本使用

#### 2.2.1 初始化

创建一个空目录，然后以此目录作为工作目录启动命令行工具，执行 `npm init`。

```bash
D:\nodeJS16-npm\代码\01_npm>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (01_npm)
```

`npm init` 命令的作用是将文件夹初始化为一个「包」，交互式创建 `package.json` 文件。`package.json` 是包的配置文件，每个包都必须要有 `package.json`。

`package.json` 内容示例：

```json
{
  "name": "01_npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified!\" && exit 1"
  },
}
```

---

#### 模块化示例代码

```javascript
// mine.js
const my = require("./module");
console.log(my);

// me.js
function tiemo() {
  console.log('tiemo...');
}

function dapai() {
  console.log('dapai...');
}

// 暴露数据 注意 module.exports = exports = {} 用法
// 方法一 module.exports 可以返回暴露类型数据
// module.exports = tiemo
// module.exports = {
//   tiemo,
//   dapai
// }

// 方法二 exports.name = value
exports.tiemo = tiemo;
exports.dapai = dapai;

console.log(exports === module.exports);
```
#### 2.2.2 搜索包

搜索包的方式有两种：

1. 命令行 `npm s/search 关键字`
2. 网站搜索 网址是 https://www.npmjs.com/

经常有同学问，「我怎样才能精准找到我需要的包？」这个事儿需要大家在实践中不断的积累，通过看文章，看项目去学习去积累。

#### 2.2.3 下载安装包

我们可以通过 `npm install` 和 `npm i` 命令安装包

**格式**

```bash
npm install <包名>
npm i <包名>
```

**示例**

```bash
npm install uniq
npm i uniq
```

运行之后文件夹下会增加两个资源：

- `node_modules` 文件夹 存放下载的包
- `package-lock.json` 包的锁文件，用来锁定包的版本

安装 `uniq` 之后，`uniq` 就是当前这个包的一个依赖包，有时会简称为依赖。比如我们创建一个包名字为 A，A 中安装了包名字是 B，我们就说 B 是 A 的一个依赖包，也会说 A 依赖 B。

#### 2.2.4 require 导入 npm 包基本流程

1. 在当前文件夹下 `node_modules` 中寻找同名的文件夹
2. 在上级目录中下的 `node_modules` 中寻找同名的文件夹，直至找到磁盘根目录

### 2.3 生产环境与开发环境

开发环境是程序员专门用来写代码的环境，一般是指程序员的电脑，开发环境的项目只能程序员自己访问。生产环境是项目代码正式运行的环境，一般是指正式的服务器电脑，生产环境的项目每个客户都可以访问。

### 2.4 生产依赖与开发依赖

我们可以在安装时设置选项来区分依赖的类型，目前分为两类：

| 类型     | 命令          | 补充                                                         |
| -------- | ------------- | ------------------------------------------------------------ |
| 生产依赖 | npm i -S uniq | -S 等效于 --save, -S 是默认选项<br>包信息保存在 package.json 中 dependencies 属性 |
| 开发依赖 | npm i -D less | -D 等效于 --save-dev<br>包信息保存在 package.json 中 devDependencies 属性 |

举个例子方便大家理解，比如说做蛋炒饭需要大米、油、葱、鸡蛋、锅、煤气、铲子等。其中锅、煤气、铲子属于开发依赖，只在制作阶段使用；而大米、油、葱、鸡蛋属于生产依赖，在制作与最终食用都会用到。所以开发依赖是只在开发阶段使用的依赖包，而生产依赖是开发阶段和最终上线运行阶段都用到的依赖包。

### 2.5 全局安装

我们可以执行安装选项 `-g` 进行全局安装。

```bash
npm i -g nodemon
```

全局安装完成之后就可以在命令行的任何位置运行 `nodemon` 命令。该命令的作用是自动重启 node 应用程序。

**说明：**

- 全局安装的命令不受工作目录位置影响。
- 可以通过 `npm root -g` 可以查看全局安装包的位置。
- 不是所有的包都适合全局安装，只有全局类的工具才适合，可以通过查看包的官方文档来确定安装方式，这里先不必太纠结。

---

#### 2.5.1 修改 windows 执行策略

Windows 默认不允许 npm 全局命令执行脚本文件，所以需要修改执行策略。

1. 以管理员身份打开 PowerShell 命令行。
2. 键入命令 `set-ExecutionPolicy remoteSigned`。

```powershell
PS C:\> set-ExecutionPolicy remoteSigned
```

---

### 2.6 安装包依赖

在项目协作中有一个常用的命令就是 `npm i`，通过该命令可以依据 `package.json` 和 `package-lock.json` 的依赖声明安装项目依赖。

```bash
npm i
npm install
```

`node_modules` 文件夹大多数情况都不会存入版本库。

---

### 2.7 安装指定版本的包

项目中可能会遇到版本不匹配的情况，有时就需要安装指定版本的包，可以使用下面的命令的格式：

```bash
npm i <包名>@<版本号>
```

示例：

```bash
npm i jquery@1.11.2
```

---

### 2.8 删除依赖

项目中可能需要删除某些不需要的包，可以使用下面的命令。

#### 局部删除

```bash
npm remove uniq
npm r uniq
```

#### 全局删除

```bash
npm remove -g nodemon
```

---

### 2.9 配置命令别名

通过配置命令别名可以更简单的执行命令。配置 `package.json` 中的 `scripts` 属性。

```json
{
  "scripts": {
    "server": "node server.js",
    "start": "node index.js"
  }
}
```

配置完成之后，可以使用别名执行命令：

```bash
npm run server
npm run start
```

不过 `start` 别名比较特别，使用时可以省略 `run`：

```bash
npm start
```

#### 补充说明：
- `npm start` 是项目中常用的一个命令，一般用来启动项目。
- `npm run` 有自动向上级目录查找的特性，跟 `require` 函数也一样。
- 对于陌生的项目，我们可以通过查看 `scripts` 属性来参考项目的一些操作。

### 2.10 npm 配置淘宝镜像

用 `npm` 也可以使用淘宝镜像，配置的方式有两种：

#### 直接配置

执行如下命令即可完成配置：

```bash
npm config set registry https://registry.npmmirror.com/
```

####  工具配置

使用 `nrm` 配置 `npm` 的镜像地址 `npm registry manager`。

1. 安装 `nrm`

   ```bash
   npm i -g nrm
   ```

2. 修改镜像

   ```bash
   nrm use taobao
   ```

3. 检查是否配置成功（选做）

   ```bash
   npm config list
   ```

检查 `registry` 地址是否为 `https://registry.npmmirror.com/`，如果是则表明成功。

#### 补充说明：

1. #### 建议使用第二种方式进行镜像配置，因为后续修改起来会比较方便。

2. 虽然 `cnpm` 可以提高速度，但是 `npm` 也可以通过淘宝镜像进行加速，所以 `npm` 的使用率还是高于 `cnpm`。

## 三、cnpm

### 3.1 介绍

cnpm 是一个淘宝构建的 npmjs.com 的完整镜像，也称为「淘宝镜像」，网址 https://npm.taobao.org/。cnpm 服务部署在国内阿里云服务器上，可以提高包的下载速度。

官方也提供了一个全局工具包 `cnpm`，操作命令与 `npm` 大体相同。

### 3.2 安装

我们可以通过 `npm` 来安装 `cnpm` 工具：

```bash
npm install -g cnpm --registry=https://registry.npmmirror.com
```

### 3.3 操作命令

| 功能         | 命令                       |
| ------------ | -------------------------- |
| 初始化       | cnpm init / cnpm init -y   |
| 安装包       | cnpm i uniq                |
|              | cnpm i -S uniq             |
|              | cnpm i -D less             |
|              | cnpm global add nodemon    |
| 删除包       | cnpm remove uniq           |
|              | cnpm global remove nodemon |
| 安装项目依赖 | cnpm i                     |
| 运行命令别名 | yarn <别名>                |

---

## 四、yarn

### 4.1 yarn 介绍

yarn 是由 Facebook 在 2016 年推出的新的 Javascript 包管理工具，官方网址：https://yarnpkg.com/

### 4.2 yarn 特点

yarn 官方宣称的一些特点：
- 速度超快：yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。同时利用并行下载以最大化资源利用率，因此安装速度更快。
- 超级安全：在执行代码之前，yarn 会通过算法校验每个安装包的完整性。
- 超级可靠：使用详细、简洁的锁文件格式和明确的安装算法，yarn 能够保证在不同系统上无差异的工作。

### 4.3 yarn 安装

我们可以使用 `npm` 安装 `yarn`：

```bash
npm i -g yarn
```

### 4.4 yarn 常用命令

| 功能         | 命令                       |
| ------------ | -------------------------- |
| 初始化       | yarn init / yarn init -y   |
| 安装包       | yarn add uniq              |
|              | yarn add less --dev        |
|              | yarn global add nodemon    |
| 删除包       | yarn remove uniq           |
|              | yarn global remove nodemon |
| 安装项目依赖 | yarn                       |
| 运行命令别名 | yarn <别名>                |

思考题：
这里有个小问题就是全局安装的包不可用，yarn 全局安装包的位置可以通过 `yarn global bin` 来查看。

## 五、包管理总结

---

### Yarn 配置与 npm/Yarn 选择

####  配置 Yarn 淘宝镜像
```bash
yarn config set registry https://registry.npm.taobao.org/
yarn config list  # 查看配置项
```

#### npm 与 Yarn 的选择场景
- **个人项目**：根据喜好选择。
- **公司项目**：
  - 根据项目代码选择（`package-lock.json` 对应 npm，`yarn.lock` 对应 Yarn）。
  - **注意**：不要混用包管理工具！

---

### 管理发布包（npm）

###  创建与发布包
1. #### 创建工具包并暴露函数（`index.js` 中使用 `module.exports`）。
2. 初始化包信息：`npm init`（确保包名唯一）。
3. 注册并激活 npm 账号：https://www.npmjs.com/signup。
4. 切换官方镜像：`nrm use npm`。
5. 登录并发布：
   ```bash
   npm login    # 填写账号信息
   npm publish  # 提交包
   ```

#### 更新包
1. 更新代码并测试。
2. 修改 `package.json` 中的版本号。
3. 重新发布：`npm publish`。

#### 删除包
```bash
npm unpublish
```

---

### 包管理工具扩展

####  编程语言包管理工具
| 语言       | 工具          |
| ---------- | ------------- |
| PHP        | composer      |
| Python     | pip           |
| Java       | maven         |
| Go         | go mod        |
| JavaScript | npm/yarn/cnpm |
| Ruby       | rubyGems      |

####  操作系统包管理工具
| 系统    | 工具       | 网址                         |
| ------- | ---------- | ---------------------------- |
| CentOS  | yum        | -                            |
| Ubuntu  | apt        | https://packages.ubuntu.com/ |
| macOS   | Homebrew   | https://brew.sh/             |
| Windows | Chocolatey | https://chocolatey.org/      |

---

### nvm（Node 版本管理）

#### 介绍
nvm（Node Version Manager）用于管理多个 Node.js 版本，方便切换。

####  安装
1. 下载地址：https://github.com/coreybutler/nvm-windows/releases。
2. 选择 `nvm-setup.exe` 安装。

####  常用命令
| 命令                    | 说明                   |
| ----------------------- | ---------------------- |
| `nvm list available`    | 查看可安装的 Node 版本 |
| `nvm list`              | 查看已安装的版本       |
| `nvm install 18.12.1`   | 安装指定版本           |
| `nvm install latest`    | 安装最新版本           |
| `nvm uninstall 18.12.1` | 卸载指定版本           |
| `nvm use 18.12.1`       | 切换版本               |

---

**提示**：  

- 发布包时需确保版本号唯一且递增。  
- 切换镜像源可提升依赖下载速度（如淘宝镜像）。  

# Express 框架使用指南

---

## 一、Express 简介

- **定义**：  
  Express 是一个基于 Node.js 的极简、灵活的 Web 应用开发框架，用于快速构建 HTTP 服务。  
  - 官方文档：https://www.expressjs.com.cn/  
  - 核心功能：封装了路由、中间件、请求/响应处理等工具，简化 Web 开发流程。

---

## 二、安装与初始化

### 2.1 安装 Express
```bash
# 新建项目并初始化 package.json
npm init -y

# 安装 Express
npm install express
```

### 2.2 最小化示例
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

---

## 三、路由（Routing）

### 3.1 路由定义
路由由 **HTTP 方法**、**路径** 和 **回调函数** 组成，格式如下：  
```javascript
app.<method>(path, callback);
```

#### 示例代码
```javascript
// GET 路由
app.get('/home', (req, res) => {
    res.send('网站首页');
});

// POST 路由
app.post('/login', (req, res) => {
    // 处理登录逻辑
});
```

### 3.2 路由优先级
- **精确匹配**：路径 `/` 和 `/home` 是独立的路由。
- **顺序敏感**：先定义的路由优先执行。

---

## 四、请求参数获取

### 4.1 原生兼容方式
```javascript
app.get('/request', (req, res) => {
    console.log(req.method);    // 请求方法（GET/POST）
    console.log(req.url);       // 请求路径
    console.log(req.headers);   // 请求头
});
```

### 4.2 Express 特有方式
```javascript
app.get('/request', (req, res) => {
    // 获取查询字符串（如 /request?name=John）
    console.log(req.query);     // { name: 'John' }

    // 获取指定请求头
    console.log(req.get('host')); // 输出 Host 头信息

    res.send('请求报文已处理');
});
```

### 4.3 路由参数（动态路径）
```javascript
app.get('/user/:id', (req, res) => {
    console.log(req.params.id); // 获取路径参数（如 /user/123）
    res.send('用户ID: ' + req.params.id);
});
```

---

## 五、关键注意事项

1. **端口冲突**：确保端口号（如 `3000`）未被其他进程占用。
2. **中间件顺序**：路由定义的顺序会影响匹配优先级。
3. **代码热更新**：修改代码后需重启服务（可使用 `nodemon` 工具自动重启）。

---

**附：常用命令速查表**

| 操作         | 命令                         |
| ------------ | ---------------------------- |
| 安装 Express | `npm install express`        |
| 启动服务     | `node app.js`                |
| 调试工具     | `npm install -g nodemon`     |
| 监听请求     | `app.listen(port, callback)` |
#  Express 框架核心知识总结

---

## 一、Express 路由与参数获取

### 1.1 路由参数（动态路径）
```javascript
// 通过 `:id` 定义动态路径参数
app.get('/id/:id', (req, res) => {
    res.send(`商品详情，商品 id 为 ${req.params.id}`);
});
```

### 1.2 路由优先级规则
- **精确匹配优先**：如 `/` 和 `/home` 是独立的路由。
- **顺序敏感**：先定义的路由先执行。

---

## 二、Express 响应设置

### 2.1 原生兼容方式
```javascript
app.get("/response", (req, res) => {
    res.statusCode = 404;          // 设置状态码
    res.statusMessage = 'Not Found'; // 设置状态消息
    res.setHeader('Content-Type', 'text/plain'); // 设置响应头
    res.end('响应结束');
});
```

### 2.2 Express 特有响应方法
```javascript
res.status(500)                    // 设置状态码
   .set('X-Custom-Header', 'value') // 设置响应头
   .send('中文响应不乱码');           // 发送响应体（自动处理编码）

// 其他响应类型
res.redirect('https://example.com'); // 重定向
res.download('./file.pdf');         // 触发文件下载
res.json({ success: true });        // 发送 JSON 数据
res.sendFile(__dirname + '/index.html'); // 发送文件内容
```

---

## 三、Express 中间件

### 3.1 中间件定义与类型
- **作用**：封装通用逻辑（如日志记录、权限校验）。
- **类型**：
  - **全局中间件**：对所有请求生效。
  - **路由中间件**：对特定路由生效。

#### 全局中间件示例
```javascript
const logMiddleware = (req, res, next) => {
    console.log(`[${new Date()}] ${req.method} ${req.url}`);
    next(); // 必须调用 next() 以继续后续处理
};
app.use(logMiddleware); // 注册全局中间件
```

### 3.2 静态资源中间件
```javascript
const express = require('express');
const app = express();

// 将 public 目录作为静态资源根目录
app.use(express.static('./public')); 

// 注意事项：
// 1. public 目录下的 index.html 为默认访问资源
// 2. 若静态资源与路由冲突，按代码顺序优先匹配
app.get('/index.html', (req, res) => {
    res.send('动态首页');
});

app.listen(3000);
```

---

## 四、Node.js 模块系统

### 4.1 CommonJS 规范
- **模块定义**：通过 `module.exports` 或 `exports` 暴露接口。
- **模块加载**：通过 `require()` 加载模块，且模块首次加载后会被缓存。

### 4.2 模块加载机制
| 模块类型       | 加载优先级                         | 示例                 |
| -------------- | ---------------------------------- | -------------------- |
| **内置模块**   | 最高（如 `fs`、`http`）            | `require('fs')`      |
| **自定义模块** | 需指定路径（如 `./module.js`）     | `require('./utils')` |
| **第三方模块** | 从 `node_modules` 目录逐级向上查找 | `require('lodash')`  |

#### 自定义模块扩展名解析顺序
1. `.js` → 2. `.json` → 3. `.node` → 4. 报错

---

## 五、npm 模块管理器

### 5.1 核心功能
- **安装包**：`npm install express`
- **更新包**：`npm update`
- **初始化项目**：`npm init -y`

### 5.2 更新 npm 自身
```bash
npm install -g npm@latest
```

---

**附：常用命令速查表**

| 操作               | 命令                     |
| ------------------ | ------------------------ |
| 安装 Express       | `npm install express`    |
| 全局安装 nodemon   | `npm install -g nodemon` |
| 启动服务（热更新） | `nodemon app.js`         |
| 查看已安装包       | `npm list`               |
以下是根据图片内容生成的Markdown文档：

### 5.3 获取请求体数据 body-parser

Express 可以使用 `body-parser` 包处理请求体。

#### 第一步：安装

```bash
npm i body-parser
```

#### 第二步：导入 body-parser 包

```javascript
const bodyParser = require('body-parser');
```

#### 第三步：获取中间件函数

```javascript
// 处理 querystring 格式的请求体
let urlParser = bodyParser.urlencoded({ extended: false });
// 处理 JSON 格式的请求体
let jsonParser = bodyParser.json();
```

#### 第四步：设置路由中间件，然后使用 request.body 来获取请求体数据

```javascript
app.post('/login', urlParser, (request, response) => {
    // 获取请求体数据
    console.log(request.body);
    // 用户名
    console.log(request.body.username);
    // 密码
    console.log(request.body.userpass);
    response.send('获取请求体数据');
});
```

---

# EJS 模板引擎

##  什么是模板引擎

模板引擎是分离用户界面和业务数据的一种技术。

## 什么是 EJS

EJS 是一个高效的 Javascript 的模板引擎。

- 官网: https://ejs.co/
- 中文站: https://ejs.bootcss.com/

##  EJS 初体验

#### 下载安装EJS

```bash
npm i ejs --save
```

#### 代码示例

```javascript
// 1. 引入ejs
const ejs = require('ejs');
// 2. 定义数据
let person = ['张三', '李四', '王二麻子'];
// 3. ejs解析模板返回结构
// <% %> 是ejs解析内容的标记，作用是输出当前表达式的执行结果
let html = ejs.render('<%= person.join(" ") %>', { person: person });
```

---

# 接口

## 一、简介

###  接口是什么

接口是前后端通信的桥梁。

简单理解：一个接口就是服务中的一个路由规则，根据请求响应结果。

接口的英文单词是 API (Application Program Interface)，所以有时也称之为 API 接口。

这里的接口指的是「数据接口」，与编程语言（Java、Go 等）中的接口语法不同。

### 接口的作用

实现前后端通信

![前后端通信](attachment://frontend-backend-communication.png)

###  接口的组成

一个接口一般由如下几个部分组成：

- 请求方法
- 接口地址 (URL)
- 请求参数
- 响应结果

一个接口示例: https://www.free-api.com/doc/325

| 基本说明                                                     |
| ------------------------------------------------------------ |
| 接口地址: https://api.asilu.com/idcard/                      |
| 返回格式: json                                               |
| 请求方式: get/post                                           |
| 请求示例: https://api.asilu.com/idcard/?id=152602199405148245 |

| 请求参数说明 |
| --- | --- | --- | --- |
| 名称 | 类型 | 必填 | 说明 |
| id | string | 必须 | 身份证号码 |

| 返回参数说明 |
| --- | --- | --- |
| 名称 | 类型 | 说明 |
| addr | string | 籍贯 |
| date | string | 出生年月 |
| sex | string | 性别 |

JSON返回示例:

```json
{
    "addr": "内蒙古自治区 锡林郭勒盟 锡林浩特市",
    "date": "1994-05-14",
    "sex": "男"
}
```

---

## 二、RESTful API

RESTful API 是一种特殊风格的接口，主要特点有如下几个：

- URL 中的路径表示资源，路径中不能有动词，例如 create, delete, update 等这些都不能有。
- 操作资源要与 HTTP 请求方法对应。
- 操作结果要与 HTTP 响应状态码对应。

规则示例:

| 操作         | 请求类型 | URL      | 返回                 |
| ------------ | -------- | -------- | -------------------- |
| 新增歌曲     | POST     | /song    | 返回新生成的歌曲信息 |
| 删除歌曲     | DELETE   | /song/10 | 返回一个空文档       |
| 修改歌曲     | PUT      | /song/10 | 返回更新后的歌曲信息 |
| 修改歌曲     | PATCH    | /song/10 | 返回更新后的歌曲信息 |
| 获取所有歌曲 | GET      | /song    | 返回歌曲列表数组     |
| 获取单个歌曲 | GET      | /song/10 | 返回单个歌曲信息     |

扩展阅读: https://www.ruanyifeng.com/blog/2014/05/restful_api.html

## 三、json-server

`json-server` 本身是一个 JS 编写的工具包，可以快速搭建 RESTful API 服务。

- 官方地址: https://github.com/typicode/json-server

### 操作步骤:

1. **全局安装 json-server**

    ```bash
    npm i -g json-server

2. **创建 JSON 文件 (db.json)，编写基本结构**

    ```json
    {
        "song": [
            { "id": 1, "name": "干杯", "singer": "五月天" },
            { "id": 2, "name": "当", "singer": "动力火车" },
            { "id": 3, "name": "不能说的秘密", "singer": "周杰伦" }
        ]
    }
    ```

3. **以 JSON 文件所在文件夹作为工作目录，执行如下命令**

    ```bash
    json-server --watch db.json
    ```

    默认监听端口为 `3000`

---

# 会话控制

## 一、介绍

所谓会话控制就是对会话进行控制。

HTTP 是一种无状态的协议，它没有办法区分多次的请求是否来自于同一个客户端，无法区分用户。而产品中又大量存在的这样的需求，所以我们需要通过会话控制来解决该问题。

常见的会话控制技术有三种：
- cookie
- session
- token

---

## 二、cookie

### 2.1 cookie 是什么

cookie 是 HTTP 服务器发送到用户浏览器并保存在本地的一小块数据。

简单示例：

| 域名             | cookie                        |
| ---------------- | ----------------------------- |
| www.baidu.com    | a=100; b=200                  |
| www.bilibili.com | xid=1020abce121; hm=112411213 |
| jd.com           | x=100; ocw=12414cce           |

### 2.2 cookie 的特点

浏览器向服务器发送请求时，会自动将当前域名下可用的 cookie 设置在请求头中，然后传递给服务器。

### 2.4 浏览器操作 cookie

浏览器操作 cookie 的操作，使用相对较少，大家了解即可。
1. 禁用所有 cookie
2. 删除 cookie
3. 查看 cookie

---

## 三、session

### 3.1 session 是什么

session 是保存在服务器端的一块儿数据，保存当前访问用户的相关信息。

### 3.2 session 的作用

实现会话控制，可以识别用户的身份，快速获取当前用户的相关信息。

### 3.3 session 运行流程

填写账号和密码校验身份，校验通过后创建 session 信息，然后将 session_id 的值通过响应头返回给浏览器。

![session运行流程](attachment://session-flow.png)

有了 cookie，下次发送请求时会自动携带 cookie，服务器通过 cookie 中的 session_id 的值确定用户的身份。

以下是根据图片内容生成的Markdown文档：

Express 中可以使用 `express-session` 对 session 进行操作。

```javascript
const express = require('express');
//1. 安装包 npm i express-session connect-mongo
//2. 引入 express-session connect-mongo
const session = require("express-session");
const MongoStore = require('connect-mongo');

const app = express();

//3. 设置 session 的中间件
app.use(session({
    name: 'sid', // 设置cookie的name，默认值是：connect.sid
    secret: 'atguigu', // 参与加密的字符串（又称签名）
    saveUninitialized: false, // 是否为每次请求都设置一个cookie用来存储session的id
    resave: true, // 是否在每次请求时重新保存session
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/project' // 数据库的连接配置
    }),
    cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作
        maxAge: 1000 * 300 // 这一条是控制 sessionID 的过期时间的！！！
    }
}));

// 创建 session
app.get('/login', (req, res) => {
    // 你的逻辑代码
});
```

---

## 四、session、cookie 区别

cookie 和 session 的区别主要有如下几点：

1. **存在的位置**
   - cookie: 浏览器端
   - session: 服务端

2. **安全性**
   - cookie 是以明文的方式存放在客户端的，安全性相对较低
   - session 存放于服务器中，所以安全性相对较好

3. **网络传输量**
   - cookie 设置内容过多会增大报文体积，会影响传输效率
   - session 数据存储在服务器，只是通过 cookie 传递 id，所以不影响传输效率

4. **存储限制**
   - 浏览器限制单个 cookie 保存的数据不能超过 4K，且单个域名下的存储数量也有限制
   - session 数据存储在服务器中，所以没有这些限制

---

## 五、token

### 5.1 token 是什么

token 是服务端生成并返回给 HTTP 客户端的一串加密字符串，token 中保存着用户信息。

### 5.2 token 的作用

实现会话控制，可以识别用户的身份，主要用于移动端 APP。

### 5.3 token 的工作流程

填写账号和密码校验身份，校验通过后响应 token，token 一般是在响应体中返回给客户端的。

![token工作流程](attachment://token-flow.png)

### 5.4 token 的特点

- **服务端压力更小**
  - 数据存储在客户端
- **相对更安全**
  - 数据加密
  - 可以避免 CSRF（跨站请求伪造）
- **扩展性更强**
  - 服务间可以共享
  - 增加服务节点更简单

---

### 5.5 JWT

JWT（JSON Web Token）是目前最流行的跨域认证解决方案，可用于基于 token 的身份验证。

JWT 使 token 的生成与校验更规范。

我们可以使用 `jsonwebtoken` 包来操作 token。

```javascript
// 导入 jsonwebtoken
const jwt = require('jsonwebtoken');

// 创建 token
// jwt.sign(数据, 加密字符串, 配置对象)
let token = jwt.sign({
    username: 'zhangsan'
}, 'atguigu', {
    expiresIn: 60 // 单位是秒
});

// 解析 token
jwt.verify(token, 'atguigu', (err, data) => {
    if (err) {
        console.log('校验失败~~');
        return;
    }
    console.log(data);
});
```
