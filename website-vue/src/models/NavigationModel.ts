import ILink from "../interfaces/ILink";

export default class NavigationModel {
    public navigation: ILink[] = [
        {
            name: "Introduction",
            url: "/introduction"
        },
        {
            name: "Art",
            url: "/art"
        },
        {
            name: "Games",
            url: "/games"
        },
        {
            name: "Music",
            url: "/music"
        },
        {
            name: "Arduino",
            url: "/arduino"
        },
        {
            name: "Other Projects",
            url: "/other_projects"
        }
    ]
}
