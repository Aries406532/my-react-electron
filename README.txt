1.初始化npm
mkdir react-electron && cd react-electron
npm init -y   //生成package.json


2.支持Typescript
npm i typescript ts-loader source-map-loader -D  //安装依赖
tsc --init   //出现bash: tsc: command not found

解决：https://blog.csdn.net/qq_32849999/article/details/126629225
	1.npx tsc --init	//初始化
	2.npx tsc -v	//查看是否安装成功


3.支持React
npm i react react-dom @types/react @types/react-dom react-router-dom @types/react-router-dom -S


4.支持webpack,不指定版本号,默认使用webpack5
npm i webpack webpack-cli webpack-dev-server html-webpack-plugin  webpack-merge clean-webpack-plugin hoist-non-react-statics -D


目录结构

|-- my-react-electron
    |-- package.json					//依赖包配置
    |-- README.txt						//项目说明
    |-- tsconfig.json					//ts配置文件
    |-- render							//渲染线程文件夹
        |-- config						//webpack的配置文件
        |   |-- htmlWebpackPlugin.js	//htmlWebpackPlugin逻辑封装
        |   |-- webpack.common.js		//webpack主配置文件
        |   |-- webpack.dev.js			//webpack开发环境配置
        |   |-- webpack.prod.js			//webpack打包配置
		|-- dist-main					//打包输入目录
        |-- main						//渲染线程主页面
            |-- index.html				//入口html页面
            |-- index.tsx				//react入口文件