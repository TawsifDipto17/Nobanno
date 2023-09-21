import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataTable.css'; // Import a separate CSS file for your DataTable styles
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'

const DataTable = () => {
  const navigateTo = useNavigate()



  let email = localStorage.getItem('email');

  let [O_email, setOfficerEmail] = useState('');
  const [data, setData] = useState([]);
  const [meetData, setMeetData] = useState('');





  console.log(O_email)

  useEffect(() => {

    console.log("HI" + email)
    axios.get('http://localhost:3005/get_meet_link', {
      params: {
        LoginEmail: email,
        OfficerEmail: O_email.toString()

      },
    })
      .then((response) => {
        if (response.data === null || response.data === '') {
          response.data = 'none'
        }
        setMeetData(response.data);
        // console.log("Meet link-" + response.data)
       
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [email, O_email]);

  useEffect(() => {
    let email = localStorage.getItem('email');
    if (email === undefined || email === null) {
      email = 'none';
    }

    axios.get('http://localhost:3005/get_advice', {
      params: {
        LoginEmail: email,
        OfficerEmail: O_email.toString()

      },
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [email, O_email]);




  const notify_a = () => {
    toast('অনুরোধ পাঠানো সফল হয়েছে!')
    toast('অনুমোদনের জন্য অপেক্ষা করুন')

  }
  const notify_b = () => {
    toast('দুঃখিত, অনুরোধ পাঠানো সফল হয়নি!')
    toast('অনুগ্রহপূর্বক আবার চেষ্টা করুন!')
  }
  const notify_c = () => {
    toast('আপনার অনুরোধ গ্রহণ করা হয়নি!')
    toast('অনুগ্রহপূর্বক অন্য সময় আবার চেষ্টা করুন!')
  }



  const ClickSlot1 = () => {
    const confirmed = window.confirm('আপনি আবেদন করতে নিশ্চিত ?');

    if (confirmed) {

    axios.post('http://localhost:3005/appointment_slot_1', {
      OfficerEmail: O_email.toString(),
      LoginEmail: email,

    })
      .then((response) => {
        if (response.data === 'rejected') notify_c();
        if (response.data === 'success') notify_a();
        if (response.data === 'error') notify_b();
      })
      .catch((error) => {
        notify_b();
        console.error('Error sending data:', error);
      });
    setTimeout(() => {
      window.location.reload()

    }, 1000);
    }

  };


  const ClickSlot2 = () => {

    const confirmed = window.confirm('আপনি আবেদন করতে নিশ্চিত ?');

    if (confirmed) {
    axios.post('http://localhost:3005/appointment_slot_2', {
      OfficerEmail: O_email.toString(),
      LoginEmail: email,

    })
      .then((response) => {
        if (response.data === 'rejected') notify_c();
        if (response.data === 'success') notify_a();
        if (response.data === 'error') notify_b();
      })
      .catch((error) => {
        notify_b();
        console.error('Error sending data:', error);
      });


      setTimeout(() => {
        window.location.reload()
  
      }, 1000);
    }
  };

  const ClickSlot3 = () => {
    const confirmed = window.confirm('আপনি আবেদন করতে নিশ্চিত ?');

    if (confirmed) {
    console.log("ClickSlot3 called");

    console.log("O_email:", O_email);
    console.log("email:", email);
    axios.post('http://localhost:3005/appointment_slot_3', {
      OfficerEmail: O_email.toString(),
      LoginEmail: email,

    })
      .then((response) => {
        if (response.data === 'rejected') notify_c();
        if (response.data === 'success') notify_a();
        if (response.data === 'error') notify_b();
      })
      .catch((error) => {
        notify_b();
        console.error('Error sending data:', error);
      });

      setTimeout(() => {
        window.location.reload()
  
      }, 1000);
    }

  };
  const ClickSlot4 = () => {
    const confirmed = window.confirm('আপনি আবেদন করতে নিশ্চিত ?');

    if (confirmed) {
    console.log("ClickSlot4 called");

    console.log("O_email:", O_email);
    console.log("email:", email);
    axios.post('http://localhost:3005/appointment_slot_4', {
      OfficerEmail: O_email.toString(),
      LoginEmail: email,

    })
      .then((response) => {
        if (response.data === 'rejected') notify_c();
        if (response.data === 'success') notify_a();
        if (response.data === 'error') notify_b();
      })
      .catch((error) => {
        notify_b();
        console.error('Error sending data:', error);
      });

      setTimeout(() => {
        window.location.reload()
  
      }, 1000);
    }
  };
  let link_meet = meetData[0];
  if(link_meet===''||link_meet===null||link_meet===undefined)
  link_meet='none'
  // console.log(link_meet)


  return (
    <div className='container'>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>অফিসারের নাম</th>
              <th>ছবি</th>
              <th>পরিচিতি</th>
              <th>সকাল ১০-১১টা</th>
              <th>সকাল ১১-১২টা</th>
              <th>বিকেল ৩-৪টা</th>
              <th>বিকেল ৪-৫টা</th>
              <th>মিটিং</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.officer_name}</td>
                <td>
                  <img src={`data:image/jpeg;base64, ${item.image}`} alt="User" />

                </td>
                <td>{item.bio}</td>
                <td>
                  {item.slot1 === null || item.slot1 === 'rejected' ? (
                    <>
                      <button className='confirm' onClick={() => {


                        O_email = item.officer_email;

                        ClickSlot1()


                      }}>আবেদন করুন</button>

                    </>
                  ) : (
                    <div>খালি নেই</div>
                  )}
                </td>
                <td>
                  {item.slot2 == null || item.slot2 === 'rejected' ? (
                    <>
                      <button className='confirm' onClick={() => {
                        O_email = item.officer_email;

                        ClickSlot2()

                      }}>আবেদন করুন</button>
                    </>
                  ) : (
                    <div>খালি নেই</div>
                  )}
                </td>
                <td>
                  {item.slot3 === null || item.slot3 === 'rejected' ? (
                    <>
                      <button className='confirm' onClick={() => {

                        O_email = item.officer_email;

                        ClickSlot3()
                      }}>আবেদন করুন</button>




                    </>
                  ) : (
                    <div>খালি নেই</div>
                  )}
                </td>
                <td>
                  {item.slot4 === null || item.slot4 === 'rejected' ? (
                    <>
                      <button className='confirm' onClick={() => {
                        O_email = item.officer_email;

                        ClickSlot4()
                      }}>আবেদন করুন</button>
                    </>
                  ) : (
                    <div>খালি নেই</div>
                  )}
                </td>

                <td>
                  {meetData === null || meetData === undefined? (

                    <div>
                      মিটিংয়ের লিঙ্ক যথাসময়ে এখানে পাওয়া যাবে
                    </div>


                  ) : (
                    <>

                      <Link to={link_meet.meet_link} target='_blank'>
                        <button className='start' >প্রবেশ করুন</button>
                      </Link>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;