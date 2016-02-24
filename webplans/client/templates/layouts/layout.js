/**
 * Created by goku on 2/23/16.
 */
Template.registerHelper('currentRoute', function(route){
   return Router.current().route.getName() === route;
});


//formatting date to
Template.registerHelper('formatDate', function(date){
   return new Date(date).toDateString();
});

Template.registerHelper('getEndDate', function(join_date, days){
   var end_date = join_date.setDate(join_date.getDate() + days);

   return new Date(end_date).toDateString();
});