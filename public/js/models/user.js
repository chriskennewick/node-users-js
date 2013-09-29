App.User = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string')
});

App.User.FIXTURES = [
{
	id: 1,
	firstName: 'Chris',
	lastName: 'Kennewick',
	email: 'chriskennewick@gmail.com'
},
{
	id: 2,
	firstName: 'Homer',
	lastName: 'Simpson',
	email: 'chunkylover53@aol.com'
},
{
	id: 3,
	firstName: 'Bart',
	lastName: 'Simpson',
	email: 'bart.simpson@hotmail.com'
}
]