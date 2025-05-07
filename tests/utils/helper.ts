import testData from "../data/testData.json";
import path from "path";
import fs from 'fs';


export function genarateUniqueEmployeeData() {
     const timeStamp = Date.now();
     const uniqueFirstName = `Ujjwal_${timeStamp}`;
     const uniqueMiddleName = `Mangal_${timeStamp}`;
     const uniqueLastName = `Atreya_${timeStamp}`;
     const uniqueEmployeeID = Math.floor(1000 + Math.random() * 9000);

     const updatedData = {
          ...testData,
          firstName: uniqueFirstName,
          middleName: uniqueMiddleName,
          lastName: uniqueLastName,
          employeeId: uniqueEmployeeID
     }

     try {
          const filePath = path.join(process.cwd()+'/tests/data/testData.json');
          fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));  
          console.log("Test data genarated and written to testData.json");
     } catch (err) {
          console.log("Test Data not saved to testData.json : "+err)
     }
     return updatedData;
}