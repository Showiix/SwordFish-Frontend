# Postman 快速使用指南

## 🚀 快速开始（5分钟上手）

### 步骤 1：导入 OpenAPI 文档

1. 打开 Postman
2. 点击左上角 **Import** 按钮
3. 拖拽 `openapi.yaml` 文件到导入窗口
4. 点击 **Import** 完成

✅ 导入后你会看到一个名为 "校园二手交易平台 API" 的 Collection

---

### 步骤 2：配置环境变量（推荐）

#### 创建环境
1. 点击右上角的眼睛图标 👁️
2. 点击 **Add** 创建新环境
3. 命名为 "本地开发"

#### 添加变量
| 变量名 | 初始值 | 当前值 |
|--------|--------|--------|
| `base_url` | `http://localhost:3000/api` | `http://localhost:3000/api` |
| `token` | （空） | （稍后填入） |

#### 修改请求 URL
将所有请求的 URL 改为：
```
{{base_url}}/user/login
```

---

### 步骤 3：测试登录接口

#### 3.1 发送注册请求

**接口**：`POST {{base_url}}/user/register`

**Body（JSON）**：
```json
{
  "student_id": "2023001",
  "campus_email": "2023001@school.edu.cn",
  "password": "123456",
  "phone": "13800138000"
}
```

**点击 Send** → 收到响应：
```json
{
  "code": 200,
  "msg": "注册成功",
  "data": {
    "user_id": 1,
    "student_id": "2023001",
    "campus_email": "2023001@school.edu.cn",
    "auth_status": 0,
    "credit_score": 500
  }
}
```

#### 3.2 发送登录请求

**接口**：`POST {{base_url}}/user/login`

**Body（JSON）**：
```json
{
  "account": "2023001",
  "password": "123456"
}
```

**点击 Send** → 收到响应：
```json
{
  "code": 200,
  "msg": "登录成功",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user_info": {
      "user_id": 1,
      "student_id": "2023001",
      ...
    }
  }
}
```

#### 3.3 保存 Token

**手动方式**：
1. 复制响应中的 `token` 值
2. 点击右上角环境变量图标
3. 将 token 粘贴到 `token` 变量的 **Current Value**

**自动方式（使用脚本）**：
在登录接口的 **Tests** 标签添加：
```javascript
// 自动保存 token 到环境变量
pm.test("登录成功", function () {
    var jsonData = pm.response.json();
    if (jsonData.code === 200 && jsonData.data.token) {
        pm.environment.set("token", jsonData.data.token);
        console.log("Token 已保存:", jsonData.data.token);
    }
});
```

---

### 步骤 4：配置认证

#### 为整个 Collection 配置认证（推荐）

1. 选中 "校园二手交易平台 API" Collection
2. 点击右侧的 **...** → **Edit**
3. 进入 **Authorization** 标签
4. Type 选择 **Bearer Token**
5. Token 填写：`{{token}}`
6. 点击 **Save**

✅ 现在所有需要认证的接口都会自动带上 token！

---

### 步骤 5：测试需要认证的接口

#### 获取个人信息

**接口**：`GET {{base_url}}/user/info`

**Headers** 会自动添加：
```
Authorization: Bearer {{token}}
```

**点击 Send** → 收到响应：
```json
{
  "code": 200,
  "msg": "获取成功",
  "data": {
    "user_id": 1,
    "student_id": "2023001",
    "campus_email": "2023001@school.edu.cn",
    "real_name": "张三",
    "phone": "13800138000",
    "auth_status": 1,
    "credit_score": 500,
    "avatar_url": "http://localhost:3000/uploads/avatar_123456.jpg"
  }
}
```

---

## 🎯 完整测试流程示例

### 场景：发布一个二手商品

```
1. 注册用户
   POST /user/register

2. 登录获取 token
   POST /user/login
   ↓ 自动保存 token

3. 提交身份认证（假设后台已审核通过）
   POST /user/auth
   Body: {
     "real_name": "张三",
     "student_card_url": "http://..."
   }

4. 上传商品图片
   POST /upload/image
   Body: 选择文件上传
   ↓ 获得图片 URL

5. 发布商品
   POST /goods/publish
   Body: {
     "goods_title": "九成新考研英语真题",
     "goods_type": 0,
     "goods_price": 30.00,
     "goods_desc": "用了1个月,无笔记,保存完好",
     "goods_images": ["http://localhost:3000/uploads/goods_1.jpg"]
   }

6. 查看我的发布
   GET /goods/my-publish

7. 查看商品列表（公开接口，不需要登录）
   GET /goods/list?keyword=考研&page=1&page_size=10

8. 查看商品详情
   GET /goods/detail/1
```

---

## 🔧 高级技巧

### 1. 使用 Pre-request Script 自动登录

在需要认证的请求中添加 **Pre-request Script**：

