/*
 * @Author: lijuan.sun
 * @Date: 2021-04-28 13:11:24
 * @LastEditors: lijuan.sun
 * @LastEditTime: 2021-04-28 14:44:05
 * @PageTitle: 导出citySelect页面
 * @Description: 导出citySelect的组件方法
 * @FilePath: \sunmonkey-ui\packages\citySelect\index.js
 */

import CitySelect from './src/main.vue'

CitySelect.install = Vue => {
  Vue.component(CitySelect.name, CitySelect)
}

export default CitySelect
