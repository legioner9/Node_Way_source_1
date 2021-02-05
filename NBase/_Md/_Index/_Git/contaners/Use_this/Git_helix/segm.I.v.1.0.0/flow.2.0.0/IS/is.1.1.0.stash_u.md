                [gs]
                <>Untr:::...
                <>Toco:::modified:   v1
                <>Chng:::modified:   v1
                [gg]
                <>* 4c2ab9e - (3 days ago) v1=cnt_1 - legioner9 (HEAD -> master)
                    * 3a462c6 - (3 days ago) v1=cnt_0 - legioner9 (bare/master)
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
    (*)
        [echo cnt_un > fun]
            <>...
            [gs]
                <>Untr::: fun
                <>Toco:::modified:   v1
                <>Chng:::modified:   v1
            [gg]
                <>*prev*
    (*)            
    {shape_12}={
        {st}={}  
        {ws}={fun:cnt_un,
                v1:cnt_3,
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
    (*)
        [git stash -u]
            <>Saved working directory and index state WIP on master: 4c2ab9e v1=cnt_1
            [git stash list]
                <>stash@{0}: WIP on master: 4c2ab9e v1=cnt_1
            [gs]
                <>Untr:::...
                <>Toco:::...
                <>Chng:::...
            [gg]
                <>$ gg
                *-.   d15edd7 - (2 minutes ago) WIP on master: 4c2ab9e v1=cnt_1 - Legioner9 (refs/stash)
                |\ \
                | | * 2a32d1a - (2 minutes ago) untracked files on master: 4c2ab9e v1=cnt_1 - Legioner9
                | * 06a4a6a - (2 minutes ago) index on master: 4c2ab9e v1=cnt_1 - Legioner9
                |/
                * 4c2ab9e - (4 days ago) v1=cnt_1 - legioner9 (HEAD -> master)
                * 3a462c6 - (4 days ago) v1=cnt_0 - legioner9 (bare/master)

    (*)            
    {shape_13}={
        {st}={        
            {ws}={2a32d1a::fun:cnt_un
                    @@ -0,0 +1 @@
                    +cnt_un,
                    d15edd7::v1:cnt_3
                    @@@@ -1,1 -1,1 -1,0 +1,1 @@@@
                    -  cnt_1
                    - cnt_2
                    +++cnt_3}
            {in}={06a4a6a::v1:cnt_2,
                    @@ -1 +1 @@
                    -cnt_1
                    +cnt_2}
            }  
        {ws}={v1:cnt_1}
        {in}={}
        {lr}={
            stash@{0}:{             06a4a6a::v1:cnt_3
                                    2a32d1a::fun:cnt_un
                        refs/stash:::d15edd7::v1:cnt_3}
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


  