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
            [git rm -f v1] == [rm v1 | git add v1]
                <>rm 'v1'
                [gs]
                    <>Changes to be committed:
                    deleted:    v1
                [gw]
                    <>*prev*
                [gg]
                    <>*prev*
    (*)            
    {shape_...}={
        {st}={}
        {fs}={}
        {ws}={}
        {in}={
            deleted:    v1
        }
        {lr}={*prev*}
        {ur}={*prev*}
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