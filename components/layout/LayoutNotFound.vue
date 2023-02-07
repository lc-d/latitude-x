<template>
  <section class="wrapper wrapper-md prose mt-8">
    <LayoutLogo :is-infinite="true" class="m-auto md:m-0" />
    <div class="mt-8">
      <b>Errore 404</b>
      <h1>Pagina non trovata</h1>
      <p>
        La pagina che stai cercando non è stata trovata, potrebbe essere stata
        rimossa, rinominata o non esistere.
      </p>
      <BaseLink :to="'/'" class="btn" :isLink="false">
        Torna alla homepage
      </BaseLink>
    </div>
  </section>
</template>
