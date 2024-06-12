# Reveal image by typing a shared secret

This is a simple demo using react. 
Since all the code is client-side, 
this is NOT a secure implementation. 
For demonstration and learning purposes only. 

```powershell
PS C:\Users\kushal\src\myhtml\mysecretpage> cd "C:\Users\kushal\src\myhtml\mysecretpage\"; date; yarn; date; yarn run build; date; git add .; date; git commit --message "build application" --message "from the terminal"; date; git pull --rebase origin main; date; git push origin main; date;      
               
Wednesday, June 12, 2024 8:11:14 AM
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.19s.
Wednesday, June 12, 2024 8:11:15 AM
yarn run v1.22.21
$ tsc && vite build
vite v5.2.10 building for production...
✓ 39 modules transformed.
docs/index.html                   0.46 kB │ gzip:  0.30 kB
docs/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
docs/assets/index-D6oJdQWc.css    1.61 kB │ gzip:  0.80 kB
docs/assets/index-D6Y2owcv.js   147.57 kB │ gzip: 47.42 kB
✓ built in 742ms
Done in 4.13s.
Wednesday, June 12, 2024 8:11:19 AM
warning: in the working copy of 'docs/assets/index-D6Y2owcv.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/assets/index-D6oJdQWc.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/index.html', LF will be replaced by CRLF the next time Git touches it
Wednesday, June 12, 2024 8:11:19 AM
[main b39ae67] build application
 4 files changed, 142 insertions(+)
 create mode 100644 docs/google-location-history-timeline.html
 create mode 100644 docs/google-location-history-timeline.txt
 create mode 100644 public/google-location-history-timeline.html
 create mode 100644 public/google-location-history-timeline.txt
Wednesday, June 12, 2024 8:11:20 AM
From github.com:secretimage/secretimage.github.io
 * branch            main       -> FETCH_HEAD
Current branch main is up to date.
Wednesday, June 12, 2024 8:11:20 AM
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 16 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 2.10 KiB | 2.10 MiB/s, done.
Total 6 (delta 3), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (3/3), completed with 2 local objects.
To github.com:secretimage/secretimage.github.io.git
   aacc5dd..b39ae67  main -> main
Wednesday, June 12, 2024 8:11:21 AM

PS C:\Users\kushal\src\myhtml\mysecretpage> cd "C:\Users\kushal\src\myhtml\mysecretpage\"; date; yarn; date; yarn run build; date; git add .; date; git commit --message "build application" --message "from the terminal"; date; git pull --rebase origin main; date; git push origin main; date;

Wednesday, June 12, 2024 8:18:11 AM
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.14s.
Wednesday, June 12, 2024 8:18:12 AM
yarn run v1.22.21
$ tsc && vite build
vite v5.2.10 building for production...
✓ 39 modules transformed.
docs/index.html                   0.46 kB │ gzip:  0.30 kB
docs/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
docs/assets/index-D6oJdQWc.css    1.61 kB │ gzip:  0.80 kB
docs/assets/index-DAc7EA5T.js   147.77 kB │ gzip: 47.46 kB
✓ built in 739ms
Done in 3.58s.
Wednesday, June 12, 2024 8:18:16 AM
warning: in the working copy of 'docs/assets/index-D6oJdQWc.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/assets/index-DAc7EA5T.js', LF will be replaced by CRLF the next time Git touches it
Wednesday, June 12, 2024 8:18:16 AM
[main bd2b4e5] build application
 3 files changed, 44 insertions(+), 31 deletions(-)
 rename docs/assets/{index-D6Y2owcv.js => index-DAc7EA5T.js} (63%)
Wednesday, June 12, 2024 8:18:16 AM
From github.com:secretimage/secretimage.github.io
 * branch            main       -> FETCH_HEAD
Current branch main is up to date.
Wednesday, June 12, 2024 8:18:17 AM
Enumerating objects: 14, done.
Counting objects: 100% (14/14), done.
Delta compression using up to 16 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 47.27 KiB | 4.30 MiB/s, done.
Total 8 (delta 5), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
To github.com:secretimage/secretimage.github.io.git
   b39ae67..bd2b4e5  main -> main
Wednesday, June 12, 2024 8:18:18 AM

PS C:\Users\kushal\src\myhtml\mysecretpage> cd "C:\Users\kushal\src\myhtml\mysecretpage\"; date; yarn; date; yarn run build; date; git add .; date; git commit --message "build application" --message "from the terminal"; date; git pull --rebase origin main; date; git push origin main; date;
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