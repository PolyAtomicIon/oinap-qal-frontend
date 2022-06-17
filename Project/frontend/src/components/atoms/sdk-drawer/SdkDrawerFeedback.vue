<template>
  <div class="q-mt-xl q-pb-lg">
    <div v-if="user.loggedIn">
      <div class="flex items-center">
        <img
          v-if="user.user.avatar"
          :src="user.user.avatar"
          class="sdk-feedback__img"
        />

        <h6 class="q-my-none q-ml-md">{{ user.user.username }}</h6>
      </div>
      <div>
        <q-form @submit="onSubmit" class="sdk-feedback">
          <div class="flex justify-center">
            <q-rating
              v-model="rating"
              size="2em"
              color="yellow-5"
              max="5"
              icon="star_border"
              icon-selected="star"
              no-dimming
            ></q-rating>
          </div>
          <div class="q-px-none q-pb-none">
            <q-input
              dark
              dense
              rounded
              outlined
              type="textarea"
              class="q-mt-md full-width sdk-feedback__comment"
              v-model="comment"
            />
          </div>

          <div class="q-px-none q-py-lg">
            <q-btn
              unelevated
              dense
              rounded
              class="text-capitalize full-width"
              color="primary"
              type="submit"
              label="Send"
            >
            </q-btn>
          </div>
        </q-form>
      </div>
    </div>
    <div v-if="!user.loggedIn" class="flex justify-center sdk-feedback__auth">
      <h5 class="text-white">Login to leave comments</h5>
    </div>

    <div>
      <span class="q-ma-none sdk-feedback__all-comments">All comments</span>
      <comment
        v-for="user in gameComments.reverse()"
        :key="user.user"
        :user="user"
        class="q-my-md"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Comment from '../sdk-drawer/SdkDrawerComment.vue';
import { computed, defineComponent, onMounted, ref } from 'vue';
import { IGameFeedbackService, provider } from '../../../services/index';
import { useRoute } from 'vue-router';
import { ICommentData } from 'src/entities';
import { useUserStore } from 'src/store/user/index';

const asd: Array<object> = [];

export default defineComponent({
  name: 'sdkDrawerFeedback',
  components: {
    Comment,
  },
  props: {
    comments: {
      type: Array,
      default: asd,
    },
  },
  setup() {
    const rating = ref(0);
    const comment = ref('');
    const onSubmit = () => {
      if (comment.value) {
        void setComment();
      }
      if (rating.value) {
        void setFeedback();
      }
    };
    const user = useUserStore();

    const gameCommentService: IGameFeedbackService = provider().GameFeedback;
    const $route = useRoute();
    const gameTitle = computed(() => $route.params.game_id).value;

    const commentService: IGameFeedbackService = provider().GameFeedback;
    let gameComments = ref<ICommentData[]>([]);
    let isFetched = ref(false);

    const setComment = async () => {
      console.log(user.user);
      await gameCommentService.setOneComment({
        game: gameTitle,
        author: user.user.id,
        content: comment.value,
        parent: null,
      });
      await fetchComments();
    };
    const setFeedback = () => {
      void gameCommentService
        .setOneFeedback({
          game: gameTitle,
          user: 3,
          value: rating.value,
        })
        .then(function (response) {
          console.log(response);
        });
    };
    const fetchComments = async () => {
      isFetched.value = false;
      gameComments.value = [];
      let commentResponse;
      commentResponse = await commentService.getAllCommentByGame(+gameTitle);
      gameComments.value = commentResponse.data.data;

      isFetched.value = true;
    };
    onMounted(fetchComments);

    return {
      gameComments,
      onSubmit,
      comment,
      rating,
      user,
    };
  },
});
</script>

<style lang="scss">
.sdk-feedback {
  padding: 0 32px;
  padding-top: 24px;
  @media screen and (max-width: $breakpoint-sm) {
    padding-left: 0px;
    padding-right: 0px;
  }
  &__img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  &__comment {
  }
  &__auth {
    height: 200px;
  }
  &__all-comments {
    display: block;
    font-size: 24px;
  }
}
</style>
