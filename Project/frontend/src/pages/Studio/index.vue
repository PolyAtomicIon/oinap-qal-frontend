<template>
  <q-page class="table-container q-py-md">
    <div class="table__header q-px-md">
      Filter:
      <q-select
        v-model="filterBy"
        dense
        standout
        emit-value
        :options="filterProperties"
        options-dense
        dark
        color="white"
        class="q-ml-md"
        style="width: 150px"
      />
    </div>

    <q-table
      :rows="rows"
      :columns="columns"
      dark
      flat
      card-class="bg-dark-light"
      table-class="text-white"
      table-header-class="text-grey"
      hide-top
      row-key="index"
      class="table__body"
    >
      <template v-slot:header="props">
        <q-tr :props="props" class="text-grey">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
          <q-th auto-width />
          <q-th auto-width />
          <q-th auto-width />
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <q-img
              v-if="col.name == 'cover' && col.value"
              :src="col.value"
              :ratio="16 / 9"
              fit="cover"
              class="rounded-borders"
              width="96px"
            >
            </q-img>
            <q-img
              v-else-if="col.name == 'cover'"
              src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700924686.jpg"
              :ratio="16 / 9"
              fit="cover"
              class="rounded-borders"
              width="96px"
            >
            </q-img>

            <q-rating
              v-else-if="col.name == 'rating'"
              :model-value="col.value"
              color="yellow-5"
              icon="star_border"
              icon-selected="star"
              style="min-width: 80px"
            ></q-rating>
            <span v-else>
              {{ col.value }}
            </span>
          </q-td>
          <!-- delete -->
          <q-td auto-width>
            <q-btn
              size="sm"
              flat
              round
              color="white"
              @click="deleteGameActivator(props.row.index, props.row.name)"
              icon="delete"
            >
              <q-tooltip
                class="bg-white text-dark"
                anchor="top right"
                self="center end"
                >Delete</q-tooltip
              >
            </q-btn>
          </q-td>
          <!-- edit -->
          <q-td auto-width>
            <q-btn
              size="sm"
              color="white"
              flat
              round
              dense
              @click="props.expand = !props.expand"
              icon="edit"
            >
              <q-tooltip
                class="bg-white text-dark"
                anchor="top right"
                self="center end"
                >Edit</q-tooltip
              >
            </q-btn>
          </q-td>
          <!-- go to statistics -->
          <q-td auto-width>
            <q-btn
              size="sm"
              color="white"
              flat
              round
              dense
              @click="$router.push(`/games/${props.row.index}`)"
              icon="chevron_right"
            >
              <q-tooltip
                class="bg-white text-dark"
                anchor="top right"
                self="center end"
                >Statistics</q-tooltip
              >
            </q-btn>
          </q-td>
        </q-tr>

        <div class="blur-on-mobile blur-on-mobile-left mobile-only"></div>
        <div class="blur-on-mobile blur-on-mobile-right mobile-only"></div>
      </template>
    </q-table>

    <studio-delete-dialog
      :is-dialog-active="isDeleteDialogActive"
      :close-dialog="toggleDeleteDialogActive"
      :delete-game="deleteGame"
      :game-title="activeGameTitle"
    >
    </studio-delete-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { provider } from '../../services';
import { IStudioGameData } from '../../entities';
import StudioDeleteDialog from '../../components/molecules/StudioDeleteDialog.vue';
import { IStudioService } from '../../services/studio';
import { useUserStore } from '../../store/user';

const columns = [
  {
    name: 'index',
    label: '#',
    field: 'index',
  },
  { name: 'cover', align: 'center', label: 'Cover', field: 'cover' },
  { name: 'name', label: 'Name', align: 'left', field: 'name' },
  { name: 'played', label: 'Played', field: 'played', sortable: true },
  { name: 'feedbacks', label: 'Feedbacks', field: 'feedbacks', sortable: true },
  {
    name: 'rating',
    align: 'left',
    label: 'Rating',
    field: 'rating',
    sortable: true,
  },
];

export default defineComponent({
  name: 'StudioIndex',
  components: {
    StudioDeleteDialog,
  },
  setup() {
    const filterProperties = ref(['Newest', 'Oldest', 'Popularity']);
    const filterBy = ref('Newest');

    const user = useUserStore();
    const studioService: IStudioService = provider().Studio;

    const isDeleteDialogActive = ref(false);
    const activeGameTitle = ref('');
    const toggleDeleteDialogActive = () => {
      isDeleteDialogActive.value = !isDeleteDialogActive.value;
    };

    let rows = ref([]);
    const loadGames = () => {
      void studioService.getAllGames().then(({ data }) => {
        data = data.data.filter(
          (game: IStudioGameData) => game.user === user.user.id
        );
        console.log(data);
        rows.value = data.map((game: IStudioGameData) => {
          return {
            index: game.id,
            cover: game.cover,
            name: game.title,
            played: game.played_count,
            feedbacks: game.views,
            rating: game.total_rate,
          };
        });
      });
    };
    loadGames();

    let currentGameId: number | null = null;
    const deleteGameActivator = (id: number, title: string) => {
      console.log(id, title);
      currentGameId = id;
      activeGameTitle.value = title;
      toggleDeleteDialogActive();
    };
    const deleteGame = () => {
      if (currentGameId) {
        toggleDeleteDialogActive();
        void studioService.deleteGame(currentGameId).then(() => {
          loadGames();
        });
        currentGameId = null;
      }
    };

    return {
      columns,
      rows,
      filterProperties,
      filterBy,
      isDeleteDialogActive,
      toggleDeleteDialogActive,
      deleteGame,
      deleteGameActivator,
      activeGameTitle,
    };
  },
});
</script>

<style lang="scss" scoped>
.table {
  &-container {
  }
  &__header {
    display: flex;
    align-items: center;
    color: $grey;
    margin-bottom: 20px;
  }
  &__body {
    position: relative;
  }
}

.blur-on-mobile {
  height: 100%;
  position: absolute;
  top: 50px;
  &-left {
    left: 0px;
    width: 2px;
    background: rgba($dark-light, 0.1);
    &::after {
      content: '';
      height: 100%;
      width: 13px;
      position: absolute;
      left: 0;
      top: 0;
      filter: blur(4px);
      background: rgb(32, 32, 32);
      background: linear-gradient(
        80deg,
        rgba(32, 32, 32, 0.9) 0%,
        rgba(217, 217, 235, 0) 96%
      );
    }
  }
  &-right {
    right: 0px;
    width: 2px;
    background: rgba($dark-light, 0.1);
    &::before {
      content: '';
      height: 100%;
      width: 13px;
      position: absolute;
      right: 0;
      top: 0;
      filter: blur(4px);
      background: rgb(217, 217, 235);
      background: linear-gradient(
        90deg,
        rgba(217, 217, 235, 0) 0%,
        rgba(32, 32, 32, 1) 96%
      );
    }
  }
}
</style>
