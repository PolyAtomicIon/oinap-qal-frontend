<template>
  <div class="q-mt-xl">
    <div class="flex items-center">
      <img :src="require('../../../assets/user/False.png')" width="80">
      <h6 class="q-my-none q-ml-md">Alexa Jackson</h6>
    </div>
    <div>

      <q-form @submit="onSubmit" class="q-px-lg q-pt-lg">
        <div class="flex justify-center">
          <q-rating
            v-model="rating"
            size="2em"
            color="grey-5"
            max="5"
            icon="star_border"
            icon-selected="star"
            no-dimming
          ></q-rating>
        </div>
        <div class="q-px-none q-pb-none">
                    <textarea
                      class="text-white bg-dark full-width q-mt-sm sdk-feedback__comment"
                      v-model="comment"
                    >
                    </textarea>
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
  <div>
    <span class="q-ma-none sdk-feedback__all-comments">All comments</span>
    <comment
      v-for="user in comments"
      :key="user.name"
      :user="user"
      class="q-my-md"
    />
  </div>
</template>

<script lang="ts">
import Comment from '../sdk-drawer/SdkDrawerComment.vue'
import {defineComponent, ref} from 'vue';
const asd:Array<object>=[]

export default defineComponent({
  name: 'sdkDrawerFeedback',
  components:{
    Comment
  },
  props:{
    comments:{
      type:Array,
      default:asd
    }
  },
  setup(){
    const rating=ref(0)
    const comment=ref('')
    const onSubmit = () => {
      console.log(comment.value);
      console.log(rating.value);
    };
    return{
      onSubmit,
      comment,
      rating
    }
  }
})
</script>

<style lang="scss">
.sdk-feedback{
  &__comment{
    resize: none;
    height: 240px;
    border: 1px solid $dark-grey;
    border-radius: 10px;
  }
  &__all-comments{
    display: block;
    font-size: 24px;
  }
}
</style>
