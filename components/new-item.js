import {Component, View, formDirectives} from 'angular2/angular2';
import {Inject, bind} from 'angular2/di';

@Component({
	selector: 'new-item'
})
@View({
	templateUrl: 'components/new-item.html',
	directives: [formDirectives]
})
export class NewItem {
	constructor(@Inject('todoItems') todoItemList) {
    this.items = todoItemList
	}
	keyPressed($event, input) {
		if($event.which === 13) {
			this.addItem(input);
		}
	}
	addItem(input) {
		this.items.push({
			text: input.value,
			completed: false
		})
		input.value = '';
	}
}

