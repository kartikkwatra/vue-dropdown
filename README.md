# Vue Dropdown

A dropdown component for Vue 2.x.

## Install

``` bash
npm install @codinglabs/vue-dropdown --save
```

``` javascript
import Dropdown from '@codinglabs/vue-dropdown';

export default {
  components: {
    Dropdown
  }
  // ...
}
```
## Usage

``` html
<dropdown menu-classes="md:w-48">
    <template slot="button">
        <div class="flex items-center">
            <div class="mr-2">Menu</div>
            <i class="fas fa-caret-down"></i>
        </div>
    </template>

    <template slot="menu">
        <li><a href="#" class="block p-4">Settings</a></li>
        <li><a href="#" class="block p-4">Logout</a></li>
    </template>
</dropdown>
```

## About Coding Labs
Coding Labs is a web app development agency based on the Gold Coast, Australia. 

## License
The MIT License (MIT). Please see [License File](LICENSE) for more information.