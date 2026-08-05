const rawApiData = [
    {
        "id": 1,
        "productName": "Wireless Mouse",
        "category": "Electronics",
        "price": 15.99,
        "rating": 4.3,
        "stock": 120
    },
    {
        "id": 2,
        "productName": "Bluetooth Headphones",
        "category": "Electronics",
        "price": 29.99,
        "rating": 4.5,
        "stock": 80
    },
    {
        "id": 3,
        "productName": "Laptop Stand",
        "category": "Accessories",
        "price": 19.99,
        "rating": 4.2,
        "stock": 60
    },
    {
        "id": 4,
        "productName": "Mechanical Keyboard",
        "category": "Electronics",
        "price": 49.99,
        "rating": 4.7,
        "stock": 45
    },
    {
        "id": 5,
        "productName": "USB-C Charger",
        "category": "Electronics",
        "price": 12.99,
        "rating": 4.1,
        "stock": 200
    },
    {
        "id": 6,
        "productName": "Smart Watch",
        "category": "Wearable",
        "price": 99.99,
        "rating": 4.6,
        "stock": 35
    },
    {
        "id": 7,
        "productName": "Gaming Chair",
        "category": "Furniture",
        "price": 149.99,
        "rating": 4.4,
        "stock": 20
    },
    {
        "id": 8,
        "productName": "Desk Lamp",
        "category": "Home",
        "price": 22.50,
        "rating": 4.0,
        "stock": 75
    },
    {
        "id": 9,
        "productName": "Portable SSD",
        "category": "Storage",
        "price": 79.99,
        "rating": 4.8,
        "stock": 50
    },
    {
        "id": 10,
        "productName": "Backpack",
        "category": "Fashion",
        "price": 39.99,
        "rating": 4.3,
        "stock": 90
    },
    {
        "id": 11,
        "productName": "Water Bottle",
        "category": "Lifestyle",
        "price": 9.99,
        "rating": 4.1,
        "stock": 150
    },
    {
        "id": 12,
        "productName": "Notebook",
        "category": "Stationery",
        "price": 5.49,
        "rating": 4.0,
        "stock": 300
    },
    {
        "id": 13,
        "productName": "Pen Set",
        "category": "Stationery",
        "price": 7.99,
        "rating": 3.9,
        "stock": 250
    },
    {
        "id": 14,
        "productName": "Office Chair",
        "category": "Furniture",
        "price": 129.99,
        "rating": 4.5,
        "stock": 25
    },
    {
        "id": 15,
        "productName": "Monitor 24 inch",
        "category": "Electronics", "price": 159.99, "rating": 4.6, "stock": 40
    },
    {
        "id": 16,
        "productName": "Webcam HD",
        "category": "Electronics", "price": 34.99, "rating": 4.2, "stock": 70
    },
    {
        "id": 17,
        "productName": "Power Bank",
        "category": "Electronics", "price": 25.99, "rating": 4.4, "stock": 110
    },
    {
        "id": 18,
        "productName": "Tablet 10 inch",
        "category": "Electronics", "price": 199.99, "rating": 4.3, "stock": 30
    },
    {
        "id": 19,
        "productName": "Smartphone Stand",
        "category": "Accessories", "price": 8.99, "rating": 4.1, "stock": 180
    },
    {
        "id": 20,
        "productName": "LED Strip Light",
        "category": "Home", "price": 14.99, "rating": 4.2, "stock": 95
    },
    {
        "id": 21,
        "productName": "Coffee Mug",
        "category": "Kitchen", "price": 6.99, "rating": 4.0, "stock": 220
    },
    {
        "id": 22,
        "productName": "Blender",
        "category": "Appliances", "price": 49.50, "rating": 4.3, "stock": 55
    },
    {
        "id": 23,
        "productName": "Electric Kettle",
        "category": "Appliances", "price": 27.99, "rating": 4.4, "stock": 65
    },
    {
        "id": 24,
        "productName": "Air Fryer",
        "category": "Appliances", "price": 89.99, "rating": 4.7, "stock": 30
    },
    {
        "id": 25,
        "productName": "Yoga Mat",
        "category": "Fitness", "price": 18.99, "rating": 4.2, "stock": 100
    },
    {
        "id": 26,
        "productName": "Dumbbell Set",
        "category": "Fitness", "price": 59.99, "rating": 4.5, "stock": 45
    },
    {
        "id": 27,
        "productName": "Running Shoes",
        "category": "Fashion", "price": 69.99, "rating": 4.3, "stock": 80
    },
    {
        "id": 28,
        "productName": "Sunglasses",
        "category": "Fashion", "price": 15.49, "rating": 4.1, "stock": 140
    },
    {
        "id": 29,
        "productName": "Digital Clock",
        "category": "Home", "price": 12.99, "rating": 4.0, "stock": 160
    },
    {
        "id": 30,
        "productName": "Router WiFi",
        "category": "Electronics", "price": 59.99, "rating": 4.4, "stock": 55
    }
]


const topElectronicProducts = rawApiData.filter((item) => item.category === "Electronics")
.sort((a, b) => b.rating - a.rating)
.slice(0, 3)
.map((item)=>({name: item.productName}))

console.log(topElectronicProducts)

