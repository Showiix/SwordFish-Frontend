# Docker 部署指南

## 📦 快速开始

### 方式 1：使用 Docker Compose（推荐）

```bash
# 构建并启动容器
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止容器
docker-compose down
```

访问：http://localhost:3000

---

### 方式 2：使用 Docker 命令

#### 1. 构建镜像

```bash
docker build -t swordfish-frontend:latest .
```

#### 2. 运行容器

```bash
docker run -d \
  --name swordfish-frontend \
  -p 3000:80 \
  swordfish-frontend:latest
```

#### 3. 查看日志

```bash
docker logs -f swordfish-frontend
```

#### 4. 停止并删除容器

```bash
docker stop swordfish-frontend
docker rm swordfish-frontend
```

---

## 🔧 常用命令

### 查看运行中的容器
```bash
docker ps
```

### 进入容器
```bash
docker exec -it swordfish-frontend sh
```

### 重启容器
```bash
docker restart swordfish-frontend
```

### 查看容器资源使用
```bash
docker stats swordfish-frontend
```

---

## 🌐 Nginx 配置说明

默认的 `nginx.conf` 已配置：
- ✅ Vue Router History 模式支持
- ✅ Gzip 压缩
- ✅ 静态资源缓存（1年）
- ✅ API 代理模板（需要时取消注释）

如需修改 Nginx 配置：
1. 编辑 `nginx.conf`
2. 重新构建镜像：`docker-compose up -d --build`

---

## 🚀 生产环境部署

### 1. 构建生产镜像

```bash
docker build -t registry.example.com/swordfish-frontend:v1.0.0 .
```

### 2. 推送到镜像仓库

```bash
# 推送到 Docker Hub
docker push registry.example.com/swordfish-frontend:v1.0.0

# 或推送到阿里云容器镜像服务
docker login --username=your-username registry.cn-hangzhou.aliyuncs.com
docker tag swordfish-frontend:latest registry.cn-hangzhou.aliyuncs.com/your-namespace/swordfish-frontend:v1.0.0
docker push registry.cn-hangzhou.aliyuncs.com/your-namespace/swordfish-frontend:v1.0.0
```

### 3. 在服务器上拉取并运行

```bash
# 拉取镜像
docker pull registry.example.com/swordfish-frontend:v1.0.0

# 运行容器
docker run -d \
  --name swordfish-frontend \
  -p 80:80 \
  --restart unless-stopped \
  registry.example.com/swordfish-frontend:v1.0.0
```

---

## 🔒 HTTPS 配置（生产环境推荐）

### 使用 Let's Encrypt 证书

创建 `docker-compose.prod.yml`：

```yaml
version: '3.8'

services:
  frontend:
    build: .
    container_name: swordfish-frontend
    restart: unless-stopped
    networks:
      - web

  nginx-proxy:
    image: nginxproxy/nginx-proxy
    container_name: nginx-proxy
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/tmp/docker.sock:ro
      - ./certs:/etc/nginx/certs
    networks:
      - web

  acme-companion:
    image: nginxproxy/acme-companion
    container_name: nginx-proxy-acme
    volumes_from:
      - nginx-proxy
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./acme:/etc/acme.sh
    environment:
      - DEFAULT_EMAIL=your-email@example.com

networks:
  web:
    driver: bridge
```

---

## 📊 多环境配置

### 开发环境
```bash
docker-compose -f docker-compose.yml up
```

### 生产环境
```bash
docker-compose -f docker-compose.prod.yml up -d
```

---

## 🐛 故障排查

### 1. 容器无法启动
```bash
# 查看详细日志
docker logs swordfish-frontend

# 查看容器状态
docker inspect swordfish-frontend
```

### 2. 页面 404 错误
- 检查 `nginx.conf` 中的 `try_files` 配置
- 确保 `dist` 目录正确复制到容器

### 3. API 请求跨域
- 在 `nginx.conf` 中配置 API 代理
- 或在后端配置 CORS

### 4. 镜像体积过大
```bash
# 查看镜像大小
docker images swordfish-frontend

# 使用 dive 工具分析镜像层
docker run --rm -it \
  -v /var/run/docker.sock:/var/run/docker.sock \
  wagoodman/dive:latest swordfish-frontend:latest
```

---

## 📈 性能优化

### 1. 多阶段构建（已配置）
- 第一阶段：Node.js 构建
- 第二阶段：Nginx 运行
- 最终镜像只包含必要文件

### 2. 镜像优化
```dockerfile
# 使用 alpine 版本（体积更小）
FROM node:18-alpine
FROM nginx:alpine
```

### 3. 缓存优化
```bash
# 利用 Docker 缓存加速构建
# 先复制 package.json，再复制代码
COPY package*.json ./
RUN npm ci
COPY . .
```

---

## 📝 注意事项

1. **环境变量**：如需配置环境变量，创建 `.env` 文件或在 `docker-compose.yml` 中配置
2. **端口映射**：默认映射到 3000 端口，可在 `docker-compose.yml` 中修改
3. **数据持久化**：前端静态项目通常不需要持久化
4. **安全性**：生产环境建议使用 HTTPS 和 Nginx 安全配置

---

## 🔗 相关资源

- [Docker 官方文档](https://docs.docker.com/)
- [Nginx 官方文档](https://nginx.org/en/docs/)
- [Vue.js 部署指南](https://vuejs.org/guide/best-practices/production-deployment.html)


