    {shape_11}={
            {st}={
                [e3874cc commit mas2]:[
                    sta1:'sta1 to stash',
                ]
            }
            {fs}={
                mas1:'',
                mas2:'',
                mas3:'',
                cl_ws:'',
                cl_in:'',
                mo_in:'modify mo_in',                
            }
            {ws}={
                cl_ws:'',
                mo_in:'modify mo_in',          
            }
            {in}={
                cl_in:'',
                mo_in:'',                                
            }
            }
            {lr}={
                [master (root-commit) ae177be]:[
                    mas1:'',
                ],
                [master e3874cc]:[
                    mas2:'',
                ],
                [master bc9d637]:{
                    mas3:'',
                }
            }
            {ur}={}
        }

    $ git st
        Refresh index: 100% (5/5), done.
        On branch master
        Changes to be committed:
        (use "git restore --staged <file>..." to unstage)
                new file:   cl_in
                new file:   mo_in

        Changes not staged for commit:
        (use "git add <file>..." to update what will be committed)
        (use "git restore <file>..." to discard changes in working directory)
                modified:   mo_in

        Untracked files:
        (use "git add <file>..." to include in what will be committed)
                cl_ws

    $ git lg
        * bc9d637 - (HEAD -> master) commit mas3 (20 hours ago) <legioner9>
        * e3874cc - commit mas2 (24 hours ago) <legioner9>
        * ae177be - commit mas1 (32 hours ago) <legioner9>

    $ git stash list
        stash@{0}: WIP on master: e3874cc commit mas2

![](_src/create_start_blob_1@1.1_{ws}.png)

![](_src/create_start_blob_1@1.1_{st}.png)

## EXAMPLES
### Various ways to check your working tree

    $ git diff            (1)
    $ git diff --cached   (2)
    $ git diff HEAD       (3)
1. Changes in the working tree not yet staged for the next commit.

3. Changes between the index and your last commit; what you would be committing if you run "git commit" without  "`-a`" option.
 
5. Changes in the working tree since your last commit; what you would be committing if you run "`git commit -a`"

#

1. Изменения в рабочем дереве еще не подготовлены для следующего коммита.
2. Изменения между индексом и вашей последней фиксацией; что бы вы сделали, если запустите «git commit» без опции «-a».
3. Изменения в рабочем дереве с момента вашего последнего коммита; что бы вы сделали, если запустите "git commit -a"



### Comparing with arbitrary commits

    $ git diff test            (1)
    $ git diff HEAD -- ./test  (2)
    $ git diff HEAD^ HEAD      (3)
1. Instead of using the tip of the current branch, compare with the tip of "test" branch.
2. Instead of comparing with the tip of "test" branch, compare with the tip of the current branch, but limit the comparison to the file "test".
3. Compare the version before the last commit and the last commit.

# 

1. Вместо использования кончика текущей ветви сравните с кончиком «тестовой» ветви.
2. Вместо сравнения с вершиной ветки «test» сравните с вершиной текущей ветки, но ограничьте сравнение файлом «test».
3. Сравните версию перед последней фиксацией и последней фиксацией.


### Comparing branches

    $ git diff topic master    (1)
    $ git diff topic..master   (2)
    $ git diff topic...master  (3)
1. Changes between the tips of the topic and the master branches.
2. Same as above.
3. Changes that occurred on the master branch since when the topic branch was started off it.

#

1. Изменения между подсказками темы и главными ветками.
2. То же, что и выше.
3. Изменения, произошедшие в основной ветке с момента запуска тематической ветки.


### Limiting the diff output

    $ git diff --diff-filter=MRC            (1)
    $ git diff --name-status                (2)
    $ git diff arch/i386 include/asm-i386   (3)
1. Show only modification, rename, and copy, but not addition or deletion.
2. Show only names and the nature of change, but not actual diff output.
3. Limit diff output to named subtrees.

# 

1. Показывать только изменение, переименование и копирование, но не добавление или удаление.
2. Показывать только имена и характер изменения, но не фактический вывод различий.
3. Ограничьте вывод различий именованными поддеревьями.


Munging the diff output

    $ git diff --find-copies-harder -B -C  (1)
    $ git diff -R                          (2)
1. Spend extra cycles to find renames, copies and complete rewrites (very expensive).
2. Output diff in reverse.

# 

1. Потратьте дополнительные циклы на поиск переименований, копий и полных перезаписей (очень дорого).
2. Разница вывода в обратном порядке.

