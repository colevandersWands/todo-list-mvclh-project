User stories;  
1. add a todo  
2. see all todos  
3. update todos  
4. delete one  
5. clear display
  
Dev plan:

|    | handler | controller | model | view |  
| --- | --- | --- | --- | --- |   
| 1 | _add\_todo_; read from the UI & call the controller | _add\_todo_; add new todo to the model | _create_; save the new todo | |    
| 2 | _read\_all_; call the controller | _read\_all_; read all from the model, call the view to display everything | _read\_all_; return everything in memory | _display\_all_; display all items to the UI |  
| 3 | _update\_one_; read old item and new value from UI.  Call the controller | _update\_one_; call the model to update the correct entry, call view to display new todo list | _update\_one_; updates the correct entry in memory | |  
| 4 | _delete\_one_; reads user input and calls the controller | _delete\_one_; calls the model to delete said item, displays to todo list | _delete\_one_; deletes selected item from memory | |   
| 5 | _clear\_display_; calls controller | _clear\_display_; calls view | | _clear\_display_; clears the display |

---

(there is no L in this app, it's all about state and not logic)


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>


