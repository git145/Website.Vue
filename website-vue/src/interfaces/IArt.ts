import IImage from "../interfaces/IImage";

export default interface IArt {
    title?: string;
    directory?: string;
    images?: IImage[];
}
