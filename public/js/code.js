const modalProducto = new bootstrap.Modal(document.getElementById('modalProducto'))
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML.trimStart().trimEnd()
    producto_editar.value = fila.children[1].innerHTML.trimStart().trimEnd()
    marca_editar.value = fila.children[2].innerHTML.trimStart().trimEnd()
    tipo_editar.value = fila.children[3].innerHTML.trimStart().trimEnd()
    stock_editar.value = fila.children[4].innerHTML.trimStart().trimEnd()
    precio_editar.value = fila.children[5].innerHTML.trimStart().trimEnd()
    modalProducto.show()
})