
export default {
  title: 'QuasarForm'
}

export const Components = () => ({
  title: 'Form',
  template: `<q-layout>
    <q-page-container>
      <q-page class="full-height full-width justify-center items-center q-pa-xl">
        <div class="col-auto">
          <q-input v-model="name" label="Full name" />
          <q-select v-model="role" :options="options" label="User Role" />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>`,
  data() {
    return {
      name: null,
      role: 'user',
      options: ['Admin', 'Supervisor', 'user']
    }
  }
})
