@echo off
REM Ejecutar el script de Node.js
node .\index.js
if %errorlevel% neq 0 (
    echo Error: Node.js script failed.
    pause
    exit /b %errorlevel%
)

REM Add all changes to the staging area
git add .
if %errorlevel% neq 0 (
    echo Error: Failed to add files to staging area.
    pause
    exit /b %errorlevel%
)

REM Commit the changes with a message
git commit -m "Update"
if %errorlevel% neq 0 (
    echo Error: Failed to commit changes.
    pause
    exit /b %errorlevel%
)

REM Push the changes to the remote repository
git push origin main
if %errorlevel% neq 0 (
    echo Error: Failed to push changes to remote repository.
    pause
    exit /b %errorlevel%
)

echo The script succeeded.
pause