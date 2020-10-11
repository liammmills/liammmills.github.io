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
          href-prop="https://www.kent.ac.uk/courses/undergraduate/226/multimedia-technology-and-design"
          target-prop="_blank"
          rel-prop="noopener noreferrer"
        />
        &nbsp; at the
        <link-base
          link-type-prop="normal"
          link-text-prop="University Of Kent"
          href-prop="https://www.kent.ac.uk/locations/canterbury/"
          target-prop="_blank"
          rel-prop="noopener noreferrer"
        />, I have obtained {{ careerLength }} years experience in the web
        development industry in which I now focus on frontend technologies.
      </p>
      <p>
        In my career, I strive everyday to improve my knowledge in all avenues I
        can with web development, trying to implement new technologies while
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
    </div>
  </article>
</template>

<script>
import LinkBase from "ecce-lima-vue/components/_base/Link";
import DividerComponent from "../_components/Divider";
import DatesMixin from "../../mixins/Dates.js";

export default {
  mixins: [DatesMixin],
  components: {
    LinkBase,
    DividerComponent
  },
  data() {
    return {
      experienceList: [
        {
          title: "HTML5, CSS3",
          summary: ""
        },
        {
          title: "Responsive Design",
          summary: ""
        },
        {
          title: "Design Software",
          summary: " (Sketch, Adobe CC)"
        },
        {
          title: "CSS Naming and Structuring Methodologies",
          summary: " (BEM, ITCSS)"
        },
        {
          title: "JavaScript and JavaScript Frameworks",
          summary: " (ES6+ Vanilla JS, jQuery, Vue.js, Nuxt.js, Node.js)"
        },
        {
          title: "Frontend Frameworks",
          summary:
            " (Bootstrap, Semantic UI, Skeleton, Tailwind CSS, Custom Frameworks)"
        },
        {
          title: "CMS Intergrations",
          summary: " (Craft CMS, Wordpress, Custom CMS)"
        },
        {
          title: "Server Side Languages",
          summary: " (PHP, ColdFusion)"
        },
        {
          title: "Templating",
          summary: " (Twig, Blade, Pug)"
        },
        {
          title: "Version Control",
          summary: " (Github, Bitbucket)"
        },
        {
          title: "Web APIs",
          summary: " (REST, GraphQL)"
        },
        {
          title: "Frontend Build Tools",
          summary: " (Webpack, Gulp, Grunt, laravel-mix)"
        }
      ]
    };
  }
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
