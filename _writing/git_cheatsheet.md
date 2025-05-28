---
layout: post
permalink: /git_cheatsheet.html
title: Git Cheatsheet
subtitle: key git things
img: git.png
---
<style>
p {
	margin-left: 25px;
}
</style>

## Key Git Concepts/Commands with Basic Usage
<br/>
<p style="margin-left: 0">Remember you can always <code>git &lt;command&gt; --help</code> for further details about any command.</p>
<br/>

###### “upstream”/“remote”/“origin"
The server-side, “in the cloud” repo your local copy is pointed to.

###### `git clone https://<github-token>@github.com/<username>/<repo-name>.git`
###### `git clone git@github.com:<username>/<repo-name>.git`
Get a copy of the remote locally for the first time. Note you'll also need to create a github access token through the website or `cd ~/.ssh && ssh-keygen`, `cat id_rsa.pub | pbcopy` and paste the public key on your github profile.

###### “commit” (n.)
Refers to a set of changes, large or small. It forms a node in the code graph. Each has an associated message to describe what it was about and a hash so you can identify it uniquely (as for rolling code back to a particular spot).

###### `git status`
At any time there may be changes “staged” for commit (shown in green), or not staged for commit (shown in red). If you commit (v.), then those changes cease to be shown in the stage, but `status` will tell you you’re “ahead of” the remote copy by 1 or more commits (n.). 

###### `git add`
Adds a change to the “stage”, so git knows you want to include that change in the next commit.

###### `git rm`
This is the same as using `rm` to remove files from the system and then using `git add <deleted-filename>` to stage the removals as part of a commit.

###### `git reset <filename>`
“Unstages” a file that you’ve added to the stage.

###### `git commit -m “<commit message>”`
Wrap up your changes in a nice little package. Typically you want each commit to target some unified conceptual change, and you want messages to be descriptive, even if they’re long. Don’t shy away from creating lots of little commits if the scope of your intentions is broader than one thing.

###### `git reset --soft HEAD~1`
Undo the latest local commit, without reverting the code itself. If you mistakenly create a commit and would like to be popped back out at the stage as it was, this is the best way. “HEAD” refers to the last node in the code graph, so you’re pointing it 1 back from where it currently points.

###### `git reset --hard HEAD~1`
Undo the latest local commit, throwing away all code changes involved. This one is a bit dangerous, but useful.

###### `git push`
Send your local commits the cloud. You should do this at the end of your session, so your work can't be lost if your computer dies. Some times you push more frequently, or to intentionally kick off <a href="#Advanced">continuous integration</a>.

###### “branch”
A branch in the code graph. If working on the same files as others, it can be helpful to put one or a series of commits in a separate branch so they can’t break the mainline code. You can push branches and the commits you make to them up to the cloud, where they can happily live in parallel.

###### “master”
The main branch. You want things in here to always stay unbroken. Some times everyone just commits here directly, and it’s fine. Some times an organization chooses to engage settings to “protect” the master branch, meaning it can only be modified via pull requests, some times only with several people’s review and approval.

###### `git branch`
Lists all the local branches, so you can see and select between them.

###### `git checkout <branch-name>`
Switch to a different branch locally. You might do some work in one branch and then decide you want to set it aside and work on something conceptually unrelated, which you’ve got stewing in a different branch. Note that all work has to be cleanly committed to your current branch (or <a href="#Advanced">stashed</a>) before git will let you switch.

###### `git checkout -b <branch-name>`
Create a new local branch. Note that this branches *from the branch you've currently selected*. It is possible to have branches on branches, thereby enabling side-work on longer-living, larger-scope feature branches. The new branch assumes all the changes of the initial branch at the time of branching, which can compound divergence. You should branch with respect to the branch where your changes are meant to apply. Most commonly this means checking out master before new branch creation.

###### `git checkout -- <filename>`
Pulls down the remote version of the file, overwriting the local copy. Useful if you've made changes you don't mean to keep, like rerunning a `.ipynb`.

###### “pull request” (PR)
Once you’re happy with the state of one of your branches, and you’d like the master code to reflect your gloriously helpful changes, “submit” your code via one of these. There is a “Pull Requests” tab on GitHub where others can view, comment on, and collaborators can accept/reject the changes.

###### “merge”
Once a pull request is accepted, the branches are combined. A “merge strategy” is necessary when the master branch has also undergone changes. “Merge conflicts” occur when those different changes interfere with each other and can’t be automatically resolved. In this case, git edits the conflicted files, adding big symbols to delimit sections the resolver wasn’t sure about: `<<<<<<<` remote version `=======` your version `>>>>>>>`. You’ll have to open and edit these manually, recommit, and repush. Resolving merge conflicts is infamously the most painful part of git, but thankfully it’s rare.

###### `git merge <other-branch>`
Merge the commits from some other branch in to the current branch. `pull` invokes `merge`, so you usually don't need to make this call separately.

###### `git pull`
Pull down commits to the current branch from the remote. You should do this when beginning work to make sure you're operating with the latest version. This averts merge conflicts by ensuring you're not writing changes to something that has already changed in an incompatible way.

###### `git pull origin master`
While on one of your own branches, use this to keep that branch up-to-date with changes others have made to master. This averts merge conflicts by keeping divergence small.

###### `git branch -d <branch-name>`
Delete the local branch when you’re done with it. Typically once code is merged you do this to reduce clutter. This only deletes the local copy; the remote copy of your branch can be deleted manually on GitHub or, if you check the checkbox at pull request creation, gets cleaned up when an associated PR is merged.

<br/>
<a class="anchor" id="Advanced"></a>
#### Advanced
<br/>

###### `.gitignore`
Signatures of filenames you'd like `git status` and `git add` to be blind to, each on a new line. E.g. `.DS_Store` to make git ignore the Mac custom folder attributes cache and `*.o` to ignore all intermediate output files in a C project.

###### `git stash`
If you have changes on one branch that are preventing you from switching branches, but you don't want to commit them, you can stash them via this command.

###### `git stash list`
See your stashes with this command. They are shown with identifiers `stash@{0}`, `stash@{1}`, etc.

###### `git stash pop stash@{<N>}`
Take the named stash out of the list, and apply those changes to the current branch. You can see the changes reflected in the output of `git status`. 

###### “fork” 
If you want to be owner of your own remote version of someone else’s public repo, and they haven’t made you a collaborator on theirs, you fork. Forks can evolve independently or be the basis for pull requests back to the original repo.

###### “GitHub Actions”
There is a concept called “continuous integration” (CI), which means when you push code, the server does a bunch of things for you automatically, like running tests, regenerating documentation, deploying packages, etc. This is all governed by configuration files, which have a lot of quirks and can be annoying to set up, but it's super helpful for giving you and others immediate feedback about the state of the code. There are numerous different systems, but GitHub’s built-in one is called “Actions”.
