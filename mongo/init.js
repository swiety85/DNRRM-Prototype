db.createUser(
    {
        user: "admin",
        pwd: "autoauto",
        roles: [
            {
                role: "readWrite",
                db: "backoffice"
            }
        ]
    }
);
db.createCollection('products');
db.products.insertOne( { name: "test" } );