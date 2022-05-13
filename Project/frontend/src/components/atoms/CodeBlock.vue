<template>
  <pre class="syntax">{{ code }}</pre>
</template>

<script>
export default {
  name: 'CodeBlock',
  props: {
    code: {
      type: String,
      default: 'window.top.postMessage({\n\tname: "showAd",\n}, '*')'
    },
  },
};
</script>

<style lang="scss" scoped>
.syntax {
  background: #222;
  color: #eee;
  margin: 10px;
  border: solid thin #333;
  span {
    counter-increment: linecounter;
    &:before {
      content: counter(linecounter);
      width: 1.2em;
      text-align: center;
      display: inline-block;
      border-right: 1px solid #444;
      margin-right: 10px;
      font-style: normal !important;
      color: #444 !important;
    }
  }
}
#template {
  display: none;
}
.num {
  font-weight: 600;
  color: #d0782a;
}
[class*='var'] {
  font-weight: 600;
}
.clr {
  border-radius: 1px;
  color: white;
  font-weight: 400;
}
.str {
  color: #ddca7e !important;
  font-weight: 400 !important;
  i {
    color: #ddca7e !important;
    font-weight: 400 !important;
  }
}
.reg {
  color: #ddca7e !important;
  font-weight: 500;
  i {
    color: #ddca7e !important;
    font-weight: 500;
  }
}
.cmnt {
  color: #555 !important;
  font-weight: 400 !important;
  i {
    color: #555 !important;
    font-weight: 400 !important;
  }
}
@media (max-width: 400px) {
  .syntax {
    font-size: 12px;
  }
}
</style>
