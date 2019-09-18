class UI {
	constructor() {
		this.profile = document.getElementById('profile')
	}


	showProfile(user) { 
          this.profile.innerHTML = `
              <div class="card card-body mb-3">
                 <div class="row">
                 <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                 </div>
                 <div class="col-md-9">
                  <span class="badge badge-primary">Public Repos : ${user.public_repos}</span> 
                  <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span> 
                  <span class="badge badge-warning">Followers : ${user.followers}</span> 
                  <span class="badge badge-danger">Following : ${user.following}</span> 
                  
                  <br>
                  <br>
                  <ul class="list-group">
                    <li class="list-group-item"> Company : ${user.company}</li>
                    <li class="list-group-item"> Website/Blog : ${user.blog}</li>
                    <li class="list-group-item"> Location : ${user.location}</li>
                    <li class="list-group-item"> Membersince: ${user.created_at}</li>
                  <ul>
                 </div>
                 </div>
              </div>
               <h3 class="page-heading"> Most Recent Repos  </h3>
               <div id="repos"></div>
          `;
	}
     //clear profile when no search
	clearProfile() {
		this.profile.innerHTML = '';
		this.repos.innerHTML = '';
	}

	showRepos(repos) {
		let output = '';
   

		repos.forEach(function(repo) {
			output += `
               <div class="card card-body">
                 <div class="row">
                    <div class="col-md-6">
                      <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                      <span class="badge badge-primary">Stars : ${repo.stargazers_count}</span> 
                      <span class="badge badge-secondary">Watchers : ${repo.watchers_count}</span> 
                       <span class="badge badge-warning">Forks : ${repo.forks_count}</span>
                    </div>

                    <div class="col-md-6">
                    </div>
                 </div>
              </div>
			`
		});
		//output repos

		document.getElementById('repos').innerHTML = output;
	}
    
    //show alert message
	showAlert(message, className) {
		//clearremaining
		this.clearAlert();
		//creating div
		const div = document.createElement('div');
		//add classes
		div.className = className;
		div.appendChild(document.createTextNode(message));
        
        //create parent
        //paret of alert
		const container = document.querySelector('.searchcontainer');

		//get searchbox

		const search = document.querySelector('form');

		container.insertBefore(div, search);

		setTimeout(() => {
			this.clearAlert();
		}, 2500);
	} 

	//clear alert message
	clearAlert() {
		const currentAlert = document.querySelector('.alert');

		if(currentAlert){
			currentAlert.remove();
		}
	}
}