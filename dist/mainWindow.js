"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const electron_1 = require("electron");
const electron_is_dev_1 = __importDefault(require("electron-is-dev")); //electron-is-dev包可识别现有的环境
const path_1 = require("path");
let win;
function create() {
    win = new electron_1.BrowserWindow({
        width: 600,
        height: 600,
        webPreferences: {
            nodeIntegration: true, // 是否在node工作器中启用工作集成默认false
        }
    });
    if (electron_is_dev_1.default) {
        win.webContents.openDevTools(); //打开控制台
        win.loadURL('http://localhost:8081');
    }
    else {
        // 线上模式, 用react打包的
        win.loadFile((0, path_1.resolve)(__dirname, '../render/dist-main/index.html'));
    }
    return win;
}
exports.create = create;
