import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  enteredValue = '';
  newPost = 'NONE';

  onAddPost(postInput: HTMLTextAreaElement) {
    console.dir(postInput);
    this.newPost = postInput.value;
  }

  onAddPost2way() {
    this.newPost2way = this.enteredValue;
  }
}
