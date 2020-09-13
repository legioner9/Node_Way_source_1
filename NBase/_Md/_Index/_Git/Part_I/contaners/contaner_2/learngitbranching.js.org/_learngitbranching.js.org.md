

## file git config

    [user]
    	email = legioner9@inbox.ru
    	name = legioner9
    [core]
    	editor = 'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin
    [alias]
    	lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
    	 
    

## commit 

    git {from HEAD} commit


## make branch

    git branch <BR:new::(instead)>
    
## checkout -b
Создание и сразу переход на новую ветку

    git checkout {from HEAD} -b <BR:new::(instead HEAD)> {HEAD transfer BR:new}
     
    
## merge
В текущую ветку merge arg.branch

    git merge <COM:any> {to HEAD}

## rebase

    git rebase {to COM} <toCOM:any> {to COM} <fromCOM:any> {=> fromCOM' chaild toCOM}
     





    












