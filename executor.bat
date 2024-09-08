@echo off
REM Ejecutar el script de Node.js
node .\index.js
REM Comprobar si el comando anterior salió bien
echo.
if %errorlevel% equ 0 (
    echo The script succeded.
) else (
    echo there was an error.
)
echo.
REM Pausar para que el usuario vea el mensaje
echo.
REM echo Presione cualquier tecla para continuar...
pause
