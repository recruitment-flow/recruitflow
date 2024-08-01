module.exports = (sequelize, DataTypes) => {
    const manager = sequelize.define('manager', {
      // Model attributes are defined here
      manager_name: {
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
    manager.associate = (models) => {
        manager.hasMany(models.lead);
        models.lead.belongsTo(manager);           
    };

    return manager;
  } 