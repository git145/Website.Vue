import ILink from '@/interfaces/ILink';

export default class GamesModel {
    public games: ILink[] = [
        {
            name: 'Tip the Crates',
            url: '/games/tip_the_crates',
            imageFile: '/games/tip_the_crates.png'
        },
        {
            name: 'Zombie Battle',
            url: '/games/zombie_battle',
            imageFile: '/games/zombie_battle.png'
        }
    ]
}
