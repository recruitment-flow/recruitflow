module.exports = (sequelize, DataTypes) => {
    const role = sequelize.define('role', {
      // Model attributes are defined here
      role: {
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

    return role;
  } 