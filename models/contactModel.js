const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  status: {
    type: String,
  },
  request_id: {
    type: String,
  },
  parameters: {
    query: {
      type: String,
    },
    page: {
      type: Number,
    },
    num_pages: {
      type: Number,
    },
  },
   company_name: {
        type: String,
      },
      company_logo: {
        type: String,
      },
      company_id: {
        type: Number,
      },
      company_employment_type: {
        type: String,
      },
      company_description: {
        type: String,
      },
      company_city: {
        type: String,
      },
      company_state: {
        type: String,
      },
      company_country: {
        type: String,
      },
      company_google_link: {
        type: String,
      },
  
});

module.exports = mongoose.model("Contact", contactSchema);
