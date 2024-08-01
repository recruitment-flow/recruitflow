module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
      // Model attributes are defined here      
      first_name: {
        type: DataTypes.STRING,
        allowNull: false        
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false        
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true        
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false        
      },      
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    });
  
    // If there are any model associations, define them here
    user.associate = (models) => {
        user.hasOne(models.role);
        models.role.belongsTo(user);                  
    };

    return user;
  } 