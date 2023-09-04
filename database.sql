CREATE TABLE User_Details (
	 username varchar(60),
	 Email varchar(60) NOT NULL,
	 Password varchar(6000) NOT NULL,
	 Image longblob,
	 Contact varchar(60),
	 PRIMARY KEY (`Email`)
);
