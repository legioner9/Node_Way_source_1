## git tag -a tag_0 -m create_tag_0
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

[git tag -a tag_hash -m create_tag_hash 74779f5]
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
    $$ 4016163: Tag: tag_hash ,type commit,create_tag_hash
    $$ 74779f5: master, remotes/bare/master -> v1=cnt_0{{v1:@@ -0,0 +1 @@
                                                        +cnt_0}}

* 4016163 - (8 hours ago) v1=cnt_1 - Legioner9 (HEAD -> master)
* 74779f5 - (22 hours ago) v1=cnt_0 - Legioner9 (tag: tag_hash, bare/master)


[git tag]
    <>tag_hash

[git show tag_hash ]
    tag tag_0
    Tagger: Legioner9 <legioner9@inbox.ru>
    Date:   Wed Feb 3 21:36:50 2021 +0700

    create_tag_0

    commit 4016163c617ec2b914b2d46122d13ec5148103b4 (HEAD -> master, tag: tag_0)
    Author: Legioner9 <legioner9@inbox.ru>
    Date:   Wed Feb 3 13:46:59 2021 +0700

        v1=cnt_1

    diff --git a/v1 b/v1
    index 41bb8c7..265dced 100644
    --- a/v1
    +++ b/v1
    @@ -1 +1 @@
    -cnt_0
    +cnt_1

[git stash]
[git checkout tag_hash]

  *   47f2f9e - (72 seconds ago) WIP on master: 4016163 v1=cnt_1 - Legioner9 (refs/stash)
  |\
  | * d509fed - (72 seconds ago) index on master: 4016163 v1=cnt_1 - Legioner9
  |/
  * 4016163 - (9 hours ago) v1=cnt_1 - Legioner9 (master)
  * 74779f5 - (22 hours ago) v1=cnt_0 - Legioner9 (HEAD, tag: tag_hash, bare/master)











