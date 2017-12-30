<template>
  <div v-if="service" class="panel" :style="panelWidthStyling">
    <div class="panel" :style="panelStyling">
      <div @mousedown="mouseDown" @mouseup="mouseUp" @refresh="onRefresh">
        <v-panel-header :loading="loading" :scrollTop="scrollTop" :service="service"></v-panel-header>
      </div>
      <div class="panel--content" :style="panelContentStyling" @scroll="onScroll">
        <transition name="slide">
          <v-panel-error @refresh="onRefresh" v-if="service.error === 'true'" :serviceId="serviceId" :serviceName="service.name"></v-panel-error>
        </transition>
        <component v-for="(component, index) in components" :key="index" :is="component.name" :props="component.props"></component>
      </div>
      <v-service-actions :service="service"></v-service-actions>
    </div>
    <div v-if="moveMouse" class="panel"></div>
  </div>
</template>

<style src="css/v-panel.scss"></style>

<script>
  import trackMouse from 'modules/track-mouse';
  import { mapGetters, mapState, mapMutations } from 'vuex';
  import dynamicImportComponent from 'modules/dynamic-import-component';
  import vPanelHeader from 'components/v-panel-header';
  import * as types from 'store/mutation-types';

  export default {
    components: {
      vPanelHeader,
      vPanelSubheader: dynamicImportComponent('v-panel-subheader'),
      vPanelError: dynamicImportComponent('v-panel-error'),
      vPanelItem: dynamicImportComponent('v-panel-item'),
      vPanelImage: dynamicImportComponent('v-panel-image'),
      vServiceActions: dynamicImportComponent('v-service-actions')
    },

    props: {
      serviceId: Number
    },
    mixins: [trackMouse],

    data () {
      return {
        loading: false,
        scrollTop: 0
      }
    },

    computed: {
      panelStyling () {
        return { ...this.panelWidthStyling, ...this.panelPositionStyling };
      },
      panelWidthStyling () {
        return {
          width: this.service.panelWidth + 'px'
        }
      },
      panelPositionStyling () {
        let position = {};
        // If mixin is tracking the mouse
        if (this.moveMouse) {
          position.position = 'absolute';
          position.zIndex = 3;
          position.left = (this.currentMouseLocation.x - this.$el.offsetLeft) + 'px';
        }
        return position;
      },
      panelContentStyling () {
        return {
          'padding-bottom': this.service.actions.length > 0 ? '50px' : 0
        }
      },
      components () {
        if (this.service.components) {
          return JSON.parse(this.service.components);
        } else {
          return {};
        }
      },
      panelOffset () {
        let offset = 0;
        let index = 0;
        const currentIndex = this.activeServices.indexOf(this.service);
        while(index < currentIndex && index < this.activeServices.length) {
          offset += this.activeServices[index].panelWidth;
          index++;
        }
        return { index, offset }
      },
      service (state) {
        return this.activeServices.find((service) => service.id === this.serviceId);
      },
      ...mapGetters([ 'activeServices' ]),
      ...mapState([ 'services', 'isStaticStartPage' ])
    },

    mounted () {
      chrome.runtime.onMessage.addListener((message) => {
        if (message.name === 'finishRefresh') {
          this.loading = false;
        }
      });
      this.currentMouseLocation.x = this.panelOffset.offset;
    },

    methods: {
      ...mapMutations({
        updateServiceOrder: types.RELOAD_SERVICEORDER
      }),
      onScroll(event) {
        this.scrollTop = event.target.scrollTop;
      },
      onRefresh () {
        this.loading = true;
        chrome.runtime.sendMessage({ name: 'startRefresh', serviceId: this.serviceId });
      },
      mouseDown (event) {
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
        this.currentMouseLocation.x = this.panelOffset.offset;
      },
      'currentMouseLocation.x' () {
        if (this.moveMouse) {
          const currentPos = this.activeServices.indexOf(this.service);
          let newPos = 0;
          let positionalOffset = 0;
          while (positionalOffset < this.currentMouseLocation.x - this.$el.offsetWidth/2 && newPos < this.activeServices.length) {
            positionalOffset += this.activeServices[newPos].panelWidth;
            newPos++;
          }
          if (newPos != currentPos) {
            const activeServicesIds = this.activeServices.map((service) => service.id);
            const oldPositionValue = activeServicesIds[currentPos];
            activeServicesIds[currentPos] = activeServicesIds[newPos];
            activeServicesIds[newPos] = oldPositionValue;
            localStorage.setItem('serviceOrder', activeServicesIds);
            this.updateServiceOrder();
          }
        }
      }
    }
  };
</script>
