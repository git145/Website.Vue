import ILink from '@/interfaces/ILink';

export default class MusicModel {
    public music: ILink[] = [
        {
            name: 'Daydream',
            url: 'https://www.youtube.com/embed/Qd9P51-aWJk',
            audioFile: 'daydream.mp3'
        },
        {
            name: 'Feel It',
            url: 'https://www.youtube.com/embed/fhG2QQ0aAac',
            audioFile: 'feel_it.mp3'
        }
    ]
}
