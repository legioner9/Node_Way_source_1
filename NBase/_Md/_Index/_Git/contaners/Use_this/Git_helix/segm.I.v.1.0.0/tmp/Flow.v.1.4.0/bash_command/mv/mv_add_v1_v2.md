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
        {{}}
            [mv v1 v2]
                <>...
                [gs]
                    <>Changes to be committed:
                    modified:   v1
                    Changes not staged for commit:
                    deleted:    v1
                    Changes not staged for commit:
                    v2 (= cng_2)
                [gw]
                    <>
                [gg]
                    <>
    (*)            
    {shape_9}={
        {st}={}
        {fs}={
            v2:'cng_2',
        }
        {ws}={
            v2:'cng_2',
            deleted:    v1
        }
        {in}={
            v1:'cng_1',
        }
        {lr}={*prev*}
        {ur}={*prev*}
        }
    (*)
        {{}}
            [git add v1 v2]
                <>...
                [gs]
                    <>Changes to be committed:
                            deleted:    v1
                            new file:   v2
                [gw]
                    <>
                [gg]
                    <>
    (*)            
    {shape_...}={
        {st}={}
        {fs}={
            v2:'cng_2',
        }
        {ws}={}
        {in}={
            v2:'cng_2',
            deleted:    v1
        }
        {lr}={}
        {ur}={}
        }
    

    *prev*

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