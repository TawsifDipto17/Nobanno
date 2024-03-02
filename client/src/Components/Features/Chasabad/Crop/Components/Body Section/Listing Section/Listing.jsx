
import React, { useEffect, useState } from 'react';
import './listing.css';
import './style.css';
import { AiOutlineHeart } from 'react-icons/ai';
import Axios from 'axios';
import { useSelectedItem } from '../../../../../../../SelectedItemContext';

const Listing = () => {
  const { selectedItem } = useSelectedItem();
  const [details, setDetails] = useState({});
  const [expandedSections, setExpandedSections] = useState({});

  const selected = localStorage.getItem('crop');
  useEffect(() => {
    Axios.post('http://localhost:3003/crop', {
      CropName: selected,
      
    })
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          const cropData = response.data[0];
          console.log(cropData);
          setDetails(cropData); // Set the data in the state
        } else {
          console.error('Data structure does not include introduction.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to toggle the expanded state of a section
  const toggleSection = (sectionName) => {
    setExpandedSections((prevSections) => ({
      ...prevSections,
      [sectionName]: !prevSections[sectionName],
    }));
  };

  return (
    <div>
     
      <div className="crop-info">
        <p className="crop-title">পরিচিতি</p>
        <br></br>
        <p
          className={`crop-text ${
            expandedSections['introduction'] ? 'expanded' : 'collapsed'
          }`}
          id="introduction-text"
        >
          {details.introduction}
        </p>
        <button
          className="read-more-button"
          onClick={() => toggleSection('introduction')}
        >
          {expandedSections['introduction'] ? 'কম পড়ুন' : 'আরও পড়ুন'}
        </button>
      </div>


      <div className="crop-info">
        <p className="crop-title">জাত নির্বাচন</p>
        <br></br>
        <p
          className={`crop-text ${
            expandedSections['nativeSpecies'] ? 'expanded' : 'collapsed'
          }`}
          id="nativeSpecies-text"
        >
          {details.selectcSpecies}
        </p>
        <button
          className="read-more-button"
          onClick={() => toggleSection('nativeSpecies')}
        >
          {expandedSections['nativeSpecies'] ? 'কম পড়ুন' : 'আরও পড়ুন'}
        </button>
      </div>


     

  

      <div className="crop-info">
        <p className="crop-title">উৎপাদন পদ্ধতি</p>
        <br></br>
        <p
          className={`crop-text ${
            expandedSections['production'] ? 'expanded' : 'collapsed'
          }`}
          id="production-text"
        >
          {details.growingMethod}
          <br></br>
          <br></br>
          {
            details.selectSoil
          }
          <br></br>
          <br></br>
          {
            details.growingSeason
          }
          <br></br>
          <br></br>
          {
            details.seed
          }
           
        </p>
        <button
          className="read-more-button"
          onClick={() => toggleSection('production')}
        >
          {expandedSections['production'] ? 'কম পড়ুন' : 'আরও পড়ুন'}
        </button>
      </div>



      <div className="crop-info">
        <p className="crop-title">জলবায়ু</p>
        <br></br>
        <p
          className={`crop-text ${
            expandedSections['climate'] ? 'expanded' : 'collapsed'
          }`}
          id="climate-text"
        >
          {details.climate}
        </p>
        <button
          className="read-more-button"
          onClick={() => toggleSection('climate')}
        >
          {expandedSections['climate'] ? 'কম পড়ুন' : 'আরও পড়ুন'}
        </button>
      </div>

      <div className="crop-info">
        <p className="crop-title">সার প্রয়োগ</p>
        <p
          className={`crop-text ${
            expandedSections['fertilizer'] ? 'expanded' : 'collapsed'
          }`}
          id="fertilizer-text"
        >
          {details.fertilizerQuantity}
          <br></br>
          <br></br>
          {
            details.fertilizer
          }
        </p>
        <button
          className="read-more-button"
          onClick={() => toggleSection('fertilizer')}
        >
          {expandedSections['fertilizer'] ? 'কম পড়ুন' : 'আরও পড়ুন'}
        </button>
      </div>
  


      <div className="crop-info">
        <p className="crop-title">সেচ এবং পরিচর্যা</p>
        <br></br>
        <p
          className={`crop-text ${
            expandedSections['irrigation'] ? 'expanded' : 'collapsed'
          }`}
          id="irrigation-text"
        >
          {details.irrigation}
          <br></br>
          <br></br>
          {
            details.care
          }
        </p>
        <button
          className="read-more-button"
          onClick={() => toggleSection('irrigation')}
        >
          {expandedSections['irrigation'] ? 'কম পড়ুন' : 'আরও পড়ুন'}
        </button>
      </div>



      <div className="crop-info">
        <p className="crop-title">পরিপক্বতা, ফসল সংগ্রহ এবং সংরক্ষণ</p>
        <br></br>
        <p
          className={`crop-text ${
            expandedSections['collect'] ? 'expanded' : 'collapsed'
          }`}
          id="collect-text"
        >
         
          {
            details.collect
          }
              <br></br>
          <br></br>
          {
            details.storage
          }
        </p>
        <button
          className="read-more-button"
          onClick={() => toggleSection('collect')}
        >
          {expandedSections['collect'] ? 'কম পড়ুন' : 'আরও পড়ুন'}
        </button>
      </div>

    </div>
  );
};

export default Listing;
