const users = [{
    customerId: 1,
    name: "Customer_name_1",
    surname: "Customer_surname_1",
    address: [{
        location: "Flat B Gurupurav Colony",
        city: "Jaipur",
        state: "Rajasthan",
        country: "India",
        pinCod: 781011
    }]
}, {
    sellerId: 2,
    name: "Seller_name_2",
    surname: "Seller_surname_2",
    address: [{
        location: "Flat B Gurupurav Colony",
        city: "Jaipur",
        state: "Rajasthan",
        country: "India",
        pinCode: 781011
    }]
},
{
    customerId: 3,
    name: "Customer_name_3",
    surname: "Customer_surname_3",
    address: [{
        location: "Flat B Gurupurav Colony",
        city: "Jaipur",
        state: "Rajasthan",
        country: "India",
        pinCode: 781011
    }]
}, {
    sellerId: 4,
    name: "Seller_name_4",
    surname: "Seller_surname_4",
    address: [{
        location: "Flat B Gurupurav Colony",
        city: "Jaipur",
        state: "Rajasthan",
        country: "India",
        pinCode: 781011

    }]
}, {
    customerId: 5,
    name: "Customer_name_5",
    surname: "Customer_surname_5",
    address: [{
        location: "Flat B Gurupurav Colony",
        city: "Jaipur",
        state: "Rajasthan",
        country: "India",
        pinCode: 781011
    }]
}, {
    sellerId: 6,
    name: "Seller_name_6",
    surname: "Seller_surname_6",
    address: [{
        location: "Flat B Gurupurav Colony",
        city: "Jaipur",
        state: "Rajasthan",
        country: "India",
        pinCode: 781011
    }]
},
{
    customerId: 7,
    name: "Customer_name_7",
    surname: "Customer_surname_7",
    address: [{
        location: "Flat B Gurupurav Colony",
        city: "Jaipur",
        state: "Rajasthan",
        country: "India",
        pinCode: 781011
    }]
}, {
    sellerId: 8,
    name: "Seller_name_8",
    surname: "Seller_surname_8",
    address: [{
        location: "Flat B Gurupurav Colony",
        city: "Jaipur",
        state: "Rajasthan",
        country: "India",
        pinCode: 781011
    }]
}]


const getAllUsers = () => {
    return users;
};


module.exports = {
    getAllUsers
}