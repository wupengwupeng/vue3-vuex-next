<template>
  <div class="w-full" ref="element">
    <el-input></el-input>
    <div class="w-350 h-30 bg-yellow-500">
      <elipsis-box
        :content="'dssssssssssssssssssssssssssssssssssssssssssssssssssssss'"
      />
    </div>
    <el-button @click="openDialog">点击我打开弹框</el-button>
    <el-button @click="handlerToggleDark">toggle</el-button>
    支持{{ isSupported }} rgb{{ sRGBHex }}
    <span :style="{ background: sRGBHex }">背景颜色</span>
    <el-button @click="openEyeDropper">打开滴灌</el-button>
    <div>
      <h3>更改网站图标</h3>
      <el-button @click="resetPnd">vue</el-button>
      <el-button @click="changePng">wupeng图标</el-button>
    </div>
    <div class="flex justify-start">
      <h3>使用媒体查询</h3>
      <span>当前的屏幕宽度是否满足最小宽度900</span
      ><strong>{{ isLargeScreen }}</strong>
    </div>
    <Dialog
      v-if="visible"
      v-model:visible="visible"
      :title="'你好'"
      @handlerSave="handlerSave"
      @close="handlerClose"
    ></Dialog>
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import ElipsisBox from "@/components/ellipsisBox/index.vue";
import Dialog from "@/components/Dialog/Dialog.vue";
import {
  useDark,
  useToggle,
  useEyeDropper,
  useEventListener,
  useMediaQuery,
  usePreferredLanguages,
} from "@vueuse/core";
import { useFavicon } from "@vueuse/core";
export default defineComponent({
  components: {
    ElipsisBox,
    Dialog,
  },
  setup() {
    const isDark = useDark({
      storageKey: "vue-theme-appearance",
    });
    const toggleDark = useToggle(isDark);
    const element = ref<HTMLDivElement>();
    const icon = useFavicon();
    const isLargeScreen = useMediaQuery("(min-width:900px)");
    useEventListener(element, "keydown", (e: any) => {
      console.log(e.key);
    });
    const { isSupported, open, sRGBHex } = useEyeDropper();
    const languages = usePreferredLanguages();
    console.log(languages);

    const state = reactive({
      visible: false,
      resetPnd() {
        icon.value = "/public/favicon.ico";
      },
      changePng() {
        icon.value =
          "data:image/jpeg;base64,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";
      },
      openEyeDropper() {
        open();
      },
      openDialog() {
        state.visible = true;
      },
      handlerSave() {
        console.log("点击保存");
      },
      handlerClose() {
        console.log("点击取消");
      },
      handlerToggleDark() {
        toggleDark();
        console.log(isDark);
      },
    });
    return {
      element,
      isSupported,
      sRGBHex,
      isLargeScreen,
      toggleDark,
      ...toRefs(state),
    };
  },
});
</script>
