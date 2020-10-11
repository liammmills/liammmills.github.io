<template>
  <div id="b-wrapper" class="b-wrapper">
    <main class="b-main">
      <header-layout />
      <content-layout />
      <footer-layout />
    </main>
  </div>
</template>

<script>
import HeaderLayout from "./components/_layouts/Header";
import ContentLayout from "./components/_layouts/Content";
import FooterLayout from "./components/_layouts/Footer";
import DatesMixin from "./mixins/Dates.js";

export default {
  name: "App",
  metaInfo: {
    title: "Liam Mills",
    titleTemplate: "%s | Frontend Web Developer | Kent, England, UK",
    base: { target: "_blank", href: "/" },
    meta: [
      {
        name: "description",
        content: "The online portfolio of Frontend Web Developer, Liam Mills"
      },
      { name: "og:locale", content: "en_GB" },
      { name: "og:type", content: "website" },
      {
        name: "og:title",
        content: "Liam Mills | Frontend Web Developer | Kent, England, UK"
      },
      {
        name: "og:description",
        content: "The online portfolio of Frontend Web Developer, Liam Mills"
      },
      { name: "og:site_name", content: "Liam Mills" },
      {
        name: "og:image",
        content: "/assets/favicon/liammmills.jpg"
      },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:description",
        content: "The online portfolio of Frontend Web Developer, Liam Mills"
      },
      {
        name: "twitter:title",
        content: "Liam Mills | Frontend Web Developer | Kent, England, UK"
      },
      {
        name: "twitter:image",
        content: "/assets/favicon/liammmills.jpg"
      }
    ]
  },
  mixins: [DatesMixin],
  components: {
    HeaderLayout,
    ContentLayout,
    FooterLayout
  },
  created() {
    // remove no-js class from html tag
    document.documentElement.className = document.documentElement.className.replace(
      "no-js",
      "js"
    );

    // remove freeze class from body tag
    document.body.className = document.body.className.replace("freeze", "");
  }
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
