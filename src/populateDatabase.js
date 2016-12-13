const app = require('./app');

const submissionsService = app.service('/submissions');
const usersService = app.service('/users');
const projectsService = app.service('/projects');

usersService.create({
		userName: 'userone',
		bio: 'test data 1',
		password: 'password',
		email: 'user1@user.com'
		})
		.then((project)=>{
			console.log('users success');
		})
		.catch((error) =>{
			console.log(error);
		});

projectsService.create({
		name: 'test project2',
		description: 'test project2 this is a test of the emergency broadcasting system. nothing is going wrong, don;t worry about anything. ignore the giant creature in the bay. Have a nice day',
		bounty: 10000,
		videoUrl: 'testdata',
		endDate: '2017/01/01',
		awarded: false,
		image: 'null',
		userId: 1
		})
		.then((project)=>{
			console.log('projects success');
		})
		.catch((error) =>{
			console.log(error);
		});

submissionsService.create({
		title: 'test project2',
			description: 'test project2 this is a test of the emergency broadcasting system. nothing is going wrong, don;t worry about anything. ignore the giant creature in the bay. Have a nice day',
			videoLink: 'null',
			repoLink: 'null',
			win: false,
			userid: 1,
			projectid: 1,

		})
		.then((project)=>{
			console.log('submission success');
		})
		.catch((error) =>{
			console.log(error);
		});

