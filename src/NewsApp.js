import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewsApp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faShareFromSquare, faHouse, faH } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const NewsCard = ({ title, description, imageUrl, url }) => {
  return (
    <div className="col-md-3 mb-3 cardcontainer">
      <div className="card  h-100 ">
        <img src={imageUrl} className=" cardimg card-img-top" alt="..." style={{ maxHeight: '200px', objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 23)}</h5>
          <p className="card-text">{description.slice(0, 83)}...</p>
          <button className='btn btn-primary'><a href={url} target='_blank' className="btn btn-primary">Read more</a></button>
        </div>
      </div>
    </div>
  );
};

const NewsApp = () => {
  const [news, setNews] = useState([]);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fromDateStr = fromDate ? fromDate.toISOString().split('T')[0] : '';
        const toDateStr = toDate ? toDate.toISOString().split('T')[0] : '';
        // Adjust the fromDate to last year if toDate is in the next year and fromDate is not set
        const adjustedFromDateStr = fromDateStr || (toDate && toDate.getFullYear() > new Date().getFullYear() ? `${new Date().getFullYear() - 1}-01-01` : '');

        const response = await fetch(`https://newsapi.org/v2/everything?q=road%20and%20accidents&from=${adjustedFromDateStr}&to=${toDateStr}&pageSize=10&page=1&sortBy=relevancy&apiKey=2b48bccfcf0049379b2f4c6d2ddb8df6`);
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [fromDate, toDate]);

  const [showTextBox, setShowTextBox] = useState(false);

  const handlePostClick = () => {
    setShowTextBox(!showTextBox);
  };

  return (
    <div className='newsupdates'>
      <h2 className="newsheading mx-auto p-2" style={{ width: '100px', fontFamily: 'sans-serif' }}><b> NEWS</b></h2>
      <div className='newsbydate'>
        <div className='datechooser'>
          <div className='fromdatechooser'>
            <label>From: </label>
            <DatePicker
              selected={fromDate}
              onChange={date => setFromDate(date)}
              dateFormat="yyyy-MM-dd"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={15}
              className="datepicker-input"
            />
          </div>
          <div className='todatechooser'>
            <label>To: </label>
            <DatePicker
              selected={toDate}
              onChange={date => setToDate(date)}
              dateFormat="yyyy-MM-dd"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={15}
              className="datepicker-input"
            />
          </div>
        </div>
      </div>
      <div className="newscontainer">
        <div className="row row-cols-1 row-cols-md-4 g-6">
          {news?.length > 0 && news.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.urlToImage}
              url={item.url}
            />
          ))}
        </div>
      </div>

      <div className="wrapper mx-10">
        <nav className="navbarcontainernews">
          <ul className="navbar-navconnews">
            <li className="nav-itemconnews">
              <a href="/" className="nav-linknews">
                <FontAwesomeIcon icon={faHouse} className='iconnews' />
                ForYou
              </a>
            </li>
            <li className="nav-itemconnews">
              <a href="/" className="nav-linknews" onClick={handlePostClick}>
                <FontAwesomeIcon icon={faSquarePlus} className='iconnews' />
                Post
              </a>
              {showTextBox && (
                <div>
                  <input type="text" placeholder="Write something..." />
                </div>
              )}
            </li>
            <li className="nav-itemconnews">
              <a href="/" className="nav-linknews">
                <FontAwesomeIcon icon={faShareFromSquare} className='iconnews' />
                Share
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NewsApp;
