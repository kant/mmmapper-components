<script>
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';

  import PIXI, { PIXI_CONTEXT } from './lib/pixi/index.js';
  import 'pixi-projection';

  /* Args */
  export let width, height;
  export let editMode = false;
  export let style;
  let className;
  export { className as class };

  /* Params */
  let app = null;
  let initialized = false;

  /* DOM elements */
  let canvas;

  export function getCanvasRef() {
    return canvas;
  }

  const sketchWrapperDestructor = writable(() => false),
    destructors = writable([]),
    pixiStore = {
      editMode: writable(false),
      sketchWrapperDestructor,
      destructors,
    };

  $: {
    pixiStore.editMode.set(editMode);
  }

  setContext(PIXI_CONTEXT, {
    getApp: () => {
      return app;
    },
    pixiStore: pixiStore,
  });

  onMount(() => {
    console.log('Screen mounted');

    app = new PIXI.Application({
      view: canvas,
      width: width,
      height: height,
      transparent: true, // NOTE: true may result in some unintended white areas
      // backgroundColor: 0xffffff, // 0x1099bb
      resolution: window.devicePixelRatio || 1,
    });

    app.ticker.autoStart = false;
    app.ticker = null; // NOTE: Init in components/SketchWrapper.svelte
    app.stage = null; // NOTE: Init in components/SketchWrapper.svelte

    initialized = true;

    return () => {
      initialized = false;
      console.log($destructors);
      $destructors.forEach((destructor) => destructor());
      if ($sketchWrapperDestructor()) {
        // Destroy only if SketchWrapper exists
        app.destroy();
      }
      console.log('Screen destroyed');
    };
  });
</script>

<canvas bind:this={canvas} {width} {height} class={className} {style} />
{#if initialized}
  <slot />
{/if}
