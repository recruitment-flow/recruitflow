module.exports = (sequelize, DataTypes) => {
    const requirement = sequelize.define('requirement', {
      // Model attributes are defined here
      requirement_number: {
        type: DataTypes.INTEGER,
        allowNull: false        
      },
      requirement_date: {
        type: DataTypes.DATE,
        allowNull: false        
      },
      requirement:{
        type: DataTypes.STRING,
        allowNull: false
      },
      required_skills:{
        type: DataTypes.TEXT,
        allowNull: false
      },
      number_of_positions:{
        type: DataTypes.INTEGER,
        allowNull: false
      },      
      work_location:{
        type: DataTypes.STRING,
        allowNull: false
      },
      customer_name:{
        type: DataTypes.STRING,
        allowNull: false
      },
      br_number:{
        type: DataTypes.INTEGER,
      },
      sr_number:{
        type: DataTypes.INTEGER,
      },
      type_of_sot:{
        type: DataTypes.BOOLEAN,
      },
      rehash:{
        type: DataTypes.BOOLEAN,
      },
      client_name: {
        type: DataTypes.STRING,        
      },      
      group_name: {
        type: DataTypes.STRING,        
      },
      manager_name: {
        type: DataTypes.STRING,        
      },
      lead_name: {
        type: DataTypes.STRING,       
      },
      recruiter_name: {
        type: DataTypes.STRING,        
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
      // more attributes
    });
  
    // If there are any model associations, define them here
    requirement.associate = (models) => {
      requirement.hasMany(models.submission);
      models.submission.belongsTo(requirement);           
    };
  
    return requirement;
  };