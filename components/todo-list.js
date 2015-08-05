import {Component, View, NgFor, NgIf, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/di';


@Component({
	selector: 'todo-list'
})
@View({
	templateUrl: 'components/todo-list.html',
	directives: [NgFor, NgIf]
})
export class TodoList {
  constructor(@Inject('todoItems') todoItems) {
		this.items = todoItems;
	}
	setCompleted(item, checked) { 
		item.completed = checked;
	}
	completeAll() {
    var that = this;
		this.items.forEach(function(item) {
			that.setCompleted(item, true); 
		});
	}
	removeItem(item) {
		this.items.splice(this.items.indexOf(item), 1);
	}
}

