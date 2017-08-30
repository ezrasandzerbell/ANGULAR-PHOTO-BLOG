// Event Emitter makes it possible to pass data between components
// Output decorator allows sending data out to the parent, via the event emitter
// Input decorator allows passage of data from Entry component to EntryCommentForm component
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntryService } from '../shared/entry.service';


@Component ({
    selector: 'app-entry-comment-form',
    templateUrl: 'entry-comment-form.component.html' 
})

export class EntryCommentFormComponent {

    // ngModel params are set here:
    name: string = "";
    comment: string = "";

    // make entryId available to the component
    @Input() entryId: number;

    // this @Output decorator is the piece that sends the emitted event to the browser
    @Output() onCommentAdded = new EventEmitter<{name: string; comment: string;}>();

    // @ViewChild decorator is bound to the local variable 'commentForm' from template's #commentForm variable
    // commentForm (no quotes), now becomes a member of this EntryCommentForm component.
    @ViewChild('commentForm') commentForm: NgForm;

    // constructor pulls entryService into the class and makes it available to the onSubmit method
    constructor(private entryService: EntryService){

    }

    // commentForm variable passed through onSubmit is an instance of NgForm (imported above)
    onSubmit(commentForm: NgForm) {
        let comment = { name: this.name, comment: this.comment };
        this.entryService.addComment(this.entryId, comment)
            .then(() => {
                this.onCommentAdded.emit(comment);
                    this.commentForm.resetForm();
            })
        this.onCommentAdded.emit(comment);

        // reset form method can be accessed due to NgForm argument
        this.commentForm.resetForm();
    }
}