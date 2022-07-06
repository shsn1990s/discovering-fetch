class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, (repoData) => {
        //console.log(repoData);
        this.model.setRepoInfo(repoData);
        this.display();
      });
    });
  }

  display() {
    const repoName = document.querySelector('#repo-name');
    const repoDescription = document.querySelector('#repo-description');
    const repoImage = document.querySelector('#repo-image');
    repoName.innerText = this.model.getRepoInfo().full_name;
    repoDescription.innerText = this.model.getRepoInfo().description;
    repoImage.src = this.model.getRepoInfo().organization.avatar_url;
    console.log(this.model.getRepoInfo().full_name);
  }
}

module.exports = GithubView;
