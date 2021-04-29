/*
 * @Author: lijuan.sun
 * @Date: 2021-04-28 13:11:24
 * @LastEditors: lijuan.sun
 * @LastEditTime: 2021-04-28 13:17:41
 * @PageTitle: 导出citySelect页面
 * @Description: 导出citySelect的组件方法
 * @FilePath: \sunmonkey-ui\src\components\citySelect\index.js
 */

import CitySelect from './src/main'

CitySelect.install = Vue => {
  Vue.component(CitySelect.name, CitySelect)
}

export default CitySelect
