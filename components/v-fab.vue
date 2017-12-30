<template>
  <a @mousedown="_showRipple" :href="url" class="fab ripple" @dragstart="dragStart" @mouseup="mouseUp" :style="currentFabLocation">
    <div :class="iconClass"></div>
  </a>
</template>

<style src="css/v-fab.scss"></style>

<script>
  import trackMouse from 'modules/track-mouse';
  import { mapState } from 'vuex';

  export default {
    props: {
      url: String,
      icon: String
    },
    mixins: [trackMouse],
    data () {
      let currentMouseLocation = { "x": innerWidth, "y": innerHeight };
      if (localStorage.settingsPosition) currentMouseLocation = JSON.parse(localStorage.settingsPosition);
      return { currentMouseLocation };
    },

    computed: {
      iconClass () {
        return `${this.icon}-icon`;
      },
      elementWidth () {
        if (!this.$el) return 0;
        return this.$el.offsetWidth;
      },
      currentFabLocation () {
        return {
          right: Math.min(innerWidth - this.elementWidth, Math.max(0, innerWidth - this.currentMouseLocation.x)) + 'px',
          bottom: Math.min(innerHeight - this.elementWidth, Math.max(0, innerHeight - this.currentMouseLocation.y)) + 'px'
        };
      },
      ...mapState([ 'isStaticStartPage' ])
    },
    methods: {
      dragStart (event) {
        if (!this.isStaticStartPage) {
          this.startTrack(event);
        }
      },
      mouseUp (event) {
        if (!this.isStaticStartPage) {
          this.endTrack(event);
        }
      }
    },
    watch: {
      // From mixin we want to watch moveMouse state
      moveMouse (newValue) {
        if (newValue === false) {
          localStorage.settingsPosition = JSON.stringify(this.currentMouseLocation);
        }
      }
    }
  }
</script>
