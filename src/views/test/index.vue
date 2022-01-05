<template>
  <div>
    sdfasdf{{ store.state.test.name }} {{ store.state.test.sex }}
    {{ store.state.test.age }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { SettingActionsType } from "@/store/modules/test/actions-type";
export default defineComponent({
  setup() {
    const store = useStore();
    store.dispatch(SettingActionsType.ACTIONG_CHANGE_SETTING, {
      name: "李四",
      age: "323",
      sex: "nv",
    });
    console.log(store, "gggg");

    return { store };
  },
});
</script>
