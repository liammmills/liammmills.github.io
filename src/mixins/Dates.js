export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    currentAge() {
      return this.currentYear - 1989;
    },
    careerLength() {
      return this.currentYear - 2010;
    }
  }
};
