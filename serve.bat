@echo off
REM serve.bat - Start a static Python HTTP server on port 8000 from the current directory
REM Usage: double-click or run from PowerShell/CMD in the workspace directory

:: Change to the script's directory so it works when double-clicked
cd /d "%~dp0"

:: Check for python executable
where python >nul 2>&1
if errorlevel 1 (
    echo Python not found in PATH. Please install Python 3 and ensure `python` is on PATH.
    pause
    exit /b 1
)

:: Start the server and keep the window open so logs are visible
necho Starting static server at http://localhost:8000/
python -m http.server 8000 --directory .

:: If the server exits, keep the window open so user can read messages
necho Server exited. Press any key to close.
pause
