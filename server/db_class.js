const mysql = require('mysql2/promise'); // Import mysql2/promise at the beginning

class db_class {
    constructor(database_name) {
        this.database_name = database_name;
       
        
    }

    async GetSelect(sql, values) {
        this.query = sql;
        this.values = values;
      
        try {
          this.connection = await mysql.createConnection(this.dbConfig);
      
          const [result] = await this.connection.execute(this.query,this.values);
      
          if (result.length > 0) {
            return result; // Return the query data when it's successful
          } else {
            return []; // Return an empty array if no data is found (optional)
          }
        } catch (err) {
          console.error('Error:', err);
          return false; // Return false to indicate an error
        } finally {
          if (this.connection) {
            try {
              this.connection.end();
            } catch (err) {
              console.error('Error closing connection:', err);
              return false; // Return false in case of connection closure error
            }
          }
        }
      }
      

    async Select(sql, values) {
        this.query = sql;
        this.values = values;
        try {
            this.connection = await mysql.createConnection(this.dbConfig); // Use this.dbConfig

            const [result] = await this.connection.execute(this.query,this.values);
            
            if(result.length>0)
            return true;
        } catch (err) {
            console.error('Error:', err);
            return false;
        } finally {
            if (this.connection) {
                try {
                    this.connection.end(); // Use this.connection
                } catch (err) {
                    console.error('Error closing connection:', err);
                    return false;
                }
            }
        }
    }

    async Insert(sql, values) {
        try {
            this.query = sql;
            this.values = values;

            this.connection = await mysql.createConnection(this.dbConfig);

            // Execute the insertion query with values
            const [result] = await this.connection.execute(this.query, this.values);

            // Display the inserted ID
          
                console.log('Inserted ID:', result.insertId);
                return true;
    
           
        } catch (err) {
            console.error('Error:', err);
            return false;
            
        } finally {
            if (this.connection) {
                try {
                    // Close the connection
                    this.connection.end();
                } catch (err) {
                    console.error('Error closing connection:', err);
                    return false;
                }
            }
        }
       
    }
    async Update(sql, values) {
        try {
            this.query = sql;
            this.values = values;
    
            this.connection = await mysql.createConnection(this.dbConfig);
    
            // Execute the update query with values
            const [result] = await this.connection.execute(this.query, this.values);
    
            // Display the affected rows count
            console.log('Rows affected:', result.affectedRows);
            if(result.affectedRows==1)
            return true;
            else
            return false;
    
        } catch (err) {
            console.error('Error:', err);
            return false;
    
        } finally {
            if (this.connection) {
                try {
                    // Close the connection
                    this.connection.end();
                } catch (err) {
                    console.error('Error closing connection:', err);
                    return false;
                }
            }
        }
    }
    

     async Registration(sql, values) {
        try {
            
        

            this.query = sql;
            this.Values = values;
            this.connection = await mysql.createConnection(this.dbConfig);
                // Insert the new user
              
            const [existingRows] = await this.connection.execute('SELECT * FROM User_Details WHERE email = ?', [values[0]]);
            
            if (existingRows.length > 0) {
                console.log('Duplicate entry error: Email already exists.');
                return false;
                
            }
          
            else{
                const [result] = await this.connection.execute(this.query, this.Values);
                
                console.log('Inserted ID:', result.insertId);
                return true;
            }
           


        } catch (err) {
            console.error('Error:', err);
            console.log("SERVER ERROR!!!!!");
           
        } 
        finally {
            if (this.connection) {
                try {
                    // Close the connection
                    this.connection.end();
                } catch (err) {
                    console.error('Error closing connection:', err);
                    return false;
                }
            }
        }
    }
    async Officer_Registration(sql, values) {
        try {
            
        

            this.query = sql;
            this.Values = values;
            this.connection = await mysql.createConnection(this.dbConfig);
                // Insert the new user
              
            const [existingRows] = await this.connection.execute('SELECT * FROM Officer_Details WHERE email = ?', [values[0]]);
            
            if (existingRows.length > 0) {
                console.log('Duplicate entry error: Email already exists.');
                return false;
                
            }
          
            else{
                const [result] = await this.connection.execute(this.query, this.Values);
                
                console.log('Inserted ID:', result.insertId);
                return true;
            }
           


        } catch (err) {
            console.error('Error:', err);
            console.log("SERVER ERROR!!!!!");
           
        } 
        finally {
            if (this.connection) {
                try {
                    // Close the connection
                    this.connection.end();
                } catch (err) {
                    console.error('Error closing connection:', err);
                    return false;
                }
            }
        }
    }
    
    async DeleteByEmail(table, email) {

        try {
            this.table = table;
            this.email = email;
    
            this.connection = await mysql.createConnection(this.dbConfig);
    
            // Construct the deletion query
            const query = `DELETE FROM ${this.table} WHERE email = ?`;
    
            // Execute the deletion query with the ID
            const [result] = await this.connection.execute(query, [this.email]);
    
            if (result.affectedRows > 0) {
                console.log(`Deleted row with email- ${this.email}`);
            } else {
                console.log(`No rows found with email ${this.email}`);
            }
        } catch (err) {
            console.error('Error:', err);
        } finally {
            if (this.connection) {
                try {
                    // Close the connection
                    this.connection.end();
                } catch (err) {
                    console.error('Error closing connection:', err);
                }
            }
        }
        

    }

    get dbConfig() {
        return {
            port:'4306',
            host: 'localhost',
            user: 'root',
            password: '',
            database: this.database_name,
        };
    }
    
  
}

module.exports = db_class;