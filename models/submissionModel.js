module.exports = (sequelize, DataTypes) => {
    const submission = sequelize.define('submission', {
      // Model attributes are defined here
      submission_title: {
        type: DataTypes.STRING,
        allowNull: false        
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    });    

    return submission;
  } 