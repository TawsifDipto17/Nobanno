import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataTable.css';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';


const DataTable = () => {
  const navigateTo = useNavigate()
  let email = localStorage.getItem('email');
  let [Uemail, setUemail] = useState(''); // Initialize Uemail as an empty string

  let [meet_link, set_link] = useState(' ')
  const [data, setData] = useState([]);

  const notify_a = () => {
    toast('লিঙ্ক পাঠানো সফল হয়েছে!')


  }
  const notify_b = () => {
    toast('দুঃখিত, লিঙ্ক পাঠানো সফল হয়নি!')
  }



  const handleSubmit = () => {

    console.log(email)
    console.log("User" +Uemail)
    console.log(meet_link)
    axios.post('http://localhost:3005/officer_advice_slot', {


      UserEmail: Uemail,
      Meet_link: meet_link
    })
      .then((response) => {
        // if (response.data === 'rejected') notify_c();
        if (response.data.message === 'successful') notify_a();
        if (response.data.message == 'error') notify_b();
      })
      .catch((error) => {
        console.error('Error sending Meet_link data:', error);
      });

    setUemail('');
    setTimeout(() => {
      window.location.reload()

    }, 1000);
  };



  const accept1 = () => {

    console.log('here')
    console.log(Uemail)


    axios.post('http://localhost:3005/officer_advice_accept1', {

      OfficerEmail: email,
      UserEmail: Uemail,
    })
      .then((response) => {
        //অনুরোধ প্রত্যাখ্যান করা হয়েছে

        if (response.data.message === 'successful') toast('অনুরোধ গৃহীত হয়েছে!');
        if (response.data.message == 'error') toast('সার্ভার সমস্যা');
      })
      .catch((error) => {
        toast('সার্ভার সমস্যা');
      });

      setTimeout(() => {
        window.location.reload()

      }, 1000);
  };

  const accept2 = () => {

    console.log('here')
    console.log(Uemail)

    axios.post('http://localhost:3005/officer_advice_accept2', {

      OfficerEmail: email,
      UserEmail: Uemail,
    })
      .then((response) => {
        //অনুরোধ প্রত্যাখ্যান করা হয়েছে

        if (response.data.message === 'successful') toast('অনুরোধ গৃহীত হয়েছে!');
        if (response.data.message == 'error') toast('সার্ভার সমস্যা');
      })
      .catch((error) => {
        toast('সার্ভার সমস্যা');
      });

      setTimeout(() => {
        window.location.reload()

      }, 1000);
 
  };

  const accept3 = () => {

    console.log('here')
    console.log(Uemail)

    axios.post('http://localhost:3005/officer_advice_accept3', {

      OfficerEmail: email,
      UserEmail: Uemail,
    })
      .then((response) => {
        //অনুরোধ প্রত্যাখ্যান করা হয়েছে

        if (response.data.message === 'successful') toast('অনুরোধ গৃহীত হয়েছে!');
        if (response.data.message == 'error') toast('সার্ভার সমস্যা');
      })
      .catch((error) => {
        toast('সার্ভার সমস্যা');
      });

      setTimeout(() => {
        window.location.reload()

      }, 1000);
 
  };

  const accept4 = () => {

    console.log('here')
    console.log(Uemail)

    axios.post('http://localhost:3005/officer_advice_accept4', {

      OfficerEmail: email,
      UserEmail: Uemail,
    })
      .then((response) => {
        //অনুরোধ প্রত্যাখ্যান করা হয়েছে

        if (response.data.message === 'successful') toast('অনুরোধ গৃহীত হয়েছে!');
        if (response.data.message == 'error') toast('সার্ভার সমস্যা');
      })
      .catch((error) => {
        toast('সার্ভার সমস্যা');
      });

      setTimeout(() => {
        window.location.reload()

      }, 1000);
 
  };

  const reject1 = () => {
    console.log('here')
    console.log(Uemail)
    axios.post('http://localhost:3005/officer_advice_reject1', {

      OfficerEmail: email,
      UserEmail: Uemail,
    })
      .then((response) => {
        //অনুরোধ প্রত্যাখ্যান করা হয়েছে

        if (response.data.message === 'successful') toast('অনুরোধ প্রত্যাখ্যান করা হয়েছে!');
        if (response.data.message == 'error') toast('সার্ভার সমস্যা');
      })
      .catch((error) => {
        toast('সার্ভার সমস্যা');
      });
    // navigateTo('/officer_dashboard')
    setTimeout(() => {
      window.location.reload()

    }, 1000);
  };
  const reject2 = () => {
    console.log('here')
    console.log(Uemail)
    axios.post('http://localhost:3005/officer_advice_reject2', {

      OfficerEmail: email,
      UserEmail: Uemail,
    })
      .then((response) => {
        //অনুরোধ প্রত্যাখ্যান করা হয়েছে

        if (response.data.message === 'successful') toast('অনুরোধ প্রত্যাখ্যান করা হয়েছে!');
        if (response.data.message == 'error') toast('সার্ভার সমস্যা');
      })
      .catch((error) => {
        toast('সার্ভার সমস্যা');
      });

      setTimeout(() => {
        window.location.reload()

      }, 1000);

  };
  const reject3 = () => {
    console.log('here')
    console.log(Uemail)
    axios.post('http://localhost:3005/officer_advice_reject3', {

      OfficerEmail: email,
      UserEmail: Uemail,
    })
      .then((response) => {
        //অনুরোধ প্রত্যাখ্যান করা হয়েছে

        if (response.data.message === 'successful') toast('অনুরোধ প্রত্যাখ্যান করা হয়েছে!');
        if (response.data.message == 'error') toast('সার্ভার সমস্যা');
      })
      .catch((error) => {
        toast('সার্ভার সমস্যা');
      });

      setTimeout(() => {
        window.location.reload()

      }, 1000);

  };
  const reject4 = () => {
    console.log('here')
    console.log(Uemail)
    axios.post('http://localhost:3005/officer_advice_reject4', {

      OfficerEmail: email,
      UserEmail: Uemail,
    })
      .then((response) => {
        //অনুরোধ প্রত্যাখ্যান করা হয়েছে

        if (response.data.message === 'successful') toast('অনুরোধ প্রত্যাখ্যান করা হয়েছে!');
        if (response.data.message == 'error') toast('সার্ভার সমস্যা');
      })
      .catch((error) => {
        toast('সার্ভার সমস্যা');
      });

      setTimeout(() => {
        window.location.reload()

      }, 1000);

  };
  useEffect(() => {
    if (email === undefined || email === null) {
      email = 'none';
    }

    axios.get('http://localhost:3005/officer_advice', {
      params: {
        LoginEmail: email,
      },
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [email]);



  return (
    <div>

      <div className="meet-container"> <Link to="/video_chat" target="_blank"><button id="Meet" >Create Meet Link</button></Link></div>


      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>আবেদনকারীর নাম</th>
              <th>ইমেইল</th>
              <th>সকাল ১০-১১টা</th>
              <th>সকাল ১১-১২টা</th>
              <th>বিকেল ৩-৪টা</th>
              <th>বিকেল ৪-৫টা</th>
              <th>লিঙ্ক পাঠান</th>

            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.username1}</td>
                <td>{item.email1}</td>
                <td>
                  {item.slot1=='requested' ? (
                    <>
                      <button className='confirm' onClick={() => {
                        Uemail=item.email1
                        accept1(); // Call handleSubmit with parentheses
                      }}>গ্রহণ</button>
                      <button className='reject' onClick={() => {
                        Uemail=item.email1
                        reject1(); // Call handleSubmit with parentheses
                      }}>প্রত্যাখ্যান</button>
                    </>
                  ) : null}


                    {item.slot1=='accepted' ? (
                 
                    <div>গ্রাহকের অনুরোধ গ্রহণ করা হয়েছে</div>
                   
                  ) : null}

                 {item.slot1=='rejected' ? (
                 
                 <div>গ্রাহকের অনুরোধ প্রত্যাখ্যান করা হয়েছে</div>
                
               ) : null}
                </td>
                <td>

                </td>
                <td>

                </td>
                <td>

                </td>
                <td>
                  <input type="text" placeholder="লিঙ্ক প্রবেশ করুন" onChange={(event) => {
                    set_link(event.target.value)
                  }} />
                  <button className='send' onClick={() => {
                    Uemail=item.email1
                    handleSubmit(); // Call handleSubmit with parentheses
                  }}>
                    পাঠান
                  </button>

                </td>

              </tr>
            ))}
          </tbody>
          <tbody>
            {data.map((item, index) => (


              <tr key={index}>
                <td>{item.username2}</td>
                <td>{item.email2}</td>
                <td>

                </td>
                <td>
                  {item.slot2=='requested' ? (
                    <>
                      <button className='confirm' onClick={() => {
                       Uemail=item.email2
                        accept2(); // Call handleSubmit with parentheses
                      }}>গ্রহণ</button>
                      <button className='reject' onClick={() => {
                        Uemail=item.email2
                        reject2(); // Call handleSubmit with parentheses
                      }}>প্রত্যাখ্যান</button>
                    </>
                  ) : null}


                    {item.slot2=='accepted' ? (
                 
                    <div>গ্রাহকের অনুরোধ গ্রহণ করা হয়েছে</div>
                   
                  ) : null}

                 {item.slot2=='rejected' ? (
                 
                 <div>গ্রাহকের অনুরোধ প্রত্যাখ্যান করা হয়েছে</div>
                
               ) : null}
                </td>
                <td>

                </td>
                <td>

                </td>
                <td>
                  <input type="text" placeholder="লিঙ্ক প্রবেশ করুন" onChange={(event) => {
                    set_link(event.target.value)
                  }} />
                  <button className='send' onClick={() => {
                     Uemail=item.email2
                    handleSubmit(); // Call handleSubmit with parentheses
                  }}>
                    পাঠান
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.username3}</td>
                <td>{item.email3}</td>
                <td>

                </td>
                <td>

                </td>
                <td>
                  {item.slot3=='requested' ? (
                    <>
                      <button className='confirm' onClick={() => {
                          Uemail=item.email3
                        accept3(); // Call handleSubmit with parentheses
                      }}>গ্রহণ</button>
                      <button className='reject' onClick={() => {
                          Uemail=item.email3
                        reject3(); // Call handleSubmit with parentheses
                      }}>প্রত্যাখ্যান</button>
                    </>
                  ) : null}


                    {item.slot3=='accepted' ? (
                 
                    <div>গ্রাহকের অনুরোধ গ্রহণ করা হয়েছে</div>
                   
                  ) : null}

                 {item.slot3=='rejected' ? (
                 
                 <div>গ্রাহকের অনুরোধ প্রত্যাখ্যান করা হয়েছে</div>
                
               ) : null}
                </td>
                <td>

                </td>
                <td>
                  <input type="text" placeholder="লিঙ্ক প্রবেশ করুন" onChange={(event) => {
                    set_link(event.target.value)
                  }} />
                  <button className='send' onClick={() => {
                     Uemail=item.email3
                    handleSubmit(); // Call handleSubmit with parentheses
                  }}>
                    পাঠান
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.username4}</td>
                <td>{item.email4}</td>
                <td>

                </td>
                <td>

                </td>
                <td>

                </td>
                <td>
                  {item.slot4=='requested' ? (
                    <>
                      <button className='confirm' onClick={() => {
                         Uemail=item.email4
                        accept4(); // Call handleSubmit with parentheses
                      }}>গ্রহণ</button>
                      <button className='reject' onClick={() => {
                         Uemail=item.email4
                        reject4(); // Call handleSubmit with parentheses
                      }}>প্রত্যাখ্যান</button>
                    </>
                  ) : null}


                    {item.slot4=='accepted' ? (
                 
                    <div>গ্রাহকের অনুরোধ গ্রহণ করা হয়েছে</div>
                   
                  ) : null}

                 {item.slot4=='rejected' ? (
                 
                 <div>গ্রাহকের অনুরোধ প্রত্যাখ্যান করা হয়েছে</div>
                
               ) : null}
                </td>
                <td>
                  <input type="text" placeholder="লিঙ্ক প্রবেশ করুন" onChange={(event) => {
                    set_link(event.target.value)
                  }} />
                  <button className='send' onClick={() => {
                    Uemail=item.email4
                    handleSubmit(); // Call handleSubmit with parentheses
                  }}>
                    পাঠান
                  </button>
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
