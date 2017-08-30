import { Component, Input } from '@angular/core';
import { Entry } from '../shared/entry.model';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {
   @Input() entry: Entry;

//    comment receives inline definition, an object containing the key-value elements with declared data types

   onCommentAdded(comment: {name: string; comment: string;}) {
        this.entry.comments.push(comment)
   }
} 