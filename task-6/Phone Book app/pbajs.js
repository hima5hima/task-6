const addButton = document.getElementById('addButton');
const searchButton = document.getElementById('searchButton');
const contactsList = document.getElementById('contactsList');
const contactListButton = document.getElementById('contactListButton');
const contacts = [];
addButton.addEventListener('click', addContact);
searchButton.addEventListener('click', searchContact);
contactListButton.addEventListener('click', toggleContactList);



/*
 * Prompts the user to enter a name and phone number for a contact,
 * and adds the contact to the contacts array.
 */
function addContact() 
{
    const name = prompt("Enter the name of the contact:"); // Prompting user for contact name
    const phoneNumber = prompt("Enter the phone number:"); // Prompting user for contact phone number

    if (name && phoneNumber) 
    {
        contacts.push({ name, phoneNumber }); // Add contact to the contacts array
        displayContacts(); // Display the updated list of contacts
    }
}



/*
 * Prompts the user to enter a name or phone number to search for in the contacts list.
 * Displays a message with the matching contacts found, if any.
 */
function searchContact() 
{
    // Prompting the user for the search term
    const searchTerm = prompt("Enter a name or phone number to search:");
    // Check if a search term was entered
    if (searchTerm) 
    {
        // Filter the contacts list to find contacts that match the search term
        const foundContacts = contacts.filter(contact => contact.name.includes(searchTerm) || contact.phoneNumber.includes(searchTerm));

        // Check if any matching contacts were found
        if (foundContacts.length === 0) 
        {
            // Display a message if no matching contacts were found
            alert("No matching contacts found.");
        } else 
        {
            // Display a message with the matching contacts found
            alert("Matching contacts found:");
            // Display the name and phone number of each matching contact
            foundContacts.forEach(contact => {alert(`Name: ${contact.name}, Phone Number: ${contact.phoneNumber}`);});    
        }
    }
}



/*
 * Toggles the display of the contact list.
 * If the contact list is hidden or does not have a display value, it is shown.
 * If the contact list is shown, it is hidden.
 */
function toggleContactList() 
{
    if (contactsList.style.display === "none" || contactsList.style.display === "") 
    {
        contactsList.style.display = "block";
    } else 
    {
        contactsList.style.display = "none";
    }
}



/*
* Display the contacts in the contacts list. 
*/
function displayContacts() 
{
    /* 
    Generating a place in HTML for each contact in the contacts array then make it Join the HTML elements into a single string without displaying 
    until the button is pressed obvisly & i looked it up am not that smart :D
    */ 
    contactsList.innerHTML = contacts.map(contact => {
        return `<li>Name: ${contact.name}, Phone Number: ${contact.phoneNumber}</li>`;}).join('');
}
