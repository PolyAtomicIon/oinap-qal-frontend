<template>
  <div class="search">
    <input  class="search__input" type="search"  Placeholder="search">
    <q-icon class="search__icon" size="18px" color="grey-7" name="search" ></q-icon>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="scss">
.search{
  &__input{
    background: transparent;
    width: 100%;
    padding-left:20px;
    border: none;
    color: white;
    outline-style: none;
    height: 30px;
  }
  border-radius: 16px;
  background-color: $black2;
  width: 100%;
  max-width: 400px;
  position: relative;
  &__icon{
    position: absolute;
    right: 9px;
    top: 6.5px;
  }
}
.search::placeholder{
  color: $gray;
}

</style>
