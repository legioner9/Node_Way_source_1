## {st} - (blob|ident) area :ident{stash}::blob: + :blob:
## {fs} - (file) area :file:
## {wd} - ident area :wd::file: - label on unstage file 
## {in} - ident area :in::file: - label on stage file
## {lr} - (blob|ident) area :ident{local repo}::blob: + :blob:
## {ur} - (blob|ident) area :ident{upstr repo}::blob: + :blob:


## git init
    $ git init
        Initialized empty Git repository in E:/Node_projects/Pre_Git/Start_set_1/Start_blob_1/.git/

    {shape_1}={
        {st}={}
        {fs}={}
        {ws}={}
        {in}={}
        {lr}={}
        {ur}={}
        }

## create mas1

    $ touch mas1

    {shape_1}={
        {st}={}
        {fs}={}
        {ws}={}
        {in}={}
        {lr}={}
        {ur}={}
        }
            (*) 
            {{fs} lo}[touch <mas1>]
    {shape_2}={
        {st}={}
        {fs}={
            mas1:'',
        }
        {ws}={}
        {in}={}
        {lr}={}
        {ur}={}
        }
         
##  add mas1

    $ git add mas1
    $ git st
        On branch master

        No commits yet

        Changes to be committed:
        (use "git rm --cached <file>..." to unstage)
                new file:   mas1

    {shape_2}={
        {st}={}
        {fs}={
            mas1:'',
        }
        {ws}={
            mas1:'',
        }
        {in}={}
        {lr}={}
        {ur}={}
        }
            (*)
            {{ws} up {in}}[git add <mas1>]
        {fs}={
            mas1:'',
        }
        {ws}={
            mas1:'',
        }
        {in}={}
        {lr}={}
        {ur}={}
        }