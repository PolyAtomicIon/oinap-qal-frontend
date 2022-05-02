<template>
  <q-drawer
    :model-value="leftDrawerOpen"
    side="left"
    overlay
    elevated
    class="bg-dark relative-position flex column justify-center "
    :width="responsiveWidth"
  >
    <q-btn
      dense
      flat
      round
      icon="close"
      @click="this.$emit('close')"
      class="sdk__btn bg-secondary"
    />
    <q-splitter
      :model-value="64"
      unit="px"
      style="height: 100%"
      :limits="[64, Infinity]"
    >

      <template v-slot:before>
        <div class="absolute-center">
          <q-tabs
            v-model="tab"
            indicator-color="transparent"
            active-color="white"
            class="text-grey sdk__navbar"
            align="left"
            vertical
          >
            <q-tab name="info" icon="info" />
            <q-tab name="feedback" icon="message"  />
            <q-tab name="rating" icon="star"  />
            <q-tab name="share" icon="share"  />
          </q-tabs>
        </div>
      </template>

      <template v-slot:after>

        <q-tab-panels
          v-model="tab"
          animated
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
          class="bg-secondary text-white"
          dark
          style="height: 100%"
        >

          <q-tab-panel name="info">
            <info
              :title="gameAbout.title"
              :author="gameAbout.author"
              :rating="gameAbout.rating"
              :info="gameAbout.about"
              :img="gameAbout.img"
            />
          </q-tab-panel>

          <q-tab-panel name="feedback">
            <feedback
              :comments="gameAbout.comments"
            />
          </q-tab-panel>

          <q-tab-panel class="q-pa-none" name="rating">
            <leaders
              :leaders="gameAbout.leaders"
            />
          </q-tab-panel>

          <q-tab-panel name="share">
            <share/>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>

  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import Info from '../atoms/sdk-drawer/SdkDrawerInfo.vue'
import Feedback from '../atoms/sdk-drawer/SdkDrawerFeedback.vue'
import Leaders from '../atoms/sdk-drawer/SdkDrawerLeaderboard.vue'
import Share from '../atoms/sdk-drawer/SdkDrawerShare.vue'

const defGameInfo= {
  img:'image43.png',
  title:'Forest Match',
  author:'Elizabeth Olsen',
  rating:4.5,
  about:'Earn points by combining the same fruits, plants and other forest objects. Combine at least three identical objects to collect them, or connect a large number of identical objects to create powerful bonuses. These bonuses will help you remove soil, grass, moss, stone or ice and collect the necessary number of objects to complete the level. Swap objects using touch controls or mouse and unlock boosters that will help you in the game.',
  comments:[
    {
      img:'',
      name:'Houston',
      rating:5,
      comment:'We have a problem\n' +
        ':D'
    },
    {
      img:'',
      name:'Houston',
      rating:3,
      comment:'We have a problem\n' +
        ':D'
    },
    {
      img:'',
      name:'Houston',
      rating:3,
      comment:'We have a problem\n' +
        ':D'
    },
    {
      img:'',
      name:'Houston',
      rating:3,
      comment:'We have a problem\n' +
        ':D'
    },
  ],
  leaders:[
    {
      name:'Ellen Humburg',
      score:14444,
    },
    {
      name:'Alice Smit',
      score:10203,
    },
    {
      name:'Jack Maslow',
      score:9001,
    },
    {
      name:'Tom Holland',
      score:5505,
    },
    {
      name:'Robert Downey Jr',
      score:4765,
    },
  ]
}

export default defineComponent({
  name: 'SdkDrawer',
  components: {
    Info,
    Feedback,
    Leaders,
    Share
  },
  props: {
    leftDrawerOpen: {
      type: Boolean,
      default: false,
    },
    gameAbout:{
      type: Object,
      default:defGameInfo
    }
  },
  setup () {
    const tab = ref('info');
    const rating= ref(0)
    const comment = ref('')
    const $q = useQuasar();
    const responsiveWidth = computed(() => {
      return $q.platform.is.mobile ? 350 : 550;
    });

    return {
      comment,
      rating,
      tab,
      responsiveWidth
    }
  }
});
</script>

<style lang="scss" scoped>
  .sdk{
    &__navbar {
      position: relative;
      background: $dark;
      width: 64px;
    }
    &__btn{
      position: absolute;
      top: 24px;
      right: 24px;
      z-index: 1;
      color: white;
    }
  }
</style>
