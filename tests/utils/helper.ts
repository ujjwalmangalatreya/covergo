import testData from "../data/testData.json";
import path from "path";
import fs from 'fs';


export function genarateUniqueEmployeeData() {
     const timeStamp = Date.now();
     const uniqueFirstName = `${testData.firstName}_${timeStamp}`;
     const uniqueMiddleName = `${testData.middleName}_${timeStamp}`;
     const uniqueLastName = `${testData.lastName}_${timeStamp}`;
     const uniqueEmployeeID = Math.floor(1000 + Math.random() * 9000);

     const updatedData = {
          ...testData,
          firstName: uniqueFirstName,
          middleName: uniqueMiddleName,
          lastName: uniqueLastName,
          employeeId: uniqueEmployeeID
     }

     try {
          const filePath = path.join(process.cwd()+'/tests/fixtures/testData.json');
          fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));  
          console.log("Test data genarated and written to testData.json");
     } catch (err) {
          console.log("Test Data not saved to testData.json : "+err)
     }
     return updatedData;
}