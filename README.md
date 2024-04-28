# Reveal image by typing a shared secret

This is a simple demo using react. 
Since all the code is client-side, 
this is NOT a secure implementation. 
For demonstration and learning purposes only. 

```powershell
PS C:\Users\kushal\src\myhtml\mysecretpage> yarn
yarn install v1.22.21
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 13.78s.
PS C:\Users\kushal\src\myhtml\mysecretpage> yarn run dev  
yarn run v1.22.21
$ vite

  VITE v5.2.10  ready in 775 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
6:23:11 PM [vite] hmr update /src/App.tsx
6:25:15 PM [vite] hmr update /src/App.tsx (x2)
6:25:25 PM [vite] hmr update /src/App.tsx (x3)
6:26:16 PM [vite] hmr update /src/SecretImageRevealer.tsx
6:26:30 PM [vite] hmr update /src/SecretImageRevealer.tsx (x2)
6:26:45 PM [vite] hmr update /src/SecretImageRevealer.tsx (x3)
6:26:53 PM [vite] hmr update /src/SecretImageRevealer.tsx (x4)
6:27:20 PM [vite] hmr update /src/SecretImageRevealer.tsx (x5)
6:29:50 PM [vite] hmr update /src/SecretImageRevealer.tsx (x6)
6:29:58 PM [vite] hmr update /src/SecretImageRevealer.tsx (x7)
6:31:39 PM [vite] hmr update /src/SecretImageRevealer.tsx (x8)
6:31:39 PM [vite] Internal server error: Failed to resolve import "./SecretImageRevealer.css" from "src/SecretImageRevealer.tsx". Does the file exist?
  Plugin: vite:import-analysis
  File: C:/Users/kushal/src/myhtml/mysecretpage/src/SecretImageRevealer.tsx:4:7
  18 |  import { useState } from "react";
  19 |  import viteLogo from "/vite.svg";
  20 |  import "./SecretImageRevealer.css";
     |          ^
  21 |  const SecretImageRevealer = () => {
  22 |    _s();
      at formatError (file:///C:/Users/kushal/src/myhtml/mysecretpage/node_modules/vite/dist/node/chunks/dep-DkOS1hkm.js:50824:46)
      at TransformContext.error (file:///C:/Users/kushal/src/myhtml/mysecretpage/node_modules/vite/dist/node/chunks/dep-DkOS1hkm.js:50818:19)
      at normalizeUrl (file:///C:/Users/kushal/src/myhtml/mysecretpage/node_modules/vite/dist/node/chunks/dep-DkOS1hkm.js:66141:33)
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
      at async file:///C:/Users/kushal/src/myhtml/mysecretpage/node_modules/vite/dist/node/chunks/dep-DkOS1hkm.js:66296:47
      at async Promise.all (index 5)
      at async TransformContext.transform (file:///C:/Users/kushal/src/myhtml/mysecretpage/node_modules/vite/dist/node/chunks/dep-DkOS1hkm.js:66217:13)
      at async Object.transform (file:///C:/Users/kushal/src/myhtml/mysecretpage/node_modules/vite/dist/node/chunks/dep-DkOS1hkm.js:51133:30)
      at async loadAndTransform (file:///C:/Users/kushal/src/myhtml/mysecretpage/node_modules/vite/dist/node/chunks/dep-DkOS1hkm.js:53888:29)
      at async viteTransformMiddleware (file:///C:/Users/kushal/src/myhtml/mysecretpage/node_modules/vite/dist/node/chunks/dep-DkOS1hkm.js:63759:32)
6:31:54 PM [vite] hmr update /src/App.tsx
6:31:56 PM [vite] hmr update /src/SecretImageRevealer.css
6:32:51 PM [vite] hmr update /src/SecretImageRevealer.tsx
6:32:57 PM [vite] hmr update /src/SecretImageRevealer.tsx (x2)
6:33:24 PM [vite] hmr update /src/SecretImageRevealer.tsx (x3)
6:33:54 PM [vite] hmr update /src/SecretImageRevealer.tsx (x4)
6:34:03 PM [vite] hmr update /src/SecretImageRevealer.tsx (x5)
6:34:15 PM [vite] hmr update /src/SecretImageRevealer.tsx (x6)
^CTerminate batch job (Y/N)? 
PS C:\Users\kushal\src\myhtml\mysecretpage> yarn run build
yarn run v1.22.21
$ tsc && vite build
vite v5.2.10 building for production...
✓ 37 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-D6oJdQWc.css    1.61 kB │ gzip:  0.80 kB
dist/assets/index-C_UO3KuO.js   144.05 kB │ gzip: 46.34 kB
✓ built in 528ms
Done in 2.21s.
PS C:\Users\kushal\src\myhtml\mysecretpage> 
PS C:\Users\kushal\src\myhtml\mysecretpage>
PS C:\Users\kushal\src\myhtml\mysecretpage> yarn run build
yarn run v1.22.21
$ tsc && vite build
vite v5.2.10 building for production...

(!) outDir C:\Users\kushal\src\myhtml\dist is not inside project root and will not be emptied.
Use --emptyOutDir to override.

✓ 37 modules transformed.
../dist/index.html                   0.46 kB │ gzip:  0.30 kB
../dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
../dist/assets/index-D6oJdQWc.css    1.61 kB │ gzip:  0.80 kB
../dist/assets/index-C_UO3KuO.js   144.05 kB │ gzip: 46.34 kB
✓ built in 504ms
Done in 1.61s.
PS C:\Users\kushal\src\myhtml\mysecretpage> 
PS C:\Users\kushal\src\myhtml\mysecretpage> yarn run build
yarn run v1.22.21
$ tsc && vite build
vite v5.2.10 building for production...
✓ 37 modules transformed.
docs/index.html                   0.46 kB │ gzip:  0.30 kB
docs/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
docs/assets/index-D6oJdQWc.css    1.61 kB │ gzip:  0.80 kB
docs/assets/index-C_UO3KuO.js   144.05 kB │ gzip: 46.34 kB
✓ built in 515ms
Done in 1.50s.
PS C:\Users\kushal\src\myhtml\mysecretpage> git remote add origin git@github.com:secretimage/secretimage.github.io.git
PS C:\Users\kushal\src\myhtml\mysecretpage> 
PS C:\Users\kushal\src\myhtml\mysecretpage>
PS C:\Users\kushal\src\myhtml\mysecretpage> yarn run dev  
yarn run v1.22.21
$ vite

  VITE v5.2.10  ready in 205 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
7:43:42 PM [vite] hmr update /src/SecretImageRevealer.tsx
7:43:42 PM [vite] hmr update /src/SecretImageRevealer.tsx (x2)
7:44:07 PM [vite] hmr update /src/SecretImageRevealer.tsx (x3)
7:44:22 PM [vite] hmr update /src/SecretImageRevealer.tsx (x4)
PS C:\Users\kushal\src\myhtml\mysecretpage> 
PS C:\Users\kushal\src\myhtml\mysecretpage> 
PS C:\Users\kushal\src\myhtml\mysecretpage> yarn run build
yarn run v1.22.21
$ tsc && vite build
vite v5.2.10 building for production...
✓ 38 modules transformed.
docs/index.html                   0.46 kB │ gzip:  0.30 kB
docs/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
docs/assets/index-D6oJdQWc.css    1.61 kB │ gzip:  0.80 kB
docs/assets/index-8jHxprBF.js   144.05 kB │ gzip: 46.37 kB
✓ built in 591ms
Done in 1.64s.
PS C:\Users\kushal\src\myhtml\mysecretpage> 
```