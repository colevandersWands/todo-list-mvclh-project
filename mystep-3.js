// set up all of the objects that we'll need
// our application will run in the console

let handler = {
   add_todo : function(new_todo){
     controller.add_todo(new_todo);
   },
   read_all : function() {
       controller.read_all();
   },
   update_one : function(old_todo, updated_todo){
       controller.update_one(old_todo, updated_todo);
   }
};

let controller = {
  add_todo : function(new_todo){
      model.create(new_todo)
  },
  read_all : function(){ 
     let all =  model.read_all();
     view.display_all(all);
  },
  update_one : function(old_todo, updated_todo){
      module.update_one(old_todo, updated_todo);
  }
};

let model = {
  todos : [],
  create : function(new_todo){
      this.todos.push(new_todo)
  },
  read_all : function(todos){
      return this.todos;
  },
  update_one : function(old_todo, updated_todo){
    this.todos.forEach(function(item, i) { 
        if (item == old_todo) this.todos[i] = updated_todo; 
    });
  }
};

let view = {
    display_all : function(all){
        console.log(all);
    }
};













