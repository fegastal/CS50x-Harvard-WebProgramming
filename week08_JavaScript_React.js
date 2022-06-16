function CapsLock(props) {
    const textoInserido = props.texto;
    const textoEmCapsLock = textoInserido.toUpperCase();
    return <div>{textoEmCapsLock}</div>
}

function Pagina() {
    return <CapsLock>Show!</CapsLock>
}