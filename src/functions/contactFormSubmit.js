export default async function contactFormSubmit(name, message) {
   try {
      await fetch(
         `https://docs.google.com/forms/d/e/1FAIpQLScyaZT5bD8um5jZwz7FptKBwPUPUAEGMGj0DPntXIklgbuBbw/formResponse?usp=pp_url&entry.635458397=${name}&entry.1000460554=${message}`,
         {
            method: "GET",
            mode: "no-cors",
         },
      );
   } catch (err) {
      alert(err.message);
   }
}
