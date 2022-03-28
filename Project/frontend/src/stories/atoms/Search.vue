<template>
  <input class="search" type="search" Placeholder="search">

</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped>
.search{
  background: url(../assets/Icon.svg) no-repeat scroll 365px 5px;
  padding-left:10px;
  border-radius: 16px;
  background-color: #343434;
  color: white;
  width: 100%;
  max-width: 400px;
}
.search::placeholder{
  color: #858585;
}
</style>
