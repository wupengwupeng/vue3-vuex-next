<template>
  <div>
    <el-button @click="handlerClickTest">点击我</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const state = reactive({
      name: "张三",
      handlerClickTest() {
        router.push("/app");
      },
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
