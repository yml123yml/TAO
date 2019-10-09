// 入口文件
console.log('OK')

//导入vue
import Vue from 'vue';

// 导入App根组件
import app from './App.vue';

// 按需导入mint-ui组件中的header
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

// 导入mui样式表
import './lib/mui/css/mui.min.css';

// 创建vue实例
var vue = new Vue({
    el:'#app',
    render:c => c(app)
});