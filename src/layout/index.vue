<template>
  <div class="contenter">
    <div class="header">
      <NavBar />
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/layout/components/nav/index.vue";
export default defineComponent({
  components: { NavBar },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.contenter {
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  .header {
    height: 30px;
    width: 100%;
    display: flex;
    // justify-content: center;
    align-items: center;
    background: red;
  }
  .main {
    flex: 1;
  }
}
</style>


