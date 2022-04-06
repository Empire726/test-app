import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, MenuItem, TextField } from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';
import "../Stylesheet/home.css"
import Categories from "./Data"
import Errormessage from './Errormessage';
import topMovie from "./Movie"



const Home = ({ name, setName, category, setCategory }) => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [itemss, setItemss] = useState([]);
  const [value, setValue] = useState(topMovie[""]);
  const [inputValue, setInputValue] = React.useState('');


  const deleteItem = (id) => {
    setItemss((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id;
      })
    });
  };
  const deleteAll = () => {
    setItemss([]);
  };
  
  const handleSubmit = (e) => {
    // itemss.index === value.index
    if (itemss.index === value.index  && itemss==value) {
      setError("item add already in list");
      navigate("/");
      return;
    }
    else if (!category || !name || !value) {
    setError("Please check all filled");
    return;
    }
    else {
      setError(false);
      setItemss((oldItem) => {
        return [...oldItem, value]
      });

    }
  };
  return (
    <>
      <div className='home'>
        <div className='section'>

          <div className='setting' >

            <div className='content'>
              <h2>Tester Coding</h2>
            </div>

            <div className='setting_img'>
              <img src="/quiz.svg" alt='quiz' />
            </div>
          </div>
          <div className='select_setting'>
            {error && <Errormessage>{error}</Errormessage>}

            <TextField  
              className="name_input"
              label="Enter your Name"
              variant="outlined"
              style={{ marginBottom: 25 }}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              select
              label="select Category"
              style={{ marginBottom: 25 }}
              variant="outlined"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              {
                Categories.map((cap) => (
                  <MenuItem value={cap.category} key={cap.value}>
                    {cap.category}
                  </MenuItem>
                ))
              }

            </TextField>
            <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              style={{ marginBottom: 25 }}
              id="controllable-states-demo"
              options={topMovie}
              renderInput={(params) => <TextField {...params} label="Auto Select Input" variant="outlined" />}
            />


            <Button
            
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
            >Start Quiz</Button>
          </div>
        </div>

        {category && category !== 0 ? <div className='category'><h2>{category}</h2> </div> : <div>...</div>}

        <div className='item_data'>


          {
            itemss.map((items, index) => {
              return (
                <>
                  <div className='data' key={index} >
                    <li id={items}>{items} </li>
                    <i className="fa fa-trash" onClick={() => {
                      deleteItem(index)
                    }} />

                  </div>

                </>)
            })
          }

          
        </div>
        {value && value !== 0 ?<div className="btn"><Button
          
          variant="contained"
          color="primary"
          size="large"
          onClick={deleteAll}
        >Remove item</Button>
        </div> : <div>{null}</div> }
      </div>
      
    </>
  );
};

export default Home;



