CREATE TABLE [dbo].[City]
(
	[Id]									INT IDENTITY(1,1) NOT NULL, 
	[Name]									VARCHAR(200) NOT NULL,
	[IsActive]								BIT NOT NULL,
	[DbCreatedUtc]	 						DATETIME NOT NULL,
	[DbModifiedUtc]							DATETIME NULL	
)
