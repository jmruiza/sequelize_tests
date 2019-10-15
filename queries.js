module.exports = {
    getVehicles: `
        SELECT VehicleID, VehicleName, Brand, Model, PlateNumber, EngineSerialNumber 
        FROM [JFVO5].[dbo].[orgVehicle]
        WHERE DeletedOn IS NULL;
    `,
    getEmployees: `
            SELECT E.EmployeeID, C.FirstName, C.LastNameFather, C.LastNameMother, P.PositionName 
            FROM [JFVO5].[dbo].[orgEmployee] E 
            JOIN [JFVO5].[dbo].[orgContact] C ON E.ContactID = C.ContactID 
            JOIN [JFVO5].[dbo].[orgEmployeePosition] P ON E.PositionID = P.EmployeePositionID 
            WHERE E.DeletedOn IS NULL;
        `,
    getDepots:
        `
            SELECT DepotID, DepotName 
            FROM [JFVO5].[dbo].[orgDepot]
            WHERE DeletedOn IS NULL;
        `,
};