// set up all of the objects that we'll need
// our application will run in the console

let handler = { // step 0
  add_todo: function(new_todo) { // step 1
    controller.add_todo(new_todo)
  },
  read_all: function() {
    controller.read_all();
  }
};

let controller = { // step 0
  add_todo: function(new_todo) { // step 1
    model.create(new_todo);
  },
  read_all: function() { 
    let all = model.read_all();
    view.display_all(all);
  }
};

let model = { // step 0
  todos: [], // step 0
  create: function(new_todo) { // step 1
    this.todos.push(new_todo);
  },
  read_all: function() {
    return this.todos;
  }
};

let view = { // step 0
  display_all: function(all) {
    console.log(all);
  }
};
