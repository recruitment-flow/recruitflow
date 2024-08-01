module.exports = (sequelize, DataTypes) => {
    const group = sequelize.define('group', {
      // Model attributes are defined here
      group_name: {
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
    group.associate = (models) => {
        group.hasMany(models.manager);
        models.manager.belongsTo(group);           
    };

    return group;
  } 