<template>
    <div class="vue-dropdown">
        <button @click="toggle" v-on-clickaway="away" class="btn-dropdown" :title="btnTitle" :class="btnClasses">
            <slot name="button"><i class="fas fa-caret-down"></i></slot>
        </button>

        <ul v-show="show" class="menu-dropdown" :class="menuClasses">
            <slot name="menu"></slot>
        </ul>
    </div>
</template>

<style scoped>
</style>

<script>
    import { mixin as clickaway } from 'vue-clickaway'

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

<style>
    .vue-dropdown {
        background: red;
    }
</style>