# DevFest-2024 Website

DevFest 2024 Website created with [Next.js](https://nextjs.org/), utilizing React.

## Getting Started

Clone the Github repo:

```bash
git clone https://github.com/adicu/devfest-2024.git
```

Enter the cloned directory:

```bash
cd devfest-2024
```

**Ensure you're on the correct git branch**

```bash
# replace <branch> with branch name
git checkout <branch> # Switches to existing branch
git checkout -b <branch> # Creates new branch from current branch
```

> **_NOTE:_** It's always a good idea to run `git pull` before you start working and after you switch branches to ensure you have the latest version. You can also always run `git status` to check what branch you're on.

Install Node dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the home page by modifying `src/pages/index.js`. The page auto-updates as you edit the file.

We are going to place our reusable components in the `src/components` directory.

## Working on Issues

Under the "Issues" Github tab, you can find any issues that need addressing. Click on an issue you want to work on.

On the right side of the issue page under the "Development" pane, there is a "Create a branch" button. Click on "Create a branch"

In the window that pops up, enter an appropriate branch name or leave it as what's assigned by default (may be best). The branch source should be "main" by default, which is usually what you want, but if you need to change it, click on "Change branch source" and select the appropriate branch. Click on "Create branch" when you've set everything correctly.

Once you've created the branch, run `git pull` or `git fetch` in your local directory, then switch to the new branch by running `git checkout <branch>`

You can now begin making your changes. When you're done, follow the instructions below to push your changes.

## Pushing your changes

**Ensure you're on the correct git branch.**

**The changes will be pushed to the same branch you're on locally.**

Run `git status` to check your current branch. If you need to change branches:

```bash
# replace <branch> with branch name
git checkout <branch> # Switches to existing branch
git checkout -b <branch> # Creates new branch from current branch
```

Add changes to staging area:

```bash
git add <your_file_or_folder_name> # Adds specific files
git add . # Adds all files in current directory
```

Run `git status` and check the list of files under `Changes to be committed:`. Ensure you want to commit all files listed here.

Run `git commit -m "commit_message_here"` to commit your changes.

Finally, run `git push` to push your changes to the remote repo.

## Recommended VSCode Extensions

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for Code formatting, highlighting
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components) for `@emotion/styled` component syntax highlighting.

## More Information

### API Routes

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
