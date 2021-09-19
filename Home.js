import React from 'react'
import styles from './App.module.css';
import { fetchData } from './api/';
import { Cards, CountryPicker, Chart } from './components';
import image from './images/image.png';


export class Home extends React.Component {
    state = {
      data: {},
      country: '',
    }
  
    async componentDidMount() {
      const data = await fetchData();
  
      this.setState({ data });
    }
  
    handleCountryChange = async (country) => {
      const data = await fetchData(country);
  
      this.setState({ data, country: country });
    }
  
    render() {
      const { data, country } = this.state;
  
      return (    
             
        <div className={styles.container}>
          <div className={styles.heading}>
            <h1 align="center">Welcome to the live statistics of COVID-19</h1>
          </div>  
          <img className={styles.image} src={image} alt="COVID-19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} /> 
        </div>
        
      );
    }
  }