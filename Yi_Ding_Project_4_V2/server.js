const express = require("express");
const app = express();
const path = require("path");

// 1. 设置静态文件夹
// 假设您的前端文件存储在项目的 public 文件夹中
app.use(express.static(path.join(__dirname, "public")));

// 2. 处理前端页面的请求
// 让 '/' 路径返回您的 HTML 文件
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 3. 设置其他 API 路由（如果尚未配置）
app.get("/api/health", (req, res) => {
  res.json({ status: "API 正常运行" });
});

// 4. 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});