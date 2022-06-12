<template>
  <div class="q-mt-xl q-pb-lg">
    <div class="flex items-center">
      <img :src="require('../../../assets/user/False.png')" width="80" />
      <h6 class="q-my-none q-ml-md">Alexa Jackson</h6>
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
    <div>
      <span class="q-ma-none sdk-feedback__all-comments">All comments</span>
      <comment
        v-for="user in gameComments"
        :key="user.user"
        :user="user"
        class="q-my-md"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Comment from '../sdk-drawer/SdkDrawerComment.vue';
import {computed, defineComponent, onMounted, ref} from 'vue';
import {IGameFeedbackService, provider} from '../../../services/index';
import {useRoute} from 'vue-router';
import {ICommentData} from 'src/entities';

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
      if(comment.value){
         setComment()
      }
      if(rating.value){
         setFeedback()
      }
    };
    const gameCommentService: IGameFeedbackService = provider().GameFeedback;

    const $route = useRoute();
    const gameTitle = computed(() => $route.params.game_id).value

    const commentService: IGameFeedbackService = provider().GameFeedback;
    let gameComments = ref<ICommentData[]>([]);
    let isFetched = ref(false);


    const setComment = () => {
      void gameCommentService.setOneComment({
        game:gameTitle,
        author:2,
        content:comment.value,
        parent:null
      }).then(function (response){
        console.log(response)
      });
      void fetchComments()
    };
    const setFeedback = () => {
     void gameCommentService.setOneFeedback({
        game:gameTitle,
        user:3,
        value:rating.value
      }).then(function (response){
        console.log(response)
      });
    };



    const fetchComments = async () => {
      isFetched.value = false;
      gameComments.value = [];
      let commentResponse
      commentResponse = await commentService.getAllCommentByTitle(
        gameTitle as string
      );
      gameComments.value = commentResponse.data.data ;

      console.log(gameComments.value)

      isFetched.value = true;
    };
    onMounted(fetchComments);

    return {
      gameComments,
      onSubmit,
      comment,
      rating,
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
  &__comment {
  }
  &__all-comments {
    display: block;
    font-size: 24px;
  }
}
</style>
