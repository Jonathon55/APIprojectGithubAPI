class Github {
    constructor() {
    	this.client_id = ''; //enter your client id
    	this.client_secret = ''; //enter your client secret
    	this.repos_count = 5; //only last 5 repos
    	this.repos_sort = 'created: asc'; //ascending order
    }
async getUser(user) {
	//fetching user profile using Github API everytime a key is pressed
	const profileRepsonse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    //fetching user repos using Github API
    const reposRepsonse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

	const profileData = await profileRepsonse.json();

	const reposData = await reposRepsonse.json();

	return {
        //returning profile and repo object
		profile: profileData, 
		repos: reposData
	}
}
}


