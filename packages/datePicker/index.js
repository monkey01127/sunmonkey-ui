/*
 * @Author: lijuan.sun
 * @Date: 2021-04-28 13:11:36
 * @LastEditors: lijuan.sun
 * @LastEditTime: 2021-04-28 13:21:33
 * @PageTitle: 导出datePicker页面
 * @Description: 导出datePicker的组件方法
 * @FilePath: \sunmonkey-ui\src\components\datePicker\index.js
 */

import DatePicker from './src/main.vue'

DatePicker.install = Vue => {
  Vue.component(DatePicker.name, DatePicker)
}

export default DatePicker
