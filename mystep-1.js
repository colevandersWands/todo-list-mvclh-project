// set up all of the objects that we'll need
// our application will run in the console

let handler = {
   add_todo : function(new_todo) {
     controller.add_todo(new_todo);
   }
};

let controller = {
  add_todo : function(new_todo) {
      model.create(new_todo)
  }
};

let model = {
  todos : [],
  create : function(new_todo){
      this.todos.push(new_todo)
  }
};

let view = {

};














