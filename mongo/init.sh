mongo <<EOF
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
db.auth('admin', 'autoauto');

db.createCollection('users');
db.products.insertOne( {
    name: 'Damian Wajdlich',
    email: 'swiety85@gmail.com',
    password: '$2a$12$fY5Qu3P691/a.KpU/SvJx.fyIodkacAern3D9IwOFmvtEiKDvYlX.' // =password
});

db.createCollection('products');
EOF