<template>
  <div>
    sdfasdf{{ store.state.test.name }} {{ store.state.test.sex }}
    {{ store.state.test.age }}
    <div class="bg-slate-500">asdfsdf</div>
    <el-button type="primary">惦记我</el-button>
    <el-link>primary</el-link>
    <div class="border">
      值为{{ count }} 值2为{{ count2 }}
      <MyInput v-model:value="count" v-model:value2="count2" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "@/store";
import { SettingActionsType } from "@/store/modules/test/actions-type";
import MyInput from "@/components/MyInput/index.vue";
export default defineComponent({
  // name: "test",
  components: {
    MyInput,
  },
  setup() {
    const store = useStore();
    const count = ref("");
    const count2 = ref("");
    store.dispatch(SettingActionsType.ACTIONG_CHANGE_SETTING, {
      name: "李四",
      age: "323",
      sex: "nv",
    });
    console.log(store, "gggg");

    return { count, count2, store };
  },
});
</script>
