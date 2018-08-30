// set up all of the objects that we'll need
// our application will run in the console

let handler = {
   add_todo : function(new_todo) {
     controller.add_todo(new_todo);
   },
   read_all : function() {
       controller.read_all();
   }
};

let controller = {
  add_todo : function(new_todo) {
      model.create(new_todo)
  },
  read_all : function(){ 
     let all =  model.read_all();
     view.display_all(all);
  }
};

let model = {
  todos : [],
  create : function(new_todo){
      this.todos.push(new_todo)
  },
  read_all : function(todos){
      return this.todos;
  }
};

let view = {
    display_all : function(all){
        console.log(all);
    }
};














