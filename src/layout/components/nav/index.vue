<template>
  <div class="w-full flex items-center relative">
    <!-- <el-button type="primary" >点击我</el-button> -->
    <el-menu :default-active="activeIndex" mode="horizontal">
      <el-menu-item index="1" @click="handlerClickApp"
        >Processing Center</el-menu-item
      >
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3" @click="handlerClickTest">Info</el-menu-item>
      <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>
    <div class="flex w-200 absolute right-0">
      <span>With default value</span>
      <el-color-picker v-model="color1" @change="handlerChangeColor" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const activeIndex = ref("1");
    const color1 = ref<string>("#DD4646");
    const router = useRouter();
    const state = reactive({
      name: "张三",
      handlerClickTest() {
        router.push("/app");
      },
      handlerClickApp() {
        router.push("/test");
      },
      handlerChangeColor() {
        console.log(color1.value);
        document.documentElement.style.setProperty(
          "--el-color-primary",
          color1.value
        );
        console.log(document.documentElement, "ssdf");
      },
    });
    return {
      color1,
      activeIndex,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
:root {
  --el-color-primary: v-bind(color1.value); //#D71E1E
}
</style>
