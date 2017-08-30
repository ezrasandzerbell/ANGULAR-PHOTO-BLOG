// Event Emitter makes it possible to pass data between components
// Output decorator allows sending data out to the parent, via the event emitter

import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


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

    // @ViewChild decorator is bound to the local variable 'commentForm' from the #commentForm variable as seen in the html template.
    // commentForm (no quotes), now becomes a member of this EntryCommentForm component.
    @ViewChild('commentForm') commentForm: NgForm;

    // commentForm variable passed through onSubmit is an instance of NgForm (imported above)
    onSubmit(commentForm: NgForm) {
        let comment = { name: this.name, comment: this.comment };
        this.onCommentAdded.emit(comment);

        // reset form method can be accessed due to NgForm argument
        this.commentForm.resetForm();
    }
}