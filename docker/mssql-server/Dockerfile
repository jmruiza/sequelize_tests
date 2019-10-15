FROM mcr.microsoft.com/mssql/server:2017-latest

RUN mkdir /backups
WORKDIR /backups

CMD /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'Compaq2019.' -Q 'RESTORE DATABASE JFVO5 FROM DISK = "/mssql-backups/JFVO5_20190925_132925.bak" WITH MOVE "JFVO5" TO "/var/opt/mssql/data/JFV05.mdf", MOVE "JFVO5_log" TO "/var/opt/mssql/data/JFVO5_log.ldf"';