# Contributing guide

Thank you for investing your time in contributing to this project!
Please follow this steps :smiley:

## 1. Issues

### Check if an issue exists

If you spot a problem, please [search if an issue already exists](https://github.com/ikurotime/buddyspot/issues). If nobody is assigned to this issue, comment the issue to get assigned from maintainers.

### Create a new issue

If it doesn't, you can open a new issue using the [new issue form](https://github.com/ikurotime/buddyspot/issues/new/choose) specifying if it's about a bug, a feature, documentation or anything else.


## 2. Fork this repository

Once assigned to an issue, you can fork this repo.

<details>
<summary>Show me how to fork a repository</summary>
Click the **Fork** button on the top right of this repository page

![screenshot of Fork button](https://docs.github.com/assets/cb-23088/images/help/repository/fork_button.png)

It will create a copy of this repository into your account. 

Select the owner for the forked repository
![GitHub example](https://docs.github.com/assets/cb-151543/images/help/repository/fork-choose-owner.png)

Choose to **copy only the master branch** and click **Create fork**
</details>


## 3. Clone the fork

Go to your fork repository and clone : 
1. `git clone [your repo url goes here]`
2. change directory to your cloned repo `cd [your repo name]`

## 4. Create a new branch and code

**Don't code on the master branch**

Run `git checkout -b [your branch name goes here]` to create your new branch

Make your edits with you favorite IDE

## 5. Save and push

Run `git add .`

Run `git commit -m 'Commit message goes here'` :warning: please commit with an descriptive message for the convenience of reviewer

Finally, run `git push origin [your branch name goes here]`

## 6. Create a pull request (PR)

- Go to your repository in browser and click on compare and pull requests. 
- Then add a suitable and crisp title and description to your pull request that explains your contribution.
- Follow the PR template without compromising anything.
- Mention anyone of the reviewers (ikurotime)
- Voila! Your Pull Request has been submitted and will be reviewed by the moderators and merged.🥳

## 7. Star this repo

Please star this repo to make this project cooler

Happy contributing !

## Advice on pull requests
Pull requests are the easiest way to contribute the changes to git repos at GitHub. They are the preferred contribution method, as they offer a nice way for commenting and amending the proposed changes.
* If you later need to add new commits to the pull request, you can simply commit the changes to the local branch and then use ```git push``` to automatically update the pull request.

## Commits in your pull-requests should
* Have a useful description.
* Have some images regarding the changes done by you.

## If you have commit access
* Do NOT use ```git push --force```.
* Use Pull Requests if you are unsure and to suggest changes to other maintainers.
* Do NOT commit to other maintainer's packages without their consent.