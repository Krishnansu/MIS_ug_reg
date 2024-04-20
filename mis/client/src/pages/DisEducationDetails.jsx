import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import customFetch from '../utils/customFetch'; // Import your custom fetch library
import jsPDF from 'jspdf';

const DisEducationDetails = () => {
  const [userData, setUserData] = useState({
    ccaEcaData: {},
    personalDetailsData: {},
    otherDetailsData: {},
    parentDetailsData: {},
    educationDetailsData: {},
    hostelDetailsData: {},
    emailData: {
      email_username: '',
      email_password: '',
    },
    feeData: {
      fee_amount: '',
      fee_date: '',
      fee_mode: '',
      transaction_id: '',
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("user_email");
        const ccaEcaResponse = await customFetch.get('/temp-cca-ecas/' + email);
        const personalDetailsResponse = await customFetch.get('/temp-personal-details/' + email);
        const otherDetailsResponse = await customFetch.get('/temp-other-details/' + email);
        const parentDetailsResponse = await customFetch.get('/temp-parent-details/' + email);
        const educationDetailsResponse = await customFetch.get('/temp-education-details/' + email);
        const hostelDetailsResponse = await customFetch.get('/temp-hostel-details/' + email);
        const emailResponse = await customFetch.get('/jeeas/' + email);
        const feeResponse = await customFetch.get('/jeeas/' + email);

        setUserData({
          ccaEcaData: excludeFields(ccaEcaResponse.data, ['created_at', 'updated_at', 'id']),
          personalDetailsData: excludeFields(personalDetailsResponse.data, ['created_at', 'updated_at']),
          otherDetailsData: excludeFields(otherDetailsResponse.data, ['created_at', 'updated_at']),
          parentDetailsData: excludeFields(parentDetailsResponse.data, ['created_at', 'updated_at']),
          educationDetailsData: excludeFields(educationDetailsResponse.data, ['created_at', 'updated_at']),
          hostelDetailsData: excludeFields(hostelDetailsResponse.data, ['created_at', 'updated_at']),
          emailData: {
            email_username: emailResponse.data.email_username,
            email_password: emailResponse.data.email_password,
          },
          feeData: excludeFields(feeResponse.data, ['created_at', 'updated_at']),
        });

        // Generate and download the PDF after fetching all the data
        generatePDF();
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, []);

  const excludeFields = (data, fieldsToExclude) => {
    const filteredData = { ...data };
    fieldsToExclude.forEach(field => {
      delete filteredData[field];
    });
    return filteredData;
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const fields = Object.entries(userData).map(([key, value]) => ({ key, value }));
    
    let y = 10;
    fields.forEach(({ key, value }) => {
      doc.text(`${key}: ${JSON.stringify(value)}`, 10, y);
      y += 10;
    });

    // Save the PDF
    doc.save('user_details.pdf');
  };

  return (
    <div>
      {/* No need to render anything */}
    </div>
  );
};

export default DisEducationDetails;
