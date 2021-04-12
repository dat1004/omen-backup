//create new files via GitBash
$ touch <file.extension>

//Initialize local Git Repository
$ git init

//config credentials
$ git config --global user.name '<name>'
$ git config --global user.email '<email>'

//Add Files to Index Staging area
$ git add .
$ git add <file>
$ git add _.html
$ git add _.js

//remove File from Staging area
$ git rm --cached <file>

//Commit changes in index
$ git commit
$ git commit -m '<comment>'

//Add repository as a remote repository
$ git remote add origin <https://github.com/dat1004/${myrepo.git}>
$ git push -u origin master

//Push to Remote Repository
$ git push

//Pull latest from Remote Repository
$ git pull

//Clone Repository into a new Directory
$ git clone <https://github.com/dat1004/${clonerepo.git}>

//create Ignored folder
$ touch .gitignore
$ touch log.txt
/<ignoredFile>

//create new Branch & merge to Master
$ git branch <branchName>
$ git checkout <branchName>
$ git checkout master
$ git merge <branchName>

//Check Status of Working Tree
$ git status
