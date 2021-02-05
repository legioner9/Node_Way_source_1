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
    $$ 4016163: master -> v1=cnt_1{{v1:@@ -1 +1 @@
                        -cnt_0
                        +cnt_1}}
    $$ 74779f5: master, remotes/bare/master -> v1=cnt_0{{v1:@@ -0,0 +1 @@
                                                        +cnt_0}}

* 4016163 - (2 minutes ago) v1=cnt_1 - Legioner9 (HEAD -> master)
* 74779f5 - (13 hours ago) v1=cnt_0 - Legioner9 (bare/master)

[mv v1 v2]
    $ Changes to be committed:{{modified:   v1}}
    $ Changes not staged for commit:{{deleted:    v1}}
    $ Untracked files:{{        fun
                                v2}}
    $$ not checked in to index{{deleted file mode@@ -1 +0,0 @@
                                                        -cnt_2
                                                        }}
    $$ checked in to index but not committed{{v1:@@ -1 +1 @@
                                                    -cnt_1
                                                    +cnt_2}}
    $$ 4016163: master -> v1=cnt_1{{v1:@@ -1 +1 @@
                        -cnt_0
                        +cnt_1}}
    $$ 74779f5: master, remotes/bare/master -> v1=cnt_0{{v1:@@ -0,0 +1 @@
                                                        +cnt_0}}

