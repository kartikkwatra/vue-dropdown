import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'

export default {
  install(Vue) {
    Vue.component('dropdown', Dropdown)
    Vue.component('dropdown-item', DropdownItem)
  }
}
