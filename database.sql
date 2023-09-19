CREATE TABLE User_Details (
	 username varchar(60),
	 Email varchar(60) NOT NULL,
	 Password varchar(6000) NOT NULL,
	 Image longblob,
	 Contact varchar(60),
     meet_link varchar(1000),
	 PRIMARY KEY (`Email`)
);


CREATE TABLE Officer_Details (
    name varchar(60),
    Email varchar(60) NOT NULL,
    Password varchar(6000) NOT NULL,
	Bio varchar(80000),
    Image longblob,
    Contact varchar(60),
    Certificate_Pdf longblob,
	Approve varchar(100),
    PRIMARY KEY (`Email`)
);

CREATE TABLE Appointment (
    Date DATE ,
    officer_name VARCHAR(255) NOT NULL,
    officer_email VARCHAR(255) NOT NULL,
    username varchar(60),
    user_email varchar(60),
    slot_1 varchar(60),
    slot_2 varchar(60),
    slot_3 varchar(60),
    slot_4 varchar(60),
    FOREIGN KEY (user_email) REFERENCES User_Details(Email)
);
