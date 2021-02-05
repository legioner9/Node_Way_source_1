## git rm -f v1
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
        [git rm -f v1]
            <rm 'v1'>
            [gs]
                <>Untr:::...
                <>Toco:::deleted:    v1
                <>Chng:::...
            [gg]
                <>
    (*)            
    {shape_...}={
        {st}={}  
        {ws}={}
        {in}={deleted:    v1
                    -cnt_1}
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


  