<script>
   import renderTheme from "./functions/renderTheme.js";
   import { slide } from "svelte/transition";
   // component
   import Nav from "./components/common/Nav.svelte";
   import Router, { router } from "svelte-spa-router";
   import Home from "./pages/Home.svelte";
   import Images from "./pages/Images.svelte";
   import Contact from "./pages/Contact.svelte";
   import Settings from "./pages/Settings.svelte";
   import NotFound from "./pages/NotFound.svelte";
   renderTheme();
</script>

<Nav />

{#key router.location}
   <div out:slide={{ duration: 400 }}>
      <Router
         routes={{
            "/": Home,
            "/images": Images,
            "/contact": Contact,
            "/settings": Settings,
            "*": NotFound,
         }}
      />
   </div>
{/key}
