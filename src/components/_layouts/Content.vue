<template>
  <article class="l-content" id="l-content">
    <div class="l-content__container">
      <divider-component />
      <h3>About Me</h3>
      <p>
        My name is Liam Mills and I am a frontend web developer residing and
        working in Kent in the UK.
      </p>
      <p>
        After gaining a BSc in
        <link-base
          link-type-prop="normal"
          link-text-prop="Multimedia, Technology and Design"
          href-prop="https://www.kent.ac.uk"
          target-prop="_blank"
          rel-prop="noopener noreferrer"
        />
        at the
        <link-base
          link-type-prop="normal"
          link-text-prop="University Of Kent,"
          href-prop="https://www.kent.ac.uk/locations/canterbury/"
          target-prop="_blank"
          rel-prop="noopener noreferrer"
        />
        I have obtained {{ careerLength }} years experience in the web
        development industry in which I now focus on frontend technologies.
      </p>
      <p>
        In my career, I strive everyday to improve my knowledge in all avenues I
        can with web development, including studying for
        <link-base
          link-type-prop="normal"
          link-text-prop="my MSc in Computer Science."
          href-prop="https://online.herts.ac.uk/masters/msc-computer-science"
          target-prop="_blank"
          rel-prop="noopener noreferrer"
        />
        In my work, I am always trying to implement new technologies while
        providing the best experience from all websites and applications I
        create.
      </p>
      <divider-component />
      <h3>Experience</h3>
      <p>
        Over my {{ careerLength }} year career I have gained a range of skills
        and experiences, here is a highlighted list of them:
      </p>
      <ul v-if="experienceList.length > 0">
        <li
          v-for="(item, index) in experienceList"
          :key="`experience-list--item-${index}`"
        >
          <strong v-if="item.title.length > 0">{{ item.title }}</strong>
          <small v-if="item.summary.length > 0">{{ item.summary }}</small>
        </li>
      </ul>
      <divider-component />
      <h3>Worked with</h3>
      <p>
        Below is a truncated list of companies I have worked with in my
        {{ careerLength }} year career.
      </p>
      <worked-with-list-component />
    </div>
  </article>
</template>

<script>
import LinkBase from "ecce-lima-vue/components/_base/Link";
import DividerComponent from "../_components/Divider";
import WorkedWithListComponent from "../_components/WorkedWithList";
import DatesMixin from "../../mixins/Dates.js";

export default {
  mixins: [DatesMixin],
  components: {
    LinkBase,
    DividerComponent,
    WorkedWithListComponent,
  },
  data() {
    return {
      experienceList: [
        {
          title: "HTML5, CSS3",
          summary: "",
        },
        {
          title: "Responsive Design",
          summary: "",
        },
        {
          title: "Design Software",
          summary: "(Sketch, Adobe CC, Figma)",
        },
        {
          title: "CSS Naming and Structuring Methodologies",
          summary: "(BEM, ITCSS)",
        },
        {
          title: "JavaScript and JavaScript Frameworks",
          summary:
            "(ES6+ Vanilla JS, jQuery, TypeScript, Vue.js, Nuxt.js, React, Next.js, React Native, Node.js)",
        },
        {
          title: "Frontend Frameworks",
          summary:
            "(Bootstrap, Semantic UI, Skeleton, Tailwind CSS, Custom Frameworks)",
        },
        {
          title: "CMS Intergrations",
          summary: "(Craft CMS, Wordpress, DatoCMS, Custom CMS)",
        },
        {
          title: "Ecommerce Packages",
          summary: "(Shopify, BigCommerce, WooCommerce, Custom Solutions)",
        },
        {
          title: "Server Side Languages",
          summary: "(PHP, ColdFusion)",
        },
        {
          title: "Templating",
          summary: "(Twig, Blade, Pug, Handlebars)",
        },
        {
          title: "Version Control",
          summary: "(Github, Bitbucket)",
        },
        {
          title: "Web APIs",
          summary: "(REST, GraphQL)",
        },
        {
          title: "Frontend Build Tools",
          summary: "(Webpack, Gulp, Grunt, laravel-mix, Vite)",
        },
        {
          title: "Testing Frameworks",
          summary: "(Jest, Cypress)",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.l-content {
  background: $col1;
  padding-top: px-to-rem($sectionSpacing);

  ul {
    padding: 0;
    list-style: none;
    @extend %removeChildrenMargin;

    strong {
      display: block;
    }
  }
}

.l-content__container {
  @extend %contentContainer;
  @extend %removeChildrenMargin;
}
</style>
