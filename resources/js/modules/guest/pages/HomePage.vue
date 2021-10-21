<template>
    <div class="container">

        <div class="vh-100">
            <!-- Sección con imagen y botón para "empezar a realizar pedidos" -->
        </div>

        <AboutSection id="about" />

        <ContactSection id="contact" />

    </div>
</template>

<script>
export default {
    components: {
        AboutSection: () => import('../components/AboutSection.vue'),
        ContactSection: () => import('../components/ContactSection.vue')
    }
}
</script>