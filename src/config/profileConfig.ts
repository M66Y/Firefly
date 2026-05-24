import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	// 4. 使用gif要在相对路径开头写上"/"，否则会被当成src目录的图片处理，导致无法显示
	avatar: "/assets/images/绯英唐哭.gif",

	// 名字
	name: "循心",

	// 个人签名
	bio: "你好，世界！",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "qq",
			icon: "fa7-brands:qq",
			url: "https://qm.qq.com/q/ZGsFa8qX2G",
			showName: false,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/M66Y",
			showName: false,
		},
		{
			name: "BiliBili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/588900304",
			showName: false,
		},
		{
			name: "WeChat",
			icon: "fa7-brands:weixin",
			url: "https://",
			showName: false,
		},
	],
};
