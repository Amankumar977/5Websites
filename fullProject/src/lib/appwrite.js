import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("659c483bbbd0729f5120"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
