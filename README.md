# Reveal image by typing a shared secret

This is a simple demo using react. 
Since all the code is client-side, 
this is NOT a secure implementation. 
For demonstration and learning purposes only. 

```powershell
> cd "C:\Users\kushal\src\myhtml\mysecretpage"; date; yarn; date; yarn run build; date; git add .; date; git commit --message "build application" --message "from the terminal"; date; git pull --rebase origin main; date; git push origin main; date;

Saturday, June 8, 2024 9:19:08 AM
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.10s.
Saturday, June 8, 2024 9:19:08 AM
yarn run v1.22.21
$ tsc && vite build
vite v5.2.10 building for production...
✓ 39 modules transformed.
docs/index.html                   0.46 kB │ gzip:  0.30 kB
docs/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
docs/assets/index-D6oJdQWc.css    1.61 kB │ gzip:  0.80 kB
docs/assets/index-D6Y2owcv.js   147.57 kB │ gzip: 47.42 kB
✓ built in 617ms
Done in 1.90s.
Saturday, June 8, 2024 9:19:10 AM
warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/assets/index-D6Y2owcv.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/assets/index-D6oJdQWc.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
Saturday, June 8, 2024 9:19:10 AM
[main 991dcda] build application
 27 files changed, 339 insertions(+), 1 deletion(-)
 create mode 100644 docs/datausage.md
 create mode 100644 docs/iphone-data-usage/IMG_0206.PNG
 create mode 100644 docs/iphone-data-usage/IMG_0207.PNG
 create mode 100644 docs/iphone-data-usage/IMG_0208.PNG
 create mode 100644 docs/iphone-data-usage/IMG_0209.PNG
 create mode 100644 docs/iphone-data-usage/IMG_0210.PNG
 create mode 100644 docs/iphone-data-usage/IMG_0211.PNG
 create mode 100644 docs/iphone-data-usage/IMG_0212.PNG
 create mode 100644 docs/iphone-data-usage/IMG_0213.PNG
 create mode 100644 docs/iphone-data-usage/IMG_0214.PNG
 create mode 100644 docs/iphone-data-usage/IMG_0215.PNG
 create mode 100644 docs/iphone-data-usage/IMG_0216.PNG
 create mode 100644 public/datausage.md
 create mode 100644 public/iphone-data-usage/IMG_0206.PNG
 create mode 100644 public/iphone-data-usage/IMG_0207.PNG
 create mode 100644 public/iphone-data-usage/IMG_0208.PNG
 create mode 100644 public/iphone-data-usage/IMG_0209.PNG
 create mode 100644 public/iphone-data-usage/IMG_0210.PNG
 create mode 100644 public/iphone-data-usage/IMG_0211.PNG
 create mode 100644 public/iphone-data-usage/IMG_0212.PNG
 create mode 100644 public/iphone-data-usage/IMG_0213.PNG
 create mode 100644 public/iphone-data-usage/IMG_0214.PNG
 create mode 100644 public/iphone-data-usage/IMG_0215.PNG
 create mode 100644 public/iphone-data-usage/IMG_0216.PNG
Saturday, June 8, 2024 9:19:11 AM
From github.com:secretimage/secretimage.github.io
 * branch            main       -> FETCH_HEAD
Current branch main is up to date.
Saturday, June 8, 2024 9:19:11 AM
Enumerating objects: 26, done.
Counting objects: 100% (26/26), done.
Delta compression using up to 16 threads
Compressing objects: 100% (20/20), done.
Writing objects: 100% (20/20), 4.48 MiB | 6.95 MiB/s, done.
Total 20 (delta 6), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (6/6), completed with 5 local objects.
To github.com:secretimage/secretimage.github.io.git
   7523a6f..991dcda  main -> main
Saturday, June 8, 2024 9:19:13 AM
```

```
> yarn add react-router-dom
yarn add v1.22.21
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 2 new dependencies.
info Direct dependencies
└─ react-router-dom@6.23.1
info All dependencies
├─ react-router-dom@6.23.1
└─ react-router@6.23.1
Done in 1.99s.
```

```html
<button class="dig-IconButton dig-IconButton--transparent dig-IconButton--standard dig-IconButton--medium dig-Modal-close-btn" aria-label="Close" data-testid="digModalCloseButton">
    <span class="dig-IconButton-content">
        <svg viewBox="0 0 24 24" fill="none" class="dig-UIIcon dig-UIIcon--standard" width="24" height="24" role="presentation" focusable="false">
            <path d="m17.5 6.5-11 11m11 0-11-11" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" vector-effect="non-scaling-stroke"></path>
        </svg>
    </span>
</button>
```