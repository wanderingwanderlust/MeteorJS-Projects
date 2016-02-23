Template.add_department.events({
    'submit .add-department-form': function(event){
        var name = event.target.name.value;
        var head = event.target.head.value;

        //insert
        Departments.insert({
            name: name,
            head: head,
            createdAt: new Date()
        });

        FlashMessages.sendSuccess('Department Added');

        Router.go('/staff/departments');

        return false;
    }
});

Template.departments.events({
    'click .delete-department': function(event){
        if(confirm('Are you sure?')){
            Departments.remove(this._id);

            FlashMessages.sendSuccess('Department Deleted');

            return false;
        }
    }
});