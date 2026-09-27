<script>
   import renderTheme from "./functions/renderTheme.js";
   import { slide } from "svelte/transition";
   // component
   import Nav from "./components/common/Nav.svelte";
   import Router, { router } from "svelte-spa-router";
   import Images from "./pages/Images.svelte";
   import Home from "./pages/Home.svelte";
   import Settings from "./pages/Settings.svelte";
   import Contact from "./pages/Contact.svelte";
   renderTheme();
</script>

<header class="container">
   <Nav />
</header>

{#key router.location}
   <div out:slide={{ duration: 150 }}>
      <Router
         routes={{
            "/images": Images,
            "/settings": Settings,
            "/contact": Contact,
            "*": Home,
         }}
      />
   </div>
{/key}
