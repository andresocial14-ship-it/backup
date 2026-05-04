$env:PATH += ";C:\Program Files\Git\cmd\"
git init
git add .
git config user.email "ai@example.com"
git config user.name "AI Assistant"
git commit -m "Remove login logic"
git remote add origin https://github.com/andresocial14-ship-it/backup.git
git branch -M main
git push -u origin main --force
