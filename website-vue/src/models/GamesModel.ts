import ILink from '@/interfaces/ILink';

export default class GamesModel {
    public games: ILink[] = [
        {
            name: 'Tip the Crates',
            url: 'tip_the_crates',
            imageFile: 'tip_the_crates.png'
        },
        {
            name: 'Zombie Battle',
            url: 'zombie_battle',
            imageFile: 'zombie_battle.png'
        }
    ]
}
