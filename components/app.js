import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {NewItem} from 'components/new-item';
import {TodoList} from 'components/todo-list';
import {todoItems} from 'services/todoItems';

@Component({
	selector: 'todo-app',
  // TODO: `hostInjector` was renamed to `bindings` in master, so this will break with the next release
  viewInjector: [bind('todoItems').toValue(todoItems)]
})
@View({
	templateUrl: 'components/app.html',
	directives: [NewItem, TodoList]
})
export class TodoApp {
	constructor() {
	}
	// other methods
}

bootstrap(TodoApp);