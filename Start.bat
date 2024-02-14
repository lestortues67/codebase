@echo.
@echo 03/07/2018
@echo.
@echo Flask Framework - Tentative de demarrage du serveur
@echo.   
@echo Choisir le fichier Python parmi les suivants : 
@echo.   
dir *.py
@echo.   


@echo off

set myPort=5000
set /p PythonFile=Saisir le nom du fichier Python :  

set /p myPort=Saisir le numéro de port (5000 ou suivant):
if exist %myPort% (
	@echo Le numero de port est %myPort%
)
else(set myPort=5000
	)

if exist %PythonFile% (
	@echo Le fichier %PythonFile% existe
	@echo.   	
	echo Demarrage du serveur %namef%
	@echo.   
	set FLASK_APP=%PythonFile%
	set FLASK_ENV=development
	flask run --host=0.0.0.0 --port=%myPort%

) else (
	@echo Le fichier %PythonFile% n'existe PAS ! 
)






