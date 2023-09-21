// Import necessary libraries
const db_class = require('./db_class');

// Create a function to fetch data from the officer_Details table
const fetchOfficerData = async () => {
  try {
    const SQL = "SELECT name, email FROM officer_Details";
    const Values = [];

    const db = new db_class('test');

    const officerData = await db.GetSelect(SQL, Values);
    return officerData;
  } catch (error) {
    console.error('Error fetching officer data:', error);
    throw error;
  }
};

// Create a function to insert officer data into the Appointment table
const insertOfficerData = async (officerData) => {
  try {
    const db = new db_class('test');
    const currentDate = new Date();
    const isoFormattedDate = currentDate.toISOString().split('T')[0]; // Converts to 'YYYY-MM-DD'
    
    // Loop through the officer data and insert records into the Appointment table
    for (const officer of officerData) {
      const SQL = `
        INSERT INTO Appointment (Date,officer_name, officer_email)
        VALUES (?,?, ?);
      `;
      const Values = [isoFormattedDate,officer.name, officer.email];

      await db.Insert(SQL, Values);
    }
    console.log('Appointment table updated with new records.');
  } catch (error) {
    console.error('Error inserting data into Appointment table:', error);
    throw error;
  }
};

// Main function to fetch data and insert into the Appointment table
const main = async () => {
  try {
    const officerData = await fetchOfficerData();
    await insertOfficerData(officerData);
  } catch (error) {
    console.error('Main process error:', error);
  }
};

// Call the main function to start the process
main();
