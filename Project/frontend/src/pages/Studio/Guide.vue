<template>
  <q-page class="guide q-pa-md">
    <div class="guide__header">
      <h1 class="text-h1 text-white">Developers Guide</h1>
      <p class="text-subtitle1 text-grey text-weight-light">
        Introduction. How to upload game and integrate to platform.
      </p>
    </div>
    <div class="guide__wrapper">
      <section class="guide__section guide__toc">
        <h2 class="text-h2 text-white">Contents</h2>
        <ol>
          <li v-for="link in tableOfContents" :key="link.id">
            <a @click="scrollToElement(link.id)">{{ link.title }}</a>
          </li>
        </ol>
      </section>

      <section class="guide__section" id="about" name="about">
        <h2 class="text-h2 text-white">
          <strong class="text-primary"> # </strong>About platform
        </h2>
        <p class="guide__p text-subtitle1">
          <strong>OinapQal</strong> is a directory of browser games that can be
          played on both mobile phones and computers. OinapQal users appreciate
          the ability to play without downloading and compete. Add brand new
          games as well as those already published on other platforms.
        </p>
      </section>

      <section class="guide__section" id="upload" name="upload">
        <h2 class="text-h2 text-white">
          <strong class="text-primary"> # </strong>Add Game
        </h2>
        <p class="guide__p text-subtitle1">
          To Upload a game you should first authorize as
          <strong> Developer </strong>. After in
          <router-link to="/studio" class="text-bold text-primary"
            >/studio</router-link
          >
          click button <strong class="text-primary"> Add game </strong>.
        </p>

        <h3 class="text-h3 text-white">File Upload</h3>
        <p class="guide__p text-subtitle1">
          In first dialog choose
          <strong class="text-primary"> .zip </strong> file with HTML5 game
          files. Try to reduce files size by compressing, it will increase
          performance and overall experience of gamers.
        </p>

        <h3 class="text-h3 text-white">Recommended files structure</h3>
        <p class="guide__p text-subtitle1">
          You can have any files structure, but to avoid unknown bugs, we
          recommend above file structure for your games.
        </p>
        <q-tree
          :nodes="filesStructureExample"
          node-key="label"
          selected-color="primary"
          color="white"
          class="quide__tree"
          dark
          accordion
          :selected="selected"
          default-expand-all
        />
      </section>

      <section class="guide__section" id="api" name="api">
        <h2 class="text-h2 text-white">
          <strong class="text-primary"> # </strong>API
        </h2>
        <p class="guide__p text-subtitle1">
          Curently there are two API for communication between game and our
          platform.
        </p>
        <ol class="guide__api-list">
          <li>
            On Game Finished
            <p>
              Gets <strong class="text-primary">finalScore</strong> and saves
              score. Also if playing through TelegramBotApi sends request to
              save score.
            </p>
            <code-block
              :code="`window.top.postMessage({\n\tname: 'gameFinished',\n\tfinalScore\n}, '*')`"
            >
            </code-block>
          </li>
          <li>
            Show Ad.
            <p>
              Activates Ad Window. Can be used before launching game level, game over
              or giving extra goods for viewing ad.
            </p>
            <code-block
              :code="`window.top.postMessage({\n\tname: 'showAd',\n}, '*')`"
            >
            </code-block>
          </li>
        </ol>
      </section>
    </div>
  </q-page>
</template>

<script lang="ts">
import CodeBlock from '../../components/atoms/CodeBlock.vue';
import { defineComponent, ref } from 'vue';
import { scroll } from 'quasar';

export default defineComponent({
  name: 'Guide',
  components: {
    CodeBlock,
  },
  setup() {
    const { getScrollTarget, setVerticalScrollPosition } = scroll;
    // takes an element object
    const scrollToElement = (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      const target = getScrollTarget(el);
      const offset = el.offsetTop;
      const duration = 400;
      setVerticalScrollPosition(target, offset, duration);
    };

    const tableOfContents = [
      {
        title: 'About',
        id: 'about',
      },
      {
        title: 'Uploading game',
        id: 'upload',
      },
      {
        title: 'API',
        id: 'api',
      },
    ];

    const selected = ref('index.html');
    const filesStructureExample = [
      {
        label: 'OinapQal.SpookyGame',
        children: [
          {
            label: 'main.js',
            icon: 'javascript',
          },
          {
            label: 'index.html',
            icon: 'html',
          },
          {
            label: 'assets',
            icon: 'folder',
            children: [
              {
                label: 'styles',
                icon: 'folder',
                children: [
                  { label: 'main.css', icon: 'css' },
                  { label: 'variables.css', icon: 'css' },
                ],
              },
              {
                label: 'images',
                icon: 'folder',
                children: [
                  {
                    label: 'logo.png',
                    icon: 'image',
                  },
                  {
                    label: 'spooky.png',
                    icon: 'image',
                  },
                ],
              },
            ],
          },
        ],
      },
    ];

    return {
      tableOfContents,
      scrollToElement,
      selected,
      filesStructureExample,
    };
  },
});
</script>

<style lang="scss" scoped>
.guide {
  &__wrapper {
    max-width: 800px;
  }
  &__section {
    margin: 32px 0;
  }
  &__toc {
    ol {
      font-size: 16px;
      font-weight: 400;
      // font-style: italic;
      color: $grey;
      li {
        transition: 0.4s ease color;
        cursor: pointer;
        &:hover {
          color: $white;
        }
        &:active, &:focus {
          color: $primary;
        }
      }
    }
  }
  &__p {
    font-weight: 300;
    font-size: 18px;
    color: $white;
  }
  &__tree {
  }
  &__api-list {
    font-size: 16px;
    font-weight: 400;
    // font-style: italic;
    color: $white;
  }
}
</style>
