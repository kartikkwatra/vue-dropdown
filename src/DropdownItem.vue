<template>
  <a
    class="cursor-pointer block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
    @click.prevent="onClick"
    :href="href"
  >
    <slot/>
  </a>
</template>

<script>
  export default {
    props: {
      href: {
        type: String,
        default: ''
      },
      inertia: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      onClick() {
        this.$emit('click')

        if (this.href) {
          if (this.inertia) {
            this.$inertia.visit(this.href)
          } else {
            window.location = this.href
          }
        }
      }
    }
  }
</script>
