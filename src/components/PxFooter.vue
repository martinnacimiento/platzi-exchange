<template lang="pug">
  v-footer(
    dark
    padless
    sticky
  )
    v-card(
      flat
      tile
      class="bg-green-400 text-white text-center w-full"
    )
      v-card-text
        v-btn(
          v-for="(r,i) in redes"
          :key="i"
          class="mx-4 text-white"
          icon
          @click="href(r.url)"
        )
          v-icon(size="24px" class="text-white"  ) {{ r.icon }}

      v-card-text(class="white--text pt-0")
      | Gracias por probar Crypto Exchange, te invito a seguirme en mis redes sociales para estar al tanto de nuevos proyectos y actualizaciones.
      v-divider

      v-card-text(class="white--text")
      |  {{ new Date().getFullYear() }} — 💻 con ♥  por Nacimiento Martin
</template>

<script>
export default {
  data: () => ({
    redes: [
      {
        url: "https://www.linkedin.com/in/nacimientomartin/",
        icon: "mdi-linkedin"
      },
      { url: "https://github.com/martinnacimiento", icon: "mdi-github-circle" },
      {
        url: "https://www.instagram.com/martinnacimiento/",
        icon: "mdi-instagram"
      },
      { url: "https://twitter.com/martinacimiento", icon: "mdi-twitter" }
    ]
  }),
  methods: {
    href(url) {
      window.open(url, "_blank");
    }
  }
};
</script>
