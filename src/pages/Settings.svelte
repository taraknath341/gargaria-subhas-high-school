<script>
   import { IconBrush } from "@tabler/icons-svelte-runes";
   import renderTheme from "../functions/renderTheme.js";

   let currentTheme = $state(localStorage.getItem("theme") || "system");

   $effect(() => {
      localStorage.setItem("theme", currentTheme);
      renderTheme();
   });
</script>

<main class="container">
   <div role="group">
      <button> <IconBrush stroke={2} /> </button>
      <select bind:value={currentTheme}>
         <option value="light">Light</option>
         <option value="dark">Dark</option>
         <option value="system">System</option>
      </select>
   </div>
</main>
