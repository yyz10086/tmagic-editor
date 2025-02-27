<template>
  <div class="m-editor-workspace" tabindex="1" ref="workspace">
    <magic-stage :key="page?.id"></magic-stage>

    <slot name="workspace-content"></slot>

    <page-bar>
      <template #page-bar-title="{ page }"><slot name="page-bar-title" :page="page"></slot></template>
      <template #page-bar-popover="{ page }"><slot name="page-bar-popover" :page="page"></slot></template>
    </page-bar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, onUnmounted, ref } from 'vue';
import KeyController from 'keycon';

import type { MNode, MPage } from '@tmagic/schema';
import { isPage } from '@tmagic/utils';

import type { Services } from '@editor/type';

import PageBar from './PageBar.vue';
import MagicStage from './Stage.vue';

export default defineComponent({
  name: 'm-editor-workspace',

  components: {
    PageBar,
    MagicStage,
  },

  setup() {
    const services = inject<Services>('services');
    const workspace = ref<HTMLDivElement>();
    const node = computed(() => services?.editorService.get<MNode>('node'));
    let keycon: KeyController;

    const mouseenterHandler = () => {
      workspace.value?.focus();
    };

    const mouseleaveHandler = () => {
      workspace.value?.blur();
    };

    onMounted(() => {
      workspace.value?.addEventListener('mouseenter', mouseenterHandler);
      workspace.value?.addEventListener('mouseleave', mouseleaveHandler);

      keycon = new KeyController(workspace.value);

      const isMac = /mac os x/.test(navigator.userAgent.toLowerCase());

      const ctrl = isMac ? 'meta' : 'ctrl';

      keycon
        .keyup('delete', (e) => {
          e.inputEvent.preventDefault();
          if (!node.value || isPage(node.value)) return;
          services?.editorService.remove(node.value);
        })
        .keyup('backspace', (e) => {
          e.inputEvent.preventDefault();
          if (!node.value || isPage(node.value)) return;
          services?.editorService.remove(node.value);
        })
        .keydown([ctrl, 'c'], (e) => {
          e.inputEvent.preventDefault();
          node.value && services?.editorService.copy(node.value);
        })
        .keydown([ctrl, 'v'], (e) => {
          e.inputEvent.preventDefault();
          node.value && services?.editorService.paste();
        })
        .keydown([ctrl, 'x'], (e) => {
          e.inputEvent.preventDefault();
          if (!node.value || isPage(node.value)) return;
          services?.editorService.copy(node.value);
          services?.editorService.remove(node.value);
        })
        .keydown([ctrl, 'z'], (e) => {
          e.inputEvent.preventDefault();
          services?.editorService.undo();
        })
        .keydown([ctrl, 'shift', 'z'], (e) => {
          e.inputEvent.preventDefault();
          services?.editorService.redo();
        })
        .keydown('up', (e) => {
          e.inputEvent.preventDefault();
          services?.editorService.move(0, -1);
        })
        .keydown('down', (e) => {
          e.inputEvent.preventDefault();
          services?.editorService.move(0, 1);
        })
        .keydown('left', (e) => {
          e.inputEvent.preventDefault();
          services?.editorService.move(-1, 0);
        })
        .keydown('right', (e) => {
          e.inputEvent.preventDefault();
          services?.editorService.move(1, 0);
        })
        .keydown([ctrl, 'up'], (e) => {
          e.inputEvent.preventDefault();
          services?.editorService.move(0, -10);
        })
        .keydown([ctrl, 'down'], (e) => {
          e.inputEvent.preventDefault();
          services?.editorService.move(0, 10);
        })
        .keydown([ctrl, 'left'], (e) => {
          e.inputEvent.preventDefault();
          services?.editorService.move(-10, 0);
        })
        .keydown([ctrl, 'right'], (e) => {
          e.inputEvent.preventDefault();
          services?.editorService.move(10, 0);
        })
        .keydown('tab', (e) => {
          e.inputEvent.preventDefault();
          services?.editorService.selectNextNode();
        })
        .keydown([ctrl, 'tab'], (e) => {
          e.inputEvent.preventDefault();
          services?.editorService.selectNextPage();
        })
        .keydown([ctrl, '='], (e) => {
          e.inputEvent.preventDefault();
          services?.uiService.zoom(0.1);
        })
        .keydown([ctrl, 'numpadplus'], (e) => {
          e.inputEvent.preventDefault();
          services?.uiService.zoom(0.1);
        })
        .keydown([ctrl, '-'], (e) => {
          e.inputEvent.preventDefault();
          services?.uiService.zoom(-0.1);
        })
        .keydown([ctrl, 'numpad-'], (e) => {
          e.inputEvent.preventDefault();
          services?.uiService.zoom(-0.1);
        });
    });

    onUnmounted(() => {
      workspace.value?.removeEventListener('mouseenter', mouseenterHandler);
      workspace.value?.removeEventListener('mouseleave', mouseleaveHandler);
      keycon.destroy();
    });

    return {
      workspace,

      page: computed(() => services?.editorService.get<MPage>('page')),
    };
  },
});
</script>
