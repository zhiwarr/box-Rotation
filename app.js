const app = Vue.createApp({
  data() {
    return {
      prespective: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  methods: {
    increaseRotationY(event) {
      this.rotateY = event.target.value;
    },
    increaseRotationZ(event) {
      this.rotateZ = event.target.value;
    },
    reset() {
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
      this.prespective = 0;
    },
    copy() {
      const text = `transform:${this.box.transform}`;
      navigator.clipboard.writeText(alert(text));
    },
  },
  computed: {
    box() {
      return {
        transform: `perspective(${this.prespective}px)
          rotateX(${this.rotateX}deg)
          rotateY(${this.rotateY}deg)
          rotateZ(${this.rotateZ}deg)`,
      };
    },
  },
});
app.mount("#app");
