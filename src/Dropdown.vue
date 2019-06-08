<template>
    <div class="vue-dropdown relative">
        <button @click="toggle" v-on-clickaway="away" class="text-gray-800 focus:outline-none" :title="btnTitle" :class="btnClasses">
            <slot name="button"><i class="fas fa-caret-down"></i></slot>
        </button>

        <ul v-show="show" class="list-reset absolute block border-t-2 pin-r pin-t w-screen mt-8 border-gray-200 text-sm bg-white z-50 shadow border md:w-full" :class="menuClasses">
            <slot name="menu"></slot>
        </ul>
    </div>
</template>

<style scoped>
</style>

<script>
    import {mixin as clickaway} from 'vue-clickaway'

    export default {
        mixins: [clickaway],

        props: {
            btnClasses: {
                type: String,
                default: ''
            },
            btnTitle: {
                type: String,
                default: ''
            },
            menuClasses: {
                type: String,
                default: ''
            }
        },

        data() {
            return {
                show: false
            }
        },

        methods: {
            toggle() {
                this.show = !this.show
            },

            away() {
                this.show = false
            }
        }
    }
</script>
