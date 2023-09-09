
// import React, { useEffect, useState } from 'react';
// import './listing.css';
// import './style.css';
// import { AiOutlineHeart } from 'react-icons/ai';
// import Axios from 'axios';
// import { useSelectedItem } from '../../../../../../../SelectedItemContext';

// const Listing = () => {
//   const { selectedItem } = useSelectedItem();
//   const [details, setDetails] = useState([]);

//   useEffect(() => {
//     Axios.post('http://localhost:3004/disease', {})
//       .then((response) => {
//         if (Array.isArray(response.data) && response.data.length > 0) {
//           setDetails(response.data); // Set the data array in the state
//         } else {
//           console.error('Data structure is empty or not an array.');
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div className="table-container">
//       <table className="crop-table" border='2'>
//         <thead>
//           <tr>
//             <th>পরিচিতি</th>
//             <th>দেশি জাত</th>
//             <th>Cure</th>
//           </tr>
//         </thead>
//         <tbody>
//           {details.map((cropData, index) => (
//             <tr key={index}>
//               <td>
//                 <p className="crop-title">{cropData.name}</p>
//                 {/* <p className="crop-text">{cropData.symptom}</p> */}
//               </td>
//               <td>
//                 {/* <p className="crop-title">দেশি জাত</p> */}
//                 <p className="crop-text">{cropData.symptom}</p>
//               </td>
//               <td>
//                 {/* <p className="crop-title">দেশি জাত</p> */}
//                 <p className="crop-text">{cropData.cure}</p>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Listing;



import React, { useEffect, useState } from 'react';
import './listing.css';
import './style.css';
import { AiOutlineHeart } from 'react-icons/ai';
import Axios from 'axios';
import { useSelectedItem } from '../../../../../../../SelectedItemContext';

const Listing = () => {
  const { selectedItem } = useSelectedItem();
  const [details, setDetails] = useState([]);
  const [expandedSections, setExpandedSections] = useState({});

  useEffect(() => {
    Axios.post('http://localhost:3004/disease', {
      CropName: selectedItem
    })
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          setDetails(response.data); // Set the data array in the state
        } else {
          console.error('Data structure is empty or not an array.');
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
      {details.map((cropData, index) => (
        <div className="crop-info" key={index}>
          <p className="crop-title">{cropData.disease}</p>
          <br></br>
       
          <p
            className={`crop-text ${
              expandedSections[`section${index}`] ? 'expanded' : 'collapsed'
            }`}
            id={`section${index}-text`}
          >
            {cropData.symptom}
            <br></br>
            <br></br>
            
            {cropData.cure}
          </p>
          <button
            className="read-more-button"
            onClick={() => toggleSection(`section${index}`)}
          >
            {expandedSections[`section${index}`]
              ? 'কম পড়ুন'
              : 'আরও পড়ুন'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Listing;

