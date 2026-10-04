<script>
   import { IconMessage2 } from "@tabler/icons-svelte-runes";
   import contactFormSubmit from "../functions/contactFormSubmit.js";

   let name = $state.raw("");
   let message = $state.raw("");
   let submitLoading = $state.raw(false);

   async function onsubmit(e) {
      e.preventDefault();
      console.log(name);
      submitLoading = true;
      await contactFormSubmit(name, message);
      submitLoading = false;
   }
</script>

<form class="container" {onsubmit}>
   <hr />
   <h2><IconMessage2 stroke={2} size={35} /> Contact</h2>
   <label for="name">Name:</label>
   <input type="text" bind:value={name} name="name" placeholder="e.g. Taraknath Karan" required />
   <label for="message">Message:</label>
   <textarea bind:value={message} name="message" placeholder="e.g. abcd message" required></textarea>
   <button type="reset">Reset</button>
   <button type="submit" aria-busy={submitLoading}>Send Message</button>
</form>

<style>
   textarea {
      height: 7pc;
   }
   button[type="submit"] {
      width: 13pc;
   }
</style>
