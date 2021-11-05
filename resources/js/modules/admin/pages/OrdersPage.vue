<template>
    <div class="container my-5">
        <div class="row">

            <div class="card col-md-8 mx-auto py-5 px-2 shadow border-0">

                <h2 class="mb-4 text-center">Ingresar un pedido</h2>
                <div class="row justify-content-center">

                    <div class="card col-10 col-md-8 col-lg-5 p-4 shadow border-0">
                        <form>

                            <div class="form-group">
                                <label class="text-primary" for="quantity">Cantidad:</label>
                                <input
                                    type="number"
                                    id="quantity"
                                    placeholder="Número de garrafones"
                                    class="form-control"
                                >
                            </div>

                            <div class="form-group">
                                <label class="text-primary" for="address">Dirección:</label>
                                <input
                                    type="text"
                                    id="address"
                                    placeholder="Dirección de entrega"
                                    class="form-control"
                                >
                            </div>

                            <div class="form-group">
                                <label class="text-primary" for="phone">Teléfono:</label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="Dirección de entrega"
                                    class="form-control"
                                >
                            </div>

                            <div class="form-group">
                                <label class="text-primary" for="date">Fecha:</label>
                                <input
                                    type="text"
                                    id="date"
                                    placeholder="Dirección de entrega"
                                    class="form-control"
                                >
                            </div>

                            <p>
                                <span class="text-primary">Total:</span> $140,242.00 MXN
                            </p>

                            <button class="btn btn-primary btn-block text-white">
                                Hacer pedido
                            </button>

                        </form>
                    </div>

                <h2 class="col-12 text-center my-5">Historial de pedidos</h2>
                <div class="card shadow border-0 mx-auto col-10">
                    <div class="card-body">
                        <table class="w-100">
                            <thead>
                                <th class="text-left">Realizados por</th>
                                <th class="text-center">Garrafones</th>
                                <th class="text-center">Total</th>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td class="text-left">Usuarios registrados</td>
                                    <td class="text-center">347</td>
                                    <td class="text-center">$5,943.00 MXN</td>
                                </tr>
                                <tr>
                                    <td class="text-left">Usuarios no registrados</td>
                                    <td class="text-center">347</td>
                                    <td class="text-center">$5,943.00 MXN</td>
                                </tr>
                                <tr class="text-center font-weight-bold border border-primary border-left-0 border-bottom-0 border-right-0">
                                    <td class="text-left">Totales</td>
                                    <td class="text-center">694</td>
                                    <td class="text-center">$11,886.00 MXN</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
                

            </div>

        </div>
    </div>
</template>