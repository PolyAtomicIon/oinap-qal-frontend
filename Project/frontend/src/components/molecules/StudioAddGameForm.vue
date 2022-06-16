<template>
  <q-card-section>
    <q-form @submit="onSubmit" class="q-gutter-md add-game__form">
      <!-- file -->
      <div class="add-game__form__field">
        <label for="file">File</label>
        <p class="text-primary q-py-sm">{{ form.fileName }}</p>
      </div>

      <!-- cover -->
      <div class="add-game__form__field">
        <label for="cover">Cover</label>
        <q-img
          v-if="coverPreviewLink != ''"
          :src="coverPreviewLink"
          spinner-color="primary"
          fit="cover"
          class="rounded-borders q-my-sm"
          style="display: block"
          width="120px"
          height="80px"
        />
        <q-file
          dense
          dark
          borderless
          label-color="primary"
          label="Upload image"
          accept=".jpg, .png, "
          v-model="form.cover"
          @update:model-value="updateCover()"
        >
          <template v-slot:prepend>
            <q-icon name="upload" color="primary" @click.stop />
          </template>
        </q-file>
      </div>

      <!-- name -->
      <div class="add-game__form__field">
        <label for="name">Name</label>
        <q-input
          dense
          standout
          rounded
          bg-color="grey-9"
          class="q-mt-sm"
          v-model="form.name"
        >
        </q-input>
      </div>

      <!-- description -->
      <div class="add-game__form__field">
        <label for="description">Description</label>
        <q-input
          dense
          rounded
          standout
          type="textarea"
          bg-color="grey-9"
          class="q-mt-sm"
          v-model="form.description"
        />
      </div>

      <!-- tags -->
      <div class="add-game__form__field">
        <label for="description">Tags</label>

        <div class="q-gutter-xs q-mt-md">
          <q-chip
            v-for="(value, name) in tags"
            :key="name"
            :color="value.isChosen ? 'primary' : 'grey'"
            :outline="!value.isChosen"
            text-color="white"
            size="md"
            class="q-pa-lg"
            clickable
            @click="
              () => {
                tags[name].isChosen = !tags[name].isChosen;
              }
            "
          >
            {{ name }}
          </q-chip>
        </div>
      </div>

      <!-- save button -->
      <div>
        <q-btn
          label="Save changes"
          color="primary"
          type="submit"
          class="upload-btn q-mt-xs fit"
        >
        </q-btn>
      </div>
    </q-form>
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { useCategoriesStore } from '../../store/categories';
import { IGameTag, IGameForm } from '../../entities/Game.interfaces';

export default defineComponent({
  name: 'StudioAddGameForm',
  emits: ['submit'],
  props: {
    fileName: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const categoriesStore = useCategoriesStore();

    const tags: IGameTag = reactive({});
    categoriesStore.categories.forEach((category) => {
      tags[category.title] = {
        isChosen: false,
        id: category.id,
      };
    });

    const form: IGameForm = reactive({
      fileName: props.fileName,
      file: null,
      cover: null,
      name: '',
      description: '',
      tags: [],
    });

    let coverPreviewLink = ref('');
    const updateCover = () => {
      console.log(form.cover);
      if (form.cover) coverPreviewLink.value = URL.createObjectURL(form.cover);
    };

    const onSubmit = () => {
      for (const [key, tag] of Object.entries(tags)) {
        if (tag.isChosen) {
          console.log(key)
          form.tags.push(tag.id);
        }
      }

      emit('submit', form);
    };

    return {
      onSubmit,
      tags,
      form,
      updateCover,
      coverPreviewLink,
    };
  },
});
</script>

<style lang="scss" scoped>
.add-game__form {
  width: 500px;
  border-radius: 14px;
  @media screen and (max-width: $breakpoint-xs) {
    max-width: 280px;
  }
  &__field {
    color: $grey !important;
  }
}
</style>
