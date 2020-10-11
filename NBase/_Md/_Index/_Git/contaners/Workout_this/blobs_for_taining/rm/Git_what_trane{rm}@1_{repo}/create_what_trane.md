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

## REMOVING FILES THAT HAVE DISAPPEARED FROM THE FILESYSTEM
There is no option for `git rm` to remove from the index only the paths that have disappeared from the filesystem. However, depending on the use case, there are several ways that can be done.

Нет возможности `git rm`удалить из индекса только те пути, которые исчезли из файловой системы. Однако, в зависимости от варианта использования, это можно сделать несколькими способами.

### Using “git commit -a”
If you intend that your next commit should record all modifications of tracked files in the working tree and record all removals of files that have been removed from the working tree with `rm `(as opposed to `git rm`), use `git commit -a`, as it will automatically notice and record all removals. You can also have a similar effect without committing by using `git add -u`.

Если вы предполагаете, что ваша следующая фиксация должна записывать все модификации отслеживаемых файлов в рабочем дереве и записывать все удаления файлов, которые были удалены из рабочего дерева с помощью `rm` (в отличие от `git rm`), используйте `git commit -a`, поскольку он автоматически заметит и запишет все удаления . Вы также можете получить аналогичный эффект без фиксации, используя `git add -u`.

### Using “git add -A”
When accepting a new code drop for a vendor branch, you probably want to record both the removal of paths and additions of new paths as well as modifications of existing paths.

Принимая новый код для ветки поставщика, вы, вероятно, захотите записать как удаление путей, так и добавление новых путей, а также модификации существующих путей.

Typically you would first remove all tracked files from the working tree using this command:

Обычно вы сначала удаляете все отслеживаемые файлы из рабочего дерева с помощью этой команды:

    git ls-files -z | xargs -0 rm -f
and then untar the new code in the working tree. Alternately you could rsync the changes into the working tree.

а затем распаковать новый код в рабочем дереве. В качестве альтернативы вы можете синхронизировать изменения в рабочем дереве.

After that, the easiest way to record all removals, additions, and modifications in the working tree is:

После этого самый простой способ записать все удаления, дополнения и модификации в рабочем дереве:

    git add -A
    
## OUR LIFE

