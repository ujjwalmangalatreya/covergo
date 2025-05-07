import { genarateUniqueEmployeeData } from "./tests/utils/helper";

async function globalSetup() {
     console.log("Genaration Test Data");
     genarateUniqueEmployeeData(); 
}

export default globalSetup;