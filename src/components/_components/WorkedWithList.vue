<template>
  <ul class="c-worked-with-list">
    <li
      class="c-worked-with-list__li"
      v-for="(item, index) in truncatedWorkedWithList"
      :key="`worked-with-list--li-${index}`"
    >
      <component :is="item" />
    </li>
  </ul>
</template>

<script>
import IconBase from "ecce-lima-vue/components/_base/Icon";

export default {
  components: {
    IconBase,
  },
  data() {
    return {
      workedWithList: [
        "CampbellsMeat",
        "Ecce",
        "FiveStoneBuildings",
        "HartleyAssociates",
        "Highscore",
        "IcelandTours",
        "Iwsc",
        "JoeDuffyGroup",
        "JoeDuffyLeasing",
        "KearysCarstore",
        "MacdonaldHotels",
        "Macknade",
        "Mtc",
        "Pagazzi",
        "PolarAudio",
        "TheHideout",
        "Zucar",
      ],
    };
  },
  computed: {
    truncatedWorkedWithList() {
      return [...this.workedWithList]
        .sort(() => Math.random() - Math.random())
        .slice(0, 3)
        .map((x) => () => import(`../_svg/worked/${x}.vue`));
    },
  },
};
</script>

<style lang="scss">
.c-worked-with-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  &__li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: px-to-rem(70px);
    padding: 0 px-to-rem(10px);
    margin: px-to-rem(10px) 0 !important;

    @include min-screen(480px) {
      width: 33.333%;
    }

    &:nth-child(3) {
      @include max-screen(479px) {
        display: none;
      }
    }

    svg {
      width: 100%;
      height: auto;
      max-width: px-to-rem(120px);
      max-height: px-to-rem(70px);
      object-fit: contain;
      filter: grayscale(1);
    }
  }
}
</style>
