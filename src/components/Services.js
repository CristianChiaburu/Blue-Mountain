import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaCoffee } from 'react-icons/fa';
import Title from './Title';

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free cocktails',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nesciunt totam veniam enim, quod similique!',
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nesciunt totam veniam enim, quod similique!',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free shuttle',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nesciunt totam veniam enim, quod similique!',
      },
      {
        icon: <FaCoffee />,
        title: 'Best Coffee',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nesciunt totam veniam enim, quod similique!',
      },
    ],
  };
  render() {
    return (
      <section className='services'>

        <Title title='Services' />
        <div className="services-center">
        {this.state.services.map((item, index) =>  {
            return <article key={index} className='service'><span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
            </article>
        })}
        </div>
      </section>
    );
  }
}

export default Services;
