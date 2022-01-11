<template>
  <div>
    <input
      class="border"
      type="text"
      :value="value"
      @input="($event) => handlerInput($event)"
    />
    <input
      class="border"
      type="text"
      :value="value2"
      @input="($event) => handlerInput2($event)"
    />
    asdfasdfasdfsa
  </div>
</template>


<script lang="ts">
/*vue3自定义v-model的用法 */
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "MyInput",
  props: {
    value: {
      type: String,
      default: "",
    },
    value2: {
      type: String,
      default: "",
    },
  },
  emits: ["update:value", "update:value2"],
  setup(props, { emit }) {
    const { value } = toRefs(props);
    function handlerInput($event: any) {
      emit("update:value", $event.target.value);
    }
    function handlerInput2($event: any) {
      emit("update:value2", $event.target.value);
    }
    return { value, handlerInput, handlerInput2 };
  },
});
</script>
