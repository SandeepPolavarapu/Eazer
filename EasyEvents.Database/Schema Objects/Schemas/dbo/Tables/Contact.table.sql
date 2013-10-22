CREATE TABLE [dbo].[Contact]
(
	[Id]									INT IDENTITY(1,1) NOT NULL, 
	[Number]								VARCHAR(10) NOT NULL,
	[Name]									VARCHAR(100) NOT NULL,
	[VenueId]								INT NOT NULL,
	[DbCreatedUtc]	 						DATETIME NOT NULL,
	[DbModifiedUtc]							DATETIME NULL
)
