@@ this start blob_0 for any command

 - {st} - (blob|ident) area :ident{stash}::blob: + :blob:
 - {fs} - (file) area :file:
 - {ws} - (ident) area :wd::file: - label on unstage file 
 - {in} - (ident) area :in::file: - label on stage file
 - {lr} - (blob|ident) area :ident{local repo}::blob: + :blob:
 - {ur} - (blob|ident) area :ident{upstr repo}::blob: + :blob:

.

- alias gs="git status"
- alias gd="git add ."
- alias gp="git push -u origin master"
- alias gl="git log --pretty=format:\"%h %s\" --graph"
- alias gw="git show --stat --oneline HEAD"
- alias gg="git log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"


git init


    $ git init
        Initialized empty Git repository in E:/**

    {shape_1}={
        {st}={}
        {fs}={}
        {ws}={}
        {in}={}
        {lr}={}
        {ur}={}
        }
    (*) 
        {{}}
        []
            [gs]
                <>
            [gw]
                <>
            [gg]
                <>

## single file v1

    $ touch v1 

    {shape_1}={
            {st}={}
            {fs}={}
            {ws}={}
            {in}={}
            {lr}={}
            {ur}={}
            }
    (*)
        {{fs} lo} 
            [touch <v1>]
                [gs]
                    <>Untracked files:
                    <>v1
                [gw]
                    <>fatal: ambiguous argument 'HEAD'
                [gg]
                    <>
    (*)   
    {shape_2}={
        {st}={}
        {fs}={
            v1:'',
        }
        {ws}={
            v1:'',
        }
        {in}={}
        {lr}={}
        {ur}={}
        }
    (*)
        {{ws} up {in}}
            [git add <v1>]
                [gs]
                    <>Changes to be committed:
                    <>new file:   v1
                [gw]
                    <>fatal: ambiguous argument 'HEAD'
                [gg]
                    <>
    (*)
    {shape_3}={
        {st}={}
        {fs}={
            v1:'',
        }
        {ws}={}
        {in}={
            v1:'',
        }
        {lr}={}
        {ur}={}
        }
    (*)
        {{in} up {lr}}
            [git commit v1 -m "empty v1"]
            <>[master (root-commit) 2fb793a] empty v1
                [gs]
                    <>
                [gw]
                    <>2fb793a (HEAD -> master) empty v1
                    <>v1 | 0
                [gg]
                    <>* 2fb793a - (82 seconds ago) empty v1 - legioner9 (HEAD -> master)
    (*) 
    {shape_4}={
        {st}={}
        {fs}={
            v1:'',
        }
        {ws}={}
        {in}={}
        {lr}={
            v1:'',
        }
        {ur}={}
        }
    (*) 
        {{fs} lo}
            [echo cng_1 > v1]
            [cat v1]
                <>cng_1
                [gs]
                    <>Changes not staged for commit:
                    <>modified:   v1
                [gw]
                    <>2fb793a (HEAD -> master) empty v1
                    <>v1 | 0
                [gg]
                    <>* 2fb793a - (82 seconds ago) empty v1 - legioner9 (HEAD -> master)
    (*) 
    {shape_5}={
        {st}={}
        {fs}={
            v1:'cng_1',
        }
        {ws}={
            v1:'cng_1',
        }
        {in}={}
        {lr}={
            v1:'',
        }
        {ur}={}
        }
    (*)
        {{ws} up {in}}
            [git add v1]
                [gs]
                    <>Changes to be committed:
                    <>modified:   v1
                [gw]
                    <>*prev*
                [gg]
                    <>*prev*
    (*)
    {shape_6}={
        {st}={}
        {fs}={
            v1:'cng_1',
        }
        {ws}={}
        {in}={
            v1:'cng_1',
        }
        {lr}={
            v1:'',
        }
        {ur}={}
        }
    (*)
        {{fs} lo}
            [echo cng_2 > v1]
                <>
            [cat v1]
                <>cng_2
                [gs]
                    <>Changes to be committed:
                    <>modified:   v1
                    <>Changes not staged for commit:
                    <>modified:   v1
                [gw]
                    <>*prev*
                [gg]
                    <>*prev*
    (*)
    {shape_7}={
        {st}={}
        {fs}={
            v1:'cng_2',
        }
        {ws}={
            v1:'cng_2',
        }
        {in}={
            v1:'cng_1',
        }
        {lr}={
            v1:'',
        }
        {ur}={}
        }
    (*)
        {up {ur}}
            [git remote add bare ../this_bare/]
            [git push bare master]
                <>
                [gs]
                    <>*prev*
                [gw]
                    <>2fb793a (HEAD -> master, bare/master) empty v1
                    v1 | 0
                [gg]
                    <>* 2fb793a - (5 days ago) empty v1 - legioner9 (HEAD -> master, bare/master)
    (*)            
    {shape_8}={
        {st}={}
        {fs}={
            v1:'cng_2',
        }
        {ws}={
            v1:'cng_2',
        }
        {in}={
            v1:'cng_1',
        }
        {lr}={
            bare:::2fb793a::v1:'',
        }
        {ur}={
            2fb793a::v1:'',
        }
    (*)


    


-------------------------------
    (*)
        {{}}
            []
                <>
                [gs]
                    <>
                [gw]
                    <>
                [gg]
                    <>
    (*)            
    {shape_...}={
        {st}={}
        {fs}={}
        {ws}={}
        {in}={}
        {lr}={}
        {ur}={}
        }
-------------------------------