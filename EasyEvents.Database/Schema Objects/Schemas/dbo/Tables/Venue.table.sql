CREATE TABLE [dbo].[Venue]
(
	[Id]									INT IDENTITY(1,1) NOT NULL, 
	[Name]									VARCHAR(200) NOT NULL,
	[RentAmount]							MONEY NOT NULL,
	[MaxPerson]								SMALLINT NOT NULL,
	[IsAirConditioned]						BIT NOT NULL,
	[IsOutdoorCatererAllowed]				BIT NOT NULL,
	[IsParkingAvailable]					BIT NOT NULL,
	[IsActive]								BIT NOT NULL,
	[DbCreatedUtc]	 						DATETIME NOT NULL,
	[DbModifiedUtc]							DATETIME NULL	
)
