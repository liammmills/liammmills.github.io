<template>
  <header class="l-header">
    <section class="l-header__animation-container">
      <icon-base size-prop="144" color-prop="black" ref="animatedIcon">
        <logo-icon />
      </icon-base>
      <h1 ref="animatedTitle">Liam Mills</h1>
      <h2 ref="animatedSubtitle">Frontend Web Developer</h2>
    </section>
    <scroll-link-base href-prop="#l-content" ref="animatedButton">
      <template>Scroll for the content</template>
    </scroll-link-base>
    <video-component />
  </header>
</template>

<script>
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import IconBase from "ecce-lima-vue/components/_base/Icon";
import ScrollLinkBase from "../_base/ScrollLink";
import VideoComponent from "../_components/Video";
import LogoIcon from "../_svg/Logo";

gsap.registerPlugin(CSSPlugin);

export default {
  components: {
    IconBase,
    ScrollLinkBase,
    VideoComponent,
    LogoIcon,
  },
  methods: {
    msToS(num) {
      if (!num) return false;

      return num / 1000;
    },
    runAnimation() {
      let tl = gsap.timeline({ onComplete: this.animationCompleted });
      let animatedIcon = this.$refs.animatedIcon.$el;
      let animatedTitle = this.$refs.animatedTitle;
      let animatedSubtitle = this.$refs.animatedSubtitle;
      let animatedButton = this.$refs.animatedButton.$el;

      if (animatedIcon && animatedTitle && animatedSubtitle && animatedButton) {
        tl.fromTo(
          animatedIcon,
          { opacity: 0 },
          { opacity: 1, duration: this.msToS(1000) },
          this.msToS(1000)
        );

        tl.fromTo(
          animatedTitle,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: this.msToS(1000) },
          this.msToS(2100)
        );

        tl.fromTo(
          animatedSubtitle,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: this.msToS(1000) },
          this.msToS(2500)
        );

        tl.fromTo(
          animatedButton,
          { opacity: 0 },
          { opacity: 1, duration: this.msToS(250) },
          this.msToS(3000)
        );
      } else {
        return false;
      }
    },
    animationCompleted() {
      if (document.body.classList.contains("no-scroll")) {
        document.body.classList.remove("no-scroll");
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.runAnimation();
  },
};
</script>

<style lang="scss">
.l-header {
  height: 100vh;
  height: 100svh;
  min-height: px-to-rem(331px);
  padding: 0;

  @include min-screen(map-get($breakpoints, md)) {
    min-height: px-to-rem(525px);
  }

  &:after {
    content: " ";
    display: block;
    height: px-to-rem(11px);
    width: 100%;
    position: absolute;
    z-index: z-index("two");
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(246, 246, 246, 0) 0%,
      rgba(246, 246, 246, 1) 100%
    );

    @include min-screen(map-get($breakpoints, md)) {
      height: px-to-rem(13px);
    }
  }

  .b-scroll-link {
    position: absolute;
    z-index: z-index("one");
    bottom: 26px;
    left: 50%;
    transform: translateX(-50%);
    font-size: px-to-rem(10px);
    font-weight: $normal;
    text-transform: uppercase;

    @include min-screen(map-get($breakpoints, md)) {
      bottom: px-to-rem(38px);
      font-size: px-to-rem(12px);
    }

    /* html.js & {
      opacity: 0;
      display: none;
      pointer-events: none;
      cursor: default;
      transition: all 250ms ease-in-out;

      &.b-scroll-link--visible {
        opacity: 1;
        pointer-events: auto;
        cursor: pointer;
      }
    } */
  }

  .c-video {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: z-index("minus-100");
    filter: grayscale(100%);
    opacity: 0.05;
    background: url("../../assets/img/abcd.jpg") center center / cover no-repeat;

    video {
      position: absolute;
      top: 50%;
      left: 50%;
      width: auto;
      height: auto;
      min-width: 100%;
      min-height: 100%;
      z-index: z-index("one");
      transform: translate(-50%, -50%);

      @include max-screen(map-get($breakpoints, md) - 1) {
        display: none;
      }

      html.no-js & {
        display: none;
      }
    }
  }
}

.l-header__animation-container {
  position: absolute;
  z-index: z-index("one");
  top: 50%;
  left: 50%;
  width: 100%;
  height: auto;
  transform: translate(-50%, -50%);

  @include min-screen(map-get($breakpoints, md)) {
    width: px-to-rem(530px);
    padding: 0 px-to-rem(15px);
  }

  .b-icon {
    margin: 0 auto px-to-rem(10px);

    @include min-screen(map-get($breakpoints, md)) {
      height: px-to-rem(205px);
      width: px-to-rem(205px);
    }
  }

  h1 {
    margin: 0 0 px-to-rem(5px);
  }

  h2 {
    margin: 0;
  }
}
</style>
