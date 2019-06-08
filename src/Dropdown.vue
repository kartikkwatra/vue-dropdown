<template>
    <div class="vue-dropdown">
        <button @click="toggle" v-on-clickaway="away" class="vue-dropdown-btn" :title="btnTitle" :class="btnClasses">
            <slot name="button"><i class="fas fa-caret-down"></i></slot>
        </button>

        <ul v-show="show" class="vue-dropdown-menu" :class="menuClasses">
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

<style>
    .vue-dropdown {
        position: relative;
    }

    .vue-dropdown-btn {
        color: #4A5568;
    }

    .vue-dropdown-btn:focus {
        outline: none;
    }

    .vue-dropdown-menu {
        position: absolute;
        width: 100vw;
        display: block;
        border: 1px solid #EDF2F7;
        border-top: 2px solid #EDF2F7;
        list-style-type: none;
        margin-top: 2rem;
        font-size: .875rem;
        background: #fff;
        z-index: 50;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }

    .vue-dropdown-menu button {
        width: 100%;
        text-align: left;
    }

    .vue-dropdown-menu li:hover {
        background: #EDF2F7;
    }

    @media only screen and (min-width: 640px) {
        .vue-dropdown-menu {
            width: 100%;
        }
    }
</style>