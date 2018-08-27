// set up all of the objects that we'll need
// our application will run in the console

let handler = { // step 0
  add_todo: function(new_todo) { // step 1
    controller.add_todo(new_todo)
  },
  read_all: function() { // step 2
    controller.read_all();
  },
  update_one: function(old_value, new_value) { // step 3
    controller.update_one(old_value, new_value);
  },
  delete_one: function(todo_togo) {
    controller.delete_one(todo_togo); 
  }
};

let controller = { // step 0
  add_todo: function(new_todo) { // step 1
    model.create(new_todo);
  },
  read_all: function() { // step 2
    let all = model.read_all();
    view.display_all(all);
  },
  update_one: function(old_value, new_value) { // step 3
    model.update_one(old_value, new_value);
    this.read_all();
  },
  delete_one: function(todo_togo) {
    model.delete_one(todo_togo);
    this.read_all();
  }
};

let model = { // step 0
  todos: [], // step 0
  create: function(new_todo) { // step 1
    this.todos.push(new_todo);
  },
  read_all: function() { // step 2
    return this.todos;
  },
  update_one: function(old_value, new_value) { // step 3
    let index = this.todos.indexOf(old_value);
    if (index !== -1) {
      this.todos[index] = new_value;
    };
  },
  delete_one: function(todo_togo) {
    let index = this.todos.indexOf(todo_togo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    };
  }
};

let view = { // step 0
  display_all: function(all) { // step 2
    console.log(all);
  }
};
