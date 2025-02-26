// export const currencyFormatter = new Intl.NumberFormat('en-US', {
//     style: "currency",
//     currency: 'USD'
// })


export const currencyFormatter = new Intl.NumberFormat('en-IN', {
    style: "currency",
    currency: 'INR'
});


// Line 1: export const currencyFormatter
// export: This is a JavaScript keyword used to export a module or a specific value (such as a variable, function, class, etc.) so it can be imported and used in other files or modules. In this case, currencyFormatter is being exported so it can be imported in other files of the project.

// const: This is a keyword used to declare a variable. It stands for "constant," which means the value assigned to this variable cannot be reassigned after it's been set. Here, you're declaring a variable called currencyFormatter.

// currencyFormatter: This is the name of the variable that will store the Intl.NumberFormat object. It's a good naming convention since it clearly describes what this variable is used for: formatting currency values.

// Line 2: new Intl.NumberFormat('en-IN', { ... })
// new: This keyword is used to create an instance of an object. In this case, it is creating a new instance of the Intl.NumberFormat object, which is used to format numbers, such as for currency, percentages, or plain numbers.

// Intl.NumberFormat: This is a built-in JavaScript object that provides language-sensitive number formatting. Intl stands for Internationalization, and it’s a part of the ECMAScript Internationalization API. The NumberFormat constructor is used specifically to format numbers in a way that's sensitive to the locale (the region or language of the user).

// 'en-IN': This is the first argument passed to the Intl.NumberFormat constructor. It is a locale identifier. In this case:

// 'en' stands for English.
// 'IN' stands for India.
// So 'en-IN' specifies that the formatting should be done according to English as spoken in India.
// This locale identifier affects things like the grouping of thousands, the currency symbol, the decimal separator, and so on.

// { ... }: This is an object passed as the second argument to configure how the number should be formatted. This object allows you to specify different formatting options such as style, currency, and more.

// Line 3: { style: "currency", currency: 'INR' }
// style: "currency": This is a configuration option inside the object. The style option tells the Intl.NumberFormat constructor how to format the number.
// "currency" specifies that the number should be formatted as a currency value, so it will include a currency symbol (like $ for USD, ₹ for INR) and handle the proper placement of that symbol.
// currency: 'INR': This is another option inside the object passed to the Intl.NumberFormat constructor. It specifies which currency should be used when formatting the number.
// 'INR' stands for Indian Rupees. This means the formatter will expect and output currency values in INR, and it will use the ₹ symbol for formatting.
// Putting it all together:
// You are creating an instance of the Intl.NumberFormat class.
// The instance is configured to format numbers as Indian Rupees (INR) using the English locale of India (en-IN).
// It is specifically set to format the number as a currency, which means it will display the number with a currency symbol (₹) and apply the appropriate grouping, decimal, and formatting rules for India.