import { InMemoryDbService } from 'angular-in-memory-web-api';

declare var file: any;

export class InMemoryEntryService implements InMemoryDbService {
    createDb() {
        let entries = [
            {
                id: 1,
                title: 'Linda A. Kerns',
                description: '"I love having Ruby! My clients never get voicemail during work hours and calls are always answered professionally. Getting emails of who called right away is super convenient and screening out the sales calls saves a huge amount of time!"',
                photo: require('../../photos/Linda-Kerns.jpg'),
                comments: [
                    {
                        id: 1,
                        name: 'Jane Smith',
                        comment: '8/29/17: Client Jane Smith called asking about their appointment next week'
                    },
                    {
                        id: 2,
                        name: 'Alecia Clark',
                        comment: '8/27/17: Client Jason Smith called asking about liability insurance'
                    }
                ]
            },
            {
                id: 2,
                title: 'Jerry Simoneaux',
                description: '“What I enjoy most about Ruby Receptionists is their happy attitude. You can hear the smile in their voices. Really. And clients love that. Combine that with the wonderful phone app that lets me update my status and get my messages anywhere, and you have one heckuva great company.”',
                photo: require('../../photos/jerry.jpg'),
                comments: [
                    {
                        id: 3,
                        name: 'Alecia Clark',
                        comment: '8/25/17: Client Jason Smith called asking about liability insurance.'
                    }
                ]
            },
            {
                id: 3,
                title: 'Richard Jaffe',
                description: '“My phone line is my lifeline. Using Ruby has almost doubled my client retention rate, lowered my overhead, and allows me to be where I need to be for my practice without worrying about incoming calls. Other services I have tried in the past do not come close to Ruby.”',
                photo: require('../../photos/richard.jpg'),
                comments: []
            },
            {
                id: 4,
                title: 'Sheila Rambeck',
                description: '“Ruby has been a life-saver (and company-saver) for me. In the field I’m in, if you don’t answer the phone, the client calls the next person on their list. Ruby ensures my clients and future clients talk to a live person and Ruby gives the message to me immediately so I can call them as soon as I’m free. I’m a very satisfied customer!”',
                photo: require('../../photos/sheila.jpg'),
                comments: [
                    {
                        id: 4,
                        name: 'Steve Johnson',
                        comment: '8/27/17: Client Julian Smith called to ask about divorce settlement.'
                    },
                    {
                        id: 5,
                        name: 'Becky M',
                        comment: '8/25/17: Client Jenny Smith called with contact number for doctor.'
                    }
                ]
            }
        ];
        return { entries };
    }
}