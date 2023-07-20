const fs = require('fs/promises');
const path = require("path");
const { nanoid } = require("nanoid");

const { model, Schema, } = require('mongoose')

const contactSchema = new Schema(  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  })

const Contact = model('contact', contactSchema)

const contactsPath = path.join(__dirname, "./contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find(item => item.id === id);
  return result || null;
}

const removeContact = async (id) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === id);
  if(index === -1){
      return null;
}
const [deleteContact] = contacts.splice(index, 1);
await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
return deleteContact;
}

const addContact = async(body) =>{
  const contacts = await listContacts();
  const newContact ={
      id: nanoid(),
     ...body
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

const updateContact = async (id, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === id);
  if(index === -1){
      return null;
  }
  contacts[index] = { id, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  Contact
}
