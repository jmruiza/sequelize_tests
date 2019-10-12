module.exports = {
    getVehicles: `
            SELECT VehicleID, VehicleName, Brand, Model, PlateNumber, EngineSerialNumber 
            FROM orgVehicle 
            WHERE DeletedOn IS NULL;
        `,
    getEmployees: `
            SELECT E.EmployeeID, C.FirstName, C.LastNameFather, C.LastNameMother, P.PositionName 
            FROM orgEmployee E 
            JOIN orgContact C ON E.ContactID = C.ContactID 
            JOIN orgEmployeePosition P ON E.PositionID = P.EmployeePositionID 
            WHERE E.DeletedOn IS NULL;
        `,
    getDepots:
        `
            SELECT DepotID, DepotName 
            FROM orgDepot 
            WHERE DeletedOn IS NULL;
        `,
};