<script>
   import { IconSchool } from "@tabler/icons-svelte";
   import { subAbout, about } from "../data/about.js";
</script>

<main class="container hero">
   <article>
      <div class="grid">
         <div>
            <h2>
               <span>
                  <IconSchool stroke={2} size={30} />
               </span>
               {about.title}
            </h2>
            <p>{about.content}</p>
         </div>
         <img src={about.image} width="500" alt="school" />
      </div>
   </article>
</main>
<main class="container">
   {#each subAbout as { title, content }}
      <article>
         <h3>
            <span>
               <IconSchool stroke={2} size={28} />
            </span>
            {title}
         </h3>
         <p>{content}</p>
      </article>
   {/each}
</main>

<style>
   .hero .grid div {
      align-content: center;
   }

   h2,
   h3 {
      background: linear-gradient(45deg, #7e65f7, skyblue);
      color: transparent;
      background-clip: text;
      span {
         color: #7e65f7;
      }
   }
</style>
