import { Component, Input } from '@angular/core';
import { Entry } from '../shared/entry.model';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {
   @Input() entry: Entry;

//    comment key has inline object definition: name and comment keys

   onCommentAdded(comment: {name: string; comment: string;}) {
        this.entry.comments.push(comment)
   }
} 