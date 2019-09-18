//init github

const github = new Github;
const ui = new UI;

const searchUser = document.getElementById('searching');

searchUser.addEventListener('keyup', (e) => {
	const userText = e.target.value;

	if (userText !== '') {
		
		//make http call
		github.getUser(userText)
		  .then(data => {
		  	
		  	if(data.profile.message == 'Not Found') {
		  		//show alert
		  		ui.showAlert("User Not Found", "alert alert-danger");
		  	}
		  	else {
		  		//show profile
		  		ui.showProfile(data.profile);
		  		//show repo
		  		ui.showRepos(data.repos);
		  	}
		  })
	} else {
		//clear profile
         ui.clearProfile();
	}

});




