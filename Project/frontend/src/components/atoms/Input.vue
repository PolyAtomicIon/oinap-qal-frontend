<template>
    <input class="input" :type="type" :label="label" :value="value" :style="'width:'+size+'%' ">
</template>

<script>
export default {
  name: 'Input',
  props:{
    type:{
      type:String,
      default:''
    },
    label:{
      type:String,
      default:''
    },
    value:{
      type:String,
      default:''
    },
    size:{
      type:Number,
      default:200
    }
  }
}
</script>

<style lang="scss">
.input{
  display: block;
  border-radius: 16px;
  background-color: #343434;
  max-width: 100%;
  color: white;
  height: 48px;
  margin: 8px 0;
  padding-left: 15px;
}
</style>
