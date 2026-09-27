<script>
   import { IconHome, IconPhoto, IconMessage2, IconSettings, IconBrandGithub } from "@tabler/icons-svelte";
</script>

<!-- <aside> -->
<nav>
   <ul>
      <li><b><font size="5" class="sitename">G<span>S</span>H<span>S</span></font></b></li>
   </ul>
   <ul>
      <li><a href="/#/"> <IconHome stroke={2} /> </a></li>
      <li><a href="/#/images"> <IconPhoto stroke={2} /> </a></li>
      <li><a href="/#/contact"> <IconMessage2 stroke={2} /> </a></li>
      <li><a href="/#/settings"> <IconSettings stroke={2} /> </a></li>
      <li>
         <a href="https://github.com/taraknath341/gargaria-subhas-high-school"> <IconBrandGithub stroke={2} /> </a>
      </li>
   </ul>
</nav>

<!-- </aside> -->
<style>
   * {
      transition: 0.5s;
   }

   .sitename {
      color: var(--pico-primary);
      span {
         color: var(--pico-color);
      }
   }
   .sitename:hover {
      color: var(--pico-color);
      span {
         color: var(--pico-primary);
      }
   }
</style>
