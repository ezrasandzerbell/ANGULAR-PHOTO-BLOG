// Event Emitter makes it possible to pass data between components
// Output decorator allows sending data out to the parent, via the event emitter

import { Component, EventEmitter, Output } from '@angular/core';


@Component ({
    selector: 'app-entry-comment-form',
    templateUrl: 'entry-comment-form.component.html' 
})

export class EntryCommentFormComponent {
    // ngModel params are set here:
    name: string = "";
    comment: string = "";

    // this @Output decorator is the piece that sends the emitted event to the browser
    @Output() onCommentAdded = new EventEmitter<{name: string; comment: string;}>();

    onSubmit() {
        let comment = { name: this.name, comment: this.comment };
        this.onCommentAdded.emit(comment);
    }
}