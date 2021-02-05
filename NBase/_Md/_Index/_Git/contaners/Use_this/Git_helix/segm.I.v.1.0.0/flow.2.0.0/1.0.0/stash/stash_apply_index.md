## git stash
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
                    @@ -1 +1 @@
                    -cnt_2
                    +cnt_3}
        {in}={v1:cnt_2,
                modified:   v1
                    @@ -1 +1 @@
                    -cnt_1
                    +cnt_2}
        {lr}={
            HEAD -> master:::4c2ab9e::v1:cnt_1
                bare/master:::3a462c6::v1:cnt_0
        }
    }
    (*)
        [git stash]
            <>Saved working directory and index state WIP on master: 4c2ab9e v1=cnt_1

            [git stash list]
                <>stash@{0}: WIP on master: 4c2ab9e v1=cnt_1
            [git stash show]
                <> v1 | 2 +-
                    1 file changed, 1 insertion(+), 1 deletion(-)
            [git stash show -p]
                <>diff --git a/v1 b/v1
                index 265dced..307fe42 100644
                --- a/v1
                +++ b/v1
                @@ -1 +1 @@
                -cnt_1
                +cnt_3

            [gs]
                <>Untr:::...
                <>Toco:::...
                <>Chng:::...
            [gg]
                <>*   11e3072 - (86 minutes ago) WIP on master: 4c2ab9e v1=cnt_1 - legioner9 (refs/stash)
                |\
                | * fb8a6d5 - (86 minutes ago) index on master: 4c2ab9e v1=cnt_1 - legioner9
                |/
                * 4c2ab9e - (3 days ago) v1=cnt_1 - legioner9 (HEAD -> master)
                * 3a462c6 - (3 days ago) v1=cnt_0 - legioner9 (bare/master)

    (*)            
    {shape_12}={
        {st}={
            {ws}={11e3072::v1:cnt_3
                    @@@ -1,1 -1,1 +1,1 @@@
                     - cnt_1
                    -cnt_2
                    ++cnt_3}
            {in}={fb8a6d5::v1:cnt_2
                    @@ -1 +1 @@
                    -cnt_1
                    +cnt_2}
        }  
        {ws}={v1:cnt_1}
        {in}={}
        {lr}={
            stash -> 11e3072::v1:cnt_3
            (index on 4c2ab9e)fb8a6d5::v1:cnt_2
            HEAD -> master:::4c2ab9e::v1:cnt_1
                bare/master:::3a462c6::v1:cnt_0
        }
    }
    (*)
        [git stash apply --index]
            <>modified:   v1
            [gs]
                <>Untr:::...
                <>Toco:::modified:   v1
                <>Chng:::...
            [gg]
                <>*prev*
    (*)            
    {shape_...}={
        {st}={}  
        {ws}={v1:cnt_3
                    @@ -1 +1 @@
                    -cnt_1
                    +cnt_3}
        {in}={v1:cnt_2,
                modified:   v1
                    @@ -1 +1 @@
                    -cnt_1
                    +cnt_2}
        {lr}={*prev*}
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


  