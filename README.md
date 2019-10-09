# Connection test with sequalize

## MsSQL Server

### Guidelines
* [Create Node.js apps using SQL Server on Windows](https://www.microsoft.com/en-us/sql-server/developer-get-started/node/windows/)
* [Cómo configurar SQL Server 2005 para permitir conexiones remotas](https://support.microsoft.com/es-mx/help/914277/how-to-configure-sql-server-2005-to-allow-remote-connections)

### Useful commands

``` bash
sqlcmd -S localhost -U <user> -P <password> -Q "SELECT @@VERSION"
```