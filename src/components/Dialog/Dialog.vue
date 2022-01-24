<template>
  <div>
    <el-dialog
      v-model="visible"
      destroy-on-close
      v-bind="$attrs"
      @close="handlerClose"
    >
      <template #title>
        <div class="text-left">
          {{ title }}
        </div>
      </template>
      <slot />
      <template #footer v-if="hasFooter">
        <el-button size="small" @click="handlerCansole">取消</el-button>
        <el-button size="small" type="primary" @click="handlerSave"
          >保存</el-button
        >
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref } from "vue";
import { useVModels } from "@vueuse/core";
export default defineComponent({
  name: "Dialog",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    hasFooter: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["handlerSave", "close"],
  setup(props, { emit, attrs }) {
    const { visible, title, hasFooter } = useVModels(props, emit);

    function handlerClose() {
      visible.value = false;
      emit("close");
    }
    function handlerCansole() {
      handlerClose();
    }
    function handlerSave() {
      emit("handlerSave");
    }
    return {
      visible,
      title,
      hasFooter,
      ...toRefs(attrs),
      handlerClose,
      handlerCansole,
      handlerSave,
    };
  },
});
</script>