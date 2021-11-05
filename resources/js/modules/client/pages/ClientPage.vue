<template>
    <div class="container my-5">
        <div class="row">

            <Loader v-if="isLoading || !profileHasData" class="mx-auto" />

            <div v-else class="col-lg-8 mx-auto">
                <div class="card shadow p-5 border-0">
                    <div class="row">

                        <div class="col-12">
                            <h2>Perfil</h2>

                            <div class="row mb-4">
                                <div class="col-md-2">
                                    <div class="initials-circle">
                                        {{ initials }}
                                    </div>
                                </div>

                                <div class="col">
                                    <p>
                                        <i class="fas fa-user text-primary"></i>
                                        {{ fullname }}
                                    </p>
                                    <p>
                                        <i class="fas fa-phone-alt text-primary"></i>
                                        {{ phoneFormatted }}
                                        </p>
                                    <p>
                                        <i class="fas fa-map-marker-alt text-primary"></i>
                                        {{ address }}
                                    </p>
                                </div>
                            </div>

                            <button class="btn btn-warning btn-sm" @click="$router.push({ name: 'edit-profile' })">
                                Editar información
                                <i class="fas fa-user-edit"></i>
                            </button>

                        </div>

                        <div class="col-12 mt-4">
                            <h2>Pedidos</h2>
                            <button class="btn btn-primary btn-sm text-white">
                                Hacer un pedido
                                <i class="fas fa-shopping-bag"></i>
                            </button>

                        </div>

                        <div class="col-12 mt-4">
                            <h3>Consulta tus pedidos del perido que deses.</h3>
                            <div class="row">

                                <div class="col-12">
                                    <div class="row d-flex align-items-center">
                                        <div class="form-group col-md-5">
                                            <label for="from" class="text-primary">Desde:</label>
                                            <input type="date" id="from" class="form-control">
                                        </div>
                                        <div class="form-group col-md-5">
                                            <label for="to" class="text-primary">Hasta:</label>
                                            <input type="date" id="to" class="form-control">
                                        </div>
                                        
                                        <div class="from-group col-md-2 p-md-0 mt-md-3">
                                            <button class="btn btn-primary btn-sm btn-block text-white">
                                                Consultar
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-8 card shadow border-0 mx-auto mt-4">
                                    <div class="card-body">
                                        <h3 class="text-center mb-3">Historial de pedidos</h3>

                                        <p class="mb-3 border-bottom border-primary p-3">
                                            Fecha: 03 de Septiembre de 2021
                                            Cantidad: 20 garrafones
                                            Total: $400.00 MXN
                                        </p>

                                        <p class="mb-3 border-bottom border-primary p-3">
                                            Fecha: 03 de Septiembre de 2021
                                            Cantidad: 20 garrafones
                                            Total: $400.00 MXN
                                        </p>

                                        <h3 class="text-center">Totales</h3>

                                        <p>
                                            Garrafones del periodo: 40 garrafones
                                        </p>
                                        <p>
                                            Total: $800.00 MXN
                                        </p>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {

    data(){
        return {
            name: '',
            lastname: '',
            phone: '',
            address: '',
        }
    },
    methods: {
        ...mapActions('clientModule', ['loadProfileData']),
    },
    computed: {
        ...mapState(['isLoading']),
        ...mapGetters('clientModule', ['getProfileData', 'profileHasData']),
        fullname(){
            return `${ this.name } ${ this.lastname }`
        },
        initials(){
            return `${ this.name[0] }${ this.lastname[0] }`
        },
        phoneFormatted(){
            const phoneArray = this.phone.split('')
            return `${ phoneArray.slice(0, 3).join('') }-${ phoneArray.slice(3, 6).join('') }-${ phoneArray.slice(6).join('') }`
        }
    },
    async created(){

        await this.loadProfileData()

        if( !this.profileHasData ){
            this.$swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                icon: 'warning',
                title: 'Antes de continuar por favor ingresa la información de tu perfil, es necesaria para realizar las entregas.',
                timer: 7000
            }).then(() => {
                this.$router.push({ name: 'edit-profile' })
                return
            })
        }

        const { name, lastname, phone, address } = this.getProfileData

        this.name = name
        this.lastname = lastname
        this.phone = phone
        this.address = address
        
    },
    components: {
        Loader: () => import('../../shared/components/Loader.vue')
    }
}
</script>

<style lang="scss" scoped>

.initials-circle{
    align-items: center;
    background: gainsboro;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    height: 6rem;
    justify-content: center;
    width: 6rem;
}

</style>