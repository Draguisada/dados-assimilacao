function validarValores () {
    let x6 = quantX6.value ? Number(quantX6.value) : 0;
    let x10 = quantX10.value ? Number(quantX10.value) : 0;
    let x12 = quantX12.value ? Number(quantX12.value) : 0;

    return {'x6': x6, 'x10': x10, 'x12': x12};
}

function rolarDados() {
    let valores = validarValores();

    console.log(valores);


}
