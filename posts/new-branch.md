---
title: 'check out new-branch and push to github'
date: '2025-07-13'
---
**DPS workflow** 
- Create a new branch: git checkout -b new-branch
- Add a new empty file: add posts/new-branch.md (this file)
  then stage the file: git add posts/new-branch.md
- commit the changes: git commit -m "Add new md file"
- push to fit hub: git push origin new-branch
- create a new pull request: go to repo on github, you should see a prompt to create a pull request from your new ranch.  Click "Compare and pull request", fillin the details and create the pull request.
- Git hub UI: Click **Pull request** in your repository, select your branch, and create a PR.
- Preview the deployment: Vercel automatically creates a preview depolyment for the PR.  Review it at the URL provided in the PR details.
- merge the PR: Once satisfied, merge the PR to the main branch through the github UI or
**git pull origin master**
**git checkout main** to switch to the main branch
**git merge new-brach** to merge it
**git push origin main** to push the updated main branch to github
- Deploy to production: Vercel auto-deploys the main branch.  Monitor the deployment on the Vercel dashboard.
We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.
 
