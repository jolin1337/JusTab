
export default {
  data () {
    return {
      moveMouse: false,
      mousePos: { x: -1, y: -1 },
      currentMouseLocation: { "x": 0, "y": 0 }
    };
  },

  methods: {
    startTrack (event) {
      this.mousePos = {
        x: event.x,
        y: event.y
      };
      this.moveMouse = true;
      event.preventDefault();
    },
    mousemove (event) {
      if (event.which === 0) {
        this.moveMouse = false;
      }
      if (this.moveMouse) {
        event.preventDefault();
        let x = parseInt(this.currentMouseLocation.x) + (event.x - this.mousePos.x);
        let y = parseInt(this.currentMouseLocation.y) + (event.y - this.mousePos.y);

        this.currentMouseLocation = { x, y };
      }
      this.mousePos = {
        x: event.x,
        y: event.y
      };
    },
    endTrack () {
      this.moveMouse = false;
    }
  },
  mounted () {
    document.addEventListener('mousemove', this.mousemove, false);
  },
  beforeDestroy () {
    document.removeEventListener('mousemove', this.mousemove, false);
  }
}