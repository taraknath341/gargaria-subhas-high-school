<script>
   import { IconPlayerTrackPrev, IconPlayerTrackNext } from "@tabler/icons-svelte-runes";
   import images from "../data/images.js";

   let imageIndex = $state.raw(0);
   let image = $derived(images[imageIndex]);

   function next() {
      if (imageIndex + 1 === images.length) {
         imageIndex = 0;
      } else {
         imageIndex++;
      }
   }

   function prev() {
      if (imageIndex === 0) {
         imageIndex = images.length - 1;
      } else {
         imageIndex--;
      }
   }
</script>

<main class="container">
   <article>
      <img src={image} alt="images" />
      <b>{imageIndex + 1} / {images.length}</b>
   </article>
   <button onclick={prev}> <IconPlayerTrackPrev stroke={2} /> </button>
   <button onclick={next}> <IconPlayerTrackNext stroke={2} /> </button>
</main>

<style>
   img {
      min-height: 9pc;
      max-height: 20pc;
   }
   .container {
      align-content: center;
   }
   article {
      position: relative;
      text-align: center;
      padding-bottom: 2pc;
   }

   article b {
      position: absolute;
      bottom: 0;
      right: 1pc;
   }
</style>
