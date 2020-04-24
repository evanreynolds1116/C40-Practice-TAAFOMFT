// Some starter code
const container = document.querySelector("#addressList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const personName = document.querySelector("#fullName").value
    const personAddress = document.querySelector("#address").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <h1>${personName}</h1>
            <div>${personAddress}</div>
        </section>
    `;
})

/* Practice: These are a few of my favorite things
Build two fieldsets and input fields that will allow you to enter the name of a favorite thing of yours, and a location where you might purchase it (Target, Amazon, Best Buy, etc...)

Add a button beneath the fieldsets labeled "Save to Wishlist".

When the button is clicked, display the data in the following format in the DOM.

I can purchase {thing} at {location} */

const wishList = document.querySelector("#thingLocation")

document.querySelector("#saveEntryTwo").addEventListener("click", event => {
  const thing = document.querySelector("#thing").value
  const location = document.querySelector("#location").value
  wishList.innerHTML += `
    <section>
      <p>I can purchase ${thing} at ${location}</p>
    </section>
  `;
})