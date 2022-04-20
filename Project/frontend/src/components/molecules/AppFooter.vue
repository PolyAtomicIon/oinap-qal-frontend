<template>
  <div
    class="footer desktop-only bg-transparent"
  >
    <q-separator color="dark-grey"/>
    <div class="footer__container">
      <div class="footer q-pa-lg">
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
    width: 740px;
  }
  &__title{
    color: $dark-grey;
    font-size: 16px;
  }
  &__links{
    font-size: 16px;
    color: $purple;
    cursor: pointer;
  }
}
</style>