```javascript
// 检查 token 是否存在
const token = pm.environment.get("token");

if (!token) {
    // 如果没有 token，自动执行登录
    pm.sendRequest({
        url: pm.environment.get("base_url") + "/user/login",
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
        body: {
            mode: 'raw',
            raw: JSON.stringify({
                account: "2023001",
                password: "123456"
            })
        }
    }, function (err, res) {
        if (!err && res.code === 200) {
            pm.environment.set("token", res.json().data.token);
            console.log("自动登录成功");
        }
    });
}
```

### 2. 使用 Tests 验证响应

```javascript
// 验证状态码
pm.test("状态码是 200", function () {
    pm.response.to.have.status(200);
});

// 验证响应格式
pm.test("返回格式正确", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('code');
    pm.expect(jsonData).to.have.property('msg');
    pm.expect(jsonData).to.have.property('data');
});

// 验证业务逻辑
pm.test("业务处理成功", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.code).to.eql(200);
});
```

### 3. 批量运行测试

#### 使用 Collection Runner
1. 选中 Collection
2. 点击右侧的 **Run** 按钮
3. 选择要运行的接口
4. 点击 **Run 校园二手交易平台 API**
5. 查看所有接口的测试结果

#### 使用 Newman（命令行）
```bash
# 安装 Newman
npm install -g newman

# 导出 Collection 和环境变量
# 在 Postman 中：Export → Collection v2.1

# 运行测试
newman run collection.json -e environment.json
```

---

## 📊 请求示例速查表

### 用户模块

```javascript
// 1. 注册
POST {{base_url}}/user/register
Body: {
  "student_id": "2023001",
  "campus_email": "2023001@school.edu.cn",
  "password": "123456"
}

// 2. 登录
POST {{base_url}}/user/login
Body: {
  "account": "2023001",
  "password": "123456"
}

// 3. 获取个人信息
GET {{base_url}}/user/info
Headers: Authorization: Bearer {{token}}

// 4. 修改个人信息
PUT {{base_url}}/user/info
Headers: Authorization: Bearer {{token}}
Body: {
  "phone": "13900139000",
  "avatar_url": "http://..."
}

// 5. 修改密码
PUT {{base_url}}/user/password
Headers: Authorization: Bearer {{token}}
Body: {
  "old_password": "123456",
  "new_password": "654321"
}
```

### 商品模块

```javascript
// 1. 发布商品
POST {{base_url}}/goods/publish
Headers: Authorization: Bearer {{token}}
Body: {
  "goods_title": "九成新考研英语真题",
  "goods_type": 0,
  "goods_price": 30.00,
  "goods_desc": "用了1个月,无笔记,保存完好",
  "goods_images": ["http://..."]
}

// 2. 商品列表（无需登录）
GET {{base_url}}/goods/list?keyword=考研&page=1&page_size=10

// 3. 商品详情（无需登录）
GET {{base_url}}/goods/detail/1

// 4. 我的发布
GET {{base_url}}/goods/my-publish?goods_status=1&page=1
Headers: Authorization: Bearer {{token}}

// 5. 编辑商品
PUT {{base_url}}/goods/edit/1
Headers: Authorization: Bearer {{token}}
Body: {
  "goods_title": "新标题",
  "goods_price": 25.00
}

// 6. 删除商品
DELETE {{base_url}}/goods/delete/1
Headers: Authorization: Bearer {{token}}
```

### 交易模块

```javascript
// 1. 创建订单
POST {{base_url}}/order/create
Headers: Authorization: Bearer {{token}}
Body: {
  "goods_id": 1,
  "remark": "下午3点取货"
}

// 2. 订单列表
GET {{base_url}}/order/list?order_status=0&page=1
Headers: Authorization: Bearer {{token}}

// 3. 订单详情
GET {{base_url}}/order/detail/1
Headers: Authorization: Bearer {{token}}

// 4. 支付订单
POST {{base_url}}/order/pay/1
Headers: Authorization: Bearer {{token}}

// 5. 确认完成
POST {{base_url}}/order/complete/1
Headers: Authorization: Bearer {{token}}

// 6. 取消订单
POST {{base_url}}/order/cancel/1
Headers: Authorization: Bearer {{token}}
```

---

## 🐛 常见问题

### Q1: 401 Unauthorized
**原因**：token 过期或未登录
**解决**：重新登录获取新 token

### Q2: 403 Forbidden
**原因**：无权限访问（如未认证用户发布商品）
**解决**：先完成身份认证

### Q3: 400 Bad Request
**原因**：请求参数错误
**解决**：检查 Body 中的参数是否正确

### Q4: 环境变量不生效
**原因**：未选择环境
**解决**：点击右上角下拉菜单，选择 "本地开发" 环境

---

## ✨ 提示

1. **保存响应示例**：测试成功后点击 "Save Response"，方便查看
2. **使用文件夹分组**：按模块整理接口
3. **添加描述**：为每个接口添加详细说明
4. **团队协作**：导出 Collection 分享给团队成员

---

祝你测试愉快！🎉

