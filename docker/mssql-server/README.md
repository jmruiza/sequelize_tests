# mssql-server (dockerized)

As first step you must set the variables in the .env file, please use .env.test file as reference. (```DB_PASS``` )

## Build and run docker
```docker-compose up```

## Rebuild
```docker-compose up --build```

## RESTORE DATABASE (*.bak)

This container uses a volume (```./docker/mssql/backups:/var/opt/mssql/backups```) so your can include backups files (*.bak) and following the next steps restore a database.

1. Copy the *.bak file inside the directory: ```./docker/mssql/backups```
2. Run sqlcmd inside the container to list out logical file names and paths inside the backup. This is done with the RESTORE FILELISTONLY Transact-SQL statement.

bash
```bash
sudo docker exec -it mssql-server /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P '<ENV.DB_PASS>' -Q 'RESTORE FILELISTONLY FROM DISK = "/var/opt/mssql/backups/<BACKUP_FILE>.bak"' | tr -s ' ' | cut -d ' ' -f 1-2
```
PowerShell
```PowerShell
docker exec -it mssql-server /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "<ENV.DB_PASS>" -Q "RESTORE FILELISTONLY FROM DISK = '/var/opt/mssql/backups/<BACKUP_FILE>.bak'"
````
So you should see output similar to the following:

```bash
LogicalName     PhysicalName
------------- --------------------
DB_NAME         C:\DB_NAME.mdf
DB_NAME_Log     C:\DB_NAME.ldf
````

3. Call the RESTORE DATABASE command to restore the database inside the container. Specify new paths for each of the files in the previous output.

bash
```bash
sudo docker exec -it mssql-server /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P '<ENV.DB_PASS>' -Q 'RESTORE DATABASE DB_NAME FROM DISK = "/var/opt/mssql/backup/<BACKUP_FILE>.bak" WITH MOVE "DB_NAME" TO "/var/opt/mssql/data/DB_NAME.mdf", MOVE "DB_NAME_Log" TO "/var/opt/mssql/data/DB_NAME.ldf"'
```

PowerShell
```PowerShell
docker exec -it mssql-server /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "<ENV.DB_PASS>" -Q 'RESTORE DATABASE DB_NAME FROM DISK = "/var/opt/mssql/backup/<BACKUP_FILE>.bak" WITH MOVE "DB_NAME" TO "/var/opt/mssql/data/DB_NAME.mdf", MOVE "DB_NAME_Log" TO "/var/opt/mssql/data/DB_NAME.ldf"'
```

So now you can load your MSSQL database in a container :)

**For use the bash in the container you most use the command**

```bash
sudo docker exec -it mssql-server /bin/bash  
```
**Make queries**

```bash
docker exec -it mssql-server /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P '<ENV.DB_PASS>' -Q '<QUERY>;'
```


## Resources
* [Quickstart: Run SQL Server container images with Docker](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-2017&pivots=cs1-bash)
* [Restore a SQL Server database in a Linux Docker container](https://docs.microsoft.com/en-us/sql/linux/tutorial-restore-backup-in-sql-server-container?view=sql-server-2017)
* [Microsoft SQL Server](https://hub.docker.com/_/microsoft-mssql-server)
* [SQL Server RESTORE FILELISTONLY](https://www.mssqltips.com/sqlservertutorial/109/sql-server-restore-filelistonly/)
* [Environment variables in Compose](https://docs.docker.com/compose/environment-variables/)
* [Configure SQL Server container images on Docker](https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-configure-docker?view=sql-server-ver15)
