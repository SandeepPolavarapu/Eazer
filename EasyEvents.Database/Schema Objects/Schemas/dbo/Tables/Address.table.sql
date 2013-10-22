CREATE TABLE [dbo].[Address]
(
	[Id]									INT IDENTITY(1,1) NOT NULL, 
	[Address]								VARCHAR(500) NOT NULL,
	[Area]									VARCHAR(200) NOT NULL,
	[Landmark]								VARCHAR(200) NULL,
	[Pincode]								CHAR(6) NOT NULL,
	[CityId]								INT NOT NULL,
	[VenueId]								INT NOT NULL,
	[DbCreatedUtc]	 						DATETIME NOT NULL,
	[DbModifiedUtc]							DATETIME NULL
)
