const modelOptions = {
  toJSON: {
    virtuals: true,
    transform: (_, obj) => {
      delete obj._id;
      return obj;
    }
  },
  toObject: {
    virtuals: true,
    transform: (_, obj) => {
      delete obj._id;
      return obj;
    }
  },
  versionKey: false,
  timestamps: true
};



export default modelOptions;

//This code exports an object modelOptions which is configuration options for a MongoDB document model in a MongoDB/Mongoose-based application. 