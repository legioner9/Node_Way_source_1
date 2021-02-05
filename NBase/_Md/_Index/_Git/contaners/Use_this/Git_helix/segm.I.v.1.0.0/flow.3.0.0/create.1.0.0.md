[]
    <> from command
    $ from gs
    $$ from gk
    * from gg

[echo cnt_0 > v1]
    $Untracked files: {{v1:cnt_0}}

[git add v1]
    $Changes to be committed:{{new file:   v1:cnt_0}}

        backward:[git rm --cached v1]  
                    <>rm 'v1'
                    $Untracked files: {{v1:cnt_0}}

[echo cnt_1 > v1]
    $Changes to be committed:{{new file:   v1:cnt_0}}
    $Changes not staged for commit:{{modified:   v1:cnt_1}}

        backward:[git restore v1]
                    $nothing to commit, working tree clean{{v1:cnt_0}}


[git commit -m v1=cnt_0]
    <>[master (root-commit) 74779f5] v1=cnt_0
        1 file changed, 1 insertion(+)
        create mode 100644 v1
    $ Changes not staged for commit:{{modified:   v1}}

    $$ not checked in to index{{v1:@@ -1 +1 @@
                                -cnt_0
                                +cnt_1}}
    * 74779f5 - (9 minutes ago) v1=cnt_0 - Legioner9 (HEAD -> master){{v1:@@ -0,0 +1 @@
                                                                                +cnt_0}}

[git add v1]
    $ Changes to be committed:{{modified:   v1}}
    $$ in to index but not committed{{v1:@@ -1 +1 @@
                                            -cnt_0
                                            +cnt_1}}
    * 74779f5 - (12 hours ago) v1=cnt_0 - Legioner9 (HEAD -> master){{v1:@@ -0,0 +1 @@
                                                                            +cnt_0}}
[echo cnt_2 > v1]
    $ Changes to be committed:{{modified:   v1}}
    $ Changes not staged for commit:{{modified:   v1}}
    $$ not checked in to index{{@@ -1 +1 @@
                                    -cnt_1
                                    +cnt_2}}
    $$ checked in to index but not committed{{v1:@@ -1 +1 @@
                                                    -cnt_0
                                                    +cnt_1}}
    * 74779f5 - (12 hours ago) v1=cnt_0 - Legioner9 (HEAD -> master){{v1:@@ -0,0 +1 @@
                                                                            +cnt_0}}               
[git remote add bare ../bare/]
[git push bare master]
    $ Changes to be committed:{{modified:   v1}}
    $ Changes not staged for commit:{{modified:   v1}}
    $$ not checked in to index{{@@ -1 +1 @@
                                    -cnt_1
                                    +cnt_2}}
    $$ checked in to index but not committed{{v1:@@ -1 +1 @@
                                                    -cnt_0
                                                    +cnt_1}}
    * 74779f5 - (13 hours ago) v1=cnt_0 - Legioner9 (HEAD -> master, bare/master){{v1:@@ -0,0 +1 @@
                                                                                        +cnt_0}}
[git commit -m v1=cnt_1]
    <>[master 4016163] v1=cnt_1
    1 file changed, 1 insertion(+), 1 deletion(-)
    $ Changes not staged for commit:{{modified:   v1}}
    $$ not checked in to index{{v1:@@ -1 +1 @@
                                    -cnt_1
                                    +cnt_2}}

* 4016163 - (2 minutes ago) v1=cnt_1 - Legioner9 (HEAD -> master){{v1:@@ -1 +1 @@
                                                    -cnt_0
                                                    +cnt_1}}
* 74779f5 - (13 hours ago) v1=cnt_0 - Legioner9 (bare/master){{v1:@@ -0,0 +1 @@
                                                                    +cnt_0}}

[git add v1]
    $ Changes to be committed:{{modified:   v1}}
    $$ checked in to index but not committed{{v1:@@ -1 +1 @@
                                    -cnt_1
                                    +cnt_2}}

* 4016163 - (2 minutes ago) v1=cnt_1 - Legioner9 (HEAD -> master){{v1:@@ -1 +1 @@
                                                    -cnt_0
                                                    +cnt_1}}
* 74779f5 - (13 hours ago) v1=cnt_0 - Legioner9 (bare/master){{v1:@@ -0,0 +1 @@
                                                                    +cnt_0}}

[echo cnt_3 > v1]
    $ Changes to be committed:{{modified:   v1}}
    $ Changes not staged for commit:{{modified:   v1}}
    $$ not checked in to index{{@@ -1 +1 @@
                                    -cnt_2
                                    +cnt_3}}
    $$ checked in to index but not committed{{v1:@@ -1 +1 @@
                                                    -cnt_1
                                                    +cnt_2}}

* 4016163 - (2 minutes ago) v1=cnt_1 - Legioner9 (HEAD -> master){{v1:@@ -1 +1 @@
                                                    -cnt_0
                                                    +cnt_1}}
* 74779f5 - (13 hours ago) v1=cnt_0 - Legioner9 (bare/master){{v1:@@ -0,0 +1 @@
                                                                      +cnt_0}}                                                    
[echo cnt_un > fun]
[cat fun]
    <>cnt_un
    $ Changes to be committed:{{modified:   v1}}
    $ Changes not staged for commit:{{modified:   v1}}
    $ Untracked files:{{fun}}
    $$ not checked in to index{{@@ -1 +1 @@
                                    -cnt_2
                                    +cnt_3}}
    $$ checked in to index but not committed{{v1:@@ -1 +1 @@
                                                    -cnt_1
                                                    +cnt_2}}

* 4016163 - (2 minutes ago) v1=cnt_1 - Legioner9 (HEAD -> master){{v1:@@ -1 +1 @@
                                                    -cnt_0
                                                    +cnt_1}}
* 74779f5 - (13 hours ago) v1=cnt_0 - Legioner9 (bare/master){{v1:@@ -0,0 +1 @@
                                                                      +cnt_0}}









