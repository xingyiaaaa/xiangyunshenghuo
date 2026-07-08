# 北京祥云圣火航空科技有限公司 — 官方网站

北京祥云圣火航空科技有限公司 (Beijing Xiangyun Shenghuo Aerospace Technology Co., Ltd.) 的企业官方网站，用于展示公司核心业务、服务能力与品牌形象。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 18 + TypeScript |
| 构建 | Vite 6 |
| 样式 | Tailwind CSS 3 |
| 路由 | React Router v7 |
| 状态 | Zustand |
| 图标 | Lucide React |

## 快速开始

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器
npm run build      # 生产构建
npm run preview    # 预览构建结果
npm run lint       # 代码检查
npm run check      # TypeScript 类型检查
```

## 项目结构

```
src/
├── components/
│   ├── Header.tsx         # 顶部导航栏（响应式，移动端汉堡菜单）
│   ├── Hero.tsx           # Hero 轮播区（自动轮播 + 指示器）
│   ├── ServiceSection.tsx # 行业服务展示（分类筛选 + 卡片网格）
│   ├── ContactFloat.tsx   # 右侧悬浮联系按钮（邮箱/电话/咨询）
│   └── Footer.tsx         # 底部信息（公司链接、联系方式、版权）
├── hooks/
│   └── useTheme.ts        # 亮/暗主题切换 Hook
├── lib/
│   └── utils.ts           # cn() 工具函数（clsx + tailwind-merge）
├── pages/
│   └── Home.tsx           # 首页
├── App.tsx                # 路由入口
├── main.tsx               # 应用挂载入口
└── index.css              # 全局样式 + Tailwind 指令
```

## 功能模块

| 模块 | 说明 |
|------|------|
| **顶部导航** | 固定顶部，含公司 Logo、名称、导航链接；移动端折叠为汉堡菜单 |
| **Hero 轮播** | 全屏背景图自动轮播（5s 间隔），展示业务能力、科技创新、品质保障三个主题 |
| **服务展示** | 左侧分类导航（所有服务/方案咨询/集成应用/工艺设计）+ 右侧卡片网格展示 |
| **联系浮窗** | 右侧固定悬浮按钮：邮箱、电话、在线咨询，hover 显示详情 |
| **底部信息** | 公司链接导航、联系方式（电话/传真/邮箱/地址）、版权信息 |

## 页面路由

| 路由 | 页面 | 状态 |
|------|------|------|
| `/` | 首页 | ✅ 已完成 |
| `/other` | 占位页 | 🚧 待开发 |
| `/services`, `/about`, `/team` 等 | 导航链接 | 📋 规划中 |

## 设计规范

- **主色调**：深蓝 `#1a365d` / 红色 `#dc2626`
- **字体**：微软雅黑、PingFang SC、Noto Sans SC
- **布局**：固定顶部导航 + 全屏 Hero + 左右布局服务区 + 底部信息
- **响应式**：桌面端多列 → 平板端双列 → 移动端单列 + 汉堡菜单
