export interface Proyecto {
    id: number;
    name: string;
    imgPath: string[];
    descripcion: string;
    lenguajes: string[];
    web: boolean;
    link?: string; // El enlace puede estar presente o ser undefined
}

export interface Gallery{

    original: string;
    thumbnail?: string;

}

export interface iconsLottie{

    nombre:string
    lottie:boolean

}