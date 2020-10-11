<template>
  <div class="c-divider">
    <icon-base size-prop="10" color-prop="black">
      <hr-icon />
    </icon-base>
  </div>
</template>

<script>
import IconBase from "ecce-lima-vue/components/_base/Icon";
import HrIcon from "../_svg/HR";

export default {
  components: {
    HrIcon,
    IconBase
  }
};
</script>

<style lang="scss">
.c-divider {
  position: relative;
  height: px-to-rem(10px);
  border: 0;
  margin: px-to-rem($sectionSpacing) 0;

  &:before,
  &:after {
    position: absolute;
    display: block;
    content: " ";
  }

  &:before {
    z-index: z-index("one");
    height: px-to-rem(1px);
    width: 100%;
    background: $black-colour;
    left: 0;
    top: px-to-rem(4px);
  }

  &:after {
    z-index: z-index("two");
    height: px-to-rem(10px);
    width: px-to-rem(20px);
    background: $col1;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .b-icon {
    position: absolute;
    z-index: z-index("three");
    // height: px-to-rem(10px);
    // width: px-to-rem(20px);
    // padding: px-to-rem(5px);
    // background: url("../../assets/img/hr.gif") no-repeat $col1 top center;
    // background-size: px-to-rem(10px) px-to-rem(10px);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
