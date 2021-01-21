. ~/git-completion.bash
. ~/git-prompt.sh

___(){ 
    echo -e "__help from ~/.bashrc is Run

rel__ :: rel__ ~/.bashrc and ~/.custom_aliases
copy_bash :: copy ~/.bashrc to Node_Way/Store/WinUser/BashRc_instead/.bashrc

cat__ :: to catigorize _Education _Jobs _Md
a_d1 :: create [[ arg, arg + '.md','ReadMe.md',['_src',0] ]]


echo_arg :: echo arg

    "
}

echo_arg() {
    echo "$@"
}


a_d1(){
echo -e "bash m_d1 is RUN
create [[ $@, $@ + '.md','ReadMe.md',['_src',0] ]]
"

	node /F/Node_projects/Node_Way/node_modules/st_ex1/SetDirFile/CreateDirFile/CreateTechDirHot_1/Test/main_test.js $(pwd) "$@"
	
} 

a_d1t(){
    echo -e 'bash m_d1t is RUN
a_d1 Autotest::
/f/Node_projects/Node_Way/node_modules/st_ex1/SetDirFile/CreateDirFile/CreateTechDirHot_1/Test_auto'

    cd /f/Node_projects/Node_Way/node_modules/st_ex1/SetDirFile/CreateDirFile/CreateTechDirHot_1/Test_auto
    node clear.js
    a_d1    

    echo 'a_d1 Autotest DONE'	

}

rel__(){
    echo 'rel__ ~/.bashrc and ~/.custom_aliases'

    . ~/.bashrc
    source ~/.custom_aliases

    echo 'rel__ DONE'

}

cat__(){
    echo 'cat__ :: to catigorize _Education _Jobs _Md'

    node /F/Node_projects/Node_Way/1_test_ini_module_Education.v.0.1.7.1.js
    node /F/Node_projects/Node_Way/2_test_ini_module_Jobs.v.0.1.7.1.js
    node /F/Node_projects/Node_Way/NBase/test_ini_module.v.0.1.7.1__Md.js

    echo 'cat__ DONE'
}

copy_bash(){
    echo 'RUN copy_bash  :: copy ~/.bashrc to Node_Way/Store/WinUser/BashRc_instead/.bashrc'

cp  /C/Users/79059/.bashrc /F/Node_projects/Node_Way/Store/WinUser/BashRc_instead/.bashrc

    echo 'copy_bash DONE'

}






export -f _node

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