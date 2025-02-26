// Core types
type Email = string;
type Password = string;

// Interfaces
interface CustomFixture extends Config {
	login: void;
}

interface Config {
	email: Email;
	password: Password;
}
