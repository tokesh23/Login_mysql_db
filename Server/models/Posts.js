module.exports = (Sequelize, DataTypes) => {
    const Posts = Sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    }, {
        // Optional : Add configuration options here
        timestamps: true, // This will add createdAt and updatedAt fields
        tableName: 'posts' // Optional: Custom table name
    });

    return Posts;
};
