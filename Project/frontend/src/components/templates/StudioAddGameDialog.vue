<template>
  <q-dialog
    :model-value="isDialogActive"
  >
    <q-card dark class="bg-dark-light upload-file-card">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Add game</div>
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
import { defineComponent, ref, reactive } from 'vue'
import { IGameTag, IGameForm } from '../../models/Game.interfaces';
import StudioUploadForm from '../molecules/StudioUploadForm.vue'
import StudioAddGameForm from '../molecules/StudioAddGameForm.vue'

export default defineComponent({
  name: 'StudioAddGameDialog',
  components: {
    StudioUploadForm,
    StudioAddGameForm
  },
  props: {
    isDialogActive: {
      type: Boolean,
      default: false
    },
    closeDialog: {
      type: Function,
      default: () => ({})
    }
  },
  setup(props) {
    const step = ref(1)

    let form: IGameForm = reactive({
      fileName: 'string',
      file: null,
      cover: null,
      name: '',
      description: '',
      tags: {} as IGameTag,
    });

    const fileUploaded = (file: File[]) => {
      if( file.length > 0 && !file[0] ){
        return
      }
      form.file = file[0]
      form.fileName = file[0].name
      step.value = 2
    }

    const onSubmit = ({
      name,
      description,
      cover,
      tags
    }: IGameForm) => {
      form.name = name
      form.description = description
      form.cover = cover
      form.tags = tags

      props.closeDialog()
    }

    return {
      step,
      form,
      fileUploaded,
      onSubmit
    }
  },
})
</script>

<style lang="scss" scoped >
</style>
