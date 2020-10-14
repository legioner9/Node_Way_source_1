. ~/git-completion.bash
. ~/git-prompt.sh
# export GIT_PS1_SHOWDIRTYSTATE=1
# export PS1='\w$(__git_ps1 " (%s)")\$ '

# export PROMPT_COMMAND='__posh_git_ps1 "\\[\[\e[0;32m\]\u@\h \[\e[0;33m\]\w" " \[\e[1;34m\]\n\$\[\e[0m\] ";'$PROMPT_COMMAND

# PROMPT_COMMAND='__posh_git_ps1 "\u@\h:\w " "\\\$ ";'$PROMPT_COMMAND

iffile() {
    /C/Bash_scripts/iffile.sh "$@"
}
export -f iffile

iffile_2() {
    /C/Bash_scripts/iffile.sh "$@"
}
export -f iffile_2

en_2() {
    /C/Bash_scripts/iffile.sh "$@"
}
export -f en_2

alias welcome='echo "Welcome $USER."'

# Version Control
alias gs="git status"
alias gd="git add ."
alias gp="git push -u origin master"

# Directory
alias diskusage="df -h"
alias folderusage="du -ch"
alias totalfolderusage="du -sh"

# Various
alias opencustomaliases="code  ~/.custom_aliases"
alias updatecustomaliases="source ~/.custom_aliases"
alias updatethenupgrade="sudo apt-get update && sudo apt-get upgrade"

# Несколько команд
function lazyman() {
    git add .
    git commit -a -m "$1"
    git push -u origin master
}

# alias iffile = "[ -f $1 ] && echo Файл_существует || echo Файл_не_существует"

# function iffile() {
# [ -f arg ] && echo Файл_существует || echo Файл_не_существует
# }

# alias iffi = "/C/Bash_scripts/iffile.sh"