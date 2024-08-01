module.exports = (sequelize, DataTypes) => {
    const client = sequelize.define('client', {
      // Model attributes are defined here
      client_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true        
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    });
  
    // If there are any model associations, define them here
    client.associate = (models) => {
        client.hasMany(models.group);
        models.group.belongsTo(client);           
    };

    return client;
  } 