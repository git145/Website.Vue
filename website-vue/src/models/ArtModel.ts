import IArt from "../interfaces/IArt";

export default class ArtModel {
    public art: IArt[] = [
        {
            directory: "temples",
            images: [
                {
                    name: "Day Temple",
                    file: "temple_day.png"
                },
                {
                    name: "Night Temple",
                    file: "temple_night.png"
                },
                {
                    name: "Sunny Temple",
                    file: "temple_sunny.png"
                },
                {
                    name: "Rainy Temple",
                    file: "temple_rainy.png"
                },
                {
                    name: "Temple Render",
                    file: "temple_render.png"
                },
                {
                    name: "Pyramid of Khufu",
                    file: "pyramid_of_khufu.png"
                },
                {
                    name: "Pyramids",
                    file: "pyramids.png"
                },
                {
                    name: "Pyramid Model",
                    file: "pyramid_model.png"
                },
                {
                    name: "Untitled",
                    file: "untitled.png"
                }
            ]
        }
    ];
}
