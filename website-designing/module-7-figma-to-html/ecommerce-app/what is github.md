# What is GitHub?

## Definition

GitHub is a web-based platform and cloud service that facilitates version control and collaboration for software development projects. It is built on top of **Git**, a distributed version control system created by Linus Torvalds. GitHub allows developers to store, manage, track, and collaborate on code repositories with ease. 

### Key Features:
- **Version Control**: Track and manage changes to code over time
- **Collaboration**: Multiple developers can work on the same project simultaneously
- **Branching & Merging**: Create isolated branches for features and merge them back
- **Pull Requests**: Propose, review, and discuss code changes before merging
- **Issue Tracking**: Manage bugs, features, and tasks
- **Project Management**: Organize work with boards and milestones
- **Code Review**: Peer review functionality for quality assurance
- **Continuous Integration/Deployment**: Automate testing and deployment
- **Documentation**: Host documentation and wikis for projects
- **Community**: Share code publicly and contribute to open-source projects

---

## Essential Git & GitHub Commands

### Basic Setup Commands

| Command | Description |
|---------|-------------|
| `git config --global user.name "Name"` | Set your Git username |
| `git config --global user.email "email@example.com"` | Set your Git email |
| `git config --list` | Display all Git configurations |

### Repository Initialization

| Command | Description |
|---------|-------------|
| `git init` | Initialize a new Git repository in the current directory |
| `git clone [url]` | Clone an existing repository from a remote source |
| `git remote add origin [url]` | Add a remote repository connection |
| `git remote -v` | List all remote repositories |

### Staging & Committing

| Command | Description |
|---------|-------------|
| `git add [file]` | Stage a specific file for commit |
| `git add .` | Stage all changes for commit |
| `git status` | Display the current status of the working directory |
| `git commit -m "message"` | Commit staged changes with a message |
| `git commit -am "message"` | Stage and commit all tracked files in one command |
| `git commit --amend` | Modify the most recent commit |

### Viewing History

| Command | Description |
|---------|-------------|
| `git log` | Display the commit history |
| `git log --oneline` | Show commit history in condensed format |
| `git log --graph --all --oneline --decorate` | Visualize branch history |
| `git log --author="Name"` | Show commits by a specific author |
| `git log -n 5` | Display the last 5 commits |
| `git diff` | Show changes between working directory and staging area |
| `git diff [commit1] [commit2]` | Show differences between two commits |
| `git show [commit]` | Display details of a specific commit |

### Branching

| Command | Description |
|---------|-------------|
| `git branch` | List all local branches |
| `git branch -a` | List all local and remote branches |
| `git branch [branch-name]` | Create a new branch |
| `git checkout [branch-name]` | Switch to a specified branch |
| `git checkout -b [branch-name]` | Create and switch to a new branch |
| `git switch [branch-name]` | Switch to a branch (newer syntax) |
| `git switch -c [branch-name]` | Create and switch to a new branch (newer syntax) |
| `git branch -d [branch-name]` | Delete a branch locally |
| `git branch -D [branch-name]` | Force delete a branch |
| `git branch -m [old-name] [new-name]` | Rename a branch |

### Merging

| Command | Description |
|---------|-------------|
| `git merge [branch-name]` | Merge a branch into the current branch |
| `git merge --no-ff [branch-name]` | Merge with a merge commit |
| `git merge --squash [branch-name]` | Combine all commits from branch into one |

### Pushing & Pulling

| Command | Description |
|---------|-------------|
| `git push` | Push local commits to the remote repository |
| `git push origin [branch-name]` | Push a specific branch to remote |
| `git push -u origin [branch-name]` | Push and set upstream branch |
| `git push --all` | Push all branches to remote |
| `git push --tags` | Push all tags to remote |
| `git pull` | Fetch and merge changes from remote repository |
| `git pull --rebase` | Fetch and rebase changes instead of merging |
| `git fetch` | Fetch changes from remote without merging |
| `git fetch --all` | Fetch from all remote repositories |

### Undoing Changes

| Command | Description |
|---------|-------------|
| `git restore [file]` | Discard changes in working directory for a file |
| `git restore --staged [file]` | Unstage a file |
| `git reset HEAD [file]` | Unstage a file (older syntax) |
| `git reset --soft HEAD~1` | Undo last commit, keep changes staged |
| `git reset --mixed HEAD~1` | Undo last commit, keep changes unstaged |
| `git reset --hard HEAD~1` | Undo last commit and discard all changes |
| `git revert [commit]` | Create a new commit that undoes a previous commit |
| `git clean -fd` | Remove untracked files and directories |

### Stashing

| Command | Description |
|---------|-------------|
| `git stash` | Stash current changes without committing |
| `git stash list` | List all stashed changes |
| `git stash pop` | Apply the most recent stash and remove it |
| `git stash apply` | Apply the most recent stash without removing it |
| `git stash apply stash@{n}` | Apply a specific stash |
| `git stash drop` | Delete the most recent stash |
| `git stash clear` | Delete all stashes |

### Tags

| Command | Description |
|---------|-------------|
| `git tag` | List all tags |
| `git tag [tag-name]` | Create a lightweight tag |
| `git tag -a [tag-name] -m "message"` | Create an annotated tag |
| `git show [tag-name]` | Display tag details |
| `git push origin [tag-name]` | Push a specific tag to remote |
| `git delete tag [tag-name]` | Delete a local tag |

### Remote Operations

| Command | Description |
|---------|-------------|
| `git remote -v` | Show remote repository details |
| `git remote add [name] [url]` | Add a new remote repository |
| `git remote remove [name]` | Remove a remote repository |
| `git remote rename [old-name] [new-name]` | Rename a remote |
| `git remote show [name]` | Display details about a remote |

### Rebase & Cherry-pick

| Command | Description |
|---------|-------------|
| `git rebase [branch-name]` | Rebase current branch onto another branch |
| `git rebase -i HEAD~n` | Interactive rebase for the last n commits |
| `git cherry-pick [commit]` | Apply a specific commit to the current branch |

### Searching & Debugging

| Command | Description |
|---------|-------------|
| `git grep [pattern]` | Search for a pattern in tracked files |
| `git log -S [string]` | Find commits that changed a specific string |
| `git blame [file]` | Show who made changes to each line |
| `git bisect` | Binary search through commits to find a bug |

### Additional Useful Commands

| Command | Description |
|---------|-------------|
| `git help [command]` | Display help for a specific Git command |
| `git status --short` | Show status in condensed format |
| `git reflog` | Show reference logs (useful for recovery) |
| `git gc` | Garbage collection and optimization |
| `git fsck` | File system consistency check |

---

## Workflow Example

1. **Clone a Repository**
   ```bash
   git clone https://github.com/username/repo.git
   cd repo
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/new-feature
   ```

3. **Make Changes and Commit**
   ```bash
   git add .
   git commit -m "Add new feature"
   ```

4. **Push to Remote**
   ```bash
   git push -u origin feature/new-feature
   ```

5. **Create a Pull Request on GitHub** and get it reviewed

6. **Merge to Main**
   ```bash
   git checkout main
   git pull origin main
   git merge feature/new-feature
   git push origin main
   ```

---

## Tips & Best Practices

- Write clear, descriptive commit messages
- Commit frequently with logical groupings
- Use branches for features and bug fixes
- Pull before pushing to avoid conflicts
- Review code before merging
- Keep commit history clean
- Use .gitignore to exclude unnecessary files
- Collaborate through pull requests and code reviews
