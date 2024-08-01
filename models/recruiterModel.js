module.exports = (sequelize, DataTypes) => {
    const recruiter = sequelize.define('recruiter', {
      // Model attributes are defined here
      recruiter_name: {
        type: DataTypes.STRING,
        allowNull: false        
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    });  

    return recruiter;
  } 