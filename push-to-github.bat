@echo off
cd %~dp0
git init
git remote add origin https://github.com/Jefferseaux/StrategyLab.git
git add .
git commit -m "Final clean version with all images and structure"
git branch -M main
git push -u origin main
pause
