<template>
  <Navbar>
    <b-nav-item>
      <button
        @click="$store.dispatch('authModule/logout')"
        class="nav-link btn btn-link shadow-none btn-block text-left"
      >
        Cerrar Sesión
      </button>
    </b-nav-item>
  </Navbar>
</template>

<script>
export default {
  components: {
    Navbar: () => import('../../shared/components/NavBar.vue')
  }
}
</script>