<template>
  <div
    class="footer bg-transparent"
  >
    <q-separator color="dark-grey"/>
    <div class="footer__container q-pa-lg">
        <div
          class="footer__title"
          @click="$router.push('/home')"
        >
          <span>© 2022 </span>
          <span class="q-pl-xs"> Graduaders</span>
        </div>
        <div
          class="footer__links flex justify-between q-pt-sm"
        >
          <span>Пользовательское соглашение</span>
          <span>Политика конфиденциальности</span>
          <span>Техническая поддержка</span>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AppFooter',
});
</script>
<style lang="scss">
.footer{
  &__container{
    max-width: 740px;
    width: 100%;
  }
  &__title{
    cursor: pointer;
    color: $gray;
    font-size: 16px;
    width: 150px;
  }
  &__title:hover{
    color: $white;
  }
  &__links{
    font-size: 16px;
    color: $purple;
    cursor: pointer;
  }
  &__links span:hover{
    color: $accent;
  }
}
@media only screen and (max-width: 725px) {
  .footer{
    &__container{
      padding: 15px 0;
      text-align: center;
    }
    &__title{
      width: 100%;
    }
    &__links{
      display: flex;
      flex-direction: column;
    }
    &__links span{
      padding: 15px 0;
    }
  }

}
</style>
