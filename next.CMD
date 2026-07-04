@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Users\user\Documents\Codex\2026-07-04\hey\outputs\sami-portfolio\node_modules\.pnpm\next@16.2.10_react-dom@19.2.7_react@19.2.7__react@19.2.7\node_modules\next\node_modules;C:\Users\user\Documents\Codex\2026-07-04\hey\outputs\sami-portfolio\node_modules\.pnpm\next@16.2.10_react-dom@19.2.7_react@19.2.7__react@19.2.7\node_modules;C:\Users\user\Documents\Codex\2026-07-04\hey\outputs\sami-portfolio\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Users\user\Documents\Codex\2026-07-04\hey\outputs\sami-portfolio\node_modules\.pnpm\next@16.2.10_react-dom@19.2.7_react@19.2.7__react@19.2.7\node_modules\next\node_modules;C:\Users\user\Documents\Codex\2026-07-04\hey\outputs\sami-portfolio\node_modules\.pnpm\next@16.2.10_react-dom@19.2.7_react@19.2.7__react@19.2.7\node_modules;C:\Users\user\Documents\Codex\2026-07-04\hey\outputs\sami-portfolio\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\next\dist\bin\next" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\next\dist\bin\next" %*
)
