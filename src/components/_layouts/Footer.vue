<template>
  <footer class="l-footer">
    <div class="l-footer__container">
      <divider-component />
      <p>
        &copy; Copyright {{ currentYear }}, Liam Mills |&nbsp;
        <link-base
          link-type-prop="normal"
          href-prop="https://www.linkedin.com/in/liam-m-98519051/"
          target-prop="_blank"
          title-prop="Link to my Linkedin profile"
          rel-prop="noopener noreferrer"
        >
          <icon-base size-prop="12" color-prop="black">
            <linkedin-icon />
          </icon-base>
        </link-base>
      </p>
    </div>
  </footer>
</template>

<script>
import LinkBase from "ecce-lima-vue/components/_base/Link";
import IconBase from "ecce-lima-vue/components/_base/Icon";
import DividerComponent from "../_components/Divider";
import LinkedinIcon from "../_svg/Linkedin";
import DatesMixin from "../../mixins/Dates.js";

export default {
  mixins: [DatesMixin],
  components: {
    LinkBase,
    IconBase,
    DividerComponent,
    LinkedinIcon
  }
};
</script>

<style lang="scss">
.l-footer {
  padding: px-to-rem($sectionSpacing) 0;
  background: $col1;

  p {
    margin: 0;
  }

  .b-link {
    vertical-align: middle;
  }
}

.l-footer__container {
  @extend %contentContainer;
  @extend %removeChildrenMargin;
}
</style>
