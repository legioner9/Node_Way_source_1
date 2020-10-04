# History    
    
    $ git init

        Initialized empty Git repository in E:/Node_projects/Pre_Git/.git/
    
    $ ls -a

        ./  ../  .git/

    // create and write file
    $ echo comm1 > mas1

    
    $ ls

        mas1
    
    $ git add .
    

    $ git st

        On branch master
        
        No commits yet
        
        Changes to be committed:
          (use "git rm --cached <file>..." to unstage)
                new file:   mas1
            
    $ git commit . -m 'my first commit'

        warning: LF will be replaced by CRLF in mas1.
        The file will have its original line endings in your working directory
        [master (root-commit) b633ae8] my first commit
         1 file changed, 1 insertion(+)
         create mode 100644 mas1

    $ git lg

        * b633ae8 - (HEAD -> master) my first commit (81 seconds ago) <legioner9>
    
    $ ls

        mas1
    
    $ cat mas1

        comm1
    
# checkup init   
    
    $ ls

        mas1
        
    $ cat mas1

        comm1

    $ git st

        On branch master
        nothing to commit, working tree clean
        
    $ git lg

        * 96ef719 - (HEAD -> master) my first commit (52 minutes ago) <legioner9>
        
    
# changes

    $ echo change_comm1 >> mas1  
    $ cat mas1

        comm1
        change_comm1  

    $ git st

        On branch master
        Changes not staged for commit:
        (use "git add <file>..." to update what will be committed)
        (use "git restore <file>..." to discard changes in working directory)
                modified:   mas1

        no changes added to commit (use "git add" and/or "git commit -a")

# add to WD (work Dir)

    $ git add mas1

        warning: LF will be replaced by CRLF in mas1.
        The file will have its original line endings in your working directory

# create second commit

    $ git commit . -m 'modified mas1'

        warning: LF will be replaced by CRLF in mas1.
        The file will have its original line endings in your working directory
        [master ca34649] modified mas1
        1 file changed, 1 insertion(+)

    $ git st

        On branch master
        nothing to commit, working tree clean

    $ git lg

        * ca34649 - (HEAD -> master) modified mas1 (3 minutes ago) <legioner9>* 96ef719 - my first commit (2 days ago) <legioner9>



    $ cat mas1

        comm1
        change_comm1
        


    $ git commit . -m 'modified mas1'

    $ git lg
        * ca34649 - (HEAD -> master) modified mas1 (20 minutes ago) <legioner9>
        * 96ef719 - my first commit (2 days ago) <legioner9>


![](_src/git_0.png)

# onward

## DOCS:
 
    git switch [<options>] [--no-guess] <branch>
    git switch [<options>] --detach [<start-point>]
    git switch [<options>] (-c|-C) <new-branch> [<start-point>]
    git switch [<options>] --orphan <new-branch>
    

    
    
    
    






= 












    
    
     
 
