// set up all of the objects that we'll need
// our application will run in the console

let handler = { // step 0
  add_todo: function(new_todo) {
    controller.add_todo(new_todo)
  }
};

let controller = { // step 0
  add_todo: function(new_todo) {
    model.create(new_todo);
  }
};

let model = { // step 0
  todos: [], // step 0
  create: function(new_todo) {
    this.todos.push(new_todo);
  }
};

let view = {}; // step 0
