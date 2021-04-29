/*
 * @Author: lijuan.sun
 * @Date: 2021-04-27 13:01:19
 * @LastEditors: lijuan.sun
 * @LastEditTime: 2021-04-28 16:27:42
 * @PageTitle: 导出组件页面
 * @Description: 可以导出多个组件的页面
 * @FilePath: \sunmonkey-ui\index.js
 */

import citySelect from './packages/citySelect/index.js'
import datePicker from './packages/datePicker/index.js'

const components = [
  citySelect,
  datePicker
]

const MyModule = {}
MyModule.install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

/* istanbul ignore if */
// 这一步判断window.Vue是否存在，因为直接引用vue.min.js， 它会把Vue绑到Window上，我们直接引用打包好的js才能正常跑起来。
if (typeof window !== 'undefined' && window.Vue) {
  MyModule.install(window.Vue);
}

// 全局组件
export default MyModule

// 按需引用
export {
  citySelect,
  datePicker
}
