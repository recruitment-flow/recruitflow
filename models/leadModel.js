module.exports = (sequelize, DataTypes) => {
    const lead = sequelize.define('lead', {
      // Model attributes are defined here
      lead_name: {
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
    lead.associate = (models) => {
        lead.hasMany(models.recruiter);
        models.recruiter.belongsTo(lead);           
    };

    return lead;
  } 