Todos = new Mongo.Collection('todos');




if (Meteor.isClient) {
  Meteor.subscribe('todos');

  //Template Helpers
  Template.main.helpers({
    todos: function(){
      return Todos.find({}, {sort: {createdAt: -1 } });
    }
  });

Template.main.events({
  "submit .new-todo": function(event){
    var text = event.target.text.value;
    //console.log(text);

    //after removing insecure and setting methods
    Meteor.call('addTodo', text);

    /*
    Todos.insert({
      text: text,
      createdAt: new Date(),
      userId: Meteor.userId(),
      username: Meteor.user().username
    });
    */

    //clear form
    event.target.text.value='';

    //Prevent Submit
    return False;

  },
  //Creating a check-box to respond to database
  "click .toggle-checked": function(){
    //after removing insecure we need to update
    Meteor.call('setChecked', this._id, !this.checked);
    //Todos.update(this._id, {$set: {checked: ! this.checked}});
  },
  "click .delete-todo": function(){
    //after removing insecure
    if(confirm('Are You Sure')) {
      Meteor.call('deleteTodo', this._id);
    }

    //confirm delete
    /*
    if(confirm('Are You Sure')) {
      Todos.remove(this._id);
    }
    */
  }
});
  Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
  });
}


/// once we remove autopublich
if (Meteor.isServer) {
  Meteor.publish('todos', function(){
    //to allow user to only find his/her todos
    return Todos.find({userId: this.userId});
  });
}



//after removing insecure
Meteor.methods({
  //add todo
  addTodo: function(text){
    if(!Meteor.userId()){
      throw new Meteor.Error("Not Authorized");
    };
    Todos.insert({
      text: text,
      createdAt: new Date(),
      userId: Meteor.userId(),
      username: Meteor.user().username
    });
  },
  //delete
  deleteTodo: function(todoId){
    var todo = Todos.findOne(todoId);
    if(todo.userId !== Meteor.userId){
      throw new Meteor.Error("Not Authorized");
    }
    Todos.remove(todoId);
  },
  //check off todos
  setChecked: function(todoId, setChecked){
    //creating user can only see users todos
    var todo = Todos.findOne(todoId);
    if(todo.userId !== Meteor.userId){
      throw new Meteor.Error("Not Authorized");
    }
    Todos.update(todoId, {$set: {checked: setChecked}});
  }
});





