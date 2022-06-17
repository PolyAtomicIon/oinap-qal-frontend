<template>
  <q-dialog :model-value="isDialogActive">
    <q-card dark class="bg-dark-light">
      <q-card-section class="row items-center q-pb-none">
        <div class="flex items-center">
          <span class="text-h6">Add game</span>
          <q-btn
            class="q-ml-sm"
            color="primary"
            round
            flat
            to="/studio/guide"
            icon="info"
          />
        </div>
        <q-space />
        <q-btn @click="closeDialog" icon="close" flat round dense />
      </q-card-section>

      <studio-upload-form
        v-if="step == 1"
        :value="form.file"
        @input="fileUploaded"
      />
      <studio-add-game-form
        v-else
        :fileName="form.fileName"
        @submit="onSubmit"
      />
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { IGameForm } from '../../entities/Game.interfaces';
import StudioUploadForm from '../molecules/StudioUploadForm.vue';
import StudioAddGameForm from '../molecules/StudioAddGameForm.vue';
import { IStudioService } from '../../services/studio';
import { provider } from '../../services';
import { useRouter, } from 'vue-router';
import { useUserStore } from '../../store/user';

export default defineComponent({
  name: 'StudioAddGameDialog',
  components: {
    StudioUploadForm,
    StudioAddGameForm,
  },
  props: {
    isDialogActive: {
      type: Boolean,
      default: false,
    },
    closeDialog: {
      type: Function,
      default: () => ({}),
    },
  },
  setup(props) {
    const step = ref(1);
    const user = useUserStore();
    const $router = useRouter();

    let form: IGameForm = reactive({
      fileName: 'string',
      file_id: null,
      cover: null,
      name: '',
      description: '',
      tags: '',
    });

    const studioService: IStudioService = provider().Studio;

    const fileUploaded = (file: File[]) => {
      if (file.length > 0 && !file[0]) {
        return;
      }
      form.fileName = file[0].name;
      let newFormData = new FormData();
      // @ts-ignore
      newFormData.append('file', file[0]);

      void studioService.uploadGame(newFormData).then(({ data }) => {
        step.value = 2;
        form.file_id = data.game_id;
      });
    };

    const onSubmit = ({ name, description, cover, tags }: IGameForm) => {
      form.name = name;
      form.description = description;
      form.cover = cover;
      form.tags = tags[0];
      if (user.user.id) {
        void studioService.addGame({
          title: name,
          description: description,
          category: 1,
          user: user.user.id,
          file_id: form.file_id,
          tags: form.tags,
        }).then(() => {
          $router.go(0)
        });
      }

      step.value = 1;
      props.closeDialog();
    };

    return {
      step,
      form,
      fileUploaded,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped></style>
