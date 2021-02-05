- alias gs="git status"
- alias gd="git add ."
- alias gp="git push -u origin master"
- alias gl="git log --pretty=format:\"%h %s\" --graph"
- alias gw="git show --stat --oneline HEAD"
- alias gg="git log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"

.

    {shape_1}={
        {st}={}  
        {ws}={}
        {in}={}
        {lr}={}
        }
    (*)
        [echo cnt_0 >> v1]
            <>
            [gs ]
                <>Untr:::v1
                <>Toco:::
                <>
            [gg ]
                <>...
    (*)            
    {shape_2}={
        {st}={}
        {ws}={v1:cnt_0}
        {in}={}
        {lr}={}
        }
    (*)
        [git add v1]
            <>
            [gs ]
                <>Untr:::...
                <>Toco:::new file:   v1
                <>
            [gg ]
                <>
    (*)            
    {shape_3}={
        {st}={}  
        {ws}={v1:cnt_0}
        {in}={v1:cnt_0}
        {lr}={}
        }
    (*)
        [git commit -m v1=cnt_0]
            <>[master (root-commit) 3a462c6] v1=cnt_0
             create mode 100644 v1
            [gs ]
                <>Untr:::...
                <>Toco:::...
                <>
            [gg ]
                <>3a462c6 - (53 seconds ago) v1=cnt_0 - legioner9 (HEAD -> master)
    (*)            
    {shape_4}={
        {st}={}  
        {ws}={v1:cnt_0}
        {in}={}
        {lr}={
            HEAD -> master:::3a462c6::v1:cnt_0
        }
        }
    (*)
        [git remote add bare ../bare/]
        [git push bare master]
            <>To ../bare/
             * [new branch]      master -> master
            [gs]
                <>Untr:::...
                <>Toco:::...
                <>
            [gg]
                <>* 3a462c6 - (43 minutes ago) v1=cnt_0 - legioner9 (HEAD -> master, bare/master)
    (*)            
    {shape_5}={
        {st}={}  
        {ws}={v1:cnt_0}
        {in}={}
        {lr}={
            HEAD -> bare/master:::3a462c6::v1:cnt_0
        }
        }        
    (*)
        [echo cnt_1 > v1]
            <>...
            [gs]
                <>Untr:::...
                <>Toco:::...
                <>Chng:::modified:   v1
            [gg]
                <>*prev*
    (*)            
    {shape_6}={
        {st}={}  
        {ws}={v1:cnt_1,
                modified:   v1
                    -cnt_0
                    +cnt_1}
        {in}={}
        {lr}={
            HEAD -> bare/master:::3a462c6::v1:cnt_0
        }
        }
    (*)
        [git add v1]
            <>...
            [gs]
                <>Untr:::...
                <>Toco:::modified:   v1
                <>Chng:::...
            [gg]
                <>*prev*
    (*)            
    {shape_7}={
        {st}={}  
        {ws}={v1:cnt_1}
        {in}={v1:cnt_1,
                modified:   v1
                    -cnt_0
                    +cnt_1}
        {lr}={*prev*}
        }
    (*)
        [echo cnt_2 > v1]
            <>...
            [gs]
                <>Untr:::...
                <>Toco:::modified:   v1
                <>Chng:::modified:   v1
            [gg]
                <>*prev*
    (*)            
    {shape_8}={
        {st}={}  
        {ws}={v1:cnt_2,
                modified:   v1
                    -cnt_1
                    +cnt_2}
        {in}={v1:cnt_1,
                modified:   v1
                    -cnt_0
                    +cnt_1}
        {lr}={*prev*}
        }
        }
    (*)
        [git commit -m v1=cnt_1]
            <>[master 4c2ab9e] v1=cnt_1
            [gs]
                <>Untr:::...
                <>Toco:::...
                <>Chng:::modified:   v1
            [gg]
                <>* 4c2ab9e - (48 seconds ago) v1=cnt_1 - legioner9 (HEAD -> master)
                  * 3a462c6 - (81 minutes ago) v1=cnt_0 - legioner9 (bare/master)
    (*)            
    {shape_9}={
        {st}={}  
        {ws}={v1:cnt_2,
                modified:   v1
                    -cnt_1
                    +cnt_2}
        {in}={}
        {lr}={
            HEAD -> master:::4c2ab9e::v1:cnt_1
                bare/master:::3a462c6::v1:cnt_0
        }
        }
    (*)
        [git add v1]
            <>
            [gs]
                <>Untr:::...
                <>Toco:::modified:   v1
                <>Chng:::...
            [gg]
                <>
    (*)            
    {shape_10}={
        {st}={}  
        {ws}={v1:cnt_2}
        {in}={v1:cnt_2,
                modified:   v1
                    -cnt_1
                    +cnt_2}
        {lr}={*prev*}
        }
    (*)
        [echo cnt_3 > v1]
            <>
            [gs]
                <>Untr:::...
                <>Toco:::modified:   v1
                <>Chng:::modified:   v1
            [gg]
                <>
    (*)            
    {shape_11}={
        {st}={}  
        {ws}={v1:cnt_3,
                modified:   v1
                    -cnt_2
                    +cnt_3}
        {in}={v1:cnt_2,
                modified:   v1
                    -cnt_1
                    +cnt_2}
        {lr}={
            HEAD -> master:::4c2ab9e::v1:cnt_1
                bare/master:::3a462c6::v1:cnt_0
        }
        }



-------------------------------    
    *prev*
                <>Untr:::...
                Changes to be committed:<>Toco:::...
                Changes not staged for commit:<>Chng:::...    
-------------------------------
    (*)
        []
            <>
            [gs]
                <>Untr:::...
                <>Toco:::...
                <>Chng:::...
            [gg]
                <>
    (*)            
    {shape_...}={
        {st}={}  
        {ws}={}
        {in}={}
        {lr}={}
        }
-------------------------------

        {lr}={
            bare:::2fb793a::v1:'',
        }

        {st}={        
            {fs}={
                34f9654::v1:'cng_2',
            }
            {in}={
                a620541::v1:'cng_1',
            }
        }


        