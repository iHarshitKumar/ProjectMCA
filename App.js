import React from 'react';

//import { Cards, CountryPicker, Chart } from './components';
//import { fetchData } from './api/';
import styles from './App.module.css';
//import image from './images/image.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import { Home } from './Home';
import { About } from './About';
import { Symptoms } from './Symptoms';
import { Precautions } from './Precautions';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layouts';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/footer';


class App extends React.Component {
  // state = {
  //   data: {},
  //   country: '',
  // }

  // async componentDidMount() {
  //   const data = await fetchData();

  //   this.setState({ data });
  // }

  // handleCountryChange = async (country) => {
  //   const data = await fetchData(country);

  //   this.setState({ data, country: country });
  // }

  render() {
    //const { data, country } = this.state;

    return (
      <React.Fragment>
        <Layout>
          <Router>
            <NavigationBar />
            <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/symptoms" component={Symptoms} />
                  <Route path="/precautions" component={Precautions} />
                  <Route component={NoMatch} />
            </Switch>
          </Router>  
        </Layout>
        <div className={styles.container}>
        {/* <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />  */}
        <Footer />
      </div>
      </React.Fragment>
    );
  }
}
export default App;