export const DOSPI = 2 * Math.PI;

export function areaCirc(radio) {
    return Math.PI * radio * radio;
}

export function perimetroCirc(radio) {
    return DOSPI * radio;
}

/* Otra forma de exportar:
export {
    DOSPI,
    areaCirc,
    perimetroCirc
}
*/