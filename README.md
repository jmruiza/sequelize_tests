# Interface connector

## Run

``` bash
yarn install
```

``` bash
yarn start
```

## MsSQL Server

* [Docker container mssql](./docker/mssql-server/README.md)

### Guidelines
* [Create Node.js apps using SQL Server on Windows](https://www.microsoft.com/en-us/sql-server/developer-get-started/node/windows/)
* [Cómo configurar SQL Server 2005 para permitir conexiones remotas](https://support.microsoft.com/es-mx/help/914277/how-to-configure-sql-server-2005-to-allow-remote-connections)
* [sqlcmd Utility](https://docs.microsoft.com/en-us/sql/tools/sqlcmd-utility?view=sql-server-2017)

### Useful commands

``` bash
sqlcmd -S <server name>\<instace> -U <user> -P <password> -Q "SELECT @@VERSION"
```