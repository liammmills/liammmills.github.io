<template>
  <a class="b-link b-scroll-link" :href="hrefProp" @click.prevent="clickLink">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    hrefProp: {
      type: String,
      required: true
    }
  },
  methods: {
    clickLink() {
      const TARGET_ELEMENT = document.querySelector(this.hrefProp);
      const WRAPPER_ELEMENT = document.querySelector(".b-wrapper");

      if (TARGET_ELEMENT) {
        const TARGET_OFFSET_TOP = TARGET_ELEMENT.offsetTop;

        WRAPPER_ELEMENT.scroll({
          top: TARGET_OFFSET_TOP,
          behavior: "smooth"
        });
      }
    }
  }
};
</script>
