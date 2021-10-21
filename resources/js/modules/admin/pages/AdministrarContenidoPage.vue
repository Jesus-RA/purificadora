<template>
    <div class="container my-5">
        <div class="row justify-content-center">

            <div class="card shadow border-0">

                <div class="card-body py-5 px-4">
                    <h2 class="text-center mb-4">
                        Contenido de la página
                    </h2>                

                    <div class="form-group mt-4">
                        <label
                            for="main_image"
                            class="text-primary"
                        >
                            Imagén de la página principal:
                        </label>
                        <input
                            id="main_image"
                            type="file"
                            class="form-control"
                            placeholder="example@emperador.com"
                        >
                    </div>

                    <div class="form-group mt-4">
                        <label
                            for="password"
                            class="text-primary"
                        >
                            Galería de imágenes:
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Contraseña"
                            v-model="carousel_images"
                        >
                    </div>

                    <div class="form-group mt-4">
                        <label
                            for="password"
                            class="text-primary"
                        >
                            Vídeo de proceso:
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Contraseña"
                            v-model="video"
                        >
                    </div>

                    <div class="form-group mt-4">
                        <label
                            for="password"
                            class="text-primary"
                        >
                            Teléfono de contacto:
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="222 234 21 34"
                            v-model="phone"
                        >
                    </div>

                    <span v-if="error" class="d-block invalid-feedback text-center">
                        {{ errorMessage }}
                    </span>

                    <button
                        class="btn btn-primary btn-block mt-4 text-white"
                        @click="saveChanges"
                    >
                        Guardar Cambios
                    </button>

                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            main_image: '',
            carousel_images: '',
            video: '',
            phone: ''
        }
    }
}
</script>